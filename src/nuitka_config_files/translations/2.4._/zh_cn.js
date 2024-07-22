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
        binary_version_information: "二进制版本信息",
        tracing_features: "跟踪功能",
        windows_specific_controls: "针对 Windows 系统的设置",
        linux_specific_controls: "针对 Linux 系统的设置",
    },
    module: {
        name: "模块模式",
        desc: "创建一个可导入的二进制扩展模块可执行文件，而不是一个程序。默认关闭。"
    },
    standalone: {
        name: "独立模式",
        desc: "启用独立模式进行输出。这允许你将二进制文件传输到其他机器，而无需使用已有的Python环境。这也意味着它将变得很大。它将启用这些选项: \"--follow-imports\" 和 \"--python-flag=no_site\"。"
    },
    onefile: {
        name: "单文件模式",
        desc: "在独立模式的基础上，启用单文件模式。这意味着不是创建一个文件夹，而是创建一个压缩的可执行文件。默认关闭。"
    },
    python_flag: {
        name: "Python 标志",
        desc: "使用的Python标志。默认是你用来运行Nuitka的标志。这些选项也存在于标准Python可执行文件中。目前支持的选项有：\"-S\"（别名\"no_site\"），\"static_hashes\"（不使用哈希随机化），\"no_warnings\"（不给出Python运行时警告），\"-O\"（别名\"no_asserts\"），\"no_docstrings\"（不使用文档字符串），\"-u\"（别名\"unbuffered\"），\"isolated\"（不加载外部代码）和\"-m\"（包模式，编译为\"package.__main__\"）。默认空。",
        elements: {
            no_site: {
                name: "无站点",
                desc: "不加载站点模块。"
            },
            static_hashes: {
                name: "静态哈希",
                desc: "不使用哈希随机化。"
            },
            no_warnings: {
                name: "无警告",
                desc: "不给出Python运行时警告。"
            },
            no_asserts: {
                name: "无断言",
                desc: "不使用断言。"
            },
            no_docstrings: {
                name: "无文档字符串",
                desc: "不使用文档字符串。"
            },
            unbuffered: {
                name: "无缓冲",
                desc: "无缓冲输出。"
            },
            isolated: {
                name: "隔离模式",
                desc: "不加载外部代码。"
            },
            package_mode: {
                name: "包模式",
                desc: "编译为\"package.__main__\"。"
            },
        },
    },
    python_debug: {
        name: "Python 调试版本",
        desc: "使用调试版本或不使用。默认使用你用来运行Nuitka的版本，很可能是非调试版本。仅用于调试和测试目的。"
    },
    python_for_scons: {
        name: "用于Scons的Python路径",
        desc: "当使用Python 3.4编译时，提供一个Python二进制文件的路径以供Scons使用。否则Nuitka可以使用你运行Nuitka的Python，或者找到Python安装，例如从Windows注册表中。在Windows上，需要Python 3.5或更高版本。在非Windows上，Python 2.6或2.7也可以。",
        elements: {
            path: {
                name: "路径",
                desc: "Python二进制文件的路径。"
            }
        }
    },
    main: {
        name: "主程序路径",
        desc: "如果只指定一次（如--main=\"1.py\"），这将取代位置参数，也就是要编译的文件名（入口）。如果指定多次（如--main=\"1.py\" --main=\"2.py\"），它将启用\"multidist\"，它允许您创建依赖于文件名或调用名的二进制文件。（允许多个主程序使用同一套编译参数）"
    },
    follow_imports: {
        name: "跟随导入模块",
        desc: "递归进入所有导入的模块。在独立模式下默认开启，否则默认关闭。",
    },


    include_package: {
        name: "包含整个包",
        desc: "包含整个包。以 Python 命名空间的形式提供，例如 \"some_package.sub_package\"，Nuitka 将找到它并包含它以及在该磁盘位置下找到的所有模块，并在其创建的二进制文件或扩展模块中使其可用于导入。为了避免不需要的子包，例如测试，你可以这样做 \"--nofollow-import-to=*.tests\"。默认空。",
        elements: {
            package: {
                name: "包",
                desc: "包含整个包。"
            }
        }
    },
    include_module: {
        name: "包含单个模块",
        desc: "包含单个模块。以 Python 命名空间的形式提供，例如 \"some_package.some_module\"，Nuitka 将找到它并将其包含在其创建的二进制文件或扩展模块中，并使其可用于导入。默认空。",
        elements: {
            module: {
                name: "模块",
                desc: "包含单个模块。"
            }
        }
    },
    include_plugin_directory: {
        name: "包含插件目录",
        desc: "包含该目录中的代码，将其视为每个文件都作为主文件给出。覆盖所有其他包含选项。你应该更喜欢其他按名称包含的选项，而不是按文件名包含的选项，那些通过在 \"sys.path\" 中找到的东西。此选项仅用于非常特殊的使用情况。可以多次给出。默认空。",
        elements: {
            directory: {
                name: "目录",
                desc: "包含插件目录。"
            }
        }
    },
    include_plugin_files: {
        name: "包含插件文件",
        desc: "包含匹配 PATTERN 的文件。覆盖所有其他跟随选项。可以多次给出。默认空。",
        elements: {
            pattern: {
                name: "模式",
                desc: "包含插件文件。"
            }
        }
    },
    prefer_source_code: {
        name: "首选源代码",
        desc: "对于已经编译的扩展模块，如果有源文件和扩展模块，通常会使用扩展模块，但最好从可用的源代码编译模块以获得最佳性能。如果不希望这样，可以使用 --no-prefer-source-code 禁用警告。默认关闭。"
    },


    follow_import_to: {
        name: "跟随导入到特定模块或包",
        desc: "如果使用，跟随到该模块，或者如果是包，跟随到整个包。可以多次指定。默认空。",
        elements: {
            module: {
                name: "模块或包",
                desc: "特定的模块或包名称。",
            },
        },
    },

    nofollow_import_to: {
        name: "不跟随导入到特定模块或包",
        desc: "即使使用，也不跟随到该模块名称，或者如果是包名称，也不跟随到整个包。这可以包含模式，例如 \"*.tests\"。可以多次指定。默认空。",
        elements: {
            module: {
                name: "模块或包",
                desc: "特定的模块或包名称。",
            },
        },
    },

    nofollow_imports: {
        name: "不跟随任何导入模块",
        desc: "完全不递归进入任何导入的模块，覆盖所有其他包含选项，并且不适用于独立模式。默认关闭。",
    },

    follow_stdlib: {
        name: "跟随标准库导入模块",
        desc: "也递归进入从标准库导入的模块。这将大大增加编译时间，并且目前测试不够充分，有时可能无法正常工作。默认关闭。",
    },
    onefile_tempdir_spec: {
        name: "单文件临时目录位置",
        desc: "在单文件模式下，使用此作为解压的文件夹。\n" +
            "默认值为 '{TEMP}/onefile_{PID}_{TIME}'，即用户临时目录，并且是非静态的，会被删除。\n" +
            "使用例如像 '{CACHE_DIR}/{COMPANY}/{PRODUCT}/{VERSION}' 这样的字符串是一个很好的静态缓存路径，并且它将不会被删除。",
        elements: {
            user_tempdir: {
                name: "用户临时目录",
                desc: "使用用户的临时目录。",
            },
            static_cache_path: {
                name: "静态缓存路径",
                desc: "使用静态缓存路径。",
            },
        },
    },

    onefile_child_grace_time: {
        name: "单文件子进程宽限时间",
        desc: "当停止子进程时，例如由于 CTRL-C 或关机等，Python 代码会收到一个 'KeyboardInterrupt'，它可以用来处理例如刷新数据。这是在硬杀子进程之前的时间量，单位为毫秒，默认值为 5000。",
        elements: {
            default_grace_time: {
                name: "默认宽限时间",
                desc: "默认宽限时间为 5000 毫秒。",
            },
        },
    },

    onefile_no_compression: {
        name: "禁用单文件压缩",
        desc: "在创建单文件时，禁用负载的压缩。这主要是用于调试目的，或节省时间。默认是关闭的。",
    },

    onefile_as_archive: {
        name: "单文件作为归档",
        desc: "在创建单文件时，使用归档格式，可以用 'nuitka-onefile-unpack' 解包，而不是只能由单文件程序本身解包的流。默认是关闭的。",
    },

    include_package_data: {
        name: "包含包数据",
        desc: "包含指定包的数据文件。DLL和扩展模块不是数据文件，不会以这种方式包含。可以使用文件名模式。默认不包含数据文件。",
        elements: {
            package_name: {
                name: "包名",
                desc: "指定包名以包含其数据文件。",
            },
        },
    },

    include_data_files: {
        name: "包含数据文件",
        desc: "通过文件名包含数据文件到分发中。有多种允许的形式。例如：'--include-data-files=/path/to/file/*.txt=folder_name/some.txt' 将复制单个文件并抱怨是否是多个。默认不包含。",
        elements: {
            file_pattern: {
                name: "文件模式",
                desc: "指定文件模式以包含数据文件。",
            },
        },
    },

    include_data_dir: {
        name: "包含数据目录",
        desc: "从完整目录中包含数据文件到分发中。这是递归的。例如：'--include-data-dir=/path/some_dir=data/some_dir' 将整个目录进行普通复制。默认不包含。",
        elements: {
            directory: {
                name: "目录",
                desc: "指定目录以包含其数据文件。",
            },
        },
    },

    noinclude_data_files: {
        name: "不包含数据文件",
        desc: "不包含匹配给定文件名模式的数据文件。这是针对目标文件名，而不是源路径。例如：'package_name/*.txt' 将忽略包数据中的文件模式。默认不包含。",
        elements: {
            pattern: {
                name: "模式",
                desc: "指定模式以不包含数据文件。",
            },
        },
    },

    include_onefile_external_data: {
        name: "包含单文件外部数据",
        desc: "在单文件二进制文件外部包含指定的数据文件模式，而不是内部。仅在 '--onefile' 编译时有意义。首先必须以某种方式指定包含的文件，然后这指的是目标路径。默认不包含。",
        elements: {
            pattern: {
                name: "模式",
                desc: "指定模式以包含单文件外部数据。",
            },
        },
    },

    list_package_data: {
        name: "列出包数据",
        desc: "输出给定包名找到的数据文件。默认不执行。",
        elements: {
            package_name: {
                name: "包名",
                desc: "指定包名以列出其数据文件。",
            },
        },
    },

    include_raw_dir: {
        name: "包含原始目录",
        desc: "完全包含原始目录到分发中。这是递归的。默认不包含。",
        elements: {
            directory: {
                name: "目录",
                desc: "指定目录以包含其原始数据。",
            },
        },
    },

    clang: {
        name: "强制使用 clang",
        desc: "强制使用 clang 编译器。在 Windows 上，这需要一个可以依赖的工作 Visual Studio 版本。默认关闭。",
    },

    mingw64: {
        name: "强制使用 MinGW64",
        desc: "在 Windows 上强制使用 MinGW64。默认关闭，除非使用 MSYS2 和 MinGW Python。",
    },

    msvc: {
        name: "强制使用特定 MSVC 版本",
        desc: "在 Windows 上强制使用特定的 MSVC 版本。允许的值例如有 \"14.3\" (MSVC 2022) 和其他 MSVC 版本号，指定 \"list\" 以列出已安装的编译器，或使用 \"latest\"。默认使用最新的 MSVC 版本（如果已安装），否则使用 MinGW64。",
        elements: {
            msvc_version: {
                name: "MSVC 版本",
                desc: "指定 MSVC 版本号。",
            },
            list: {
                name: "列出已安装的编译器",
                desc: "列出已安装的 MSVC 编译器。",
            },
            latest: {
                name: "最新版本",
                desc: "使用最新的 MSVC 版本。",
            },
        },
    },

    jobs: {
        name: "指定并行 C 编译器任务数",
        desc: "指定允许的并行 C 编译器任务数。负值表示系统 CPU 减去给定值。默认情况下，如果未激活低内存模式，则默认为系统 CPU 计数，否则默认为 1。",
        elements: {
            number: {
                name: "任务数",
                desc: "指定并行任务数。",
            },
        },
    },

    lto: {
        name: "使用链接时优化",
        desc: "使用链接时优化（MSVC、gcc、clang）。允许的值有 \"yes\"、\"no\" 和 \"auto\"（当已知可以工作时）。默认值为 \"auto\"。",
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

    static_libpython: {
        name: "使用静态链接 Python 库",
        desc: "使用 Python 的静态链接库。允许的值有 \"yes\"、\"no\" 和 \"auto\"（当已知可以工作时）。默认值为 \"auto\"。",
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

    cf_protection: {
        name: "选择 cf-protection 模式",
        desc: "此选项特定于 gcc 编译器。对于 gcc 编译器，选择 \"cf-protection\" 模式。默认 \"auto\" 是使用 gcc 默认值，但可以覆盖它，例如通过 \"none\" 值禁用它。请参阅 gcc 文档中的 \"-fcf-protection\" 了解详细信息。",
        elements: {
            auto: {
                name: "自动",
                desc: "使用 gcc 默认的 cf-protection 模式。",
            },
            none: {
                name: "无",
                desc: "禁用 cf-protection 模式。",
            },
        },
    },
    enable_plugins: {
        name: "启用插件",
        desc: "启用指定的插件。必须使用插件名称。使用 '--plugin-list' 查询完整列表并退出。默认空。",
    },

    disable_plugins: {
        name: "禁用插件",
        desc: "禁用指定的插件。必须使用插件名称。使用 '--plugin-list' 查询完整列表并退出。大多数标准插件不建议禁用。默认空。",
    },

    user_plugin: {
        name: "用户插件",
        desc: "用户插件的文件名。可以多次指定。默认空。",
    },

    plugin_list: {
        name: "插件列表",
        desc: "显示所有可用插件的列表并退出。默认关闭。",
    },

    plugin_no_detection: {
        name: "禁用插件检测",
        desc: "插件可以检测它们是否可能被使用，您可以通过 '--disable-plugin=plugin-that-warned' 禁用警告，或者使用此选项完全禁用该机制，这也会稍微加快编译速度，因为一旦您确定要使用哪些插件，检测代码就无效了。默认关闭。",
    },

    module_parameter: {
        name: "模块参数",
        desc: "提供一个模块参数。有些包会要求您提供额外的决策。格式为 --module-parameter=module.name-option-name=value。默认空。",
    },

    show_source_changes: {
        name: "显示源代码更改",
        desc: "在编译前显示对原始 Python 文件内容的更改。主要用于开发插件和 Nuitka 包配置。例如，使用 '--show-source-changes=numpy.**' 查看给定命名空间下的所有更改，或使用 '*' 查看所有更改，这可能会非常多。默认空。",
    },

    spacy_language_model: {
        name: "Spacy 语言模型",
        desc: "要使用的 Spacy 语言模型。可以多次指定。使用 'all' 包括所有已下载的模型。",
        elements: {
            all: {
                name: "所有模型",
                desc: "包括所有已下载的 Spacy 语言模型。",
            },
        },
    },

    company_name: {
        name: "公司名称",
        desc: "用于版本信息的公司名称。默认不使用。",
        elements: {
            default: {
                name: "默认",
                desc: "不使用公司名称。",
            },
        },
    },

    product_name: {
        name: "产品名称",
        desc: "用于版本信息的产品名称。默认使用二进制文件的基本文件名。",
        elements: {
            default: {
                name: "默认",
                desc: "使用二进制文件的基本文件名。",
            },
        },
    },

    file_version: {
        name: "文件版本",
        desc: "用于版本信息的文件版本。必须是一个最多包含4个数字的序列，例如1.0或1.0.0.0，不允许更多的数字，不允许字符串。默认不使用。",
        elements: {
            default: {
                name: "默认",
                desc: "不使用文件版本。",
            },
        },
    },

    product_version: {
        name: "产品版本",
        desc: "用于版本信息的产品版本。规则与文件版本相同。默认不使用。",
        elements: {
            default: {
                name: "默认",
                desc: "不使用产品版本。",
            },
        },
    },

    file_description: {
        name: "文件描述",
        desc: "用于版本信息的文件描述。目前仅限Windows。默认使用二进制文件名。",
        elements: {
            default: {
                name: "默认",
                desc: "使用二进制文件名。",
            },
        },
    },

    copyright: {
        name: "版权信息",
        desc: "用于版本信息的版权信息。目前仅限Windows和macOS。默认不使用。",
        elements: {
            default: {
                name: "默认",
                desc: "不使用版权信息。",
            },
        },
    },

    trademarks: {
        name: "商标信息",
        desc: "用于版本信息的商标信息。目前仅限Windows和macOS。默认不使用。",
        elements: {
            default: {
                name: "默认",
                desc: "不使用商标信息。",
            },
        },
    },

    report: {
        name: "报告文件",
        desc: "在 XML 输出文件中报告模块、数据文件、编译、插件等详细信息。这对于问题报告非常有用。这些报告可以用于通过 '--create-environment-from-report' 轻松重新创建环境，但包含大量信息。默认关闭。",
        elements: {
            report_filename: {
                name: "报告文件名",
                desc: "报告文件的名称。",
            },
        },
    },
    report_diffable: {
        name: "差异报告",
        desc: "以差异形式报告数据，即不包含每次运行都会变化的计时或内存使用值。默认关闭。",
    },
    report_user_provided: {
        name: "用户提供的数据报告",
        desc: "报告用户提供的数据。可以多次指定，并且可以是 'key=value' 形式的任何内容，其中 key 应该是一个标识符。默认是空的。",
        elements: {
            key_value: {
                name: "键值对",
                desc: "用户提供的键值对数据。",
            },
        },
    },
    report_template: {
        name: "报告模板",
        desc: "通过模板报告。提供模板和输出文件名 'template.rst.j2:output.rst'。对于内置模板，请查看用户手册。可以多次指定。默认是空的。",
        elements: {
            template_output: {
                name: "模板输出",
                desc: "报告模板和输出文件名。",
            },
        },
    },
    quiet: {
        name: "静默模式",
        desc: "禁用所有信息输出，但显示警告。默认关闭。",
    },
    show_scons: {
        name: "显示 Scons 信息",
        desc: "以详细信息运行 C 构建后端 Scons，显示执行的命令和检测到的编译器。默认关闭。",
    },
    no_progressbar: {
        name: "禁用进度条",
        desc: "禁用进度条。默认关闭。",
    },
    show_progress: {
        name: "显示进度信息",
        desc: "提供进度信息和统计数据。禁用正常进度条。默认关闭。",
    },
    show_memory: {
        name: "显示内存信息",
        desc: "提供内存信息和统计数据。默认关闭。",
    },
    show_modules: {
        name: "显示模块信息",
        desc: "提供包含的模块和 DLL 信息。建议使用 '--report' 文件代替。默认关闭。",
    },
    show_modules_output: {
        name: "模块信息输出路径",
        desc: "指定 '--show-modules' 的输出位置，应为一个文件名。默认是标准输出。",
        elements: {
            path: {
                name: "输出路径",
                desc: "模块信息输出文件的路径。",
            },
        },
    },
    verbose: {
        name: "详细输出",
        desc: "输出操作的详细信息，特别是在优化中。可能会产生大量输出。默认关闭。",
    },
    verbose_output: {
        name: "详细输出路径",
        desc: "指定 '--verbose' 的输出位置，应为一个文件名。默认是标准输出。",
        elements: {
            path: {
                name: "输出路径",
                desc: "详细输出文件的路径。",
            },
        },
    },
    windows_console_mode: {
        name: "Windows 控制台模式",
        desc: "选择要使用的控制台模式。默认模式是 'force'，除非程序是从控制台启动的，否则会创建一个控制台窗口。使用 'disable' 则完全不创建或使用控制台。使用 'attach' 则会使用现有的控制台进行输出。默认是 'force'。",
        elements: {
            force: {
                name: "强制",
                desc: "强制创建控制台窗口。",
            },
            disable: {
                name: "禁用",
                desc: "禁用控制台窗口。",
            },
            attach: {
                name: "附加",
                desc: "附加到现有控制台。",
            },
        },
    },
    windows_icon_from_ico: {
        name: "从 ICO 文件添加图标",
        desc: "添加可执行文件图标。可以多次指定不同的分辨率或包含多个图标的文件。在后一种情况下，您还可以使用 #<n> 指定特定的图标，其中 n 是从 1 开始的整数索引，指定要包含的特定图标，并忽略所有其他图标。",
        elements: {
            icon_path: {
                name: "图标路径",
                desc: "图标文件的路径。",
            },
        },
    },
    windows_icon_from_exe: {
        name: "从 EXE 文件复制图标",
        desc: "从现有可执行文件复制可执行文件图标（仅限 Windows）。",
        elements: {
            icon_exe_path: {
                name: "EXE 文件路径",
                desc: "包含图标的 EXE 文件的路径。",
            },
        },
    },
    onefile_windows_splash_screen_image: {
        name: "单文件 Windows 启动画面图像",
        desc: "在编译为 Windows 和单文件模式时，显示此图像作为启动画面。默认关闭。",
        elements: {
            splash_screen_image: {
                name: "启动画面图像",
                desc: "启动画面图像的路径。",
            },
        },
    },
    windows_uac_admin: {
        name: "请求 Windows 用户控制（管理员权限）",
        desc: "请求 Windows 用户控制，以在执行时授予管理员权限（仅限 Windows）。默认关闭。",
    },
    windows_uac_uiaccess: {
        name: "请求 Windows 用户控制（UI 访问）",
        desc: "请求 Windows 用户控制，以强制仅从少数文件夹运行，远程桌面访问（仅限 Windows）。默认关闭。",
    },
    linux_icon: {
        name: "Linux 可执行文件图标",
        desc: "为单文件二进制文件添加可执行文件图标。只能指定一次。如果可用，默认使用 Python 图标。",
        elements: {
            icon_path: {
                name: "图标路径",
                desc: "图标文件的路径。",
            },
        },
    },
}