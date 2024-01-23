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

    Bool: {
        type: nuitka_element_type.Bool, //类型
        show: { //显示内容 静态内容
            command: "",//命令描述 可用于生成 在非默认值时显示
            i18n: "", //国际化名称 自动拼接
        },
        show_when_false: true, //当值为false时是否显示
        enabled: true, //是否启用 (可以被选择)
        default: false, //默认值 元素值自动补充
        val: undefined, //值 等待程序自动补充
    },


};