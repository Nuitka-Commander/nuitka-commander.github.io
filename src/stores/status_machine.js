/**
 * @Description 生成命令所需所有状态
 * @Author: erduotong
 * @Date: 2023-12-08 23:47:42
 */
import {ref} from "vue";
import {nuitka_element_type} from "@/stores/enums.js";

const handlers = {
    chose(type) {//不想用map 假装这是一个表编程吧
        switch (type) {
            case nuitka_element_type.Bool:
                this.bool();
                return;

            default:
                console.error(`未知的类型${type}`);
                return;
        }
    },
    bool() {
        //似乎不需要做什么
    },
};

/**
 * @Description 状态机相关
 */
class StatusMachine {
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
    update_config(config) {
        let global_id = 0;
        // 对config进行预处理 并尝试加载当前版本记录的配置
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
    }

}

export const statusMachine = new StatusMachine();

