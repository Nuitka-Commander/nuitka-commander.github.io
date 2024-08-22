/**
 * @overview 导入命令的解析器
 */
import {input_type, nuitka_element_type} from "@/values/enums.js";
import {use_command} from "@/modules/use_command.js";
import {ElMessage, ElMessageBox, ElText} from "element-plus";
import * as constants from "@/values/constants.json";
import {h} from "vue";

const throw_error = (message) => {
    ElMessage({
        type: "error",
        message: message,
        showClose: true,
        duration: constants.message_duration,
    });
};
/**
 * 将输入的数据解析为json格式
 * @type {{[p: string]: (function(*): Promise<*>)|(function(*): Promise<null|*>)}}
 */
export const input_handlers = {
    [input_type.cli]: async (data) => {
        return data;
    },

    [input_type.json]: async (data) => {
        // 解析JSON，并且及时向用户反馈该属性的存在情况
        let original_data;
        try {
            original_data = JSON.parse(data);
        } catch (e) {
            throw_error("(to i18n)JSON解析失败，请检查输入的数据是否符合JSON格式");
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
            throw_error(`(to i18n) 提供的数据中存在无法识别的属性，请检查或者手动输入`);
            // 一个简单的弹窗，提示用户有哪些属性无法识别
            try {
                await ElMessageBox({
                    // 设置弹窗的标题
                    title: "(to i18n) 提供的数据中存在无法识别的属性，请在下方检查",
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
            message: "(to i18n)数据导入成功",
            showClose: true,
            duration: constants.message_duration,
        });

    },
};
