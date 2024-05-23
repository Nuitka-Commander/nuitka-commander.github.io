/**
 * @Description 一些模板
 * @Author: erduotong
 * @Date: 2023-12-11 22:10:51
 */
import {nuitka_element_status, nuitka_element_type, nuitka_input_type} from "./enums.js"; //这里不能改成@开头的路径


/**
 * @Description 生成一个新的元素
 */
export const add_option = {
    /**
     * @Description 生成一个Bool元素
     * @param i18n {string}
     * @param command {{
     *     original: string
     * }}
     * @param enabled {boolean}
     * @param default_value {boolean}
     * @return {{val: BooleanConstructor, default:boolean, type: string, i18n:string, command: {original:string},
     * enabled:boolean}}
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
     * @Description 生成一个多选元素 是所有多选组件的根本
     * @param i18n {string}
     * @param command {{original:string}}
     * @param enabled {boolean}
     * @param user_provide {boolean} 是否为用户提供的 是的话请手动指定(可选)
     * @return {{i18n:string, command: {original:string}, enabled:boolean,user_provide:boolean}}
     */
    multi_elements: (i18n, command, enabled, user_provide = false) => {
        return {
            i18n: i18n,
            command: command,
            enabled: enabled,
            user_provide: user_provide,
        };
    },
    /**
     * 生成一个单选元素
     * @param i18n {string}
     * @param command {{original:string}}
     * @param enabled {boolean}
     * @param elements {object} 元素列表，key为一个string,value是一个对象，需要使用multi_elements生成
     * @param default_value {string} 默认值 填写elements中的键值
     * @return {{val: StringConstructor, default:string, elements:object, type: string, i18n:string,
     * command:{original:string}, enabled:boolean}}
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
     * @param component {nuitka_element_status.use_select | nuitka_element_status.use_transfer} 指定使用组件的类型 use_default为自动判断
     * @return {{val: *[], component: nuitka_element_status.use_select | nuitka_element_status.use_transfer,
     * default: [string], elements:object, type: string, i18n:string, command:{original:string}, enabled:boolean}}
     */
    defined_multi: (i18n, command, enabled, elements, default_value,
                    component = nuitka_element_status.use_default) => {
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
    /**
     * @Description 生成一个可以添加选项的单选元素
     * @param i18n {string}
     * @param command {{original:string}}
     * @param enabled {boolean}
     * @param elements {object} 元素列表，key为一个string,value是一个对象，需要使用multi_elements生成 其中user_provide允许为true
     * @param default_value {string} 默认值 填写elements中的键值
     * @param input_type 指定输入框的类型 不指定则自动判断
     * @param component 指定使用组件的类型 不指定则自动判断
     * @return {{val: StringConstructor, component, default: string, elements: Object, type: string, i18n: string,
     * command: {original: string}, enabled: boolean}}
     */
    definable_single: (i18n, command, enabled, elements, default_value,
                       input_type = nuitka_input_type.string, component = nuitka_element_status.use_default) => {
        return {
            type: nuitka_element_type.Definable_single,
            i18n: i18n,
            command: command,
            enabled: enabled,
            elements: elements,
            input_type: input_type,
            component: component,
            default: default_value,
            val: String,
        };
    },
    /**
     * @Description 生成一个可以添加选项的多选元素
     * @param i18n {string}
     * @param command {{original:string}}
     * @param enabled {boolean}
     * @param elements {object} 元素列表，key为一个string,value是一个对象，需要使用multi_elements生成 其中user_provide允许为true
     * @param default_value {string[]} 默认值 填写elements中的键值
     * @param input_type 指定输入框的类型
     * @param component 指定使用组件的类型 不指定则自动判断
     * @return {{val: *[], component, default: string[], elements : object, type: string, i18n: string, command: {original: string}, enabled : boolean}}
     */
    definable_multi: (i18n, command, enabled, elements, default_value,
                      input_type = nuitka_input_type.string, component = nuitka_element_status.use_default) => {
        return {
            type: nuitka_element_type.Definable_multiple_option,
            i18n: i18n,
            command: command,
            enabled: enabled,
            elements: elements,
            input_type: input_type,
            component: component,
            default: default_value,
            val: [],
        };
    },
};
/**
 * 配置文件中的所有待绑定watcher使用的统一key-name
 * @type {string}
 */
export const watcher_key = "watch_function_closer";
/**
 * 生成一个watcher的对象
 * @param source {object}
 * @param callback {function} 一个回调函数，可以访问source中的每个key，在source中key对应的对象发生变化后被调用
 * @returns {{callback :function, source:object}}
 */
export const add_watcher = (source, callback) => {
    //先进行检查
    if (typeof source !== "object") {
        console.error(`source必须为一个对象，而不是${source} : ${typeof source}`);
    }
    if (typeof callback !== "function") {
        console.error(`callback必须为一个函数，而不是${callback} : ${typeof callback}`);
    }
    return {
        source: source,
        callback: callback,
    };
};