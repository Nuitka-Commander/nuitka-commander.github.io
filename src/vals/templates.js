/**
 * @Description 一些模板
 * @Author: erduotong
 * @Date: 2023-12-11 22:10:51
 */
import {nuitka_element_type} from "@/vals/enums.js";

export const depends_template = {
    effects: [],  //当effect_enable为true时将自身注册到？
    needs: [], //何时可以enable?
    disable: [], //何时被禁用?
    any_need: [], //何时可以enable? 任意一个满足即可
    registered: [], //已注册到该元素的元素

    when_disable: undefined, //当被禁用时的处理函数

    effect_enable: false, //是否可以影响其他函数？
    effect_condition: undefined, //影响其他函数的条件函数

    enabled: true, //元素可用吗?
};

/**
 * @Description 一些模板
 */
export const nuitka_templates = {

    Bool: {
        type: nuitka_element_type.Bool, //类型
        show: { //显示内容 静态内容
            command: "",//命令描述 可用于生成 在非默认值时显示
            command_i18n: "", //国际化命令描述 自动拼接
            desc_i18n: "", //国际化介绍 自动拼接
        },
        depend: {//依赖管理
        },
        meaningful: true, //是否为无语义元素
        show_when_false: true, //当值为false时是否显示
        default: false, //默认值 元素值自动补充
        val: undefined, //值 等待程序自动补充
    },


};