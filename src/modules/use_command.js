/**
 * @Description 生成命令所需所有状态
 * @Author: erduotong
 * @Date: 2023-12-08 23:47:42
 */
import {ref, watch} from "vue";
import {nuitka_element_type} from "@/vals/enums.js";
import {local_nuitka_version_config} from "@/modules/use_local_forage.js";
import {user_options} from "@/vals/stores/user_options.js";

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
        const return_functions = [
            //监听值变化
            watch(() => cite.val, (newValue) => {
                console.log(newValue);
                console.log("↑has been changed");
            }),
        ];
        if (Object.keys(cite.depend).length !== 0) {//如果需要处理依赖项

        }
        return return_functions;
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
    async update_config(config) {


        // 预处理配置
        Object.keys(config).forEach(top_key => {
            const top_value = config[top_key];
            Object.keys(top_value).forEach(second_key => {
                const second_value = top_value[second_key];

                // 检查是否有默认值
                if (second_value.default === undefined) {
                    console.warn(`配置文件中 ${top_key}.${second_key} 的default值未定义`);
                } else {
                    second_value.val = second_value.default;
                }

                // 根据类型处理
                handlers[second_value.type]?.();

                // 添加到原始配置中
                this.original_status[top_key] = this.original_status[top_key] || {};
                this.original_status[top_key][second_value.type] = this.original_status[top_key][second_value.type] || {};
                this.original_status[top_key][second_value.type][second_key] = {
                    ...second_value,
                    path: [top_key, second_value.type, second_key],
                };

                // 删除 type
                delete second_value.type;
            });
        });

        // 获取已有配置
        const local_config = await new Promise(resolve => {
            local_nuitka_version_config.read_config(user_options.value.nuitka_version, resolve);
        });
        console.log(local_config);

        // TODO: 加载配置

        // 清空监听函数
        this.watch_functions.forEach(stop_watcher => stop_watcher());
        this.watch_functions = [];

        this.status.value = this.original_status;
        console.log(this.status.value);

        // 重新绑定监听更新函数
        Object.keys(this.status.value).forEach(key_1 => {
            const value_1 = this.status.value[key_1];
            Object.keys(value_1).forEach(key_2 => {
                const value_2 = value_1[key_2];
                Object.keys(value_2).forEach(key_3 => {
                    const value_3 = value_2[key_3];
                    const stop_watchers = watchers[key_2](value_3.path, value_3);
                    this.watch_functions.push(...stop_watchers);
                    console.log(`已监听 ${key_1}.${key_2}.${key_3}`);
                });
            });
        });

        this.status.value.basic[nuitka_element_type.Bool].some_content.val = true;
    }
}

export const use_command = new CommandStatus();


