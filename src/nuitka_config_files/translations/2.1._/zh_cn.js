// noinspection JSUnusedGlobalSymbols
export default {
    //title类请在此处翻译
    title: {
        basic: "基本设置",
        control_the_inclusion_of_modules_and_packages_in_result: "控制结果中包含的模块和包",
        control_the_following_into_imported_modules: "控制导入模块",
    }, // basic
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


};