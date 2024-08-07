/**
 * @Description 2.1版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {add_option, add_watcher, watcher_key} from "@/values/templates.js";
import {is_array_equivalent} from "@/modules/untils.js";


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
    backend_c_compiler_choice: {
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
        jobs: add_option.definable_single(
            "jobs",
            {
                original: "--jobs",
            },
            true,
            {},
            "",
            false,
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
        cf_protection: add_option.definable_single(
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
            },
            "auto",
        ),
    },
    cache_control: {
        disable_cache: add_option.defined_multi(
            "disable_cache",
            {
                original: "--disable-cache",
            },
            true,
            {
                all: add_option.multi_elements(
                    "all",
                    {
                        original: "all",
                    },
                    true,
                ),
                ccache: add_option.multi_elements(
                    "ccache",
                    {
                        original: "ccache",
                    },
                    true,
                ),
                bytecode: add_option.multi_elements(
                    "bytecode",
                    {
                        original: "bytecode",
                    },
                    true,
                ),
                compression: add_option.multi_elements(
                    "compression",
                    {
                        original: "compression",
                    },
                    true,
                ),
                dll_dependencies: add_option.multi_elements(
                    "dll_dependencies",
                    {
                        original: "dll_dependencies",
                    },
                    true,
                ),
            },
            [],
        ),
        clean_cache: add_option.defined_multi(
            "clean_cache",
            {
                original: "--clean-cache",
            },
            true,
            {
                all: add_option.multi_elements(
                    "all",
                    {
                        original: "all",
                    },
                    true,
                ),
                ccache: add_option.multi_elements(
                    "ccache",
                    {
                        original: "ccache",
                    },
                    true,
                ),
                bytecode: add_option.multi_elements(
                    "bytecode",
                    {
                        original: "bytecode",
                    },
                    true,
                ),
                compression: add_option.multi_elements(
                    "compression",
                    {
                        original: "compression",
                    },
                    true,
                ),
                dll_dependencies: add_option.multi_elements(
                    "dll_dependencies",
                    {
                        original: "dll_dependencies",
                    },
                    true,
                ),
            },
            [],
        ),
        disable_bytecode_cache: add_option.bool(
            "disable_bytecode_cache",
            {
                original: "--disable-bytecode-cache",
            },
            true,
            false,
        ),
        disable_ccache: add_option.bool(
            "disable_ccache",
            {
                original: "--disable-ccache",
            },
            true,
            false,
        ),
        disable_dll_dependency_cache: add_option.bool(
            "disable_dll_dependency_cache",
            {
                original: "--disable-dll-dependency-cache",
            },
            true,
            false,
        ),
        force_dll_dependency_cache_update: add_option.bool(
            "force_dll_dependency_cache_update",
            {
                original: "--force-dll-dependency-cache-update",
            },
            true,
            false,
        ),
    },
    PGO_compilation_choices: {
        pgo: add_option.bool(
            "pgo",
            {
                original: "--pgo",
            },
            true,
            false,
        ),
        pgo_args: add_option.definable_multi(
            "pgo_args",
            {
                original: "--pgo-args",
            },
            true,
            {},
            [],
        ),
        pgo_executable: add_option.definable_multi(
            "pgo_executable",
            {
                original: "--pgo-executable",
            },
            true,
            {},
            [],
        ),
    },
    tracing_features: {
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
            {}, //todo
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
            {},
            "",
            true,
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
            {},
            "",
            true,
        ),
    },
    general_os_controls: {
        disable_console: add_option.bool(
            "disable_console",
            {
                original: "--disable-console",
            },
            true,
            false,
        ),
        enable_console: add_option.bool(
            "enable_console",
            {
                original: "--enable-console",
            },
            true,
            true,
        ),
        force_stdout_spec: add_option.definable_single(
            "force_stdout_spec",
            {
                original: "--force-stdout-spec",
            },
            true,
            {},
            "",
            true,
        ),
        force_stderr_spec: add_option.definable_single(
            "force_stderr_spec",
            {
                original: "--force-stderr-spec",
            },
            true,
            {},
            "",
            true,
        ),
    },
    windows_specific_controls: {
        windows_icon_from_ico: add_option.definable_multi(
            "windows_icon_from_ico",
            {
                original: "--windows-icon-from-ico",
            },
            true,
            {},
            [],
        ),
        windows_icon_from_exe: add_option.definable_multi(
            "windows_icon_from_exe",
            {
                original: "--windows-icon-from-exe",
            },
            true,
            {},
            [],
        ),
        onefile_windows_splash_screen_image: add_option.definable_single(
            "onefile_windows_splash_screen_image",
            {
                original: "--onefile-windows-splash-screen-image",
            },
            true,
            {},
            "",
            true,
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
    macOS_specific_controls: {
        macos_create_app_bundle: add_option.bool(
            "macos_create_app_bundle",
            {
                original: "--macos-create-app-bundle",
            },
            true,
            false,
        ),
        macos_target_arch: add_option.definable_single(
            "macos_target_arch",
            {
                original: "--macos-target-arch",
            },
            true,
            {
                native: add_option.multi_elements(
                    "native",
                    {
                        original: "native",
                    },
                    true,
                ),
            },
            "native",
            false,
        ),
        macos_app_icon: add_option.definable_single(
            "macos_app_icon",
            {
                original: "--macos-app-icon",
            },
            true,
            {
                python_icon: add_option.multi_elements(
                    "python_icon",
                    {
                        original: "python",
                    },
                    true,
                ),
            },
            "python_icon",
            false,
        ),
        macos_signed_app_name: add_option.definable_single(
            "macos_signed_app_name",
            {
                original: "--macos-signed-app-name",
            },
            true,
            {},
            "",
            true,
        ),
        macos_app_name: add_option.definable_single(
            "macos_app_name",
            {
                original: "--macos-app-name",
            },
            true,
            {},
            "",
            true,
        ),
        macos_app_mode: add_option.single_option(
            "macos_app_mode",
            {
                original: "--macos-app-mode",
            },
            true,
            {
                gui: add_option.multi_elements(
                    "gui",
                    {
                        original: "gui",
                    },
                    true,
                ),
                background: add_option.multi_elements(
                    "background",
                    {
                        original: "background",
                    },
                    true,
                ),
                ui_element: add_option.multi_elements(
                    "ui_element",
                    {
                        original: "ui_element",
                    },
                    true,
                ),
            },
            "gui",
        ),
        macos_sign_identity: add_option.definable_single(
            "macos_sign_identity",
            {
                original: "--macos-sign-identity",
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
                ad_hoc: add_option.multi_elements(
                    "ad_hoc",
                    {
                        original: "ad-hoc",
                    },
                    true,
                ),
            },
            "ad_hoc",
            false,
        ),
        macos_sign_notarization: add_option.bool(
            "macos_sign_notarization",
            {
                original: "--macos-sign",
            },
            true,
            false,
        ),
        macos_app_version: add_option.definable_single(
            "macos_app_version",
            {
                original: "--macos-app-version",
            },
            true,
            {
                default_version: add_option.multi_elements(
                    "default_version",
                    {
                        original: "1.0",
                    },
                    true,
                ),
            },
            "1.0",
            false,
        ),
        macos_app_protected_resource: add_option.definable_multi(
            "macos_app_protected_resource",
            {
                original: "--macos-app-protected-resource",
            },
            true,
            {},
            [],
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
    plugin_control: {
        enable_plugins: add_option.defined_multi(
            "enable_plugins",
            {
                original: "--enable-plugins",
            },
            true,
            {}, // todo 把plugin list添加进去
            [],
        ),
        disable_plugins: add_option.defined_multi(
            "disable_plugins",
            {
                original: "--disable-plugins",
            },
            true,
            {}, // todo 把plugin list添加进去
            [],
        ),
        plugin_no_detection: add_option.bool(
            "plugin_no_detection",
            {
                original: "--plugin-no-detection",
            },
            true,
            false,
        ),
        plugin_list: add_option.bool(
            "plugin_list",
            {
                original: "--plugin-list",
            },
            true,
            false,
        ),
        user_plugin: add_option.definable_multi(
            "user_plugin",
            {
                original: "--user-plugin",
            },
            true,
            {},
            [],
        ),
        module_parameter: add_option.definable_multi(
            "module_parameter",
            {
                original: "--module-parameter",
            },
            true,
            {},
            [],
        ),
        show_source_changes: add_option.definable_multi(
            "show_source_changes",
            {
                original: "--show-source-changes",
            },
            true,
            {},
            [],
        ),
    },
    plugin_options_of_anti_bloat: {
        show_anti_bloat_changes: add_option.bool(
            "show_anti_bloat_changes",
            {
                original: "--show-anti-bloat-changes",
            },
            true,
            false,
        ),
        noinclude_setuptools_mode: add_option.definable_multi(
            "noinclude_setuptools_mode",
            {
                original: "--noinclude-setuptools-mode",
            },
            true,
            {},
            [],
        ),
        noinclude_pytest_mode: add_option.definable_multi(
            "noinclude_pytest_mode",
            {
                original: "--noinclude-pytest-mode",
            },
            true,
            {},
            [],
        ),
        noinclude_unittest_mode: add_option.definable_multi(
            "noinclude_unittest_mode",
            {
                original: "--noinclude-unittest-mode",
            },
            true,
            {},
            [],
        ),
        noinclude_IPython_mode: add_option.definable_multi(
            "noinclude_IPython_mode",
            {
                original: "--noinclude-IPython-mode",
            },
            true,
            {},
            [],
        ),
        noinclude_dask_mode: add_option.definable_multi(
            "noinclude_dask_mode",
            {
                original: "--noinclude-dask-mode",
            },
            true,
            {},
            [],
        ),
        noinclude_numba_mode: add_option.definable_multi(
            "noinclude_numba_mode",
            {
                original: "--noinclude-numba-mode",
            },
            true,
            {},
            [],
        ),
        noinclude_default_mode: add_option.definable_multi(
            "noinclude_default_mode",
            {
                original: "--noinclude-default-mode",
            },
            true,
            {},
            [],
        ),
        noinclude_custom_mode: add_option.definable_multi(
            "noinclude_custom_mode",
            {
                original: "--noinclude-custom-mode",
            },
            true,
            {},
            [],
        ),
    },

};

config[watcher_key] = [
    // standalone
    (function () {
        // null/boolean 强制更新一次
        let standalone_status = null;

        return add_watcher({
            standalone: config.basic.standalone,
            follow_imports: config.control_the_following_into_imported_modules.follow_imports,
            python_flag: config.basic.python_flag,
            nofollow_imports: config.control_the_following_into_imported_modules.nofollow_imports,
        }, (config) => {
            if (standalone_status === config.standalone.val) { //没变化可能是递归调用 退出
                return;
            }
            standalone_status = config.standalone.val;
            if (config.standalone.val === true) {
                config.follow_imports.val = true;
                config.follow_imports.enabled = false;
                config.python_flag.val = ["s"];
                config.python_flag.enabled = false;
                config.nofollow_imports.val = false;
                config.nofollow_imports.enabled = false;
            } else if (config.standalone.val === false) {
                config.follow_imports.val = false;
                config.follow_imports.enabled = true;
                config.python_flag.val = [];
                config.python_flag.enabled = true;
                config.nofollow_imports.enabled = true;
            }
        })
    })(),
    (function () {
        // null/boolean
        let onefile_status = null;
        return add_watcher({
            onefile: config.basic.onefile,
            onefile_tempdir_spec: config.onefile_options.onefile_tempdir_spec,
            onefile_child_grace_time: config.onefile_options.onefile_child_grace_time,
            onefile_no_compression: config.onefile_options.onefile_no_compression,
            onefile_as_archive: config.onefile_options.onefile_as_archive,

        }, (config) => {
            if (onefile_status === config.onefile.val) {
                return;
            }
            onefile_status = config.onefile.val;
            if (config.onefile.val === true) {
                config.onefile_tempdir_spec.enabled = true;
                config.onefile_child_grace_time.enabled = true;
                config.onefile_no_compression.enabled = true;
                config.onefile_as_archive.enabled = true;
            } else if (config.onefile.val === false) {
                config.onefile_tempdir_spec.enabled = false;
                config.onefile_child_grace_time.enabled = false;
                config.onefile_no_compression.enabled = false;
                config.onefile_as_archive.enabled = false;
                // 恢复默认值
                config.onefile_tempdir_spec.val = config.onefile_tempdir_spec.default;
                config.onefile_child_grace_time.val = config.onefile_child_grace_time.default;
                config.onefile_no_compression.val = config.onefile_no_compression.default;
                config.onefile_as_archive.val = config.onefile_as_archive.default;
            }

        })
    })(),
    (function () {
        let standalone = null;
        let module = null;
        return add_watcher(
            {
                standalone: config.basic.standalone,
                module: config.basic.module_,
                output_filename: config.output_choices.output_filename,

            }, (config) => {
                if (standalone === config.standalone.val && module === config.module.val) {
                    return;
                }
                standalone = config.standalone.val;
                module = config.module.val;
                if (config.standalone.val === true || config.module.val === true) {
                    config.output_filename.enabled = false;
                    config.output_filename.val = config.output_filename.default;
                } else {
                    config.output_filename.enabled = true;
                }
            },
        )
    })(),
    // C backend compiler choice
    (function () {
        let clang_status = null;
        let mingw_status = null;
        let msvc_status = null;

        return add_watcher(
            {
                clang: config.backend_c_compiler_choice.clang,
                mingw64: config.backend_c_compiler_choice.mingw64,
                msvc: config.backend_c_compiler_choice.msvc,

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
        )
    })(),
    (function () {
        let standalone_status = null;
        return add_watcher({
            standalone: config.basic.standalone,
            pgo: config.PGO_compilation_choices.pgo,
        }, (config) => {
            if (standalone_status === config.standalone.val) {
                return;
            }
            standalone_status = config.standalone.val;
            if (config.standalone.val === true) {
                config.pgo.val = false;
                config.pgo.enabled = false;
            } else {
                config.pgo.enabled = true;
            }
        })
    })(),
];
// noinspection JSUnusedGlobalSymbols
export default config;
