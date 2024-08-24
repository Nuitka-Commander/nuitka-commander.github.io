import {add_option, add_watcher, watcher_key} from "@/values/templates.js";
import {is_array_equivalent} from "@/modules/untils.js";

/**
 * 简单模式的配置文件
 * @author erduotong
 */
const config = {
    support_language: {
        "zh-CN": {
            name: "简体中文",
            path: "zh_cn",
        },
    },
    basic: {
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
            [],
        ),
        output_filename: add_option.definable_single(
            "output_filename",
            {
                original: "--output-filename",
            },
            true,
            {
                program_name: add_option.multi_elements(
                    "program_name",
                    {
                        original: "<program_name>",
                    },
                    true,
                ),
            },
            "program_name",
            false,
        ),
        output_dir: add_option.definable_single(
            "output_dir",
            {
                original: "--output-dir",
            },
            true,
            {
                current_directory: add_option.multi_elements(
                    "current_directory",
                    {
                        original: "./",
                    },
                    true,
                ),
            },
            "current_directory",
            false,
        ),
        remove_output: add_option.bool(
            "remove_output",
            {
                original: "--remove-output",
            },
            true,
            false,
        ),
        enable_plugins: add_option.defined_multi(
            "enable_plugins",
            {
                original: "--enable-plugins",
            },
            true,
            {
                anti_bloat: add_option.multi_elements(
                    "anti_bloat",
                    {
                        original: "anti-bloat",
                    },
                    true,
                ),
                data_files: add_option.multi_elements(
                    "data_files",
                    {
                        original: "data-files",
                    },
                    true,
                ),
                delvewheel: add_option.multi_elements(
                    "delvewheel",
                    {
                        original: "delvewheel",
                    },
                    true,
                ),
                dill_compat: add_option.multi_elements(
                    "dill_compat",
                    {
                        original: "dill-compat",
                    },
                    true,
                ),
                dll_files: add_option.multi_elements(
                    "dll_files",
                    {
                        original: "dll-files",
                    },
                    true,
                ),
                enum_compat: add_option.multi_elements(
                    "enum_compat",
                    {
                        original: "enum-compat",
                    },
                    true,
                ),
                eventlet: add_option.multi_elements(
                    "eventlet",
                    {
                        original: "eventlet",
                    },
                    true,
                ),
                gevent: add_option.multi_elements(
                    "gevent",
                    {
                        original: "gevent",
                    },
                    true,
                ),
                gi: add_option.multi_elements(
                    "gi",
                    {
                        original: "gi",
                    },
                    true,
                ),
                glfw: add_option.multi_elements(
                    "glfw",
                    {
                        original: "glfw",
                    },
                    true,
                ),
                implicit_imports: add_option.multi_elements(
                    "implicit_imports",
                    {
                        original: "implicit-imports",
                    },
                    true,
                ),
                kivy: add_option.multi_elements(
                    "kivy",
                    {
                        original: "kivy",
                    },
                    true,
                ),
                matplotlib: add_option.multi_elements(
                    "matplotlib",
                    {
                        original: "matplotlib",
                    },
                    true,
                ),
                multiprocessing: add_option.multi_elements(
                    "multiprocessing",
                    {
                        original: "multiprocessing",
                    },
                    true,
                ),
                no_qt: add_option.multi_elements(
                    "no_qt",
                    {
                        original: "no-qt",
                    },
                    true,
                ),
                options_nanny: add_option.multi_elements(
                    "options_nanny",
                    {
                        original: "options-nanny",
                    },
                    true,
                ),
                pbr_compat: add_option.multi_elements(
                    "pbr_compat",
                    {
                        original: "pbr-compat",
                    },
                    true,
                ),
                pkg_resources: add_option.multi_elements(
                    "pkg_resources",
                    {
                        original: "pkg-resources",
                    },
                    true,
                ),
                pmw_freezer: add_option.multi_elements(
                    "pmw_freezer",
                    {
                        original: "pmw-freezer",
                    },
                    true,
                ),
                pylint_warnings: add_option.multi_elements(
                    "pylint_warnings",
                    {
                        original: "pylint-warnings",
                    },
                    true,
                ),
                pyqt5: add_option.multi_elements(
                    "pyqt5",
                    {
                        original: "pyqt5",
                    },
                    true,
                ),
                pyqt6: add_option.multi_elements(
                    "pyqt6",
                    {
                        original: "pyqt6",
                    },
                    true,
                ),
                pyside2: add_option.multi_elements(
                    "pyside2",
                    {
                        original: "pyside2",
                    },
                    true,
                ),
                pyside6: add_option.multi_elements(
                    "pyside6",
                    {
                        original: "pyside6",
                    },
                    true,
                ),
                pywebview: add_option.multi_elements(
                    "pywebview",
                    {
                        original: "pywebview",
                    },
                    true,
                ),
                tk_inter: add_option.multi_elements(
                    "tk_inter",
                    {
                        original: "tk-inter",
                    },
                    true,
                ),
                transformers: add_option.multi_elements(
                    "transformers",
                    {
                        original: "transformers",
                    },
                    true,
                ),
                upx: add_option.multi_elements(
                    "upx",
                    {
                        original: "upx",
                    },
                    true,
                ),
            },
            [],
        ),
        disable_plugins: add_option.defined_multi(
            "disable_plugins",
            {
                original: "--disable-plugins",
            },
            true,
            {
                anti_bloat: add_option.multi_elements(
                    "anti_bloat",
                    {
                        original: "anti-bloat",
                    },
                    true,
                ),
                data_files: add_option.multi_elements(
                    "data_files",
                    {
                        original: "data-files",
                    },
                    true,
                ),
                delvewheel: add_option.multi_elements(
                    "delvewheel",
                    {
                        original: "delvewheel",
                    },
                    true,
                ),
                dill_compat: add_option.multi_elements(
                    "dill_compat",
                    {
                        original: "dill-compat",
                    },
                    true,
                ),
                dll_files: add_option.multi_elements(
                    "dll_files",
                    {
                        original: "dll-files",
                    },
                    true,
                ),
                enum_compat: add_option.multi_elements(
                    "enum_compat",
                    {
                        original: "enum-compat",
                    },
                    true,
                ),
                eventlet: add_option.multi_elements(
                    "eventlet",
                    {
                        original: "eventlet",
                    },
                    true,
                ),
                gevent: add_option.multi_elements(
                    "gevent",
                    {
                        original: "gevent",
                    },
                    true,
                ),
                gi: add_option.multi_elements(
                    "gi",
                    {
                        original: "gi",
                    },
                    true,
                ),
                glfw: add_option.multi_elements(
                    "glfw",
                    {
                        original: "glfw",
                    },
                    true,
                ),
                implicit_imports: add_option.multi_elements(
                    "implicit_imports",
                    {
                        original: "implicit-imports",
                    },
                    true,
                ),
                kivy: add_option.multi_elements(
                    "kivy",
                    {
                        original: "kivy",
                    },
                    true,
                ),
                matplotlib: add_option.multi_elements(
                    "matplotlib",
                    {
                        original: "matplotlib",
                    },
                    true,
                ),
                multiprocessing: add_option.multi_elements(
                    "multiprocessing",
                    {
                        original: "multiprocessing",
                    },
                    true,
                ),
                no_qt: add_option.multi_elements(
                    "no_qt",
                    {
                        original: "no-qt",
                    },
                    true,
                ),
                options_nanny: add_option.multi_elements(
                    "options_nanny",
                    {
                        original: "options-nanny",
                    },
                    true,
                ),
                pbr_compat: add_option.multi_elements(
                    "pbr_compat",
                    {
                        original: "pbr-compat",
                    },
                    true,
                ),
                pkg_resources: add_option.multi_elements(
                    "pkg_resources",
                    {
                        original: "pkg-resources",
                    },
                    true,
                ),
                pmw_freezer: add_option.multi_elements(
                    "pmw_freezer",
                    {
                        original: "pmw-freezer",
                    },
                    true,
                ),
                pylint_warnings: add_option.multi_elements(
                    "pylint_warnings",
                    {
                        original: "pylint-warnings",
                    },
                    true,
                ),
                pyqt5: add_option.multi_elements(
                    "pyqt5",
                    {
                        original: "pyqt5",
                    },
                    true,
                ),
                pyqt6: add_option.multi_elements(
                    "pyqt6",
                    {
                        original: "pyqt6",
                    },
                    true,
                ),
                pyside2: add_option.multi_elements(
                    "pyside2",
                    {
                        original: "pyside2",
                    },
                    true,
                ),
                pyside6: add_option.multi_elements(
                    "pyside6",
                    {
                        original: "pyside6",
                    },
                    true,
                ),
                pywebview: add_option.multi_elements(
                    "pywebview",
                    {
                        original: "pywebview",
                    },
                    true,
                ),
                tk_inter: add_option.multi_elements(
                    "tk_inter",
                    {
                        original: "tk-inter",
                    },
                    true,
                ),
                transformers: add_option.multi_elements(
                    "transformers",
                    {
                        original: "transformers",
                    },
                    true,
                ),
                upx: add_option.multi_elements(
                    "upx",
                    {
                        original: "upx",
                    },
                    true,
                ),
            },
            [],
        ),
        report: add_option.definable_single(
            "report",
            {
                original: "--report",
            },
            true,
            {},
            "",
            true,
        ),
        show_memory: add_option.bool(
            "show_memory",
            {
                original: "--show-memory",
            },
            true,
            false,
        ),
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
    },
    compiler_settings: {
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
                latest: add_option.multi_elements(
                    "latest",
                    {
                        original: "latest",
                    },
                    true,
                ),
            },
            "",
            true,
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
    binary_version_information: {
        company_name: add_option.definable_single(
            "company_name",
            {
                original: "--company-name",
            },
            true,
            {},
            "",
            true,
        ),
        product_name: add_option.definable_single(
            "product_name",
            {
                original: "--product-name",
            },
            true,
            {},
            "",
            true,
        ),
        file_version: add_option.definable_single(
            "file_version",
            {
                original: "--file-version",
            },
            true,
            {},
            "",
            true,
        ),
        product_version: add_option.definable_single(
            "product_version",
            {
                original: "--product-version",
            },
            true,
            {},
            "",
            true,
        ),
        file_description: add_option.definable_single(
            "file_description",
            {
                original: "--file-description",
            },
            true,
            {},
            "",
            true,
        ),
        copyright: add_option.definable_single(
            "copyright",
            {
                original: "--copyright",
            },
            true,
            {},
            "",
            true,
        ),
        trademarks: add_option.definable_single(
            "trademarks",
            {
                original: "--trademarks",
            },
            true,
            {},
            "",
            true,
        ),
    },
};

