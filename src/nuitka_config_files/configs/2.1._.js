/**
 * @Description 2.1版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {add_option, watcher_key} from "@/values/templates.js";


const config = {
    support_language: {
        "zh-CN": {
            name: "简体中文",
            path: "zh_cn",
        },
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
            "",
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
        include_plugin_files: add_option.definable_multi(
            "include_plugin_files",
            {
                original: "--include-plugin-files",
            },
            true,
            {},
            [],
        ),
        prefer_source_code: add_option.bool(
            "prefer_source_code",
            {
                original: "--prefer-source-code",
            },
            true,
            false,
        ),
    },
    control_the_following_into_imported_modules: {
        follow_imports: add_option.bool(
            "follow_imports",
            {
                original: "--follow-imports",
            },
            true,
            false,
        ),
        follow_import_to: add_option.definable_multi(
            "follow_import_to",
            {
                original: "--follow-import-to",
            },
            true,
            {},
            [],
        ),
        nofollow_import_to: add_option.definable_multi(
            "nofollow_import_to",
            {
                original: "--no-follow-import-to",
            },
            true,
            {},
            [],
        ),
        nofollow_imports: add_option.bool(
            "nofollow_imports",
            {
                original: "--nofollow-imports",
            },
            true,
            false,
        ),
        follow_stdlib: add_option.bool(
            "follow_stdlib",
            {
                original: "--follow-stdlib",
            },
            true,
            false,
        ),
    },
    onefile_options: {
        onefile_tempdir_spec: add_option.definable_single(
            "onefile_tempdir_spec",
            {
                original: "--onefile-tempdir-spec",
            },
            true,
            {
                user_tempdir: add_option.multi_elements(
                    "user_tempdir",
                    {
                        original: "{TEMP}/onefile_{PID}_{TIME}",
                    },
                    true,
                ),
            },
            "user_tempdir",
        ),
        onefile_child_grace_time: add_option.definable_single(
            "onefile_child_grace_time",
            {
                original: "--onefile-child-grace-time",
            },
            true,
            {
                time: add_option.multi_elements(
                    "",
                    {
                        original: "5000",
                    },
                    true,
                    true,
                ),
            },
            "time",
        ),
        onefile_no_compression: add_option.bool(
            "onefile_no_compression",
            {
                original: "--onefile-no-compression",
            },
            true,
            false,
        ),
        onefile_as_archive: add_option.bool(
            "onefile_as_archive",
            {
                original: "--onefile-as-archive",
            },
            true,
            false,
        ),
    },
    data_files: {
        include_package_data: add_option.definable_multi(
            "include_package_data",
            {
                original: "--include-package-data",
            },
            true,
            {},
            [],
        ),
        include_data_files: add_option.definable_multi(
            "include_data_files",
            {
                original: "--include-data-files",
            },
            true,
            {},
            [],
        ),
        include_data_dir: add_option.definable_multi(
            "include_data_dir",
            {
                original: "--include-data-dir",
            },
            true,
            {},
            [],
        ),
        noinclude_data_files: add_option.definable_multi(
            "noinclude_data_files",
            {
                original: "--noinclude-data-files",
            },
            true,
            {},
            [],
        ),
        include_onefile_external_data: add_option.definable_multi(
            "include_onefile_external_data",
            {
                original: "--include-onefile-external-data",
            },
            true,
            {},
            [],
        ),
        list_package_data: add_option.definable_multi(
            "list_package_data",
            {
                original: "--list-package-data",
            },
            true,
            {},
            [],
        ),
    },
    metadata_support: {
        include_distribution_metadata: add_option.definable_multi(
            "include_distribution_metadata",
            {
                original: "--include-distribution-metadata",
            },
            true,
            {},
            [],
        ),
    },
};
//基本就这个格式 回调函数接受一个参数
// config[watcher_key] = [add_watcher({
//     s: config.basic.content_mult_test,
// }, (config) => {
//     console.log(config, "callback");
// })];
config[watcher_key] = [];

// noinspection JSUnusedGlobalSymbols
export default config;