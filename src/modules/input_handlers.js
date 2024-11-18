/**
 * @overview 导入命令的解析器
 */
import {input_type, nuitka_element_type} from "@/values/enums.js";
import {use_command} from "@/modules/use_command.js";
import {ElMessage, ElMessageBox, ElText} from "element-plus";
import * as constants from "@/values/constants.json";
import {h} from "vue";
import {i18n} from "@/assets/languages/i18n.js";

const bash_parser = import("shell-quote");

const t = i18n.global.t;
const throw_error = (message) => {
    ElMessage({
        type: "error",
        message: message,
        showClose: true,
        duration: constants.message_duration,
    });
};

// CLI处理函数

/**
 * 根据原始命令寻找元素的key
 * @param command {string}
 * @param elements {object}
 * @return {string}
 */
const find_elements_key_by_command = (command, elements) => {
    for (const key of Object.keys(elements)) {
        if (elements[key].command.original === command) {
            return key;
        }
    }
    return undefined;
};
/**
 * 给目标对象添加新的元素 并且不添加已有元素
 * @param elements {object}
 * @param command {string}
 */
const add_new_element = (elements, command) => {
    if (elements[command]) {
        return;
    }
    elements[command] = {
        command: {
            original: command,
        },
        i18n: "",
        enabled: true,
        user_provide: true,

    };
};
/**
 * 将输入的数据解析为nuitka commander特有的对象
 * @type {{[p: string]: (function(*): Promise<*>)|(function(*): Promise<null|*>)}}
 */
