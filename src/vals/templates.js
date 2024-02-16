/**
 * @Description 一些模板
 * @Author: erduotong
 * @Date: 2023-12-11 22:10:51
 */
import {nuitka_element_status, nuitka_element_type} from "@/vals/enums.js";


/**
 * @Description 模板
 */
export const nuitka_templates = {
    //不要过早的优化
    Bool: {
        type: nuitka_element_type.Bool, //类型
        i18n: "", //国际化名称 自动拼接
        command: {//命令描述 可用于生成 在非默认值时显示
            original: "", //原始命令 其他位置交给生成器处理
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
        val: undefined,//string
    },

    DefinedMultipleOption: {
        type: nuitka_element_type.Defined_multiple,
        show: {
            command: "",
            i18n: "",
        },
        enabled: true,
        elements: {}, //元素
        default: [], //请填elements中的键值
        val: [], //同上
        component: nuitka_element_status.use_default, //使用默认组件 强烈建议手动指定

    },
};