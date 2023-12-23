/**
 * @Description 生成命令所需所有状态
 * @Author: erduotong
 * @Date: 2023-12-08 23:47:42
 */
import {ref, watch} from "vue";
import {nuitka_element_type} from "@/stores/enums.js";
import {local_nuitka_version_config} from "@/modules/use_local_forage.js";
import {user_options} from "@/stores/user_options.js";

/**
 * @Description 根据类型处理函数
 * @type {{}}
 */
const handlers = {
    [nuitka_element_type.Bool]: () => {
        //似乎没啥好处理的
    },
};
/**
 * 监听函数
 * @type {{}}
 */
const watchers = {

    [nuitka_element_type.Bool]: (path, cite) => {
        return watch(cite, (new_value, old_value) => {
            //todo 生成命令
//old_value和new_value是引用
            //todo old val 和 new val的值相同
            console.log(`监听到 ${path} 的变化 `);
            console.log(old_value);
            console.log(new_value);
        });
    },
};


class CommandStatus {
    original_status = {};
    status = {};
    watch_functions = [];

    constructor() {
        //未改变的配置 用于重置
        this.original_status = {};
        //已预处理完成的配置
        this.status = ref({});
        this.watch_functions = []; //更新监听函数
    }

    /**
     * @Description 更新原始配置
     * @param config {Object}
     */
    update_config(config) {
        let global_id = 0;
        // 预处理
        Object.keys(config).forEach((top_key) => {
            const top_value = config[top_key];
            Object.keys(top_value).forEach((second_key) => {
                const second_value = top_value[second_key];
                //id处理
                second_value.id = second_value.id || global_id++;
                // 值处理
                if (second_value.default === undefined) {
                    console.warn(`配置文件中 ${top_key}.${second_key} 的default值未定义`);
                } else {
                    second_value.val = second_value.default;
                }
                //根据类型处理
                handlers[second_value.type]?.();
                this.original_status[top_key] = this.original_status[top_key] || {};
                this.original_status[top_key][second_value.type] = this.original_status[top_key][second_value.type] || {};
                //添加到原始配置中
                this.original_status[top_key][second_value.type][second_key] = {
                    ...second_value,
                    path: [top_key, second_value.type, second_key],
                };
                //删掉type
                delete second_value.type;

            });
        });

        //转换异步继续操作
        local_nuitka_version_config.read_config(user_options.value.nuitka_version, (result) => {
            console.log(result);

            if (result !== null) {
                //todo 加载配置
            }
            //清空监听函数
            this.watch_functions.forEach(stop_watcher => stop_watcher());
            this.watch_functions = [];

            this.status.value = this.original_status;

            console.log(this.status.value);
            //todo 重新绑定监听更新函数
            //三层遍历 记得存Key value
            Object.keys(this.status.value).forEach((key_1) => {
                const value_1 = this.status.value[key_1];
                Object.keys(value_1).forEach((key_2) => {
                    const value_2 = value_1[key_2];
                    Object.keys(value_2).forEach((key_3) => {
                        const value_3 = value_2[key_3];
                        const stop_watcher = watchers[key_2](value_3.path, value_3);
                        this.watch_functions.push(stop_watcher); //添加到监听函数数组
                        console.log(`已监听 ${key_1}.${key_2}.${key_3}`);
                    });
                });
            });

        });

    }
}

export const command_status = new CommandStatus();


