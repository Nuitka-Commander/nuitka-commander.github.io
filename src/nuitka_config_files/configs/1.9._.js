/**
 * @Description 1.9版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {add_option, add_watcher, watcher_key} from "@/vals/templates.js";
import {nuitka_element_status} from "@/vals/enums.js";

const config = {
    support_language: {

        "zh-CN": "zh_cn",
    },
    basic: {
        some_content: {
            ...add_option.bool(
                "content0",
                {original: "--play-genshin"},
                true,
                true),
            //在元素内部添加监听器，保证 该监听器会对当前元素进行监听

        },

        content_opt_test: {
            ...add_option.single_option(
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

        },

        content_mult_test: {

            ...add_option.defined_multi(
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
        },
        single_mutable: {
            ...add_option.definable_single(
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
        },
        multi_test: {
            ...add_option.definable_multi(
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
    },


    page2: {},
};
//基本就这个格式 回调函数接受一个参数
config[watcher_key] = [add_watcher({
    s: config.basic.content_mult_test,
}, (config) => {
    console.log(config, "callback");
})];

// noinspection JSUnusedGlobalSymbols
export default config;