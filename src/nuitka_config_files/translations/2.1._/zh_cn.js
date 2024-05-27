// noinspection JSUnusedGlobalSymbols
export default {
    //title类请在此处翻译
    title: {
        basic: "基本设置",
        page2: "页面2",
    },
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
        desc: "当使用Python 3.4编译时，提供一个Python二进制文件路径以供Scons使用。否则，Nuitka可以使用你运行Nuitka的Python，\n" +
            "或者自行找到Nuitka安装，例如从Windows注册表中。在Windows上，需要Python 3.5或者更高版本，在非Windows上，Python 2.6或Python 2.7也可以。",
    },

};