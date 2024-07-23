/**
 * @Description 枚举常量
 * @Author: erduotong
 * @Date: 2023-12-11 22:01:43
 */
//元素属性
export const nuitka_element_type = Object.freeze({
    Bool: "bool_",
    Definable_single: "definable_single_",
    Defined_multiple: "defined_multiple_",
    Single_option: "single_option_",
    Definable_multiple_option: "definable_multiple_option___",
});
export const nuitka_element_status = Object.freeze({
    user_provided: null,
    use_select: "use_select", //使用选择组件
    use_transfer: "use_transfer", //使用穿梭框组件
    use_default: "default", //使用默认值
});
