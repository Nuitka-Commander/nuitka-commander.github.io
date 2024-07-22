// noinspection JSUnusedGlobalSymbols
export default {
    //title类请在此处翻译
    title: {
        basic: "基本设置",
        control_the_inclusion_of_modules_and_packages_in_result: "控制结果中包含的模块和包",
        control_the_following_into_imported_modules: "控制导入模块",
        onefile_options: "单文件选项",
        data_files: "数据文件",
        backend_C_compiler_choice: "后端C编译器选择",
        plugin_control:"插件控制",
        plugin_options_of_spacy: "spacy插件选项",
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
    },
    onefile_no_compression: {
        name: "无压缩单文件",
        desc: "在创建单文件时，禁用有效载荷的压缩。这主要是出于调试目的，或者为了节省时间。默认关闭",
    },
    onefile_as_archive: {
        name: "作为存档的单文件",
        desc: "在创建onefile的时候，使用一个可以被\"nuitka-onefile-unpack\"解压的存档格式，而不是一个只有onefile程序本身才能解压的流。",
    },
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
    clang: {
        name: "强制使用Clang",
        desc: "强制使用Clang。在Windows上，这需要一个可以依赖的工作Visual Studio版本。默认关闭。",
    },
    mingw64: {
        name: "使用 MinGW64",
        desc: "在 Windows 上强制使用 MinGW64。默认情况下为关闭，除非使用带有 MinGW Python 的 MSYS2。",
    },
    // --msvc=MSVC_VERSION
    msvc: {
        name: "使用特定 MSVC 版本",
        desc: "在 Windows 上强制使用特定的 MSVC 版本。允许的值例如有 \"14.3\" (MSVC 2022) 和其他 MSVC 版本号，指定 \"list\" 以获取已安装编译器列表，或使用 \"latest\"。默认情况下，如果已安装，则使用最新的 MSVC，否则使用 MinGW64。",
        elements: {
            list: {
                name: "列出已安装的编译器",
                desc: "列出所有已安装的 MSVC 编译器。",
            },
            latest: {
                name: "使用最新版本",
                desc: "使用最新的 MSVC 编译器。",
            },
        },
    },
    // --jobs=N
    jobs: {
        name: "并行 C 编译器任务数",
        desc: "指定允许的并行 C 编译器任务数。负值表示系统 CPU 减去给定值。默认情况下，除非激活低内存模式，否则默认为系统 CPU 计数。",
        elements: {
            system_cpu_count: {
                name: "系统 CPU 计数",
                desc: "使用系统的 CPU 计数作为并行任务数。",
            },
        },
    },
    // --lto=choice
    lto: {
        name: "使用链接时优化",
        desc: "使用链接时优化 (MSVC, gcc, clang)。允许的值有 \"yes\", \"no\", 和 \"auto\" (当已知可以工作时)。默认值为 \"auto\"。",
        elements: {
            yes: {
                name: "启用",
                desc: "启用链接时优化。",
            },
            no: {
                name: "禁用",
                desc: "禁用链接时优化。",
            },
            auto: {
                name: "自动",
                desc: "自动选择是否启用链接时优化。",
            },
        },
    },
    // --static-libpython=choice
    static_libpython: {
        name: "使用静态链接 Python 库",
        desc: "使用 Python 的静态链接库。允许的值有 \"yes\", \"no\", 和 \"auto\" (当已知可以工作时)。默认值为 \"auto\"。",
        elements: {
            yes: {
                name: "启用",
                desc: "启用静态链接 Python 库。",
            },
            no: {
                name: "禁用",
                desc: "禁用静态链接 Python 库。",
            },
            auto: {
                name: "自动",
                desc: "自动选择是否启用静态链接 Python 库。",
            },
        },
    },
    // --cf-protection=PROTECTION_MODE
    cf_protection: {
        name: "控制流保护模式",
        desc: "此选项特定于 gcc 编译器。对于 gcc 编译器，选择 \"cf-protection\" 模式。默认 \"auto\" 是使用 gcc 默认值，但可以覆盖它，例如通过 \"none\" 值禁用它。请参阅 gcc 文档中的 \"-fcf-protection\" 以获取详细信息。",
        elements: {
            auto: {
                name: "自动",
                desc: "自动选择控制流保护模式。",
            },
            none: {
                name: "无",
                desc: "禁用控制流保护。",
            },
        },
    },
    enable_plugins: {
        name: "启用插件",
        desc: "启用指定的插件。必须使用插件名称。使用 '--plugin-list' 查询完整的插件列表并退出。默认空。",
        elements: {
            plugin_name: {
                name: "插件名称",
                desc: "要启用的插件名称。"
            }
        }
    },
    disable_plugins: {
        name: "禁用插件",
        desc: "禁用指定的插件。必须使用插件名称。使用 '--plugin-list' 查询完整的插件列表并退出。大多数标准插件不建议禁用。默认空。",
        elements: {
            plugin_name: {
                name: "插件名称",
                desc: "要禁用的插件名称。"
            }
        }
    },
    user_plugin: {
        name: "用户插件",
        desc: "用户插件的文件路径。可以多次指定。默认空。",
        elements: {
            path: {
                name: "路径",
                desc: "用户插件的文件路径。"
            }
        }
    },
    plugin_list: {
        name: "插件列表",
        desc: "显示所有可用插件的列表并退出。默认关闭。"
    },
    plugin_no_detection: {
        name: "禁用插件检测",
        desc: "插件可以检测它们是否可能被使用，你可以通过 '--disable-plugin=plugin-that-warned' 禁用警告，或者使用此选项完全禁用检测机制，这也会稍微加快编译速度。默认关闭。"
    },
    module_parameter: {
        name: "模块参数",
        desc: "提供模块参数。某些包会要求你提供额外的决策。格式为 --module-parameter=module.name-option-name=value。默认空。",
        elements: {
            module_parameters: {
                name: "模块参数",
                desc: "要提供的模块参数。"
            }
        }
    },
    show_source_changes: {
        name: "显示源代码变化",
        desc: "在编译前显示对原始Python文件内容的更改。主要用于开发插件和Nuitka包配置。例如使用 '--show-source-changes=numpy.**' 查看某个命名空间下的所有更改，或使用 '*' 查看所有更改。默认空。",
        elements: {
            show_source_changes: {
                name: "显示源代码变化",
                desc: "要显示的源代码变化。"
            }
        }
    },
    spacy_language_model: {
        name: "Spacy语言模型",
        desc: "要使用的Spacy语言模型。可以多次指定。使用'all'包含所有下载的模型。",
        elements: {
            all: {
                name: "所有模型",
                desc: "包含所有下载的Spacy语言模型。",
            },
        },
    }
};