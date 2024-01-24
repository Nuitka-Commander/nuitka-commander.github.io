/**
 * @Description 一些模板
 * @Author: erduotong
 * @Date: 2023-12-11 22:10:51
 */
import {nuitka_element_type} from "@/vals/enums.js";


/**
 * @Description 模板
 */
export const nuitka_templates = {
    //不要过早的优化
    Bool: {
        type: nuitka_element_type.Bool, //类型
        show: { //显示内容 静态内容
            command: "",//命令描述 可用于生成 在非默认值时显示
            i18n: "", //国际化名称 自动拼接
        },
        enabled: true, //是否启用 (可以被选择)
        default: false, //默认值 元素值自动补充
        val: undefined, //值 等待程序自动补充
    },
    // 单个的选择元素 为后面所有的一般多选元素作为可选值
    multi_select_elements: {
        show: {
            "command": "",
            "i18n": "", // 如果此处为null，那么说明这是由用户提供的值 表达在父元素中的子值
        },
        enabled: true,
        val: false, //记录该值是否被选中 用于本地化存储
    },

    SingleOption: {
        type: nuitka_element_type.Single_option,
        show: {
            command: "",
            i18n: "",
        },
        enabled: true,
        elements: {}, //元素列表
        default: undefined, //请填elements中的一个键值
        val: undefined,
    },


};