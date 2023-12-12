/**
 * @Description 一些模板
 * @Author: erduotong
 * @Date: 2023-12-11 22:10:51
 */
import {nuitka_element_type} from "@/stores/enums.js";
//设置模板 用于拓展 类型请首字母大写
export const nuitka_templates = {

    Bool: {
        type: nuitka_element_type.Bool, //类型
        show: {
            command: "",//命令描述 可用于生成 在非默认值时显示
            command_i18n: "command.", //国际化命令描述 自动拼接
            desc_i18n: "desc.", //国际化介绍 自动拼接
        },
        depend: {
            effects: [], //影响元素
            needs: [], //启用需要的元素
            disable: [], //可以被其中任意元素禁用
            any_need: [], //可以被其中任意元素启用
        },
        show_when_false: true, //当值为false时是否显示
        id: undefined, //id编号
        default: false, //默认值 元素值自动补充
    },

};