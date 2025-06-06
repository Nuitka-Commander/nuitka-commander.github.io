// noinspection JSUnusedGlobalSymbols
/**
 * English translation file
 * @author erduotong
 */
export default {
    //title classes please translate here
    title: {
        basic: "Basic Settings",
        control_the_inclusion_of_modules_and_packages_in_result: "Control the inclusion of modules and packages in result",
        control_the_following_into_imported_modules: "Control the imported modules",
        onefile_options: "Onefile Options",
        data_files: "Data Files",
        metadata_support: "Metadata Support",
        DLL_files: "DLL (Dynamic Link Library) Files",
        Linux_specific_controls: "Linux Specific Controls",
        control_the_warnings_to_be_given_by_Nuitka: "Control the warnings given by Nuitka",
        immediate_execution_after_compilation: "Immediate execution after compilation",
        compilation_choices: "Compilation Options",
        output_choices: "Output Options",
        deployment_control: "Deployment Control",
        environment_control: "Environment Control",
        debug_features: "Debug Features",
        nuitka_development_features: "Nuitka Development Features",
        backend_c_compiler_choice: "Backend C Compiler Choice",
        cache_control: "Cache Control",
        PGO_compilation_choices: "PGO (Profile Guided Optimization) Compilation Options",
        tracing_features: "Tracing Features",
        general_os_controls: "General OS Settings",
        windows_specific_controls: "Windows Specific Controls",
        macOS_specific_controls: "macOS Specific Controls",
        binary_version_information: "Binary Version Information",
        plugin_control: "Plugin Control",
        cross_compilation: "Cross Compilation",
        plugin_options_of_anti_bloat: "'Anti-Bloat' Plugin Options (Category: Core)",
        plugin_options_of_playwright: "'Playwright' Plugin Options",
        plugin_options_of_spacy: "Spacy Plugin Options (Category: Package Support)",
    },
    // basic
    module: {
        name: "Module Mode",
        desc: "Create an importable binary extension module executable instead of a program. Default is off.",
    },
    mode: {
        name: "Mode",
        desc: "Mode used for compilation",
        elements: {
            accelerated: {
                name: "Accelerated Mode",
                desc: "Accelerated mode will execute in your Python installation and depend on it. This is the default mode.",
            },
            standalone: {
                name: "Standalone Mode",
                desc: "Standalone mode will create a folder with the executable to run it.",
            },
            onefile: {
                name: "Onefile Mode",
                desc: "Onefile mode creates a single executable file for deployment.",
            },
            app: {
                name: "App Mode",
                desc: "Similar to onefile, but not recommended on macOS.",
            },
            module: {
                name: "Module Mode",
                desc: "Module mode will generate a module",

            },
            package: {
                name: "Package Mode",
                desc: "Will generate a module\nWill also include all submodules and subpackages.",
            },
        },
    },
    standalone: {
        name: "Standalone Mode",
        desc: "Enable standalone mode for output. This allows you to transfer the binary to other machines without requiring an existing Python installation. This also means it will become very large.\nIt will enable these options: \"--follow-imports\" and \"--python-flag=no_site\".",
    },
    onefile: {
        name: "Onefile Mode",
        desc: "Enable onefile mode on top of standalone mode. This means that instead of a folder, a compressed executable is created and used.",
    },
    python_flag: {
        name: "Python Flag",
        desc: "Python flags to use. Default is what you used to run Nuitka, this enforces a specific mode. These are also the options present in the standard Python executable.",
        elements: {
            s: {
                name: "Don't include site-packages directory",
                desc: "Alias no_site",
            },
            static_hashes: {
                name: "Static Hashes",
                desc: "Don't use hash randomization",
            },
            no_warnings: {
                name: "Disable Warnings",
                desc: "Don't give Python runtime warnings",
            },
            o: {
                name: "No Error Checking",
                desc: "Don't include any debug/error checking (assert) statements",
            },
            no_docstrings: {
                name: "No Docstrings",
                desc: "Don't include docstrings",
            },
            u: {
                name: "Don't Use Buffering",
                desc: "Alias unbuffered, don't use buffering",
            },
            isolated: {
                name: "Don't Load External Code",
                desc: "Don't load external code",
            },
            p: {
                name: "Don't Use Current Directory for Module Search",
                desc: "Alias safe_path, don't use current directory for module search",
            },
            m: {
                name: "Package Mode",
                desc: "Package mode, compile as \"package.__main__\"",
            },
        },
    },
    python_debug: {
        name: "Python Debug",
        desc: "Whether to use the debug version. Default is the version you're running Nuitka with, which is likely a non-debug version. For debug and test purposes only.",
    },
    python_for_scons: {
        name: "Python Path for Scons",
        desc: "When compiling with Python 3.4, provide a Python binary path to use for Scons. Otherwise, Nuitka can use the Python you're running Nuitka with,\nor find Nuitka installation on its own, e.g. from Windows registry. On Windows, Python 3.5 or higher is required, on non-Windows, Python 2.6 or Python 2.7 is also acceptable.",
    },
    main: {
        name: "Main Program Path",
        desc: "If specified only once (like --main=\"1.py\"), this will replace the positional argument, which is the file name to compile (entry point).\nIf specified multiple times (like --main=\"1.py\" --main=\"2.py\"), it will enable \"multidist\", which allows you to create binaries that depend on the file name or call name.\n(Allows multiple main programs to use the same compilation parameters)\n",
    },
    // Control the inclusion of modules and packages in result
    include_package: {
        name: "Include Package",
        desc: "Include the whole package. Specified in Python namespace form, e.g. 'some_package.sub_package',\nNuitka will then find it and include it and all modules found below that disk location, and make it available for import by the code.\nTo avoid unwanted subpackages, e.g. tests, you can do '--nofollow-import-to=*.tests'. Default is empty.\n(Note: Inclusion here means compiling the included package or module into the binary file and making it importable by the code, not as a dependency)\n",
    },
    include_module: {
        name: "Include Module",
        desc: "Include a single module. Specified in Python namespace form, e.g. 'some_package.some_module', then Nuitka will find it and include it in the binary or extension module it creates,\nand make it available for import by the code. Default is empty",
    },
    include_plugin_directory: {
        name: "Include Plugin Directory",
        desc: "Include also the code found in the directory, treating them as if they were each a main file. This will override other include options.\nYou should prefer the other include options. They find things by name rather than by filename, which these options can do through finding stuff in 'sys.path'.\nThis option is only for very special use cases. Can be given multiple times. Default is empty.",
    },
    include_plugin_files: {
        name: "Include Plugin Files",
        desc: "Include files matching PATTERN. Overrides all other follow options. Can be given multiple times. Default is empty",
    },
    prefer_source_code: {
        name: "Prefer Source Code",
        desc: "For already compiled extension modules, where there is both source code and an extension module, usually the extension module is used, but for best performance, it's better to compile modules from available source code.\nIf this is not needed, you can use --no-prefer-source-code to disable warnings about this. Default is off.",
    },
    // Control the following into imported modules
    follow_imports: {
        name: "Import Imported Modules",
        desc: "Import all imported modules. Enabled by default in standalone mode, otherwise off",
    },
    follow_import_to: {
        name: "Follow Import to Module",
        desc: "Follow import to that module if used, or if a package to the whole package. Can be given multiple times. Default is empty.",
    },
    nofollow_import_to: {
        name: "Don't Follow Import Module",
        desc: "Do not follow import to that module name even if used, or if a package name, to the whole package, regardless of used. This overrides all other options.\nThis can also include patterns, e.g. \"*.tests\". Can be given multiple times. Default is empty.",
    },
    nofollow_imports: {
        name: "Don't Perform All Imports",
        desc: "Don't recurse into any imported modules at all, this will override all other inclusion options, and cannot be used for standalone mode. Default is off.",
    },
    follow_stdlib: {
        name: "Follow Import Standard Library",
        desc: "Also follow imports into modules from the standard library, which will greatly increase compile time, and is currently not well tested, and may sometimes not work correctly. Default is off.",
    },
    // Onefile options
    onefile_tempdir_spec: {
        name: "Onefile Temporary Directory Location",
        desc: "In onefile mode, use this as the folder to unpack to \nUsing a string like '{CACHE_DIR}/{COMPANY}/{PRODUCT}/{VERSION}' is a good static cache path, and it will not be deleted.",
        elements: {
            user_tempdir: {
                name: "User Temporary Directory",
                desc: "Use user's temporary directory",
            },
        },
    },
    onefile_cache_mode: {
        name: "Onefile Cache Mode",
        desc: "This mode is inferred from the specification you use.\nIf it contains runtime dependent paths, \"auto\" resolves to \"temporary\", which will ensure the unpacked binary is deleted after execution,\nwhile \"cached\" will not delete it, and reuse its contents for a faster startup time next time."
        ,
        elements: {
            auto: {
                name: "Auto",
                desc: "Infer from specification",
            },
            temporary: {
                name: "Temporary Mode",
                desc: "Delete unpacked binary after execution",
            },
            cached: {
                name: "Cached Mode",
                desc: "Keep unpacked binary after execution",
            },
        },
    },
    onefile_child_grace_time: {
        name: "Onefile Child Process Grace Time",
        desc: "When terminating the child process, e.g. due to CTRL-C or closing, etc., Python code gets a \"KeyboardInterrupt\" which it might handle for things like flushing data, etc.\nThis is the amount of time before killing the child hard. Units are milliseconds, default is 5000.",
    },
    onefile_no_compression: {
        name: "No Compression Onefile",
        desc: "When creating a onefile, disable compression of the payload. This is mainly for debugging purposes or to save time. Default is off",
    },
    onefile_as_archive: {
        name: "Onefile As Archive",
        desc: "When creating a onefile, use an archive format that can be unpacked with \"nuitka-onefile-unpack\" rather than a stream that only the onefile program itself can unpack.",
    },
    onefile_no_dll: {
        name: "No DLL in Onefile",
        desc: "When creating a onefile, on some platforms (currently Windows if not using a cached location) by default a DLL rather than an executable is used to store Python code.\nEnabling this option makes the unpacked files use an executable in that case too. Default is off.",

    },
    // Data files
    include_package_data: {
        name: "Include Package Data",
        desc: "Include data files of given package name. DLLs and extension modules are not data files and not included like this.\nFile name patterns can be given as well, see below.\nBy default, data files of packages are not included, but can be through package configuration.\nThis will only include non-DLLs, non-extension modules, i.e. actual data files. After a \":\", optionally a filename pattern can be given, to only select matching files.\nExamples: \"--include-package-data=package_name\" (all files)\n\"--include-package-data=package_name:*.txt\" (only specific types)\"\n--include-package-data=package_name:some_filename.dat\" (specific file).\nDefault is empty",
    },
    include_data_files: {
        name: "Include Data Files",
        desc: "Include data files by file name. There are many allowed forms.\nUse --include-data-files=/path/to/file/.txt=folder_name/some.txt', it will copy one file, if it's more than a dozen files, you'll get an error.\nUse '--include-data-files=/path/to/files/.txt=folder_name/' to put all matching files into that folder.\nFor recursive copying, there is a form with 3 values: '--include-data-files=/path/to/scan=folder_name=/**/*.txt', which keeps the directory structure of the files.\nDefault is empty.",
    },
    include_data_dir: {
        name: "Include Data Directory",
        desc: "Include data files from complete directory in the distribution. This is recursive.\nIf you want non-recursive inclusion, look at '--include-data-files' with patterns.\nFor example, '--include-data-dir=/path/some_dir=data/some_dir', for plain copy of an entire directory.\nAll non-code files will be included, and you can also use '--noinclude-data-files' options to remove them.\nDefault is empty",
    },
    noinclude_data_files: {
        name: "Don't Include Data Files",
        desc: "Do not include data files matching the given filename form. This is against target file name, not source path.\nSo to exclude a file pattern from 'package_name' package data, it should match as \"package_name/*.txt\",\nor for a whole directory just use \"package_name\". Default is empty",
    },
    include_onefile_external_data: {
        name: "Include Onefile External Data",
        desc: "Include the specified data file pattern in the external part of the onefile binary rather than the internal. This option only makes sense for '--onefile' compilations.\nThe file has to be specified to be included in some way first, then this option will reference the target path in the distribution. Default is empty.",
    },
    list_package_data: {
        name: "List Package Data",
        desc: "Output the data files found for the given package name. Default does not execute",
    },
    include_raw_dir: {
        name: "Include Raw Directory",
        desc: "Include raw directory in the distribution. This is recursive. Check '--include-data-dir' for the proper option to use. Default is empty.",
    },
    // Metadata support
    include_distribution_metadata: {
        name: "Include Distribution Metadata",
        desc: "Include metadata information for the given distribution name. Some packages check for the presence of metadata, version, entry points, etc., and without this option given, it only works if detected at compile time, which doesn't always happen.\nOf course, this only makes sense for packages included in the compilation. Default is empty.",
    },
    list_distribution_metadata: {
        name: "List Distribution Metadata",
        desc: "Output all distribution metadata and their details. Default does not execute.",
    },
    // DLL files
    noinclude_dlls: {
        name: "Don't Include DLLs",
        desc: "Do not include DLL files matching the given filename pattern. This is against target filename, not source path.\nSo, to ignore a DLL \"someDLL\" included in the \"package_name\" package, it should be matched as \"package_name/someDLL.*\".\nDefault is empty.",
    },
    list_package_dlls: {
        name: "List Package DLLs",
        desc: "Output the DLLs found for the given package name. Default does not execute.",
    },
    list_package_exe: {
        name: "List EXE Files for Given Package Name",
        desc: "Output the EXE files found for the given package name. Default does not execute.",
    },
    // Control the warnings to be given by Nuitka
    warn_implicit_exceptions: {
        name: "Warn Implicit Exceptions",
        desc: "Enable warnings for implicit exceptions detected at compile time.",
    },
    warn_unusual_code: {
        name: "Warn Unusual Code",
        desc: "Enable warnings for unusual code detected at compile time.",
    },
    assume_yes_for_downloads: {
        name: "Assume Allow Downloads",
        desc: "Allow Nuitka to download external code when needed. For example dependency walker, ccache, or even gcc on Windows. To disable, redirect input from nul device.\nFor example \"</dev/null\" or \"<NUL:\". Default prompts on download.",
    },
    nowarn_mnemonic: {
        name: "Don't Warn Mnemonic",
        desc: "Disable warnings for the given mnemonic. These are there to ensure you know about certain topics, and typically point to the Nuitka website. Mnemonic is the part at the end of the URL, without the HTML suffix. Can be given multiple times and accepts shell patterns. Default is empty.",
    },
    // Immediate execution after compilation
    run: {
        name: "Execute Immediately",
        desc: "Execute immediately the created binary (or import the compiled module). Default is off.",
    },
    debugger: {
        name: "Run in Debugger",
        desc: "Execute in a debugger (e.g. \"gdb\" or \"lldb\") to automatically get a stack trace.\nThe debugger name will be automatically chosen unless specified via the NUITKA_DEBUGGER_CHOICE environment variable.\nDefault is off.",
    },
    // Compilation choices
    user_package_configuration_files: {
        name: "User Package Configuration Files",
        desc: "User provided YAML file with package configuration. You can include DLL files, remove redundancy, add hidden dependencies. Consult the Nuitka package configuration manual\nfor the full format usage information. Can be given multiple times. Default is empty.",
    },
    full_compat: {
        name: "Full Compatibility with CPython",
        desc: "Ensure absolute compatibility with CPython. Do not allow even the slightest deviation from CPython behavior, e.g. not having better tracebacks or exception messages.\nThese behaviors are not actually incompatible, only different or worse. This is only for testing, and should not be used.",
    },
    file_reference_choice: {
        name: "File Reference Choice",
        desc: "Select what value to use for \"__file__\". The created binaries and modules \"at runtime\" (i.e. the default for standalone binaries and module mode) use their own location\nto deduct \"__file__\" value. Included packages pretend to be in directories below that location. This allows putting data files in that location.\nIf it's just for acceleration, it's better to use \"original\" value, where the source files location will be used. That is, use the source file locations. With \"frozen\", \na symbolic \"<frozen module_name>\" will be used. For compatibility reasons, the \"__file__\" value will always have a \".py\" suffix, no matter what its actual value is.",
        elements: {
            original: {
                name: "original",
                desc: "Use source file location",
            },
            frozen: {
                name: "frozen",
                desc: "Use \"<frozen module_name>\" symbol",
            },
        },
    },
    module_name_choice: {
        name: "Module Name Choice",
        desc: "Select what value to use for \"__name__\" and \"__package__\". Using \"runtime\" (the default for module mode) created modules use the package\nto infer the value of \"__package__\" for full compatibility. \"original\" values (the default for other modes) allow more static optimization, but are incompatible for those modules\nthat normally can be loaded into any package.",
        elements: {
            original: {
                name: "original",
                desc: "Allow more static optimization (default for other modes)",
            },
            runtime: {
                name: "runtime",
                desc: "Use package to infer \"__package__\" value for full compatibility (default for module mode)",
            },

        },
    },
    // Output choices
    output_filename: {
        name: "Output Filename",
        desc: "Specify the name of the executable. Extension modules and standalone mode don't use this, and will report an error if used. This may include existing path information.\nDefault is \"<program_name>.exe\" on the current platform",
        elements: {
            program_name: {
                name: "Program Name",
                desc: "<program_name>",
            },
        },
    },
    output_dir: {
        name: "Output Directory",
        desc: "Specify where to put the intermediate and final output files. The selected directory will contain build folders, distribution folders, binary files, etc. Default is the current directory.",
        elements: {
            current_directory: {
                name: "Current Directory",
                desc: "Current directory",
            },
        },
    },
    remove_output: {
        name: "Delete Build Folder",
        desc: "Remove the build folder after generating the exe or module file. Default is off.",
    },
    no_pyi_file: {
        name: "Don't Generate PYI File",
        desc: "Do not create a \".pyi\" file for extension modules created by Nuitka for detecting implicit imports. Default is off.",
    },
    no_pyi_stubs: {
        name: "Don't Create PYI Stubs",
        desc: "When creating '.pyi' files for extension modules created with Nuitka, do not use stubgen.\nThey expose your API, but stubgen can cause issues. Default is off",
    },
    // Deployment control
    deployment: {
        name: "Deployment Mode",
        desc: "Disable code that makes finding compatibility issues easier. For example, this will prevent execution with '-c' arguments, which might be used by code attempting to run the module\nand might cause the program to restart itself repeatedly. Once you deploy to end users, disable it, this is helpful in the development process to find typical issues.\nDefault is off.",
    },
    no_deployment_flag: {
        name: "Don't Use Deployment Flag",
        desc: "Keep deployment mode, but selectively disable features. Deployment mode errors will output these identifiers. Default is empty",
    },
    // Environment control
    force_runtime_environment_variable: {
        name: "Force Runtime Environment Variable",
        desc: "Force the environment variable to the given value. Default is empty.",
    },
    // Debug features
    debug: {
        name: "Debug Mode",
        desc: "Executing all self checks possible to find errors in Nuitka, do not use for production.\nDefault is off.",
    },
    no_debug_immortal_assumptions: {
        name: "Disable Debug Assumptions for Immortal Objects",
        desc: "Disable the checks usually done with \"--debug\". For Python 3.12 and above, do not check for assumptions on known immortal objects.\nSome C libraries violate them. If \"--debug\" is enabled, by default they are checked.",
    },
    no_debug_c_warnings: {
        name: "Disable C Debug Warnings",
        desc: "Disable the checks usually done with \"--debug\".\nC compilation may produce warnings, which for some packages is typically not a problem, especially for unused values.",
    },
    unstripped: {
        name: "Don't Remove Debug Information",
        desc: "Keep debug information in the generated object files to better interact with a debugger. Default is off.",
    },
    profile: {
        name: "Performance Profiling",
        desc: "Enable vmprof based performance profiling. Currently not usable. Default is off.",
    },
    trace_execution: {
        name: "Trace Execution",
        desc: "Trace execution and output it. Output the code lines before executing them. Default is off.",
    },
    xml: {
        name: "Output XML",
        desc: "Write the internal program structure and optimization results in XML form to the given filename.",
    },
    experimental: {
        name: "Experimental",
        desc: "Use features declared as 'experimental'. If there are no experimental features in the code, this may have no effect.\nUse secret option labels for each experimental feature (check source code).",
    },
    low_memory: {
        name: "Low Memory Mode",
        desc: "Try to use less memory by reducing the forking of C compilation tasks and using memory-saving options. For embedded machines. Use when you encounter out of memory problems. Default is off.",
    },
    create_environment_from_report: {
        name: "Create Environment from Report",
        desc: "Create a new virtual environment in a non-existing path based on the given report file, e.g. '--report=compilation-report.xml'. Default does not execute.",
    },
    generate_c_only: {
        name: "Generate C Source Code Only",
        desc: "Generate only C source code, do not compile to binary or module. This is for debugging and code coverage analysis and will not waste CPU. Default is off.\nDon't think you can use this directly.",
    },
    // Nuitka Development Features
    devel_missing_code_helpers: {
        name: "Develop-Missing Code Helpers",
        desc: "Report warnings about code helpers attempted but not existing.\nThis helps identify optimization opportunities through better type knowledge. Default is False.",
    },
    devel_missing_trust: {
        name: "Develop-Report Missing Trust",
        desc: "Report warnings about imports that could be trusted but currently are not. This is to identify opportunities to improve the handling of hard modules,\nwhich sometimes can allow for more static optimization. Default is False.",
    },
    devel_recompile_c_only: {
        name: "Develop-Only Recompile C Source Code",
        desc: "This is not incremental compilation, only for Nuitka development. Recompile already existing files to C. Allows compiling edited C files for quick debugging of generated source code.\nFor example, to check if the code passes, output values, etc. Default is off. The files it looks at depend on the Python source code to compile.",
    },
    devel_internal_graph: {
        name: "Develop-Internal Graph",
        desc: "Create internal graph of the optimization process, don't use for whole programs, only for small test cases. Default is off.",
    },
    // Backend C compiler choice
    clang: {
        name: "Force Use Clang",
        desc: "Force the use of clang. On Windows, this requires a working Visual Studio version to support it. Default is off.",
    },
    mingw64: {
        name: "Force Use MinGW64",
        desc: "Force the use of MinGW64 on Windows. Default is off, unless MSYS2 and MinGW Python are used.",
    },
    msvc: {
        name: "Use MSVC Version",
        desc: "Force the use of specific MSVC version on Windows. Allowed values are \"14.3\" (MSVC 2022) and other MSVC version numbers.\nUse \"list\" to get a list of installed compilers, or use \"latest\". Default is to use the latest MSVC if available. Otherwise use MinGW64.",
        elements: {
            latest: {
                name: "Latest Version",
                desc: "Use the latest MSVC version",
            },
        },
    },
    jobs: {
        name: "Parallel Compilation Tasks",
        desc: "Specify the number of parallel C compiler jobs to use. Negative values indicate the number of CPUs in the system minus that value.\nBy default, all CPUs of the system are used unless low memory mode is enabled; in low memory mode, the default is 1.",
    },
    lto: {
        name: "Link Time Optimization",
        desc: "Use link time optimization (MSVC, gcc, clang). Allowed values are \"yes\", \"no\", and \"auto\" (known to work). Default is \"auto\".",
        elements: {
            yes: {
                name: "Yes",
                desc: "Use link time optimization",
            },
            no: {
                name: "No",
                desc: "Don't use link time optimization",
            },
            auto: {
                name: "Auto",
                desc: "Automatically use link time optimization",
            },
        },
    },
    static_libpython: {
        name: "Use Python's Static Library",
        desc: "Use Python's static library. Allowed values are \"yes\", \"no\", and \"auto\" (known to work). Default is \"auto\".",
        elements: {
            yes: {
                name: "Yes",
                desc: "Use Python's static library",
            },
            no: {
                name: "No",
                desc: "Don't use Python's static library",
            },
            auto: {
                name: "Auto",
                desc: "Automatically use Python's static library",
            },
        },
    },
    cf_protection: {
        name: "GCC Compiler CF Protection Mode",
        desc: "This option is specific to gcc. Select \"cf-protection\" mode for the gcc compiler. The default value \"auto\" is to use gcc's default, but you can override it,\ne.g. with the value \"none\" to disable it. See gcc documentation for \"-fcf-protection\" for details",
        elements: {
            auto: {
                name: "Auto",
                desc: "Use gcc's default value",
            },
        },
    },
    // Cache Control
    disable_cache: {
        name: "Disable Cache",
        desc: "Disable selected caches, set \"all\" for all caches. Currently allowed values are: \"all\", \"ccache\", \"bytecode\",\n\"compression\", \"dll-dependencies\".\nCan be given multiple times or values separated by comma. Default is none.",
        elements: {
            all: {
                name: "All",
                desc: "Disable all caches",
            },
            ccache: {
                name: "ccache Cache",
                desc: "Don't attempt to use ccache (gcc, clang, etc.) or clcache (MSVC, clangcl).",
            },
            bytecode: {
                name: "Bytecode Cache",
                desc: "Don't reuse the results of modules dependency analysis, especially modules from standard library, which are included as bytecode.",
            },
            compression: {
                name: "Compression Cache",
                desc: "Disable compression cache",
            },
            dll_dependencies: {
                name: "DLL Dependencies Cache",
                desc: "Disable dependency analyzer cache. This will cause much longer times to create distribution folders, but can be used if you suspect the cache is causing errors.",
            },
        },

    },
    clean_cache: {
        name: "Clean Cache",
        desc: "Clean the given cache before execution, set \"all\" for all caches. Currently allowed values are:\n\"all\", \"ccache\", \"bytecode\", \"compression\", \"dll-dependencies\".\nCan be given multiple times or values separated by comma. Default is none.",
        elements: {
            all: {
                name: "All",
                desc: "Clean all caches",
            },
            ccache: {
                name: "ccache Cache",
                desc: "Clean ccache cache",
            },
            bytecode: {
                name: "Bytecode Cache",
                desc: "Clean bytecode cache",
            },
            compression: {
                name: "Compression Cache",
                desc: "Clean compression cache",
            },
            dll_dependencies: {
                name: "DLL Dependencies Cache",
                desc: "Clean DLL dependencies cache",
            },
        },
    },
    disable_ccache: {
        name: "Disable ccache",
        desc: "Don't attempt to use ccache (gcc, clang, etc.) or clcache (MSVC, clangcl). Same effect as --disable-cache=ccache.",
    },
    disable_dll_dependency_cache: {
        name: "Disable DLL Dependency Cache",
        desc: "Disable dependency analyzer cache. This will cause much longer times to create distribution folders, but can be used if you suspect the cache is causing errors.\nSame effect as --disable-cache=dll-dependencies.",
    },
    force_dll_dependency_cache_update: {
        name: "Force Update DLL Dependency Cache",
        desc: "Used to update the dependency analyzer cache. This will cause much longer times to create distribution folders, but can be used if you suspect the cache is causing errors or the cache needs to be updated.",
    },
    // PGO compilation choices
    pgo_c: {
        name: "Profile Guided Optimization",
        desc: "Enable C level profile guided optimization (PGO) by first doing an analysis, and then feeding back the result into the C compilation.\nNote: This is experimental and not yet working with Nuitka's standalone mode. Default is off.",
    },
    pgo_args: {
        name: "Profile Guided Optimization Arguments",
        desc: "Arguments to pass when doing profile guided optimization (PGO). These arguments are passed to the specially built executable during PGO analysis runs. Default is empty.",
    },
    pgo_executable: {
        name: "Profile Guided Optimization Executable",
        desc: "Command to execute when collecting profile information. Only use this if you need to launch it through a prepared script. Default is to use the created program.",
    },
    // Tracing features
    report: {
        name: "Output Report",
        desc: "Report details of modules, data files, compilation, plugins, etc. in an XML output file. This is also very useful for reporting issues.\nFor example, these reports can be used to easily rebuild environments with '--create-environment-from-report', but they contain a lot of information. Default is off.",
    },
    report_diffable: {
        name: "Report Differences",
        desc: "Report data in a way that is comparable, i.e. no time or memory usage values that change with the runs. Default is off.",
    },
    report_user_provided: {
        name: "Report User Provided Value",
        desc: "Report data from yourself. This can be given multiple times, and can be any form of \"key=value\", where key should be an identifier,\ne.g. use \"--report-user-provided=pipenv-lock-hash=64a5e4\" to track some input value. Default is empty.",
    },
    report_template: {
        name: "Report Template",
        desc: "Report through a template. Needs template and output filename given \"template.rst.j2:output.rst\". For built-in templates, check the user manual.\nCan be given multiple times. Default is empty.",
    },
    quiet: {
        name: "Quiet Mode",
        desc: "Disable all information output, but show warnings. Default is off.",
    },
    show_scons: {
        name: "Show Scons",
        desc: "Run the C build backend Scons with verbose information, showing the commands executed, and detailed information about the detected compiler. Default is off.",
    },
    no_progressbar: {
        name: "Don't Show Progress Bar",
        desc: "Disable progress bar. Default is off.",
    },
    show_progress: {
        name: "Show Progress",
        desc: "Deprecated: Provide progress information and statistics. Disables normal progress bar. Default is off.",
    },
    show_memory: {
        name: "Show Memory",
        desc: "Show memory usage. Default is off.",
    },
    show_modules: {
        name: "Show Modules",
        desc: "Deprecated: You should use '--report' file instead. Provide information about included modules and DLLs. Default is off.",
    },
    show_modules_output: {
        name: "Show Modules Output Path",
        desc: "Filename to output '--show-modules' to, should be a filename. Default is standard output.",
    },
    verbose: {
        name: "Verbose Mode",
        desc: "Output details of actions taken, especially in the optimization process, it may produce a lot of output. Default is off.",
    },
    verbose_output: {
        name: "Verbose Mode Output Path",
        desc: "Filename to output '--verbose' to, should be a filename. Default is standard output.",
    },
    // General OS controls
    force_stdout_spec: {
        name: "Force Standard Output Specification",
        desc: "Force program's standard output to go to this location. Useful for programs with disabled console and programs using the Windows Service plugin of Nuitka commercial. Default is not active,\ne.g. use '{PROGRAM_BASE}.out.txt', which is a file near the program, see user manual for a complete list of available values.",
    },
    force_stderr_spec: {
        name: "Force Standard Error Specification",
        desc: "Force program's standard error to go to this location. Useful for programs with disabled console and programs using the Windows Service plugin of Nuitka commercial. Default is not active,\ne.g. use '{PROGRAM_BASE}.err.txt', which is a file near the program, see user manual for a complete list of available values.",
    },
    // Windows specific controls
    windows_console_mode: {
        name: "Windows Console Mode",
        desc: "Select console mode to use, default mode is force",
        elements: {
            force: {
                name: "Force Mode",
                desc: "This will create one if there is no console window available, i.e. if a program is launched from a console window.",
            },
            disable: {
                name: "Disable Mode",
                desc: "Won't create or use a console.",
            },
            attach: {
                name: "Attach Mode",
                desc: "Use an existing console for output",
            },
            hide: {
                name: "Hide Mode",
                desc: "A newly generated console will be hidden, while an already existing console will behave like 'force mode'",
            },
        },
    },
    windows_icon_from_ico: {
        name: "Windows Icon (ICO File)",
        desc: "Add executable icon. Can be given multiple times for different resolutions or files containing multiple icons. When selecting a file with multiple icons,\nyou may also specify a specific icon to use and ignore all others using the #<n> suffix, where n is an integer index starting from 1",
    },
    windows_icon_from_exe: {
        name: "Windows Icon (EXE File)",
        desc: "Copy icon from this existing executable (Windows only).",
    },
    onefile_windows_splash_screen_image: {
        name: "Onefile Windows Splash Screen Image",
        desc: "When compiled as onefile for Windows, display this image while the application is loading. Default is off.",
    },
    windows_uac_admin: {
        name: "Request Windows User Account Control (UAC) Administrator Rights",
        desc: "Request Windows User Account Control (UAC) to grant administrator rights when executing. (Windows only). Default is off.",
    },
    windows_uac_uiaccess: {
        name: "Request Windows User Account Control (UAC) UI Access Rights",
        desc: "Request Windows User Account Control (UAC) privileges for UI access, for running in certain folders and remote desktop access. (Windows only). Default is off.",
    },
    // macOS specific controls
    macos_create_app_bundle: {
        name: "Create MacOS Application Bundle",
        desc: "When compiling for macOS, create a bundle rather than a plain binary application. This is the only way to disable console, get high DPI graphics, etc., and will enable standalone mode. Default is off.",
    },
    macos_target_arch: {
        name: "MacOS Target Architecture",
        desc: "What architecture this program should run on. The default value and limitation is what running Python allows. Default is \"native\", which is the architecture Python runs with.",
        elements: {
            native: {
                name: "Native Architecture",
                desc: "Default value, which is the architecture Python runs with",
            },
        },
    },
    macos_app_icon: {
        name: "MacOS Application Icon Path",
        desc: "Add icon for the application bundle. Can be given only once. Default is the Python icon.",
        elements: {
            python_icon: {
                name: "Python Icon",
                desc: "Python icon if available, this option is the default",
            },
        },
    },
    macos_signed_app_name: {
        name: "MacOS Signed Application Name",
        desc: "Application name to use for macOS signing. For best results, follow the naming format \"com.YourCompany.AppName\",\nas these names must be globally unique, and protected API access might be granted.",
    },
    macos_app_name: {
        name: "macOS Application Name",
        desc: "Product name to use in the macOS bundle information. Default is the base filename of the binary.",
    },
    macos_app_mode: {
        name: "macOS Application Mode",
        desc: "Application mode for the application bundle.",
        elements: {
            gui: {
                name: "GUI Mode",
                desc: "The default value \"gui\" is a good choice when you launch a window and want to appear in the Docker.",
            },
            background: {
                name: "Background Mode",
                desc: "If there are no windows, the application will be a \"background\" application.",
            },
            ui_element: {
                name: "UI Element Mode",
                desc: "For UI elements displayed later, \"ui-element\" is something in between.\nThe application won't appear in the dock, but when it opens a window later, it will get full access to the desktop.",
            },
        },
    },
    macos_sign_identity: {
        name: "MacOS Signing Identity",
        desc: "When signing on macOS, by default a temporary identity is used, but with this option, you can specify another identity to use.\nNowadays, signing code on macOS is mandatory and cannot be disabled. Use \"auto\" to detect your uniquely installed identity.\nIf not given, defaults to \"ad-hoc\".",
        elements: {
            auto: {
                name: "Auto",
                desc: "Detect your uniquely installed identity",
            },
            ad_hoc: {
                name: "Ad-Hoc Signing",
                desc: "Ad-hoc signing, default value",
            },
        },
    },
    macos_sign_notarization: {
        name: "MacOS Signing Notarization",
        desc: "When signing for notarization, use the proper TeamID identity from Apple, using required runtime signing options so it can be accepted.",
    },
    macos_app_version: {
        name: "macOS Application Version",
        desc: "Product version to use in the macOS bundle information. If not given, defaults to \"1.0\".",
        elements: {
            default_version: {
                name: "1.0",
                desc: "Default value",
            },
        },
    },
    macos_app_protected_resource: {
        name: "Request macOS Protected Resource",
        desc: "Request permission to access a macOS protected resource, e.g. \"NSMicrophoneUsageDescription:Microphone access for recording audio.\" requests access to the microphone,\nand provides an informational text to the user explaining why this is needed. Before the colon is an OS identifier for an access right, followed by the information text.\nValid values can be found at https://developer.apple.com/documentation/bundleresources/information_property_list/protected_resources,\nthis option can be specified multiple times. Default is empty.",
    },
    // Linux specific controls
    linux_icon: {
        name: "Linux Icon",
        desc: "Add an icon for the onefile binary executable. Can be given only once. Default is Python icon if available.",
    },
    // Binary Version Information
    company_name: {
        name: "Company Name",
        desc: "Company name to use in version information. Default is none.",
    },
    product_name: {
        name: "Product Name",
        desc: "Product name to use in version information. Default is base filename of the binary.",
    },
    file_version: {
        name: "File Version",
        desc: "File version to use in version information. Must be a sequence of at most 4 numbers, e.g. 1.0 or 1.0.0.0, no more numbers or strings allowed. Default is none.",
    },
    product_version: {
        name: "Product Version",
        desc: "Product version to use in version information. Must be a sequence of at most 4 numbers, e.g. 1.0 or 1.0.0.0, no more numbers or strings allowed. Default is none.",
    },
    file_description: {
        name: "File Description",
        desc: "File description to use in version information. Currently only on Windows. Default is filename of the binary.",
    },
    copyright: {
        name: "Copyright Text",
        desc: "Copyright information to use in version information. Currently only on Windows/macOS. Default is none shown.",
    },
    trademarks: {
        name: "Trademark Text",
        desc: "Trademark information to use in version information. Currently only on Windows/macOS. Default is none shown.",
    },
    // Plugin control
    enable_plugins: {
        name: "Enable Plugins",
        desc: "Enable plugins. Must be plugin names. Default is empty",
        elements: {
            anti_bloat: {
                name: "Anti-Bloat",
                desc: "Remove stupid imports patch from widely used library module sources.",
            },
            data_files: {
                name: "Include Data Files",
                desc: "Include data files specified by package configuration files.",
            },
            delvewheel: {
                name: "delvewheel Support",
                desc: "Support packages using delvewheel in standalone mode",
            },
            dill_compat: {
                name: "dill Package Compatibility Support",
                desc: "Support compatibility for the 'dill' package",
            },
            dll_files: {
                name: "Include DLL Files",
                desc: "Include DLL configuration files according to package configuration files",
            },
            enum_compat: {
                name: "enum Compatible",
                desc: "Support Python2 and enum package",
            },
            eventlet: {
                name: "eventlet Support",
                desc: "Support 'eventlet' dependencies and its monkey patching needs of the 'dns' package.",
            },
            gevent: {
                name: "gevent Support",
                desc: "Support gevent package",
            },
            gi: {
                name: "GI Support",
                desc: "Support GI package typelib dependencies",
            },
            glfw: {
                name: "Support glfw",
                desc: "Support using 'OpenGL' (PyOpenGL) and 'glfw' packages in standalone mode",
            },
            implicit_imports: {
                name: "Implicit Imports",
                desc: "Provide implicit imports according to package configuration files.",
            },
            kivy: {
                name: "kivy Support",
                desc: "Support 'kivy' package.",
            },
            matplotlib: {
                name: "matplotlib Support",
                desc: "Support 'matplotlib' module.",
            },
            multiprocessing: {
                name: "multiprocessing Support",
                desc: "Support Python's 'multiprocessing' module.",
            },
            no_qt: {
                name: "Disable Qt",
                desc: "Disable all Qt bindings in standalone mode.",
            },
            options_nanny: {
                name: "Options Notification",
                desc: "Notify the user of potential issues according to package configuration files.",
            },
            pbr_compat: {
                name: "pbr Compatible Support",
                desc: "Support using the 'pbr' package in standalone mode.",
            },
            pkg_resources: {
                name: "pkg resources Support",
                desc: "Resolve pkg resources methods",
            },
            pmw_freezer: {
                name: "pmw Support",
                desc: "Support 'Pmw' package",
            },
            pylint_warnings: {
                name: "pylint Warnings",
                desc: "Support PyLint / PyDev code markers.",
            },
            pyqt5: {
                name: "PyQt5 Support",
                desc: "Support 'PyQt5' package.",
            },
            pyqt6: {
                name: "PyQt6 Support",
                desc: "Support 'PyQt6' package",
            },
            pyside2: {
                name: "PySide2 Support",
                desc: "Support 'PySide2' package",
            },
            pyside6: {
                name: "PySide6 Support",
                desc: "Support 'PySide6' package",
            },
            pywebview: {
                name: "Support PyWebview",
                desc: "Support 'webview' package (pywebview on PyPI).",
            },
            tk_inter: {
                name: "Tkinter Support",
                desc: "Support Python's Tk module.",
            },
            transformers: {
                name: "transformers Implicit Imports",
                desc: "Provide implicit imports for transformers package.",
            },
            upx: {
                name: "Automatically Use UPX",
                desc: "Automatically compress created binaries with UPX.",
            },
        },
    },
    disable_plugins: {
        name: "Disable Plugins",
        desc: "Disable plugins. Must be plugin names. Use '--plugin-list' to query the full list and exit. Most of the time disabling standard plugins is not a good idea. Default is empty.",
        elements: {
            anti_bloat: {
                name: "Anti-Bloat",
                desc: "Remove stupid imports patch from widely used library module sources.",
            },
            data_files: {
                name: "Include Data Files",
                desc: "Include data files specified by package configuration files.",
            },
            delvewheel: {
                name: "delvewheel Support",
                desc: "Support packages using delvewheel in standalone mode",
            },
            dill_compat: {
                name: "dill Package Compatibility Support",
                desc: "Support compatibility for the 'dill' package",
            },
            dll_files: {
                name: "Include DLL Files",
                desc: "Include DLL configuration files according to package configuration files",
            },
            enum_compat: {
                name: "enum Compatible",
                desc: "Support Python2 and enum package",
            },
            eventlet: {
                name: "eventlet Support",
                desc: "Support 'eventlet' dependencies and its monkey patching needs of the 'dns' package.",
            },
            gevent: {
                name: "gevent Support",
                desc: "Support gevent package",
            },
            gi: {
                name: "GI Support",
                desc: "Support GI package typelib dependencies",
            },
            glfw: {
                name: "Support glfw",
                desc: "Support using 'OpenGL' (PyOpenGL) and 'glfw' packages in standalone mode",
            },
            implicit_imports: {
                name: "Implicit Imports",
                desc: "Provide implicit imports according to package configuration files.",
            },
            kivy: {
                name: "kivy Support",
                desc: "Support 'kivy' package.",
            },
            matplotlib: {
                name: "matplotlib Support",
                desc: "Support 'matplotlib' module.",
            },
            multiprocessing: {
                name: "multiprocessing Support",
                desc: "Support Python's 'multiprocessing' module.",
            },
            no_qt: {
                name: "Disable Qt",
                desc: "Disable all Qt bindings in standalone mode.",
            },
            options_nanny: {
                name: "Options Notification",
                desc: "Notify the user of potential issues according to package configuration files.",
            },
            pbr_compat: {
                name: "pbr Compatible Support",
                desc: "Support using the 'pbr' package in standalone mode.",
            },
            pkg_resources: {
                name: "pkg resources Support",
                desc: "Resolve pkg resources methods",
            },
            pmw_freezer: {
                name: "pmw Support",
                desc: "Support 'Pmw' package",
            },
            pylint_warnings: {
                name: "pylint Warnings",
                desc: "Support PyLint / PyDev code markers.",
            },
            pyqt5: {
                name: "PyQt5 Support",
                desc: "Support 'PyQt5' package.",
            },
            pyqt6: {
                name: "PyQt6 Support",
                desc: "Support 'PyQt6' package",
            },
            pyside2: {
                name: "PySide2 Support",
                desc: "Support 'PySide2' package",
            },
            pyside6: {
                name: "PySide6 Support",
                desc: "Support 'PySide6' package",
            },
            pywebview: {
                name: "Support PyWebview",
                desc: "Support 'webview' package (pywebview on PyPI).",
            },
            tk_inter: {
                name: "Tkinter Support",
                desc: "Support Python's Tk module.",
            },
            transformers: {
                name: "transformers Implicit Imports",
                desc: "Provide implicit imports for transformers package.",
            },
            upx: {
                name: "Automatically Use UPX",
                desc: "Automatically compress created binaries with UPX.",
            },
        },
    },
    plugin_list: {
        name: "Plugin List",
        desc: "Show list of all available plugins and exit. Default is off.",
    },
    user_plugin: {
        name: "User Plugin",
        desc: "Filename of user plugin. Can be given multiple times. Default is empty.",
    },
    module_parameter: {
        name: "Module Parameter",
        desc: "Provide a module parameter. Some packages require you to provide additional decisions. Current format is --module-parameter=module.name-option-name=value. Default is empty.",
    },
    show_source_changes: {
        name: "Show Source Code Changes",
        desc: "Show source code changes to the original Python file contents before compilation. Primarily for use when developing plugins and configuring Nuitka packages. For example, use '-show-source-changes=numpy.**'\nto see all changes in a given namespace, or '*' to see all possible massive amounts of changes. Default is empty",
    },
    // Cross compilation
    target: {
        name: "Target",
        desc: "Cross compilation target. This feature is highly experimental and in development, not yet available. We are working on '--target=wasi', other targets are not yet supported.",
    },
    // Plugin options of 'anti-bloat'
    show_anti_bloat_changes: {
        name: "Show Anti-Bloat Changes",
        desc: "Annotate the changes made by the plugin.",
    },
    noinclude_setuptools_mode: {
        name: "Don't Include setuptools Mode",
        desc: "Treatment when encountering \"setuptools\" or \"setuptools_scm\" imports. This package can have many dependencies and become large, should be avoided if possible.",
    },
    noinclude_pytest_mode: {
        name: "Don't Include pytest Mode",
        desc: "Treatment when encountering \"pytest\" or \"nose\" imports. This package can have many dependencies and become large, should be avoided if possible.",
    },
    noinclude_unittest_mode: {
        name: "Don't Include Unittest Mode",
        desc: "Treatment when encountering \"unittest\" imports. This package can have many dependencies and become large, should be avoided if possible.",
    },
    noinclude_pydoc_mode: {
        name: "Don't Include pydoc Mode",
        desc: "Treatment when encountering \"pydoc\" imports. Using this package indicates code that is useless in deployment, should be avoided if possible.",
    },
    noinclude_IPython_mode: {
        name: "Don't Include IPython Mode",
        desc: "Treatment when encountering \"IPython\" imports. This package can have many dependencies and become large, should be avoided if possible.",
    },
    noinclude_dask_mode: {
        name: "Don't Include dask Mode",
        desc: "Treatment when encountering \"dask\" imports. This package can have many dependencies and become large, should be avoided if possible.",
    },
    noinclude_numba_mode: {
        name: "Don't Include numba Mode",
        desc: "Treatment when encountering \"numba\" imports. This package can have many dependencies and become large, currently doesn't work properly in standalone mode.\nThis package can have many dependencies and become large, should be avoided if possible.",
    },
    noinclude_default_mode: {
        name: "Don't Include Default Mode",
        desc: "This effectively provides a default \"warning\" value for the options above, and can be used to turn on all of the above options.",
    },
    noinclude_custom_mode: {
        name: "Don't Include Custom Mode",
        desc: "Treatment when encountering specific imports. Format is module name, which can and should be a top-level package, followed by an option, \"error\", \"warning\", \"nofollow\",\ne.g. PyQt5:error.",
    },
    // Plugin options of 'playwright'
    playwright_include_browser: {
        name: "Playwright Include Browser",
        desc: "Playwright browser to include. Can be specified multiple times. Use \"all\" to include all installed browsers.",
        elements: {
            all: {
                name: "Include All",
                desc: "Include all installed browsers",
            },
        },
    },
    // Plugin options of 'spacy'
    spacy_language_model: {
        name: "spaCy Language Model",
        desc: "Spacy language model to use. Can be specified multiple times. Use 'all' to include all downloaded models.",
        elements: {
            all: {
                name: "Include All",
                desc: "Include all downloaded models",
            },
        },
    },
};