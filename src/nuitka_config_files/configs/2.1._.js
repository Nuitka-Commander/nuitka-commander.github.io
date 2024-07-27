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
            [],
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
                    false,
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
    DLL_files: {
        noinclude_dlls: add_option.definable_multi(
            "noinclude_dlls",
            {
                original: "--noinclude-dlls",
            },
            true,
            {},
            [],
        ),
        list_package_dlls: add_option.definable_multi(
            "list_package_dlls",
            {
                original: "--list-package-dlls",
            },
            true,
            {},
            [],
        ),
    },
    control_the_warnings_to_be_given_by_Nuitka: {
        warn_implicit_exceptions: add_option.bool(
            "warn_implicit_exceptions",
            {
                original: "--warn-implicit-exceptions",
            },
            true,
            false,
        ),
        warn_unusual_code: add_option.bool(
            "warn_unusual_code",
            {
                original: "--warn-unusual-code",
            },
            true,
            false,
        ),
        assume_yes_for_downloads: add_option.bool(
            "assume_yes_for_downloads",
            {
                original: "--assume-yes-for-downloads",
            },
            true,
            false,
        ),
        nowarn_mnemonic: add_option.definable_multi(
            "nowarn_mnemonic",
            {
                original: "--nowarn-mnemonic",
            },
            true,
            {},
            [],
        ),
    },
    immediate_execution_after_compilation: {
        run: add_option.bool(
            "run",
            {
                original: "--run",
            },
            true,
            false,
        ),
        debugger: add_option.bool(
            "debugger",
            {
                original: "--debugger",
            },
            true,
            false,
        ),
        execute_with_pythonpath: add_option.bool(
            "execute_with_pythonpath",
            {
                original: "--execute-with-pythonpath",
            },
            true,
            false,
        ),
    },
    compilation_choices: {
        user_package_configuration_files: add_option.definable_multi(
            "user_package_configuration_files",
            {
                original: "--user-package-configuration-files",
            },
            true,
            {},
            [],
        ),
        full_compat: add_option.bool(
            "full_compat",
            {
                original: "--full-compat",
            },
            true,
            false,
        ),
        file_reference_choice: add_option.definable_multi(
            "file_reference_choice",
            {
                original: "--file-reference-choice",
            },
            true,
            {
                original: add_option.multi_elements(
                    "original",
                    {
                        original: "original",
                    },
                    true,
                ),
                frozen: add_option.multi_elements(
                    "frozen",
                    {
                        original: "frozen",
                    },
                    true,
                ),
            },
            [],
        ),
        module_name_choice: add_option.definable_multi(
            "module_name_choice",
            {
                original: "--module-name-choice",
            },
            true,
            {
                original: add_option.multi_elements(
                    "original",
                    {
                        original: "original",
                    },
                    true,
                ),
                runtime: add_option.multi_elements(
                    "runtime",
                    {
                        original: "runtime",
                    },
                    true,
                ),
            },
            [],
        ),
    },
    output_choices: {
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
        no_pyi_file: add_option.bool(
            "no_pyi_file",
            {
                original: "--no-pyi-file",
            },
            true,
            false,
        ),
    },
    deployment_control: {
        deployment: add_option.bool(
            "deployment",
            {
                original: "--deployment",
            },
            true,
            false,
        ),
        no_deployment_flag: add_option.definable_multi(
            "no_deployment_flag",
            {
                original: "--no-deployment-flag",
            },
            true,
            {},
            [],
        ),
    },
    debug_features: {
        debug: add_option.bool(
            "debug",
            {
                original: "--debug",
            },
            true,
            false,
        ),
        unstripped: add_option.bool(
            "unstripped",
            {
                original: "--unstripped",
            },
            true,
            false,
        ),
        profile: add_option.bool(
            "profile",
            {
                original: "--profile",
            },
            true,
            false,
        ),
        internal_graph: add_option.bool(
            "internal_graph",
            {
                original: "--internal-graph",
            },
            true,
            false,
        ),
        trace_execution: add_option.bool(
            "trace_execution",
            {
                original: "--trace-execution",
            },
            true,
            false,
        ),
        recompile_c_only: add_option.bool(
            "recompile_c_only",
            {
                original: "--recompile-c-only",
            },
            true,
            false,
        ),
        xml: add_option.definable_single(
            "xml",
            {
                original: "--xml",
            },
            true,
            {},
            "",
            true,
        ),    //这边少了个选项 但是已经重复出现了
        experimental: add_option.definable_multi(
            "experimental",
            {
                original: "--experimental",
            },
            true,
            {},
            [],
        ),
        low_memory: add_option.bool(
            "low_memory",
            {
                original: "--low-memory",
            },
            true,
            false,
        ),
        create_environment_from_report: add_option.definable_multi(
            "create_environment_from_report",
            {
                original: "--create-environment-from-report",
            },
            true,
            {},
            [],
        ),
        generate_c_only: add_option.bool(
            "generate_c_only",
            {
                original: "--generate-c-only",
            },
            true,
            false,
        ),
    },
    Linux_specific_controls: {
        linux_icon: add_option.definable_single(
            "linux_icon",
            {
                original: "--linux-icon",
            },
            true,
            {},
            "",
            true,
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