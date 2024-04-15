/**
 * @Description 生成命令所需所有状态
 * @Author: erduotong
 * @Date: 2023-12-08 23:47:42
 */
import {ref, watch} from "vue";
import {local_nuitka_version_config} from "@/modules/use_local_forage.js";
import {user_options} from "@/vals/stores/user_options.js";
import {debounce_func} from "@/modules/untils.js";


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
     *
     * @type {undefined | Function}
     */
    storage_watcher = undefined;

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
        this.output.value = {};//清空 防止重复
        //自增id 排序用 这个id绝对不会重复
        let id = 0;
        //清除监听
        if (this.storage_watcher !== undefined) { //简单处理一下 防止内存泄露
            this.storage_watcher();
        }
        // 获取已有配置
        let local_config = {};
        try {
            local_config = JSON.parse(await local_nuitka_version_config.read_config(user_options.value.nuitka_version));
        } catch (e) {
            console.log(`读取配置失败\nversion:${user_options.value.nuitka_version}\n`, e);
        }

        // 预处理配置+加载存储配置
        Object.keys(config).forEach(top_key => {
            if (top_key === "support_language") {
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
                if (local_config[second_key] !== undefined) {
                    second_value.val = local_config[second_key];
                }
                // 添加到原始配置中
                this.original_status[top_key] = this.original_status[top_key] || {};
                this.original_status[top_key][second_value.type] = this.original_status[top_key][second_value.type] || {};
                this.original_status[top_key][second_value.type][second_key] = {
                    ...second_value,
                    path: [top_key, second_value.type, second_key],
                    id: id,
                };
                id++;
                // 删除 type
                delete second_value.type;
            });
        });


        //监听一下
        this.storage_watcher = watch(
            () => this.storage_config.value,
            debounce_func((new_val) => {
                const new_config = JSON.stringify(new_val);
                local_nuitka_version_config.update_config(user_options.value.nuitka_version, new_config);
            }, 500), {
                deep: true,
                immediate: true,
            });

        this.status.value = this.original_status;

    }

}

export const use_command = new CommandStatus();


