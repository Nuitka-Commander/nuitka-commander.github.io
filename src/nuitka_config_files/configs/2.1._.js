/**
 * @Description 2.1版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {add_option, watcher_key} from "@/vals/templates.js";


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
    backend_C_compiler_choice:{
        clang: add_option.bool(
            "clang",
            {
                original: "--clang",
            },
            true,
            false
        ),
        // --mingw64
        mingw64: add_option.bool(
            "mingw64",
            {
                original: "--mingw64",
            },
            true,
            false
        ),

        // --msvc=MSVC_VERSION
        msvc: add_option.definable_single(
            "msvc",
            {
                original: "--msvc",
            },
            true,
            {
                list: add_option.multi_elements(
                    "list",
                    {
                        original: "list",
                    },
                    true,
                ),
                latest: add_option.multi_elements(
                    "latest",
                    {
                        original: "latest",
                    },
                    true,
                ),
            },
            "latest",
            false
        ),

        // --jobs=N
        jobs: add_option.definable_single(
            "jobs",
            {
                original: "--jobs",
            },
            true,
            {
                system_cpu_count: add_option.multi_elements(
                    "system_cpu_count",
                    {
                        original: "system_cpu_count",
                    },
                    true,
                ),
            },
            "system_cpu_count",
            false
        ),

        // --lto=choice
        lto: add_option.single_option(
            "lto",
            {
                original: "--lto",
            },
            true,
            {
                yes: add_option.multi_elements(
                    "yes",
                    {
                        original: "yes",
                    },
                    true,
                ),
                no: add_option.multi_elements(
                    "no",
                    {
                        original: "no",
                    },
                    true,
                ),
                auto: add_option.multi_elements(
                    "auto",
                    {
                        original: "auto",
                    },
                    true,
                ),
            },
            "auto"
        ),

        // --static-libpython=choice
        static_libpython: add_option.single_option(
            "static_libpython",
            {
                original: "--static-libpython",
            },
            true,
            {
                yes: add_option.multi_elements(
                    "yes",
                    {
                        original: "yes",
                    },
                    true,
                ),
                no: add_option.multi_elements(
                    "no",
                    {
                        original: "no",
                    },
                    true,
                ),
                auto: add_option.multi_elements(
                    "auto",
                    {
                        original: "auto",
                    },
                    true,
                ),
            },
            "auto"
        ),

        // --cf-protection=PROTECTION_MODE
        cf_protection: add_option.single_option(
            "cf_protection",
            {
                original: "--cf-protection",
            },
            true,
            {
                none: add_option.multi_elements(
                    "none",
                    {
                        original: "none",
                    },
                    true,
                ),
                auto: add_option.multi_elements(
                    "auto",
                    {
                        original: "auto",
                    },
                    true,
                ),
            },
            "auto"
        )
    },
    plugin_control:{
        enable_plugins: add_option.definable_multi(
            "enable_plugins",
            {
                original: "--enable-plugins",
            },
            true,
            {
                plugin_name: add_option.multi_elements(
                    "plugin_name",
                    {
                        original: "PLUGIN_NAME",
                    },
                    true,
                    true
                ),
            },
            [],
        ),

        disable_plugins: add_option.definable_multi(
            "disable_plugins",
            {
                original: "--disable-plugins",
            },
            true,
            {
                plugin_name: add_option.multi_elements(
                    "plugin_name",
                    {
                        original: "PLUGIN_NAME",
                    },
                    true,
                    true
                ),
            },
            [],
        ),

        user_plugin: add_option.definable_multi(
            "user_plugin",
            {
                original: "--user-plugin",
            },
            true,
            {
                path: add_option.multi_elements(
                    "path",
                    {
                        original: "PATH",
                    },
                    true,
                    true
                ),
            },
            [],
        ),

        plugin_list: add_option.bool(
            "plugin_list",
            {
                original: "--plugin-list",
            },
            true,
            false
        ),

        plugin_no_detection: add_option.bool(
            "plugin_no_detection",
            {
                original: "--plugin-no-detection",
            },
            true,
            false
        ),

        module_parameter: add_option.definable_multi(
            "module_parameter",
            {
                original: "--module-parameter",
            },
            true,
            {
                module_parameters: add_option.multi_elements(
                    "module_parameters",
                    {
                        original: "MODULE_PARAMETERS",
                    },
                    true,
                    true
                ),
            },
            [],
        ),

        show_source_changes: add_option.definable_single(
            "show_source_changes",
            {
                original: "--show-source-changes",
            },
            true,
            {
                show_source_changes: add_option.multi_elements(
                    "show_source_changes",
                    {
                        original: "SHOW_SOURCE_CHANGES",
                    },
                    true,
                    true
                ),
            },
            "",
            true
        ),
    },
    plugin_options_of_spacy:{
        spacy_language_model: add_option.definable_multi(
            "spacy_language_model",
            {
                original: "--spacy-language-model",
            },
            true,
            {
                all: add_option.multi_elements(
                    "all",
                    {
                        original: "all",
                    },
                    true,
                    true
                ),
            },
            ["all"],
        )
    },
    binary_version_information:{
        company_name: add_option.definable_single(
            "company_name",
            {
                original: "--company-name",
            },
            true,
            {
                default: add_option.multi_elements(
                    "default",
                    {
                        original: "",
                    },
                    true,
                    true,
                ),
            },
            "default",
        ),
        product_name: add_option.definable_single(
            "product_name",
            {
                original: "--product-name",
            },
            true,
            {
                default: add_option.multi_elements(
                    "default",
                    {
                        original: "",
                    },
                    true,
                    true,
                ),
            },
            "default",
        ),
        file_version: add_option.definable_single(
            "file_version",
            {
                original: "--file-version",
            },
            true,
            {
                default: add_option.multi_elements(
                    "default",
                    {
                        original: "",
                    },
                    true,
                    true,
                ),
            },
            "default",
        ),
        product_version: add_option.definable_single(
            "product_version",
            {
                original: "--product-version",
            },
            true,
            {
                default: add_option.multi_elements(
                    "default",
                    {
                        original: "",
                    },
                    true,
                    true,
                ),
            },
            "default",
        ),
        file_description: add_option.definable_single(
            "file_description",
            {
                original: "--file-description",
            },
            true,
            {
                default: add_option.multi_elements(
                    "default",
                    {
                        original: "",
                    },
                    true,
                    true,
                ),
            },
            "default",
        ),
        copyright: add_option.definable_single(
            "copyright",
            {
                original: "--copyright",
            },
            true,
            {
                default: add_option.multi_elements(
                    "default",
                    {
                        original: "",
                    },
                    true,
                    true,
                ),
            },
            "default",
        ),
        trademarks: add_option.definable_single(
            "trademarks",
            {
                original: "--trademarks",
            },
            true,
            {
                default: add_option.multi_elements(
                    "default",
                    {
                        original: "",
                    },
                    true,
                    true,
                ),
            },
            "default",
        ),
    },
    tracing_features:{
        report_filename: add_option.definable_single(
            "report_filename",
            {
                original: "--report",
            },
            true,
            {
                default: add_option.multi_elements(
                    "default",
                    {
                        original: "report.xml",
                    },
                    true,
                    true,
                ),
            },
            "default",
        ),
        report_diffable: add_option.bool(
            "report_diffable",
            {
                original: "--report-diffable",
            },
            true,
            false,
        ),
        report_user_provided: add_option.definable_multi(
            "report_user_provided",
            {
                original: "--report-user-provided",
            },
            true,
            {
                user_provided: add_option.multi_elements(
                    "user_provided",
                    {
                        original: "key=value",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),
        report_template: add_option.definable_multi(
            "report_template",
            {
                original: "--report-template",
            },
            true,
            {
                template: add_option.multi_elements(
                    "template",
                    {
                        original: "template.rst.j2:output.rst",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),
        quiet: add_option.bool(
            "quiet",
            {
                original: "--quiet",
            },
            true,
            false,
        ),
        show_scons: add_option.bool(
            "show_scons",
            {
                original: "--show-scons",
            },
            true,
            false,
        ),
        no_progressbar: add_option.bool(
            "no_progressbar",
            {
                original: "--no-progressbar",
            },
            true,
            false,
        ),
        show_progress: add_option.bool(
            "show_progress",
            {
                original: "--show-progress",
            },
            true,
            false,
        ),
        show_memory: add_option.bool(
            "show_memory",
            {
                original: "--show-memory",
            },
            true,
            false,
        ),
        show_modules: add_option.bool(
            "show_modules",
            {
                original: "--show-modules",
            },
            true,
            false,
        ),
        show_modules_output: add_option.definable_single(
            "show_modules_output",
            {
                original: "--show-modules-output",
            },
            true,
            {
                default: add_option.multi_elements(
                    "default",
                    {
                        original: "stdout",
                    },
                    true,
                    true,
                ),
            },
            "default",
        ),
        verbose: add_option.bool(
            "verbose",
            {
                original: "--verbose",
            },
            true,
            false,
        ),
        verbose_output: add_option.definable_single(
            "verbose_output",
            {
                original: "--verbose-output",
            },
            true,
            {
                default: add_option.multi_elements(
                    "default",
                    {
                        original: "stdout",
                    },
                    true,
                    true,
                ),
            },
            "default",
        ),
    },
    windows_specific_controls:{
        windows_console_mode: add_option.single_option(
            "windows_console_mode",
            {
                original: "--windows-console-mode",
            },
            true,
            {
                force: add_option.multi_elements(
                    "force",
                    {
                        original: "force",
                    },
                    true,
                ),
                disable: add_option.multi_elements(
                    "disable",
                    {
                        original: "disable",
                    },
                    true,
                ),
                attach: add_option.multi_elements(
                    "attach",
                    {
                        original: "attach",
                    },
                    true,
                ),
            },
            "force"
        ),
        windows_icon_from_ico: add_option.definable_multi(
            "windows_icon_from_ico",
            {
                original: "--windows-icon-from-ico",
            },
            true,
            {
                icon: add_option.multi_elements(
                    "icon",
                    {
                        original: "icon_path",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),
        windows_icon_from_exe: add_option.definable_single(
            "windows_icon_from_exe",
            {
                original: "--windows-icon-from-exe",
            },
            true,
            {
                exe_icon: add_option.multi_elements(
                    "exe_icon",
                    {
                        original: "icon_exe_path",
                    },
                    true,
                ),
            },
            "exe_icon",
        ),
        onefile_windows_splash_screen_image: add_option.definable_single(
            "onefile_windows_splash_screen_image",
            {
                original: "--onefile-windows-splash-screen-image",
            },
            true,
            {
                splash_image: add_option.multi_elements(
                    "splash_image",
                    {
                        original: "splash_screen_image",
                    },
                    true,
                ),
            },
            "splash_image",
        ),
        windows_uac_admin: add_option.bool(
            "windows_uac_admin",
            {
                original: "--windows-uac-admin",
            },
            true,
            false
        ),
        windows_uac_uiaccess: add_option.bool(
            "windows_uac_uiaccess",
            {
                original: "--windows-uac-uiaccess",
            },
            true,
            false
        ),
    },
    linux_specific_controls: {
        linux_icon: add_option.definable_single(
            "linux_icon",
            {
                original: "--linux-icon",
            },
            true,
            {
                python_icon: add_option.multi_elements(
                    "python_icon",
                    {
                        original: "Python icon if available",
                    },
                    true,
                ),
            },
            "python_icon",
        )
    }
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