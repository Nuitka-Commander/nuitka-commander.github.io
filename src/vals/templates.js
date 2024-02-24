/**
 * @Description 一些模板
 * @Author: erduotong
 * @Date: 2023-12-11 22:10:51
 */
import {nuitka_element_status, nuitka_element_type} from "./enums.js"; //这里不能改成@开头的路径


/**
 * @Description 生成一个新的元素，请使用...来将生成后的对象扩展到你的对象中
 */
export const new_option = {
    /**
     * @Description 生成一个Bool元素
     * @param i18n {string}
     * @param command {{
     *     original: string
     * }}
     * @param enabled {boolean}
     * @param default_value {boolean}
     * @return {{val: BooleanConstructor, default:boolean, type: string, i18n:string, command: {original:string}, enabled:boolean}}
     */
    bool: (i18n, command, enabled, default_value) => {
        return {
            type: nuitka_element_type.Bool,
            i18n: i18n,
            command: command,
            enabled: enabled,
            default: default_value,
            val: Boolean,

        };
    },
    /**
     * @Description 生成一个多选元素
     * @param i18n {string}
     * @param command {{original:string}}
     * @param enabled {boolean}
     * @return {{i18n:string, command: {original:string}, enabled:boolean}}
     */
    multi_elements: (i18n, command, enabled) => {
        return {
            i18n: i18n,
            command: command,
            enabled: enabled,
        };
    },
    /**
     * 生成一个单选元素
     * @param i18n {string}
     * @param command {{original:string}}
     * @param enabled {boolean}
     * @param elements {object} 元素列表，key为一个string,value是一个对象，需要使用multi_elements生成
     * @param default_value {string} 默认值 填写elements中的键值
     * @return {{val: StringConstructor, default:string, elements:object, type: string, i18n:string, command:{original:string}, enabled:boolean}}
     */
    single_option: (i18n, command, enabled, elements, default_value) => {
        return {
            type: nuitka_element_type.Single_option,
            i18n: i18n,
            command: command,
            enabled: enabled,
            elements: elements,
            default: default_value,
            val: String,
        };
    },
    /**
     * @Description 生成一个多选元素
     * @param i18n {string}
     * @param command {{original:string}}
     * @param enabled {boolean}
     * @param elements {object} 元素列表，key为一个string,value是一个对象，需要使用multi_elements生成
     * @param default_value {string[]} 默认值 填写elements中的键值
     * @param component {nuitka_element_status.use_select | nuitka_element_status.use_transfer} 指定使用组件的类型 不指定则自动判断
     * @return {{val: *[], component: nuitka_element_status.use_select | nuitka_element_status.use_transfer,
     * default: [string], elements:object, type: string, i18n:string, command:{original:string}, enabled:boolean}}
     */
    defined_multi: (i18n, command, enabled, elements, default_value, component) => {
        return {
            type: nuitka_element_type.Defined_multiple,
            i18n: i18n,
            command: command,
            enabled: enabled,
            component: component,
            elements: elements,
            default: default_value,
            val: [],

        };
    },


};