export const input_handlers = {
    [input_type.cli]: async (data) => {
        const styles = {
            error_code: "color: #FF3636;font-weight: fold;",
            area: "display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;gap:10px;",
        };
        if (bash_parser === undefined) {
            await ElMessage({
                type: "warning",
                message: t("input_page.cli.wait_bash_parser"),
                showClose: true,
                duration: constants.message_duration,
            });
            return;
        }
        const original_parsed_data = (await bash_parser).parse(data);
        console.log(`parsed_data: ${JSON.stringify(original_parsed_data, null, 4)}`);

        let flag_error = false;
        original_parsed_data.forEach((item) => {
            //如果不是字符串
            if (typeof item !== "string") {
                flag_error = true;
            }
        });
        // 错误处理1 —— 不支持操作符
        if (flag_error) {
            try {
                await ElMessageBox({
                    // 设置弹窗的标题
                    title: t(`input_page.cli.unsupported_operate`),
                    // 设置弹窗的消息内容
                    message: () => {
                        return h("div", {style: styles.area}, original_parsed_data.map(str => {
                            if (typeof str === "string") {
                                return h("code", {}, str);
                            } else {
                                return h("code", {style: styles.error_code}, str.op);
                            }
                        }));
                    },

                });
            } catch (e) {
                console.log(e);
            }
            return;
        }
        const unexcepted_command = [ // 不用解析的命令的规则集，使用函数，返回true表示不用解析
            (str) => { // python
                return str.startsWith("python") || str === "-m";
            },
            (str) => { // nuitka过滤
                return str === "nuitka";
            },
            (str) => { //conda
                return str === "conda";
            },


        ];
        const parsed_data = []; // 用于存储过滤后的数据
        original_parsed_data.forEach((item) => {
            if (item.trim() === "") {
                return;
            }
            let flag = false;
            for (const rule of unexcepted_command) {
                if (rule(item)) {
                    flag = true;
                    console.log("已过滤命令:" + item);
                    break;
                }
            }
            if (!flag) {
                parsed_data.push(item);
            }
        });
        console.log(`parsed_data: ${parsed_data}`);
        const error_list = []; //一个错误列表，存储所有命令，但是内部根据标识来表明是否是报错的
        await use_command.reset_status(); // 重置一手
        const met_list = {}; // 一个标识列表，用于标识是否已经处理过某个元素
        parsed_data.forEach((item) => {
            // 分割命令和参数
            const {
                key,
                value,
            } = (() => {
                const [key, ...value] = item.split("=");
                return {
                    key: key,
                    value: value.join("="),
                };
            })();
            console.log(`key: ${key}, value: ${value}`);
            if (key === undefined || !key.startsWith("--")) {
                error_list.push({
                    item: item,
                    error: true,
                });
                console.log(`错误的命令: ${item}，不以--开头`);
                return;
            }
            const command = key;
            const target_val = (() => { //分割一下
                const regex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;
                const result = value.split(regex);
                return result.map((val) => {
                    return val.replace(/^['"]|['"]$/g, ""); // Remove leading and trailing quotes
                });
            })();
            // 巨大遍历
            let flag = false;

            for (const topKey of Object.keys(use_command.status.value)) {
                const topValue = use_command.status.value[topKey];
                for (const subKey of Object.keys(topValue)) {
                    const subValue = topValue[subKey];
                    for (const final_key of Object.keys(subValue)) {
                        const final_value = subValue[final_key];

                        if (final_value.command.original !== command) {
                            continue;
                        }

                        flag = true; //wow,匹配成功了

                        const handlers = {
                            [nuitka_element_type.Bool]: (final_value, _) => {
                                final_value.val = true;
                                console.log("bool");
                            },
                            [nuitka_element_type.Definable_single]: (final_value, target_val) => {
                                let temp_val = find_elements_key_by_command(target_val[0], final_value.elements);
                                if (!temp_val) {
                                    add_new_element(final_value.elements, target_val[0]);
                                    temp_val = target_val[0];
                                }
                                final_value.val = temp_val;
                                console.log("definable_single");
                            },
                            [nuitka_element_type.Definable_multiple_option]: (final_value, target_val) => {
                                const pushed = [];
                                target_val.forEach(val => {
                                    let temp_val = find_elements_key_by_command(val, final_value.elements);
                                    if (!temp_val) {
                                        add_new_element(final_value.elements, val);
                                        temp_val = val;
                                    }
                                    pushed.push(temp_val);
                                });
                                console.log(met_list[final_key]);
                                if (met_list[final_key]) {

                                    final_value.val = [...pushed, ...final_value.val];

                                } else {
                                    final_value.val = pushed;
                                }


                                met_list[final_key] = true;

                                console.log("definable_multiple_option");
                            },
                            [nuitka_element_type.Single_option]: (final_value, target_val) => {
                                console.log(`target_val: ${target_val}, elements: ${final_value.elements},single_option`);
                                let allMatch = target_val.every(val =>
                                    Object.values(final_value.elements).some(element => element.command.original === val),
                                );
                                if (allMatch) {
                                    final_value.val = target_val.map(val => find_elements_key_by_command(val, final_value.elements));
                                } else {
                                    flag = false;
                                    console.log("有未定义的值");
                                }
                            },
                            [nuitka_element_type.Defined_multiple]: (final_value, target_val) => {
                                console.log(`target_val: ${target_val},defined_multiple`);
                                console.log(final_value.elements);
                                let allMatch_defined_multiple = target_val.every(val =>
                                    Object.values(final_value.elements).some(element => element.command.original === val),
                                );
                                if (allMatch_defined_multiple) {
                                    if (met_list[final_key]) {
                                        final_value.val = [...target_val.map(val => find_elements_key_by_command(val, final_value.elements)),
                                                           ...final_value.val];
                                    } else {
                                        final_value.val = target_val.map(val => find_elements_key_by_command(val, final_value.elements));
                                    }
                                    met_list[final_key] = true;

                                } else {
                                    flag = false;
                                    console.log("有未定义的值");
                                }
                            },
                        };

                        const handler = handlers[final_value.type];
                        if (handler) {
                            handler(final_value, target_val);
                        }
                    }
                    if (flag) {
                        break;
                    }
                }
                if (flag) {
                    break;
                }
            }

            console.log(`flag: ${flag}, item: ${item}, command: ${command}, target_val: ${target_val}`);
            error_list.push({
                item: item,
                error: !flag,
            });

        });
        let error_flag = false;
        for (const error of error_list) {
            if (error.error) {
                error_flag = true;
                break;
            }
        }
        if (!error_flag) {
            ElMessage({
                type: "success",
                message: t(`message.data_input_success`),
                showClose: true,
                duration: constants.message_duration,
            });
            return;
        }
        console.log(error_list);
        // 错误处理2 —— 命令错误
        try {
            await ElMessageBox({
                // Set the title of the message box
                title: t(`input_page.cli.error_command`),
                // Set the message content of the message box
                message: () => {
                    return h("div", {style: styles.area}, error_list.map(error => {
                        if (!error.error) {
                            return h("code", {}, error.item);
                        } else {
                            return h("code", {style: styles.error_code}, error.item);
                        }
                    }));
                },
            });
        } catch (e) {
            console.log(e);
        }
    },

    [input_type.json]: async (data) => {
        // 解析JSON，并且及时向用户反馈该属性的存在情况
        let original_data;
        try {
            original_data = JSON.parse(data);
        } catch (e) {
            throw_error(t("input_page.json.json_parse_error"));
            return null;
        }
        await use_command.reset_status();
        //介于下列的代码过于屎山，所以请参考注释来理解
        //遍历并且检查属性，如果符合要求就同步
        Object.keys(use_command.status.value).forEach(topKey => {
            const topValue = use_command.status.value[topKey];
            Object.keys(topValue).forEach(subKey => {
                const subValue = topValue[subKey];
                Object.keys(subValue).forEach(final_key => {
                    const final_value = subValue[final_key];


                    //检查属性的存在情况，如果不存在就直接处理下一个
                    if (!original_data[final_key]) {
                        return;
                    }
                    // 序列化+反序列化，保证引用不同，方便处理
                    const original_value = JSON.parse(JSON.stringify(original_data[final_key]));
                    //如果是含有用户自定义选项的元素，那么用有value属性的元素方式进行处理
                    if (final_value.type === nuitka_element_type.Definable_single || final_value.type === nuitka_element_type.Definable_multiple_option) {
                        //检查类型是否一致，不一致就直接返回
                        if (typeof original_value.value === typeof final_value.val) {
                            final_value.val = original_value.value;

                        } else {
                            return;
                        }
                        // 把用户提供选项给合并进去
                        if (original_value.user_provides_choices) {
                            final_value.elements = {
                                ...final_value.elements, ...original_value.user_provides_choices,
                            };
                        }

                    } else { //常规处理 没有用户自定义选项就直接赋值
                        if (typeof original_value === typeof final_value.val) {
                            final_value.val = original_value;
                        } else { //类型错误，直接返回
                            return;
                        }
                    }
                    // 删除已经处理过的属性，方便后期检查哪些是无法加载的。
                    delete original_data[final_key];


                });
            });
        });
        //检查是否有无法处理的属性，如果有就提示用户
        if (Object.keys(original_data).length > 0) {
            throw_error(t("input_page.general.unable_parse_check"));
            // 一个简单的弹窗，提示用户有哪些属性无法识别
            try {
                await ElMessageBox({
                    // 设置弹窗的标题
                    title: t(`input_page.general.please_check_down`),
                    // 设置弹窗的消息内容
                    message: () => {
                        // 获取original_data对象中所有剩余的键
                        const remainingKeys = Object.keys(original_data);
                        // 将每个键值对格式化为字符串
                        const formattedStrings = remainingKeys.map(key => {
                            const value = JSON.stringify(original_data[key], null, 4); // 将值格式化为JSON字符串
                            return `${key}: ${value}`; // 返回格式化后的键值对字符串
                        });
                        // 返回一个包含所有格式化字符串的div元素
                        return h("div", {}, formattedStrings.map(str =>
                            h(ElText, {}, {
                                default: () => [ // 使用ElText组件包裹每个字符串，并使用函数式插槽
                                    h("pre", {}, [
                                        h("code", {}, str),
                                    ]),
                                ],
                            }),
                        ));
                    },

                });
            } catch {
            } //只是防止用户取消操作导致崩溃
        }
        ElMessage({
            type: "success",
            message: t(`message.data_input_success`),
            showClose: true,
            duration: constants.message_duration,
        });

    },
};
