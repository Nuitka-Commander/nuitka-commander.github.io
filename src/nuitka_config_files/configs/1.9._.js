/**
 * @Description 1.9版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {new_option} from "@/vals/templates.js";
import {nuitka_element_status} from "@/vals/enums.js";


// noinspection JSUnusedGlobalSymbols
export default {
    support_language: {
        //国际标识符 位于transitions中的路径
        "zh-CN": "zh_cn",
    },
    basic: { //顶级元素
        some_content: {//二级元素
            ...new_option.bool(
                "content0",
                {original: "some_content command"},
                true,
                true),
        },

        content_opt_test: {
            ...new_option.single_option(
                "content_single_test",
                {original: "star rail"},
                true,
                {
                    python: new_option.multi_elements("python", {original: "python"}, true),
                    go: new_option.multi_elements("go", {original: "go"}, true),
                    genshin_impact: new_option.multi_elements("genshin_impact", {original: "genshin_impact"}, true),
                    kotlin: new_option.multi_elements("kotlin", {original: "kotlin"}, true),
                },
                "python",
            ),
            default: "python",
        },

        content_mult_test: {

            ...new_option.defined_multi(
                "content_mult_test",
                {original: "star rail"},
                true,
                {
                    python: new_option.multi_elements("python", {original: "python"}, true),
                    go: new_option.multi_elements("go", {original: "go"}, true),
                    genshin_impact: new_option.multi_elements("genshin_impact", {original: "genshin_impact"}, true),
                    kotlin: new_option.multi_elements("kotlin", {original: "kotlin"}, true),
                },
                ["python", "go"],
                nuitka_element_status.use_select,
            ),
        },
        single_mutable: {
            ...new_option.definable_single(
                "content_mult_test",
                {original: "star rail"},
                true,
                {
                    python: new_option.multi_elements("python", {original: "python"}, true),
                    go: new_option.multi_elements("go", {original: "go"}, true),
                    genshin_impact: new_option.multi_elements("genshin_impact", {original: "genshin_impact"}, true),
                    kotlin: new_option.multi_elements("kotlin", {original: "kotlin"}, true),
                },
                "python",
                nuitka_element_status.use_select,
            ),
        },
    },


    page2: {},
};


