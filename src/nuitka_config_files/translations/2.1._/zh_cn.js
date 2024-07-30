// noinspection JSUnusedGlobalSymbols
export default {
    //title类请在此处翻译
    title: {
        basic: "基本设置",
        control_the_inclusion_of_modules_and_packages_in_result: "控制结果中包含的模块和包",
        control_the_following_into_imported_modules: "控制导入模块",
        onefile_options: "单文件选项",
        data_files: "数据文件",
        metadata_support: "元数据支持",
        DLL_files: "DLL(动态链接库)文件",
        Linux_specific_controls: "Linux 特定控制",
        control_the_warnings_to_be_given_by_Nuitka: "控制 Nuitka 发出的警告",
        immediate_execution_after_compilation: "编译后立刻执行",
        compilation_choices: "编译选项",
        output_choices: "输出选项",
        deployment_control: "部署控制",
        debug_features: "调试功能",
        backend_c_compiler_choice: "后端C编译器选择",
        cache_control: "缓存控制",
        PGO_compilation_choices: "PGO(配置文件引导优化)编译选项",
        tracing_features: "跟踪功能",
    },
    // basic
    module: {
        name: "模块模式",
        desc: "创建一个可导入的二进制拓展模块可执行文件，而不是程序。默认关闭。",
    },
    standalone: {
        name: "独立模式",
        desc: "启用独立模式进行输出。这允许你将二进制文件传输到其他机器, 而无需使用已有的Python环境。这也意味着它将变得很大\n它将启用这些选项: \"--follow-imports\" 和 \"--python-flag=no_site\"。",
    },
    onefile: {
        name: "单文件模式",
        desc: "在独立模式的基础上, 启用单文件模式。这意味着不是一个文件夹, 而是创建和使用一个压缩的可执行文件。",
    },
    python_flag: {
        name: "Python标志",
        desc: "要使用的Python标志.默认是你用来运行Nuitka的内容, 这强制使用特定模式.这些也是标准Python可执行文件中存在的选项.",
        elements: {
            s: {
                name: "不包含site-packages目录",
                desc: "别称no_site,不应该包含python的site-packages目录,也就是不包含任何python环境的第三方库",
            },
            static_hashes: {
                name: "静态哈希",
                desc: "不使用哈希随机化",
            },
            no_warnings: {
                name: "关闭警告",
                desc: "不给出Python运行时的警告",
            },
            o: {
                name: "无错误检查",
                desc: "不包含任何调试/错误检查(assert)语句",
            },
            no_docstrings: {
                name: "无文档字符串",
                desc: "不包含文档字符串",
            },
            u: {
                name: "不使用缓冲",
                desc: "别名unbuffered，不使用缓冲",
            },
            isolated: {
                name: "不加载外部代码",
                desc: "不加载外部代码",
            },
            m: {
                name: " 包模式",
                desc: "包模式, 编译为 \"package.__main__\"",
            },
        },
    },
    python_debug: {
        name: "Python调试",
        desc: "是否使用调试版本。默认使用你运行Nuitka的版本，其很可能是一个非调试版本。仅用于调试和测试目的。",
    },
    python_for_scons: {
        name: "Scons的Python路径",
        desc: "当使用Python 3.4编译时，提供一个Python二进制文件路径以供Scons使用。否则，Nuitka可以使用你运行Nuitka的Python，\n" + "或者自行找到Nuitka安装，例如从Windows注册表中。在Windows上，需要Python 3.5或者更高版本，在非Windows上，Python 2.6或Python 2.7也可以。",
    },
    main: {
        name: "主程序路径",
        desc: "如果只指定一次(如--main=\"1.py\")，这将取代位置参数，也就是要编译的文件名(入口)。\n" + "如果指定多次(如--main=\"1.py\" --main=\"2.py\"), 它将启用\"multidist\",它允许您创建依赖于文件名或调用名的二进制文件。\n" + "(允许多个主程序使用同一套编译参数)\n",
    },
    // Control the inclusion of modules and packages in result(控制结果中包含的模块和包)
    include_package: {
        name: "包含包",
        desc: "包含整个包。以Python命名空间的形式给出，例如’some_package.sub_package’，\n" + "然后Nuitka会找到它并包含它以及在其创建的二进制或扩展模块的磁盘位置下面找到的所有模块，并使其可以被代码导入。\n" + "为了避免不需要的子包，例如测试，你可以这样做’–nofollow-import-to=*.tests’。默认为空。\n" + "(注: 这里的包含是指将包含的包或模块编译到二进制文件中并可以被代码导入, 而不是将其作为依赖项)\n",
    },
    include_module: {
        name: "包含模块",
        desc: "包含单个模块。以Python命名控件的形式给出，例如'some_package.some_module'，然后Nuitka会找到它并将其包含在其创建的二进制文件或扩展模块中，\n" + "并使其可以被代码导入。默认为空",
    },
    include_plugin_directory: {
        name: "包含插件目录",
        desc: "同时包括该目录中找到的代码，将它们视为各自的主文件。这将覆盖其他包含(include)选项。\n" + "你应该更倾向于使用其他包含选项。它们是通过名称而不是文件名来查找的，这些选项可以通过在'sys.path'中找到东西\n" + "这个选项只适用于非常特殊的用例。可以多次给出。默认为空。",
    },
    include_plugin_files: {
        name: "包含插件文件",
        desc: "包含匹配PATTERN(模式)的文件。覆盖所有其他的跟随选项。可以多次给出。默认为空",
    },
    prefer_source_code: {
        name: "首选源代码",
        desc: "对于已经编译的拓展模块，如果存在源代码和拓展模块，通常会使用拓展模块，但为了获得最佳的性能，最好从可用的源代码编译模块。\n" + "如果不需要，可以使用--nop-prefer-source-code来禁用有关于此的警告。默认关闭。",
    },
    // Control the following into imported modules(控制导入模块)
    follow_imports: {
        name: "导入已导入的模块",
        desc: "导入所有被导入的模块。在独立模式下默认开启，否则关闭",
    },
    follow_import_to: {
        name: "跟随导入到模块",
        desc: "如果使用了该模块，则跟随到该模块，或者如果是一个包，则跟随到整个包。可以多次给出。默认为空。",
    },
    nofollow_import_to: {
        name: "不跟随导入模块",
        desc: "即使使用了该模块名也不导入该模块，或者如果是一个包名，在任何情况下都不要导入整个包，这将覆盖所有其他的选项，可以多次给出，默认为空。",
    },
    nofollow_imports: {
        name: "不进行所有导入",
        desc: "不递归深入(导入)到任何导入的模块，这将覆盖所有其他包含选项，并且不能用于独立模式。默认关闭。",
    },
    follow_stdlib: {
        name: "跟随导入标准库",
        desc: "也深入到从标准库导入的模块，这将大大增加编译时间，而且目前也没有很好的测试，有时候也可能不会工作。默认关闭。",
    },
    // Onefile options(单文件选项)
    onefile_tempdir_spec: {
        name: "单文件临时目录位置",
        desc: "在单文件模式下，使用此作为解压的文件夹 \n" +
            "使用例如像'{CACHE_DIR}/{COMPANY}/{PRODUCT}/{VERSION}'这样的字符串是一个很好的静态缓存路径，并且它将不会被删除。",
        elements: {
            user_tempdir: {
                name: "用户临时目录",
                desc: "使用用户的临时目录",
            },
        },
    },
    onefile_child_grace_time: {
        name: "单文件子进程宽限时间",
        desc: "当停止子进程时，例如由于CTRL-C或关闭等，Python代码会得到一个\"KeyboardInterrupt\"，它可能会处理例如刷新数据等事件。\n" +
            "这是以硬方式杀死子进程之前的时间量。单位是毫秒，默认为5000。",
        elements: {
            name: "5000",
            desc: "默认值，5000ms",
        },
    },
    onefile_no_compression: {
        name: "无压缩单文件",
        desc: "在创建单文件时，禁用有效载荷的压缩。这主要是出于调试目的，或者为了节省时间。默认关闭",
    },
    onefile_as_archive: {
        name: "作为存档的单文件",
        desc: "在创建onefile的时候，使用一个可以被\"nuitka-onefile-unpack\"解压的存档格式，而不是一个只有onefile程序本身才能解压的流。",
    },
    // Data files(数据文件)
    include_package_data: {
        name: "包含包数据",
        desc: "包括给定包的数据文件。DLL和扩展模块不是数据文件，也不会像这样被包含。可以使用下面指示的文件名模式。\n" +
            "默认情况下，不包括包的数据文件，但包配置可以执行此操作。这只会包括非DLL和非拓展模块，即实际存在的数据文件。\n" +
            "在\":\"后面，还可以给出文件名模式，只选择匹配的文件。例子: \"--include-package-data=package_name\" (所有文件)\n" +
            "--include-package-data=package_name=*.txt\" (只有某种类型) \"--include-package-data=package_name=some_filename.dat (具体文件)\n" +
            "默认为空。",
    },
    include_data_files: {
        name: "包含数据文件",
        desc: "通过分配的文件名包含数据文件。有很多允许的形式。\n" +
            "使用–include-data-files=/path/to/file/.txt=folder_name/some.txt’，它将复制一个文件，如果是十多个文件，将会报错。\n" +
            "使用’–include-data-files=/path/to/files/.txt=folder_name/‘将把所有匹配的文件放入该文件夹。\n" +
            "对于递归复制，有一种带有三个值的形式:’–include-data-files=/path/to/scan=folder_name=**/*.txt’，这将保留目录的文件结构。\n" +
            "默认为空。",
    },
    include_data_dir: {
        name: "包含数据目录",
        desc: "将整个目录的数据文件包含在分发中。这是递归的。\n" +
            "如果你想要非递归包含，请查看'--include-data-files'与模式。\n" +
            "例如,’–include-data-dir=/path/some_dir=data/some_dir’，用于整个目录的普通复制。\n" +
            "所有的非代码文件都会被包含，并且你也可以使用'--noinclude-data-files'选项来删除它们。\n" +
            "默认为空",
    },
    noinclude_data_files: {
        name: "不包含数据文件",
        desc: "不包含与给定文件名形式匹配的数据文件。这是针对目标文件名而非源路径的。\n" +
            "因此，要从'package_name'的包数据中忽略一个文件模式，应该匹配为\"package_name/*.txt\",\n" +
            "或者是对整个目录而简单地使用\"package_name\"。默认为空",
    },
    include_onefile_external_data: {
        name: "包含单文件外部数据",
        desc: "将指定的数据文件模式包含在单文件二进制文件的外部而不是内部。仅在'--onefile'编译情况下该选项才有意义。\n" +
            "首先，必须以某种方式指定文件以某种方式为已包含，然后这个选项将引用目标路径。默认为空。",
    },
    list_package_data: {
        name: "列出包数据",
        desc: "输出给定包名称找到的数据文件。默认不执行",
    },
    // Metadata support(元数据支持)
    include_distribution_metadata: {
        name: "包含分发元数据",
        desc: "为给定的分发名称包含元数据信息。有些包会检查元数据的存在、版本、入口点灯，而如果没有给出这些选项，它只能在编译时被识别才会工作，这并不总是会发生。\n" +
            "当然，这只对包含在编译中的包有意义。默认为空。",
    },
    // DLL files(DLL(动态链接库)文件)
    noinclude_dlls: {
        name: "不包含动态链接库(DLL)",
        desc: "不要包括与给定文件名模式匹配的DLL文件。这是针对目标文件名，而不是源路径。\n" +
            "因此，要忽略包含在“package_name”包中的DLL“someDLL”，应将其匹配为“package_name/someDLL.*”。\n" +
            "默认为空。",
    },
    list_package_dlls: {
        name: "列出包动态链接库(DLL)",
        desc: "为给定的包名找到DLLs并输出。默认不执行。",
    },
    // Control the warnings to be given by Nuitka(控制 Nuitka 发出的警告)
    warn_implicit_exceptions: {
        name: "警告隐式异常",
        desc: "启用对在编译时检测到的隐式异常的警告。",
    },
    warn_unusual_code: {
        name: "警告不寻常代码",
        desc: "启用对在编译时对检测到的不寻常代码的警告。",
    },
    assume_yes_for_downloads: {
        name: "假设允许下载",
        desc: "在需要时允许Nuitka下载外部代码。例如依赖项walker,ccache,甚至Windows上的gcc。要禁用，请从nul设备重定向输入。\n" +
            "例如\"</dev/null\"或\"<NUL:\"。默认下载时提示。",
    },
    nowarn_mnemonic: {
        name: "不警告助记符",
        desc: "禁用给定助记符的警告。这些是为了确保你知道某些主题，并且通常指向Nuitka网站。助记符是URL末尾的部分，没有HTML后缀。可以多次给出并接受shell模式。默认为空。",
    },
    // Immediate execution after compilation(编译后立刻执行)
    run: {
        name: "立即执行",
        desc: "立即执行创建的二进制文件(或导入已编译的模块)。默认关闭。",
    },
    debugger: {
        name: "在调试器中运行",
        desc: "在调试器中执行，例如“gdb”或“lldb”以自动获取堆栈跟踪。默认关闭。",
    },
    execute_with_pythonpath: {
        name: "使用Python路径执行",
        desc: "当使用'--run'立刻执行创建的二进制文件或模块时，不要重置'PYTHONPATH'环境。当所有模块都成功包含时，您应该不再需要PYTHONPATH。\n" +
            "对于独立模式(standalone)来说，绝对不需要PYTHONPATH。",
    },
    // Compilation choices(编译选项)
    user_package_configuration_files: {
        name: "用户包配置文件",
        desc: "用户提供包含包配置的Yaml文件. 您可以包括DLL文件,删除冗余，添加隐藏的依赖项。请查阅Nuitka包配置手册，\n" +
            "以获取完整的格式使用说明。可以多次给出。默认为空。",
    },
    full_compat: {
        name: "完全兼容CPython",
        desc: "确保和CPython绝对兼容。甚至不允许与CPython行为的轻微偏差，例如没有更好的跟踪回溯(trackback)或异常消息。\n" +
            "这些行为并不是真正的不兼容，而只是不同或者更糟糕而已。这仅用于测试，不应该使用。",
    },
    file_reference_choice: {
        name: "文件引用选择",
        desc: "选择\"__file__\"的值。创建的二进制文件和模块\"执行时\"（即独立二进制文件和摸块模式的默认值)使用自己\n" +
            "的位置来扣除\"__file__\"的值。包含的软件包假装在该位置下方的目录中。这样就可以在部署中包含数据文件。\n" +
            "如果只是为了加速，最好使用\"原始(original)\"值，其中将使用源文件位置。也就是使用源文件的位置。使用\"frozen\"的时候，\n" +
            "会使用\"＜frozen module_name＞\"符号。出于兼容性的原因，\"__file__\"值将始终具有\".py\"后缀，而与它的实际值无关。",
        elements: {
            original: {
                name: "original",
                desc: "使用源文件位置",
            },
            frozen: {
                name: "frozen",
                desc: "使用\"<frozen module_name>\"符号",
            },
        },
    },
    module_name_choice: {
        name: "模块名称选择",
        desc: "选择\"__name__\"和\"__package__\"的值。使用\"执行时(runtime)\"（模块模式的默认值）创建的模块使用软件包\n" +
            "来推断\"__package__\"的值，以实现完全兼容。\"原始(original)\"值（其他模式的默认值）允许进行更多的静态优化，但对那些通常\n" +
            "可以加载到任意软件包的模块来说是不兼容的。",
        elements: {
            original: {
                name: "original",
                desc: "允许进行更多的静态优化(其他模式的默认值)",
            },
            runtime: {
                name: "runtime",
                desc: "使用软件包来推断\"__package__\"的值，以实现完全兼容(模块模式的默认值)",
            },

        },
    },
    // Output choices(输出选择)
    output_filename: {
        name: "输出文件名",
        desc: "指定可执行文件的名称。拓展模块和独立模式没有这个选项，使用时会报错。这可能需要包含存在的路径信息。\n" +
            "默认为当前平台上的\"＜program_name＞.exe\"",
        elements: {
            program_name: {
                name: "程序名",
                desc: "＜program_name＞",
            },
        },
    },
    output_dir: {
        name: "输出目录",
        desc: "指定存放中间文件和最终输出文件的位置。选定目录将存放构建文件夹，发行文件夹，二进制文件等。默认为当前目录。",
        elements: {
            current_directory: {
                name: "当前目录",
                desc: "当前目录",
            },
        },
    },
    remove_output: {
        name: "删除构建文件夹",
        desc: "生成exe或者模块文件后删除构建文件夹。默认关闭。",
    },
    no_pyi_file: {
        name: "不生成pyi文件",
        desc: "不要为Nuitka创建拓展模块而创建\".pyi\"文件用于检测隐式导入。默认关闭。",
    },
    // Deployment control(部署控制)
    deployment: {
        name: "部署模式",
        desc: "禁用旨在让查找兼容性问题更容易的代码。例如，这将阻止使用'-c'参数的执行，这个参数一般被尝试运行\n" +
            "模块的代码使用，并且可能导致程序反复自启动。一旦你向最终用户部署，就禁用它，对于查找典型问题，\n" +
            "这在开发过程中非常有帮助。默认关闭。",
    },
    no_deployment_flag: {
        name: "不使用部署标志",
        desc: "保持部署模式，但是选择性地禁用部分功能。部署模式的错误将会输出这些标识符。默认为空",
    },
    // Debug features(调试功能)
    debug: {
        name: "调试模式",
        desc: "执行所有可能的自身检查以发现Nuitka中的错误，请不要用与生产中。\n" +
            "默认关闭。",
    },
    unstripped: {
        name: "不去除调试信息",
        desc: "在生成的对象文件中保留调试信息，以便更好的和调试器交互。默认关闭。",
    },
    profile: {
        name: "性能分析",
        desc: "启用基于vmprof的耗时分析。目前无法使用。默认关闭。",
    },
    internal_graph: {
        name: "内部图",
        desc: "创建优化过程内部的图，不要用于整个程序，请只用于小的测试用例。默认关闭。",
    },
    trace_execution: {
        name: "跟踪执行",
        desc: "跟踪执行并输出。在执行代码之前输出代码行。默认关闭。",
    },
    recompile_c_only: {
        name: "只重新编译C",
        desc: "这不是增量编译，仅用于 Nuitka 开发。将现有文件重新编译为C。允许编译编辑过的C文件，以便对生成源代码的修改进行快速调试。\n" +
            "例如查看代码是否通过，值的输出等。默认关闭。它要查看的文件取决于编译Python源代码。",
    },
    xml: {
        name: "输出XML",
        desc: "将内部程序结构和优化结果以XML形式写入给定的文件名。",
    },
    experimental: {
        name: "实验性",
        desc: "使用声明为\"实验性\"的功能。如果代码中没有实验性功能，则可能不会产生任何影响。\n" +
            "使用每个实验功能的秘密标签(检查源代码)。",
    },
    low_memory: {
        name: "低内存模式",
        desc: "尝试使用更少的内存，方法是减少C编译任务的分叉并使用更少内存的选项。用于嵌入式机器。在出现内存不足的问题时使用。默认为关闭。",
    },
    create_environment_from_report: {
        name: "从报告创建环境",
        desc: "根据给出的报告文件在不存在的路径中创建一个新的虚拟环境，例如'--report=compilation-report.xml'。默认不执行。",
    },
    generate_c_only: {
        name: "只生成C源代码",
        desc: "只生成C源代码，不编译为二进制文件或者模块。这是用于调试和代码覆盖分析的，不会浪费CPU。默认关闭。\n" +
            "不要认为你可以直接使用这个。",
    },
    // Backend C compiler choice(后端 C 编译器选择)
    clang: {
        name: "强制使用clang",
        desc: "强制使用 clang 编译。在 Windows 系统上，这需要一个正常运行的 Visual Studio 版本来支持。默认关闭。",
    },
    mingw64: {
        name: "强制使用mingw64",
        desc: "强制在 Windows 上使用 MinGW64。默认为关闭，除非使用 MSYS2 和 MinGW Python。",
    },
    msvc: {
        name: "使用MSVC版本",
        desc: "强制在Windows上使用特定的MSVC版本。允许的值有\"14.3\" (MSVC 2022)和其他MSVC版本号。\n" +
            "使用 \"list \"以获得已安装编译器的列表，或使用 \"latest\"。默认在有的情况下使用最新的MSVC。否则使用MinGW64。",
        elements: {
            latest: {
                name: "最新版",
                desc: "使用最新的MSVC版本",
            },
        },
    },
    jobs: {
        name: "并行编译任务数",
        desc: "指定允许使用的并行C编译器任务数。默认为系统CPU数。",
    },
    lto: {
        name: "链接时间优化",
        desc: "使用链接时间优化（MSVC、gcc、clang）允许的值有 \"yes\"（是）、\"no\"（否）和 \"auto\"（自动）(已知可用)。默认为 \"auto\"。",
        elements: {
            yes: {
                name: "是",
                desc: "使用链接时间优化",
            },
            no: {
                name: "否",
                desc: "不使用链接时间优化",
            },
            auto: {
                name: "自动",
                desc: "自动使用链接时间优化",
            },
        },
    },
    static_libpython: {
        name: "使用Python的静态链接库",
        desc: "使用Python的静态链接库。允许的值有 \"yes\"（是）、\"no\"（否）和 \"auto\"（自动）(已知可用)。默认为 \"auto\"。",
        elements: {
            yes: {
                name: "是",
                desc: "使用Python的静态链接库",
            },
            no: {
                name: "否",
                desc: "不使用Python的静态链接库",
            },
            auto: {
                name: "自动",
                desc: "自动使用Python的静态链接库",
            },
        },
    },
    cf_protection: {
        name: "gcc编译器CF保护模式",
        desc: "这个选项是特定于gcc的。为gcc编译器选择\"cf-protection\"(cf保护)模式。默认值\"auto\"是使用gcc的默认值，但你可以覆盖它，\n" +
            "例如，使用\"none\"值来禁用它。有关\"-fcf-protection\"的详细信息，请参阅gcc文档",
        elements: {
            auto: {
                name: "自动",
                desc: "使用gcc的默认值",
            },
        },
    },
    // Cache Control(缓存控制)
    disable_cache: {
        name: "禁用缓存",
        desc: "禁用选定的缓存，设置\"all\"则为所有缓存。当前允许的值有：\"all(全部)\",\"ccache\",\"bytecode(字节码)\",\n" +
            "\"compression(压缩)\",\"dll-dependencies(dll依赖项)\"。\n" +
            "可以多次给出或使用逗号分隔给定的值。默认为无。",
        elements: {
            all: {
                name: "全部",
                desc: "禁用所有缓存",
            },
            ccache: {
                name: "ccache缓存",
                desc: "不要尝试使用ccache(gcc,clang等)或clcache(MSVC,clangcl)。",
            },
            bytecode: {
                name: "字节码缓存",
                desc: "不要重复使用模块的依赖分析结果，尤其是来自标准库的模块，这些模块会被包含为字节码。",
            },
            compression: {
                name: "压缩缓存",
                desc: "禁用压缩缓存",
            },
            dll_dependencies: {
                name: "dll依赖项缓存",
                desc: "禁用依赖项分析器缓存。这将导致创建分发文件夹的时间大大延长，但如果怀疑缓存会导致错误，则可以使用它。",
            },
        },

    },
    clean_cache: {
        name: "清理缓存",
        desc: "在执行前清理给定缓存，设置\"all\"则为所有缓存。当前允许的值有：\n" +
            "\"all(全部)\",\"ccache\",\"bytecode(字节码)\",\"compression(压缩)\",\"dll-dependencies(dll依赖项)\"。\n" +
            "可以多次给出或使用逗号分隔给定的值。默认为无。",
        elements: {
            all: {
                name: "全部",
                desc: "清理所有缓存",
            },
            ccache: {
                name: "ccache缓存",
                desc: "清理ccache缓存",
            },
            bytecode: {
                name: "字节码缓存",
                desc: "清理字节码缓存",
            },
            compression: {
                name: "压缩缓存",
                desc: "清理压缩缓存",
            },
            dll_dependencies: {
                name: "dll依赖项缓存",
                desc: "清理dll依赖项缓存",
            },
        },
    },
    disable_bytecode_cache: {
        name: "禁用字节码缓存",
        desc: "不要重复使用模块的依赖分析结果，尤其是来自标准库的模块，这些模块会被包含为字节码。与--disable-cache=bytecode效果相同。",
    },
    disable_ccache: {
        name: "禁用ccache",
        desc: "不要尝试使用ccache(gcc,clang等)或clcache(MSVC,clangcl)。与--disable-cache=ccache效果相同。",
    },
    disable_dll_dependency_cache: {
        name: "禁用dll依赖项缓存",
        desc: "禁用依赖项分析器缓存。这将导致创建分发文件夹的时间大大延长，但如果怀疑缓存会导致错误，则可以使用它。\n" +
            "与--disable-cache=dll-dependencies效果相同。",
    },
    force_dll_dependency_cache_update: {
        name: "强制更新dll依赖项缓存",
        desc: "用于更新依赖分析器缓存。这将导致创建分发文件夹的时间大大延长，但如果怀疑缓存会导致错误或缓存需要更新，则可以使用它。",
    },
    // PGO compilation choices(PGO(配置文件引导优化)编译选项)
    pgo: {
        name: "配置文件引导优化",
        desc: "通过先进行分析，然后使用结果来反馈到C编译中，启用C级别的配置文件引导优化（PGO）。\n" +
            "注意：这是实验性的，还不能与Nuitka的独立模式一起使用。默认关闭。",
    },
    pgo_args: {
        name: "配置文件引导优化参数",
        desc: "在进行配置文件引导优化(PGO)时传递的参数。这些参数在配置文件引导优化(PGO)分析运行期间传递给被特殊的构建可执行文件。默认为空。",
    },
    pgo_executable: {
        name: "配置文件引导优化可执行文件",
        desc: "收集配置文件信息时要执行的命令。只有在需要通过准备运行的脚本来启动它时才使用它。默认使用创建的程序。",
    },
    // Tracing features(跟踪功能)
    report: {
        name: "输出报告",
        desc: "输入一个XML文件名，在XML输出文件中报告模块、数据文件、编译、插件等详细信息。这对于报告问题也非常有用。\n" +
            "例如，这些报告可以用于使用’–create-environment-from-report’轻松重建环境，但报告包含大量信息。默认关闭。",
    },
    report_diffable: {
        name: "报告差异",
        desc: "以可比较的方式报告数据，即没有随着运行而变化的时间或内存使用值。默认关闭。",
    },
    report_user_provided: {
        name: "报告用户提供值",
        desc: "报告来自您的数据。这可以多次给出，并且可以是任何形式的\"key=value\"，其中key应该是一个标识符，\n" +
            "例如使用\"--report-user-provided=pipenv-lock-hash=64a5e4\"来跟踪一些输入值。默认为空。",
    },
    report_template: {
        name: "报告模板",
        desc: "通过模板报告。需要提供模板和输出文件名\"template.rst.j2:output.rst\"。对于内置模板，请查看用户手册。\n" +
            "可以多次给出。默认为空。",
    },
    quiet: {
        name: "静默模式",
        desc: "禁止所有信息输出，但显示警告。默认关闭。",
    },
    show_scons: {
        name: "显示scons",
        desc: "运行C构建后端Scons，显示执行的命令、检测到的编译器的详细信息。默认关闭。",
    },
    no_progressbar: {
        name: "不显示进度条",
        desc: "禁用进度条。默认关闭。",
    },
    show_progress: {
        name: "显示进度",
        desc: "过时: 提供进度信息和统计信息。禁用正常的进度条。默认关闭。",
    },
    show_memory: {
        name: "显示内存",
        desc: "显示内存使用情况。默认关闭。",
    },
    show_modules: {
        name: "显示模块",
        desc: "过时: 您应该使用'--report'文件替代。提供包含的模块和DLL的信息。默认关闭。",
    },
    show_modules_output: {
        name: "显示模块输出路径",
        desc: "用于设定输出'--show-modules'的位置，应该是一个文件名。默认为标准输出。",
    },
    verbose: {
        name: "详细模式",
        desc: "输出采取的操作的详细信息，尤其是在优化过程中可能会大量输出。默认关闭。",
    },
    verbose_output: {
        name: "详细模式输出路径",
        desc: "用于设定输出'--verbose'的位置，应该是一个文件名。默认为标准输出。",
    },
    // Linux specific controls(Linux 特定控制)
    linux_icon: {
        name: "Linux图标",
        desc: "为单文件二进制可执行文件添加图标。只能给出一次。如果可用，默认为Python图标。",
    },
};