/**
 * @Description 1.9版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {add_option, add_watcher} from "@/vals/templates.js";
import {nuitka_element_status} from "@/vals/enums.js";
import {watch} from "vue";

const config = {
    support_language: {
        //国际标识符 位于transitions中的路径
        "zh-CN": "zh_cn",
    },
    basic: { //顶级元素
        some_content: add_option.bool(
            "content0",
            {original: "--play-genshin"},
            true,
            true),


        content_opt_test: add_option.single_option(
            "content_single_test",
            {original: "--python-flag"},
            true,
            {
                python: add_option.multi_elements("python", {original: "no_str"}, true),
                go: add_option.multi_elements("go", {original: "go"}, true),
                genshin_impact: add_option.multi_elements("genshin_impact", {original: "genshin_impact"}, true),
                kotlin: add_option.multi_elements("kotlin", {original: "kotlin"}, true),
            },
            "python",
        ),


        content_mult_test: add_option.defined_multi(
            "content_mult_test",
            {original: "--star-rail"},
            true,
            {
                python: add_option.multi_elements("python", {original: "python"}, true),
                go: add_option.multi_elements("go", {original: "go"}, true),
                genshin_impact: add_option.multi_elements("genshin_impact", {original: "genshin_impact"}, true),
                kotlin: add_option.multi_elements("kotlin", {original: "kotlin"}, true),
            },
            ["python", "go"],
            nuitka_element_status.use_select,
        ),

        single_mutable: add_option.definable_single(
            "content_mult_test",
            {original: "--star-rail-p"},
            true,
            {
                python: add_option.multi_elements("python", {original: "python"}, true),
                go: add_option.multi_elements("go", {original: "go"}, true),
                genshin_impact: add_option.multi_elements("genshin_impact", {original: "genshin_impact"}, true),
                kotlin: add_option.multi_elements("kotlin", {original: "kotlin"}, true),
            },
            "python",
            nuitka_element_status.use_select,
        ),

        multi_test: add_option.definable_multi(
            "content_mult_test",
            {original: "--tar-rail"},
            true,
            {
                python: add_option.multi_elements("python", {original: "python"}, true),
                go: add_option.multi_elements("go", {original: "go"}, true),
                genshin_impact: add_option.multi_elements("genshin_impact", {original: "genshin_impact"}, true),
                kotlin: add_option.multi_elements("kotlin", {original: "kotlin"}, true),
            },
            ["python", "go"],
            nuitka_element_status.use_select,
        ),

    },


    page2: {},
};
add_watcher(config, watch(() => config.basic.some_content,
    (value) => {
        console.log(value.val);
    }));

// noinspection JSUnusedGlobalSymbols
export default config;