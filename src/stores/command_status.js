/**
 * @Description 生成命令所需所有状态
 * @Author: erduotong
 * @Date: 2023-12-08 23:47:42
 */
import {ref} from "vue";
import {nuitka_element_type} from "@/stores/enums.js";
import {local_nuitka_version_config} from "@/modules/use_local_forage.js";
import {user_options} from "@/stores/user_options.js";

/**
 * @Description 根据类型处理函数
 * @type {{[nuitka_element_type.Bool]: ((function())|*)}}
 */
const handlers = {
    [nuitka_element_type.Bool]: () => {
        //似乎没啥好处理的
    },
};


class CommandStatus {
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
                    type: undefined,
                };
            });
        });
        console.log(this.original_status);
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
            //todo重新绑定监听更新函数

        });

    }

}

export const command_status = new CommandStatus();
