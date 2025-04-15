import{a as e,w as r,b as a,i as _}from"./index.1744713556998.js";const n={support_language:{"zh-CN":{name:"简体中文",path:"zh_cn"},en:{name:"English",path:"en"}},basic:{module_:e.bool("module",{original:"--module"},!0,!1),standalone:e.bool("standalone",{original:"--standalone"},!0,!1),onefile:e.bool("onefile",{original:"--onefile"},!0,!1),python_flag:e.defined_multi("python_flag",{original:"--python-flag"},!0,{s:e.multi_elements("s",{original:"-S"},!0),static_hashes:e.multi_elements("static_hashes",{original:"static_hashes"},!0),no_warnings:e.multi_elements("no_warnings",{original:"no_warnings"},!0),o:e.multi_elements("o",{original:"-O"},!0),no_docstrings:e.multi_elements("no_docstrings",{original:"no_docstrings"},!0),u:e.multi_elements("u",{original:"-u"},!0),isolated:e.multi_elements("isolated",{original:"isolated"},!0),m:e.multi_elements("m",{original:"-m"},!0)},[]),python_debug:e.bool("python_debug",{original:"--python-debug"},!0,!1),python_for_scons:e.definable_single("python_for_scons",{original:"--python-for-scons"},!0,{},"",!0),main:e.definable_multi("main",{original:"--main"},!0,{main:e.multi_elements("",{original:"main.py"},!0,!0)},[])},control_the_inclusion_of_modules_and_packages_in_result:{include_package:e.definable_multi("include_package",{original:"--include-package"},!0,{},[]),include_module:e.definable_multi("include_module",{original:"--include-module"},!0,{},[]),include_plugin_directory:e.definable_multi("include_plugin_directory",{original:"--include-plugin-directory"},!0,{},[]),include_plugin_files:e.definable_multi("include_plugin_files",{original:"--include-plugin-files"},!0,{},[]),prefer_source_code:e.bool("prefer_source_code",{original:"--prefer-source-code"},!0,!1)},control_the_following_into_imported_modules:{follow_imports:e.bool("follow_imports",{original:"--follow-imports"},!0,!1),follow_import_to:e.definable_multi("follow_import_to",{original:"--follow-import-to"},!0,{},[]),nofollow_import_to:e.definable_multi("nofollow_import_to",{original:"--nofollow-import-to"},!0,{},[]),nofollow_imports:e.bool("nofollow_imports",{original:"--nofollow-imports"},!0,!1),follow_stdlib:e.bool("follow_stdlib",{original:"--follow-stdlib"},!0,!1)},onefile_options:{onefile_tempdir_spec:e.definable_single("onefile_tempdir_spec",{original:"--onefile-tempdir-spec"},!0,{user_tempdir:e.multi_elements("user_tempdir",{original:"{TEMP}/onefile_{PID}_{TIME}"},!0)},"user_tempdir"),onefile_child_grace_time:e.definable_single("onefile_child_grace_time",{original:"--onefile-child-grace-time"},!0,{time:e.multi_elements("",{original:"5000"},!0,!0)},"time"),onefile_no_compression:e.bool("onefile_no_compression",{original:"--onefile-no-compression"},!0,!1),onefile_as_archive:e.bool("onefile_as_archive",{original:"--onefile-as-archive"},!0,!1)},data_files:{include_package_data:e.definable_multi("include_package_data",{original:"--include-package-data"},!0,{},[]),include_data_files:e.definable_multi("include_data_files",{original:"--include-data-files"},!0,{},[]),include_data_dir:e.definable_multi("include_data_dir",{original:"--include-data-dir"},!0,{},[]),noinclude_data_files:e.definable_multi("noinclude_data_files",{original:"--noinclude-data-files"},!0,{},[]),include_onefile_external_data:e.definable_multi("include_onefile_external_data",{original:"--include-onefile-external-data"},!0,{},[]),list_package_data:e.definable_multi("list_package_data",{original:"--list-package-data"},!0,{},[]),include_raw_dir:e.definable_multi("include_raw_dir",{original:"--include-raw-dir"},!0,{},[])},metadata_support:{include_distribution_metadata:e.definable_multi("include_distribution_metadata",{original:"--include-distribution-metadata"},!0,{},[])},DLL_files:{noinclude_dlls:e.definable_multi("noinclude_dlls",{original:"--noinclude-dlls"},!0,{},[]),list_package_dlls:e.definable_multi("list_package_dlls",{original:"--list-package-dlls"},!0,{},[])},control_the_warnings_to_be_given_by_Nuitka:{warn_implicit_exceptions:e.bool("warn_implicit_exceptions",{original:"--warn-implicit-exceptions"},!0,!1),warn_unusual_code:e.bool("warn_unusual_code",{original:"--warn-unusual-code"},!0,!1),assume_yes_for_downloads:e.bool("assume_yes_for_downloads",{original:"--assume-yes-for-downloads"},!0,!1),nowarn_mnemonic:e.definable_multi("nowarn_mnemonic",{original:"--nowarn-mnemonic"},!0,{},[])},immediate_execution_after_compilation:{run:e.bool("run",{original:"--run"},!0,!1),debugger:e.bool("debugger",{original:"--debugger"},!0,!1)},compilation_choices:{user_package_configuration_files:e.definable_multi("user_package_configuration_files",{original:"--user-package-configuration-files"},!0,{},[]),full_compat:e.bool("full_compat",{original:"--full-compat"},!0,!1),file_reference_choice:e.definable_multi("file_reference_choice",{original:"--file-reference-choice"},!0,{original:e.multi_elements("original",{original:"original"},!0),frozen:e.multi_elements("frozen",{original:"frozen"},!0)},[]),module_name_choice:e.definable_multi("module_name_choice",{original:"--module-name-choice"},!0,{original:e.multi_elements("original",{original:"original"},!0),runtime:e.multi_elements("runtime",{original:"runtime"},!0)},[])},output_choices:{output_filename:e.definable_single("output_filename",{original:"--output-filename"},!0,{program_name:e.multi_elements("program_name",{original:"<program_name>"},!0)},"program_name",!1),output_dir:e.definable_single("output_dir",{original:"--output-dir"},!0,{current_directory:e.multi_elements("current_directory",{original:"./"},!0)},"current_directory",!1),remove_output:e.bool("remove_output",{original:"--remove-output"},!0,!1),no_pyi_file:e.bool("no_pyi_file",{original:"--no-pyi-file"},!0,!1)},deployment_control:{deployment:e.bool("deployment",{original:"--deployment"},!0,!1),no_deployment_flag:e.definable_multi("no_deployment_flag",{original:"--no-deployment-flag"},!0,{},[])},environment_control:{force_runtime_environment_variable:e.definable_multi("force_runtime_environment_variable",{original:"--force-runtime-environment-variable"},!0,{},[])},debug_features:{debug:e.bool("debug",{original:"--debug"},!0,!1),no_debug_immortal_assumptions:e.bool("no_debug_immortal_assumptions",{original:"--no-debug-immortal-assumptions"},!0,!1),unstripped:e.bool("unstripped",{original:"--unstripped"},!0,!1),profile:e.bool("profile",{original:"--profile"},!0,!1),internal_graph:e.bool("internal_graph",{original:"--internal-graph"},!0,!1),trace_execution:e.bool("trace_execution",{original:"--trace-execution"},!0,!1),recompile_c_only:e.bool("recompile_c_only",{original:"--recompile-c-only"},!0,!1),xml:e.definable_single("xml",{original:"--xml"},!0,{},"",!0),experimental:e.definable_multi("experimental",{original:"--experimental"},!0,{},[]),low_memory:e.bool("low_memory",{original:"--low-memory"},!0,!1),create_environment_from_report:e.definable_multi("create_environment_from_report",{original:"--create-environment-from-report"},!0,{},[]),generate_c_only:e.bool("generate_c_only",{original:"--generate-c-only"},!0,!1)},backend_c_compiler_choice:{clang:e.bool("clang",{original:"--clang"},!0,!1),mingw64:e.bool("mingw64",{original:"--mingw64"},!0,!1),msvc:e.definable_single("msvc",{original:"--msvc"},!0,{latest:e.multi_elements("latest",{original:"latest"},!0)},"",!0),jobs:e.definable_single("jobs",{original:"--jobs"},!0,{},"",!1),lto:e.single_option("lto",{original:"--lto"},!0,{yes:e.multi_elements("yes",{original:"yes"},!0),no:e.multi_elements("no",{original:"no"},!0),auto:e.multi_elements("auto",{original:"auto"},!0)},"auto"),static_libpython:e.single_option("static_libpython",{original:"--static-libpython"},!0,{yes:e.multi_elements("yes",{original:"yes"},!0),no:e.multi_elements("no",{original:"no"},!0),auto:e.multi_elements("auto",{original:"auto"},!0)},"auto"),cf_protection:e.definable_single("cf_protection",{original:"--cf-protection"},!0,{auto:e.multi_elements("auto",{original:"auto"},!0)},"auto")},cache_control:{disable_cache:e.defined_multi("disable_cache",{original:"--disable-cache"},!0,{all:e.multi_elements("all",{original:"all"},!0),ccache:e.multi_elements("ccache",{original:"ccache"},!0),bytecode:e.multi_elements("bytecode",{original:"bytecode"},!0),compression:e.multi_elements("compression",{original:"compression"},!0),dll_dependencies:e.multi_elements("dll_dependencies",{original:"dll_dependencies"},!0)},[]),clean_cache:e.defined_multi("clean_cache",{original:"--clean-cache"},!0,{all:e.multi_elements("all",{original:"all"},!0),ccache:e.multi_elements("ccache",{original:"ccache"},!0),bytecode:e.multi_elements("bytecode",{original:"bytecode"},!0),compression:e.multi_elements("compression",{original:"compression"},!0),dll_dependencies:e.multi_elements("dll_dependencies",{original:"dll_dependencies"},!0)},[]),disable_bytecode_cache:e.bool("disable_bytecode_cache",{original:"--disable-bytecode-cache"},!0,!1),disable_ccache:e.bool("disable_ccache",{original:"--disable-ccache"},!0,!1),disable_dll_dependency_cache:e.bool("disable_dll_dependency_cache",{original:"--disable-dll-dependency-cache"},!0,!1),force_dll_dependency_cache_update:e.bool("force_dll_dependency_cache_update",{original:"--force-dll-dependency-cache-update"},!0,!1)},PGO_compilation_choices:{pgo_c:e.bool("pgo_c",{original:"--pgo-c"},!0,!1),pgo_args:e.definable_multi("pgo_args",{original:"--pgo-args"},!0,{},[]),pgo_executable:e.definable_multi("pgo_executable",{original:"--pgo-executable"},!0,{},[])},tracing_features:{report:e.definable_single("report",{original:"--report"},!0,{},"",!0),report_diffable:e.bool("report_diffable",{original:"--report-diffable"},!0,!1),report_user_provided:e.definable_multi("report_user_provided",{original:"--report-user-provided"},!0,{},[]),report_template:e.definable_multi("report_template",{original:"--report-template"},!0,{},[]),quiet:e.bool("quiet",{original:"--quiet"},!0,!1),show_scons:e.bool("show_scons",{original:"--show-scons"},!0,!1),no_progressbar:e.bool("no_progressbar",{original:"--no-progressbar"},!0,!1),show_progress:e.bool("show_progress",{original:"--show-progress"},!0,!1),show_memory:e.bool("show_memory",{original:"--show-memory"},!0,!1),show_modules:e.bool("show_modules",{original:"--show-modules"},!0,!1),show_modules_output:e.definable_single("show_modules_output",{original:"--show-modules-output"},!0,{},"",!0),verbose:e.bool("verbose",{original:"--verbose"},!0,!1),verbose_output:e.definable_single("verbose_output",{original:"--verbose-output"},!0,{},"",!0)},general_os_controls:{force_stdout_spec:e.definable_single("force_stdout_spec",{original:"--force-stdout-spec"},!0,{},"",!0),force_stderr_spec:e.definable_single("force_stderr_spec",{original:"--force-stderr-spec"},!0,{},"",!0)},windows_specific_controls:{windows_console_mode:e.single_option("windows_console_mode",{original:"--windows-console-mode"},!0,{force:e.multi_elements("force",{original:"force"},!0),disable:e.multi_elements("disable",{original:"disable"},!0),attach:e.multi_elements("attach",{original:"attach"},!0)},"force"),windows_icon_from_ico:e.definable_multi("windows_icon_from_ico",{original:"--windows-icon-from-ico"},!0,{},[]),windows_icon_from_exe:e.definable_multi("windows_icon_from_exe",{original:"--windows-icon-from-exe"},!0,{},[]),onefile_windows_splash_screen_image:e.definable_single("onefile_windows_splash_screen_image",{original:"--onefile-windows-splash-screen-image"},!0,{},"",!0),windows_uac_admin:e.bool("windows_uac_admin",{original:"--windows-uac-admin"},!0,!1),windows_uac_uiaccess:e.bool("windows_uac_uiaccess",{original:"--windows-uac-uiaccess"},!0,!1)},macOS_specific_controls:{macos_create_app_bundle:e.bool("macos_create_app_bundle",{original:"--macos-create-app-bundle"},!0,!1),macos_target_arch:e.definable_single("macos_target_arch",{original:"--macos-target-arch"},!0,{native:e.multi_elements("native",{original:"native"},!0)},"native",!1),macos_app_icon:e.definable_single("macos_app_icon",{original:"--macos-app-icon"},!0,{python_icon:e.multi_elements("python_icon",{original:"python"},!0)},"python_icon",!1),macos_signed_app_name:e.definable_single("macos_signed_app_name",{original:"--macos-signed-app-name"},!0,{},"",!0),macos_app_name:e.definable_single("macos_app_name",{original:"--macos-app-name"},!0,{},"",!0),macos_app_mode:e.single_option("macos_app_mode",{original:"--macos-app-mode"},!0,{gui:e.multi_elements("gui",{original:"gui"},!0),background:e.multi_elements("background",{original:"background"},!0),ui_element:e.multi_elements("ui_element",{original:"ui_element"},!0)},"gui"),macos_sign_identity:e.definable_single("macos_sign_identity",{original:"--macos-sign-identity"},!0,{auto:e.multi_elements("auto",{original:"auto"},!0),ad_hoc:e.multi_elements("ad_hoc",{original:"ad-hoc"},!0)},"ad_hoc",!1),macos_sign_notarization:e.bool("macos_sign_notarization",{original:"--macos-sign"},!0,!1),macos_app_version:e.definable_single("macos_app_version",{original:"--macos-app-version"},!0,{default_version:e.multi_elements("default_version",{original:"1.0"},!0)},"1.0",!1),macos_app_protected_resource:e.definable_multi("macos_app_protected_resource",{original:"--macos-app-protected-resource"},!0,{},[])},Linux_specific_controls:{linux_icon:e.definable_single("linux_icon",{original:"--linux-icon"},!0,{},"",!0)},binary_version_information:{company_name:e.definable_single("company_name",{original:"--company-name"},!0,{},"",!0),product_name:e.definable_single("product_name",{original:"--product-name"},!0,{},"",!0),file_version:e.definable_single("file_version",{original:"--file-version"},!0,{},"",!0),product_version:e.definable_single("product_version",{original:"--product-version"},!0,{},"",!0),file_description:e.definable_single("file_description",{original:"--file-description"},!0,{},"",!0),copyright:e.definable_single("copyright",{original:"--copyright"},!0,{},"",!0),trademarks:e.definable_single("trademarks",{original:"--trademarks"},!0,{},"",!0)},plugin_control:{enable_plugins:e.defined_multi("enable_plugins",{original:"--enable-plugins"},!0,{anti_bloat:e.multi_elements("anti_bloat",{original:"anti-bloat"},!0),data_files:e.multi_elements("data_files",{original:"data-files"},!0),delvewheel:e.multi_elements("delvewheel",{original:"delvewheel"},!0),dill_compat:e.multi_elements("dill_compat",{original:"dill-compat"},!0),dll_files:e.multi_elements("dll_files",{original:"dll-files"},!0),enum_compat:e.multi_elements("enum_compat",{original:"enum-compat"},!0),eventlet:e.multi_elements("eventlet",{original:"eventlet"},!0),gevent:e.multi_elements("gevent",{original:"gevent"},!0),gi:e.multi_elements("gi",{original:"gi"},!0),glfw:e.multi_elements("glfw",{original:"glfw"},!0),implicit_imports:e.multi_elements("implicit_imports",{original:"implicit-imports"},!0),kivy:e.multi_elements("kivy",{original:"kivy"},!0),matplotlib:e.multi_elements("matplotlib",{original:"matplotlib"},!0),multiprocessing:e.multi_elements("multiprocessing",{original:"multiprocessing"},!0),no_qt:e.multi_elements("no_qt",{original:"no-qt"},!0),options_nanny:e.multi_elements("options_nanny",{original:"options-nanny"},!0),pbr_compat:e.multi_elements("pbr_compat",{original:"pbr-compat"},!0),pkg_resources:e.multi_elements("pkg_resources",{original:"pkg-resources"},!0),pmw_freezer:e.multi_elements("pmw_freezer",{original:"pmw-freezer"},!0),pylint_warnings:e.multi_elements("pylint_warnings",{original:"pylint-warnings"},!0),pyqt5:e.multi_elements("pyqt5",{original:"pyqt5"},!0),pyqt6:e.multi_elements("pyqt6",{original:"pyqt6"},!0),pyside2:e.multi_elements("pyside2",{original:"pyside2"},!0),pyside6:e.multi_elements("pyside6",{original:"pyside6"},!0),pywebview:e.multi_elements("pywebview",{original:"pywebview"},!0),tk_inter:e.multi_elements("tk_inter",{original:"tk-inter"},!0),transformers:e.multi_elements("transformers",{original:"transformers"},!0),upx:e.multi_elements("upx",{original:"upx"},!0)},[]),disable_plugins:e.defined_multi("disable_plugins",{original:"--disable-plugins"},!0,{anti_bloat:e.multi_elements("anti_bloat",{original:"anti-bloat"},!0),data_files:e.multi_elements("data_files",{original:"data-files"},!0),delvewheel:e.multi_elements("delvewheel",{original:"delvewheel"},!0),dill_compat:e.multi_elements("dill_compat",{original:"dill-compat"},!0),dll_files:e.multi_elements("dll_files",{original:"dll-files"},!0),enum_compat:e.multi_elements("enum_compat",{original:"enum-compat"},!0),eventlet:e.multi_elements("eventlet",{original:"eventlet"},!0),gevent:e.multi_elements("gevent",{original:"gevent"},!0),gi:e.multi_elements("gi",{original:"gi"},!0),glfw:e.multi_elements("glfw",{original:"glfw"},!0),implicit_imports:e.multi_elements("implicit_imports",{original:"implicit-imports"},!0),kivy:e.multi_elements("kivy",{original:"kivy"},!0),matplotlib:e.multi_elements("matplotlib",{original:"matplotlib"},!0),multiprocessing:e.multi_elements("multiprocessing",{original:"multiprocessing"},!0),no_qt:e.multi_elements("no_qt",{original:"no-qt"},!0),options_nanny:e.multi_elements("options_nanny",{original:"options-nanny"},!0),pbr_compat:e.multi_elements("pbr_compat",{original:"pbr-compat"},!0),pkg_resources:e.multi_elements("pkg_resources",{original:"pkg-resources"},!0),pmw_freezer:e.multi_elements("pmw_freezer",{original:"pmw-freezer"},!0),pylint_warnings:e.multi_elements("pylint_warnings",{original:"pylint-warnings"},!0),pyqt5:e.multi_elements("pyqt5",{original:"pyqt5"},!0),pyqt6:e.multi_elements("pyqt6",{original:"pyqt6"},!0),pyside2:e.multi_elements("pyside2",{original:"pyside2"},!0),pyside6:e.multi_elements("pyside6",{original:"pyside6"},!0),pywebview:e.multi_elements("pywebview",{original:"pywebview"},!0),tk_inter:e.multi_elements("tk_inter",{original:"tk-inter"},!0),transformers:e.multi_elements("transformers",{original:"transformers"},!0),upx:e.multi_elements("upx",{original:"upx"},!0)},[]),plugin_list:e.bool("plugin_list",{original:"--plugin-list"},!0,!1),user_plugin:e.definable_multi("user_plugin",{original:"--user-plugin"},!0,{},[]),module_parameter:e.definable_multi("module_parameter",{original:"--module-parameter"},!0,{},[]),show_source_changes:e.definable_multi("show_source_changes",{original:"--show-source-changes"},!0,{},[])},cross_compilation:{target:e.definable_single("target",{original:"--target"},!0,{},"",!0)},plugin_options_of_anti_bloat:{show_anti_bloat_changes:e.bool("show_anti_bloat_changes",{original:"--show-anti-bloat-changes"},!0,!1),noinclude_setuptools_mode:e.definable_multi("noinclude_setuptools_mode",{original:"--noinclude-setuptools-mode"},!0,{},[]),noinclude_pytest_mode:e.definable_multi("noinclude_pytest_mode",{original:"--noinclude-pytest-mode"},!0,{},[]),noinclude_unittest_mode:e.definable_multi("noinclude_unittest_mode",{original:"--noinclude-unittest-mode"},!0,{},[]),noinclude_pydoc_mode:e.definable_multi("noinclude_pydoc_mode",{original:"--noinclude-pydoc-mode"},!0,{},[]),noinclude_IPython_mode:e.definable_multi("noinclude_IPython_mode",{original:"--noinclude-IPython-mode"},!0,{},[]),noinclude_dask_mode:e.definable_multi("noinclude_dask_mode",{original:"--noinclude-dask-mode"},!0,{},[]),noinclude_numba_mode:e.definable_multi("noinclude_numba_mode",{original:"--noinclude-numba-mode"},!0,{},[]),noinclude_default_mode:e.definable_multi("noinclude_default_mode",{original:"--noinclude-default-mode"},!0,{},[]),noinclude_custom_mode:e.definable_multi("noinclude_custom_mode",{original:"--noinclude-custom-mode"},!0,{},[])},plugin_options_of_spacy:{spacy_language_model:e.definable_multi("spacy_language_model",{original:"--spacy-language-model"},!0,{all:e.multi_elements("all",{original:"all"},!0)},[])}};n[r]=[function(){let t=null;return a({standalone:n.basic.standalone,follow_imports:n.control_the_following_into_imported_modules.follow_imports,python_flag:n.basic.python_flag,nofollow_imports:n.control_the_following_into_imported_modules.nofollow_imports},l=>{t!==l.standalone.val&&(t=l.standalone.val,l.standalone.val===!0?(l.follow_imports.val=!0,l.follow_imports.enabled=!1,l.python_flag.val=["s"],l.python_flag.enabled=!1,l.nofollow_imports.val=!1,l.nofollow_imports.enabled=!1):l.standalone.val===!1&&(l.follow_imports.val=!1,l.follow_imports.enabled=!0,l.python_flag.val=[],l.python_flag.enabled=!0,l.nofollow_imports.enabled=!0))})}(),function(){let t=null;return a({onefile:n.basic.onefile,onefile_tempdir_spec:n.onefile_options.onefile_tempdir_spec,onefile_child_grace_time:n.onefile_options.onefile_child_grace_time,onefile_no_compression:n.onefile_options.onefile_no_compression,onefile_as_archive:n.onefile_options.onefile_as_archive},l=>{t!==l.onefile.val&&(t=l.onefile.val,l.onefile.val===!0?(l.onefile_tempdir_spec.enabled=!0,l.onefile_child_grace_time.enabled=!0,l.onefile_no_compression.enabled=!0,l.onefile_as_archive.enabled=!0):l.onefile.val===!1&&(l.onefile_tempdir_spec.enabled=!1,l.onefile_child_grace_time.enabled=!1,l.onefile_no_compression.enabled=!1,l.onefile_as_archive.enabled=!1,l.onefile_tempdir_spec.val=l.onefile_tempdir_spec.default,l.onefile_child_grace_time.val=l.onefile_child_grace_time.default,l.onefile_no_compression.val=l.onefile_no_compression.default,l.onefile_as_archive.val=l.onefile_as_archive.default))})}(),function(){let t=null,l=null;return a({standalone:n.basic.standalone,module:n.basic.module_,output_filename:n.output_choices.output_filename},o=>{t===o.standalone.val&&l===o.module.val||(t=o.standalone.val,l=o.module.val,o.standalone.val===!0||o.module.val===!0?(o.output_filename.enabled=!1,o.output_filename.val=o.output_filename.default):o.output_filename.enabled=!0)})}(),function(){let t=null,l=null,o=null;return a({clang:n.backend_c_compiler_choice.clang,mingw64:n.backend_c_compiler_choice.mingw64,msvc:n.backend_c_compiler_choice.msvc},i=>{t===i.clang.val&&l===i.mingw64.val&&_(o,i.msvc.val)||(t=i.clang.val,l=i.mingw64.val,o=i.msvc.val,i.clang.val===!0?(i.mingw64.val=!1,i.msvc.val=i.msvc.default,i.mingw64.enabled=!1,i.msvc.enabled=!1):i.mingw64.val===!0?(i.clang.val=!1,i.msvc.val=i.msvc.default,i.clang.enabled=!1,i.msvc.enabled=!1):i.msvc.val.length>0?(i.clang.val=!1,i.mingw64.val=!1,i.clang.enabled=!1,i.mingw64.enabled=!1):(i.clang.enabled=!0,i.mingw64.enabled=!0,i.msvc.enabled=!0,i.clang.val=i.clang.default,i.mingw64.val=i.mingw64.default,i.msvc.val=i.msvc.default))})}(),function(){let t=null;return a({standalone:n.basic.standalone,pgo:n.PGO_compilation_choices.pgo_c},l=>{t!==l.standalone.val&&(t=l.standalone.val,l.standalone.val===!0?(l.pgo.val=!1,l.pgo.enabled=!1):l.pgo.enabled=!0)})}()];export{n as default};
