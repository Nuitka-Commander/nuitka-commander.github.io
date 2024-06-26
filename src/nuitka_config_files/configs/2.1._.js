/**
 * @Description 2.1版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {add_option, watcher_key} from "@/vals/templates.js";


const config = {
        support_language: {
            "zh-CN": "zh_cn",
        },
        basic: {
            module_: add_option.bool(
                "module",
                {
                    original: "--module",
                },
                true,
                false),
            standalone: add_option.bool(
                "standalone",
                {
                    original: "--standalone",
                },
                true,
                false),
            onefile: add_option.bool(
                "onefile",
                {
                    original: "--onefile",
                },
                true,
                false,
            ),
            python_flag: add_option.defined_multi(
                "python_flag",
                {
                    original: "--python-flag",
                },
                true,
                {
                    s: add_option.multi_elements(
                        "s",
                        {
                            original: "-S",
                        },
                        true),
                    static_hashes: add_option.multi_elements(
                        "static_hashes",
                        {
                            original: "static_hashes",
                        },
                        true),
                    no_warnings: add_option.multi_elements(
                        "no_warnings",
                        {
                            original: "no_warnings",
                        },
                        true),
                    o: add_option.multi_elements(
                        "o",
                        {
                            original: "-O",
                        },
                        true),
                    no_docstrings: add_option.multi_elements(
                        "no_docstrings",
                        {
                            original: "no_docstrings",
                        },
                        true),
                    u: add_option.multi_elements(
                        "u",
                        {
                            original: "-u",
                        },
                        true),
                    isolated: add_option.multi_elements(
                        "isolated",
                        {
                            original: "isolated",
                        },
                        true),
                    m: add_option.multi_elements(
                        "m",
                        {
                            original: "-m",
                        },
                        true),

                },
                [],
            ),
            python_debug: add_option.bool(
                "python_debug",
                {
                    original: "--python-debug",
                },
                true,
                false,
            ),
            python_for_scons: add_option.definable_single(
                "python_for_scons",
                {
                    original: "--python-for-scons",
                },
                true,
                {},
                "", // 空值就是一个空字符串 todo
                true,
            ),
            main: add_option.definable_multi(
                "main",
                {
                    original: "--main",
                },
                true,
                {
                    main: add_option.multi_elements(
                        "",
                        {
                            original: "main.py",
                        },
                        true,
                        true,
                    ),
                },
                ["main"],
            ),
        },
    control_the_inclusion_of_modules_and_packages_in_result: {
        include_package: add_option.definable_multi(
            "include_package",
            {
                original: "--include-package",
            },
            true,
            {},
            [],
        ),
        include_module: add_option.definable_multi(
            "include_module",
            {
                original: "--include-module",
            },
            true,
            {},
            [],
        ),
        include_plugin_directory: add_option.definable_multi(
            "include_plugin_directory",
            {
                original: "--include-plugin-directory",
            },
            true,
            {},
            [],
        ),
    },

    }
;
//基本就这个格式 回调函数接受一个参数
// config[watcher_key] = [add_watcher({
//     s: config.basic.content_mult_test,
// }, (config) => {
//     console.log(config, "callback");
// })];
config[watcher_key] = [];

// noinspection JSUnusedGlobalSymbols
export default config;