config[watcher_key] = [
    // C backend compiler choice
    (function () {
        let clang_status = null;
        let mingw_status = null;
        let msvc_status = null;

        return add_watcher(
            {
                clang: config.compiler_settings.clang,
                mingw64: config.compiler_settings.mingw64,
                msvc: config.compiler_settings.msvc,

            }, (config) => {
                if (clang_status === config.clang.val &&
                    mingw_status === config.mingw64.val &&
                    is_array_equivalent(msvc_status, config.msvc.val)) {
                    return;
                }
                clang_status = config.clang.val;
                mingw_status = config.mingw64.val;
                msvc_status = config.msvc.val;
                if (config.clang.val === true) {
                    config.mingw64.val = false;
                    config.msvc.val = config.msvc.default;
                    config.mingw64.enabled = false;
                    config.msvc.enabled = false;
                } else if (config.mingw64.val === true) {
                    config.clang.val = false;
                    config.msvc.val = config.msvc.default;
                    config.clang.enabled = false;
                    config.msvc.enabled = false;
                } else if (config.msvc.val.length > 0) {
                    config.clang.val = false;
                    config.mingw64.val = false;
                    config.clang.enabled = false;
                    config.mingw64.enabled = false;
                } else {
                    config.clang.enabled = true;
                    config.mingw64.enabled = true;
                    config.msvc.enabled = true;
                    config.clang.val = config.clang.default;
                    config.mingw64.val = config.mingw64.default;
                    config.msvc.val = config.msvc.default;
                }


            },
        );
    })()];
// noinspection JSUnusedGlobalSymbols
export default config;
