/**
 * @Description 2.4版本的配置文件
 * @Author: ovo-Tim
 * @Date: 2024-7-22
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
        module: add_option.bool(
            "module",
            {
                original: "--module",
            },
            true,
            false,
        ),

        standalone: add_option.bool(
            "standalone",
            {
                original: "--standalone",
            },
            true,
            false,
        ),

        onefile: add_option.bool(
            "onefile",
            {
                original: "--onefile",
            },
            true,
            false,
        ),

        python_flag: add_option.definable_multi(
            "python_flag",
            {
                original: "--python-flag",
            },
            true,
            {
                no_site: add_option.multi_elements(
                    "no_site",
                    {
                        original: "-S",
                    },
                    true,
                ),
                static_hashes: add_option.multi_elements(
                    "static_hashes",
                    {
                        original: "static_hashes",
                    },
                    true,
                ),
                no_warnings: add_option.multi_elements(
                    "no_warnings",
                    {
                        original: "no_warnings",
                    },
                    true,
                ),
                no_asserts: add_option.multi_elements(
                    "no_asserts",
                    {
                        original: "-O",
                    },
                    true,
                ),
                no_docstrings: add_option.multi_elements(
                    "no_docstrings",
                    {
                        original: "no_docstrings",
                    },
                    true,
                ),
                unbuffered: add_option.multi_elements(
                    "unbuffered",
                    {
                        original: "-u",
                    },
                    true,
                ),
                isolated: add_option.multi_elements(
                    "isolated",
                    {
                        original: "isolated",
                    },
                    true,
                ),
                package_mode: add_option.multi_elements(
                    "package_mode",
                    {
                        original: "-m",
                    },
                    true,
                ),
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
            {
                path: add_option.multi_elements(
                    "path",
                    {
                        original: "path_to_python",
                    },
                    true,
                    true,
                ),
            },
            "path",
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
            {
                package: add_option.multi_elements(
                    "",
                    {
                        original: "some_package.sub_package",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),

        include_module: add_option.definable_multi(
            "include_module",
            {
                original: "--include-module",
            },
            true,
            {
                module: add_option.multi_elements(
                    "",
                    {
                        original: "some_package.some_module",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),

        include_plugin_directory: add_option.definable_multi(
            "include_plugin_directory",
            {
                original: "--include-plugin-directory",
            },
            true,
            {
                directory: add_option.multi_elements(
                    "",
                    {
                        original: "path/to/directory",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),

        include_plugin_files: add_option.definable_multi(
            "include_plugin_files",
            {
                original: "--include-plugin-files",
            },
            true,
            {
                pattern: add_option.multi_elements(
                    "",
                    {
                        original: "*.py",
                    },
                    true,
                    true,
                ),
            },
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
            true,
        ),

        follow_import_to: add_option.definable_multi(
            "follow_import_to",
            {
                original: "--follow-import-to",
            },
            true,
            {
                module: add_option.multi_elements(
                    "module",
                    {
                        original: "module",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),

        nofollow_import_to: add_option.definable_multi(
            "nofollow_import_to",
            {
                original: "--nofollow-import-to",
            },
            true,
            {
                module: add_option.multi_elements(
                    "module",
                    {
                        original: "module",
                    },
                    true,
                    true,
                ),
            },
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
                static_cache_path: add_option.multi_elements(
                    "static_cache_path",
                    {
                        original: "{CACHE_DIR}/{COMPANY}/{PRODUCT}/{VERSION}",
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
                default_grace_time: add_option.multi_elements(
                    "default_grace_time",
                    {
                        original: "5000",
                    },
                    true,
                ),
            },
            "default_grace_time",
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
            {
                package_name: add_option.multi_elements(
                    "package_name",
                    {
                        original: "package_name",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),

        include_data_files: add_option.definable_multi(
            "include_data_files",
            {
                original: "--include-data-files",
            },
            true,
            {
                file_pattern: add_option.multi_elements(
                    "file_pattern",
                    {
                        original: "/path/to/file/*.txt=folder_name/some.txt",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),

        include_data_dir: add_option.definable_multi(
            "include_data_dir",
            {
                original: "--include-data-dir",
            },
            true,
            {
                directory: add_option.multi_elements(
                    "directory",
                    {
                        original: "/path/some_dir=data/some_dir",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),

        noinclude_data_files: add_option.definable_multi(
            "noinclude_data_files",
            {
                original: "--noinclude-data-files",
            },
            true,
            {
                pattern: add_option.multi_elements(
                    "pattern",
                    {
                        original: "package_name/*.txt",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),

        include_onefile_external_data: add_option.definable_multi(
            "include_onefile_external_data",
            {
                original: "--include-onefile-external-data",
            },
            true,
            {
                pattern: add_option.multi_elements(
                    "pattern",
                    {
                        original: "pattern",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),

        list_package_data: add_option.definable_multi(
            "list_package_data",
            {
                original: "--list-package-data",
            },
            true,
            {
                package_name: add_option.multi_elements(
                    "package_name",
                    {
                        original: "package_name",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),

        include_raw_dir: add_option.definable_multi(
            "include_raw_dir",
            {
                original: "--include-raw-dir",
            },
            true,
            {
                directory: add_option.multi_elements(
                    "directory",
                    {
                        original: "/path/some_dir",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),
    },
    backend_C_compiler_choice: {
        clang: add_option.bool(
            "clang",
            {
                original: "--clang",
            },
            true,
            false,
        ),

        mingw64: add_option.bool(
            "mingw64",
            {
                original: "--mingw64",
            },
            true,
            false,
        ),

        msvc: add_option.definable_single(
            "msvc",
            {
                original: "--msvc",
            },
            true,
            {
                msvc_version: add_option.multi_elements(
                    "msvc_version",
                    {
                        original: "14.3",
                    },
                    true,
                    true,
                ),
                list: add_option.multi_elements(
                    "list",
                    {
                        original: "list",
                    },
                    true,
                    true,
                ),
                latest: add_option.multi_elements(
                    "latest",
                    {
                        original: "latest",
                    },
                    true,
                    true,
                ),
            },
            "latest",
        ),

        jobs: add_option.definable_single(
            "jobs",
            {
                original: "--jobs",
            },
            true,
            {
                number: add_option.multi_elements(
                    "number",
                    {
                        original: "4",
                    },
                    true,
                    true,
                ),
            },
            "4",
        ),

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
            "auto",
        ),

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
            "auto",
        ),

        cf_protection: add_option.single_option(
            "cf_protection",
            {
                original: "--cf-protection",
            },
            true,
            {
                auto: add_option.multi_elements(
                    "auto",
                    {
                        original: "auto",
                    },
                    true,
                ),
                none: add_option.multi_elements(
                    "none",
                    {
                        original: "none",
                    },
                    true,
                ),
            },
            "auto",
        ),
    },
    plugin_control: {
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
                        original: "plugin_name",
                    },
                    true,
                    true,
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
                        original: "plugin_name",
                    },
                    true,
                    true,
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
                        original: "path",
                    },
                    true,
                    true,
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
            false,
        ),

        plugin_no_detection: add_option.bool(
            "plugin_no_detection",
            {
                original: "--plugin-no-detection",
            },
            true,
            false,
        ),

        module_parameter: add_option.definable_multi(
            "module_parameter",
            {
                original: "--module-parameter",
            },
            true,
            {
                module_param: add_option.multi_elements(
                    "module_param",
                    {
                        original: "module.name-option-name=value",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),

        show_source_changes: add_option.definable_multi(
            "show_source_changes",
            {
                original: "--show-source-changes",
            },
            true,
            {
                changes: add_option.multi_elements(
                    "changes",
                    {
                        original: "numpy.**",
                    },
                    true,
                    true,
                ),
            },
            [],
        ),
    },
    plugin_options_of_spacy: {
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
                    true,
                ),
            },
            ["all"],
        ),
    },
    binary_version_information: {
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
            true,
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
            true,
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
            true,
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
            true,
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
            true,
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
            true,
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
            true,
        ),
    },
    tracing_features: {
        report: add_option.definable_single(
            "report",
            {
                original: "--report",
            },
            true,
            {
                report_filename: add_option.multi_elements(
                    "report_filename",
                    {
                        original: "report.xml",
                    },
                    true,
                ),
            },
            "report_filename",
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
            {},
            [],
        ),
        report_template: add_option.definable_multi(
            "report_template",
            {
                original: "--report-template",
            },
            true,
            {
                template_output: add_option.multi_elements(
                    "template_output",
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
                path: add_option.multi_elements(
                    "path",
                    {
                        original: "output.txt",
                    },
                    true,
                ),
            },
            "path",
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
                path: add_option.multi_elements(
                    "path",
                    {
                        original: "verbose_output.txt",
                    },
                    true,
                ),
            },
            "path",
        ),
    },
    windows_specific_controls: {
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
            "force",
        ),
        windows_icon_from_ico: add_option.definable_multi(
            "windows_icon_from_ico",
            {
                original: "--windows-icon-from-ico",
            },
            true,
            {
                icon_path: add_option.multi_elements(
                    "icon_path",
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
                icon_exe_path: add_option.multi_elements(
                    "icon_exe_path",
                    {
                        original: "icon_exe_path",
                    },
                    true,
                ),
            },
            "icon_exe_path",
        ),
        onefile_windows_splash_screen_image: add_option.definable_single(
            "onefile_windows_splash_screen_image",
            {
                original: "--onefile-windows-splash-screen-image",
            },
            true,
            {
                splash_screen_image: add_option.multi_elements(
                    "splash_screen_image",
                    {
                        original: "splash_screen_image",
                    },
                    true,
                ),
            },
            "splash_screen_image",
        ),
        windows_uac_admin: add_option.bool(
            "windows_uac_admin",
            {
                original: "--windows-uac-admin",
            },
            true,
            false,
        ),
        windows_uac_uiaccess: add_option.bool(
            "windows_uac_uiaccess",
            {
                original: "--windows-uac-uiaccess",
            },
            true,
            false,
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
                icon_path: add_option.multi_elements(
                    "icon_path",
                    {
                        original: "icon_path",
                    },
                    true,
                ),
            },
            "icon_path",
        ),
    },
}

config[watcher_key] = [];

// noinspection JSUnusedGlobalSymbols
export default config;