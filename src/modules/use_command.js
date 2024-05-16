/**
 * @Description 生成命令所需所有状态
 * @Author: erduotong
 * @Date: 2023-12-08 23:47:42
 */
import {ref, watch} from "vue";
import {local_nuitka_version_config} from "@/modules/use_local_forage.js";
import {user_options} from "@/vals/stores/user_options.js";
import {debounce_func} from "@/modules/untils.js";
import {debug} from "@/modules/debug.js";
import {watcher_key} from "@/vals/templates.js";


class CommandStatus {
    /**
     * 原始的状态 方便快速重置
     * @type {{}}
     */
    original_status = {};
    /**
     * 外部组件交互的对象
     */
    status = ref({});
    ///////////////////////////////////////////
    /**
     * 一个间接数组 提供最终输出的顺序和内容
     */
    output = ref({});
    /**
     * 用于在本地存储中存储的配置
     */
    storage_config = ref({});
    /**
     * 监听器的停止函数
     * @type {Array<Function>}
     */
    watchers = []; //

    constructor() {
        //未改变的配置 用于重置
        this.original_status = {};
        //已预处理完成的配置
        this.status = ref({});

    }

    /**
     * @Description 更新原始配置
     * @param config {Object}
     */
    async update_config(config) {
        debug.check_nuitka_config(config);//检查配置文件是否符合格式
        let id = 0;

        // clear
        this.output.value = {};
        for (let i of this.watchers) { //关闭监听器
            i();
        }
        // 获取已有配置
        let local_config = {};
        try {
            local_config = JSON.parse(await local_nuitka_version_config.read_config(user_options.value.nuitka_version));
        } catch (e) {
            console.log(`读取配置失败\nversion:${user_options.value.nuitka_version}\n`, e);
        }

        // 预处理
        Object.keys(config).forEach(key1 => {    //第一次预处理，为config中添加path，并处理一下bind
            if (key1 === "support_language" || key1 === watcher_key) {
                return;
            }
            const value1 = config[key1];
            Object.keys(value1).forEach(key2 => {
                const value2 = value1[key2];
                value2["path"] = [key1, value2.type, key2];
            });
        });

        for (let i of config[watcher_key]) {         //遍历list 给监听器换一下path
            Object.keys(i.source).forEach(key => {
                //把绑定的值换成path，等下重新绑
                i.source[key] = i.source[key].path;
            });
        }

        Object.keys(config).forEach(top_key => {         // 预处理配置2+加载存储配置
            if (top_key === "support_language" || top_key === watcher_key) {
                return; //跳过循环 不进行处理
            }

            const top_value = config[top_key];

            Object.keys(top_value).forEach(second_key => {
                const second_value = top_value[second_key];

                // 检查是否有默认值
                if (second_value.default === undefined) {
                    console.warn(`配置文件中 ${top_key}.${second_key} 的default值未定义`);
                } else {
                    second_value.val = second_value.default;
                }
                // 检查是否有存储值
                if (local_config?.[second_key] !== undefined) {
                    second_value.val = local_config[second_key];
                }
                // 添加到原始配置中
                this.original_status[top_key] = this.original_status[top_key] || {};
                this.original_status[top_key][second_value.type] = this.original_status[top_key][second_value.type] || {};
                this.original_status[top_key][second_value.type][second_key] = {
                    ...second_value,
                    id: id,
                };
                id++;
                // 删除 type
                delete second_value.type;
            });
        });

        // 监听器绑定

        this.watchers.push(watch( //存储监听器 + 防抖函数
            () => this.storage_config.value,
            debounce_func((new_val) => {
                const new_config = JSON.stringify(new_val);
                local_nuitka_version_config.update_config(user_options.value.nuitka_version, new_config);
            }, 500), {
                deep: true,
                immediate: true,
            }));

        for (let watcher of config[watcher_key]) {
            const source = watcher.source;
            const callback = watcher.callback;
            //先把path格式转回引用 再创建一个watch函数
        }

        this.status.value = this.original_status;

    }


}

export const use_command = new CommandStatus();


