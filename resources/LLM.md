请你根据 nuitka help json 描述文件，分开生成 nuitka commander 的配置文件和描述文件。注意所有 key (包括描述文件) 不要添加双引号
Bool 类型配置函数签名(生成一个Bool元素):
(i18n: string, command: {
    original: string;
}, enabled: boolean, default_value: boolean)

multi_elements 函数签名(生成一个多选元素):
(i18n: string, command: {
    original: string;
}, enabled: boolean, user_provide?: boolean)

single_option 函数签名(生成一个单选元素):
(i18n: string, command: {
    original: string;
}, enabled: boolean, elements: object, default_value: string)

defined_multi 函数签名:
@Description — 生成一个多选元素
@param i18n
@param command
@param enabled
@param elements — 元素列表，key为一个string,value是一个对象，需要使用multi_elements生成
@param default_value — 默认值 填写elements中的键值组成的数组 如果为空的话请填写空数组[]
@param component — 指定使用组件的类型 use_default为自动判断
(i18n: string, command: {
    original: string;
}, enabled: boolean, elements: object, default_value: string[], component?: any)

definable_single 函数签名:
@Description — 生成一个可以添加选项的单选元素
@param i18n
@param command
@param enabled
@param elements — 元素列表，key为一个string,value是一个对象，需要使用multi_elements生成 其中user_provide允许为true
@param default_value — 默认值 填写elements中的键值 如果为空的话请填写空字符串""
@param clearable — 是否可以为空
@param component — 指定使用组件的类型 不指定则自动判断
 (i18n: string, command: {
    original: string;
}, enabled: boolean, elements: object, default_value: string, clearable?: boolean, component?: "default")

definable_multi 函数签名:
@Description — 生成一个可以添加选项的多选元素
@param i18n
@param command
@param enabled
@param elements — 元素列表，key为一个string,value是一个对象，需要使用multi_elements生成 其中user_provide允许为true
@param default_value — 默认值 填写elements中的键值组成的数组 如果为空的话请填写空数组[]
@param component — 指定使用组件的类型 不指定则自动判断
(i18n: string, command: {
    original: string;
}, enabled: boolean, elements: object, default_value: string[], component?: "default")

以下是例子1(bool 类型)：
nuitka help json 描述文件:
"--clang": {
        "raw_parameter": "--clang",
        "chinese_parameter": "强制使用clang",
        "raw_introduction": "Enforce the use of clang. On Windows this requires a working Visual Studio\nversion to piggy back on. Defaults to off.",
        "chinese_introduction": "强制使用 clang 编译。在 Windows 系统上，这需要一个正常运行的 Visual Studio 版本来支持。默认关闭。"
      },
配置文件：
clang: add_option.bool(
    "clang",
    {
        original: "--clang",
    },
    true,
    false
),
commander 描述文件:
clang: {
    name: "强制使用 clang",
    desc: "强制使用 clang 编译器。在 Windows 上，这需要一个可以依赖的工作 Visual Studio 版本。默认关闭。",
},

例子2:
nuitka help json 描述文件:
"--static-libpython=choice": {
        "raw_parameter": "--static-libpython=choice",
        "chinese_parameter": "使用Python的静态链接库=选择",
        "raw_introduction": "Use static link library of Python. Allowed values are \"yes\", \"no\", and \"auto\"\n(when it's known to work). Defaults to \"auto\".",
        "chinese_introduction": "使用Python的静态链接库。允许的值有 \"yes\"（是）、\"no\"（否）和 \"auto\"（自动）(已知可用)。默认为 \"auto\"。"
      },
配置文件:
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
            true
        ),
        no: add_option.multi_elements(
            "no",
            {
                original: "no",
            },
            true
        ),
        auto: add_option.multi_elements(
            "auto",
            {
                original: "auto",
            },
            true
        ),
    },
    "auto"
),
commander 描述文件:
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

例子3:
nuitka help json 描述文件:
"--static-libpython=choice": {
    "raw_parameter": "--static-libpython=choice",
    "chinese_parameter": "使用Python的静态链接库=选择",
    "raw_introduction": "Use static link library of Python. Allowed values are \"yes\", \"no\", and \"auto\"\n(when it's known to work). Defaults to \"auto\".",
    "chinese_introduction": "使用Python的静态链接库。允许的值有 \"yes\"（是）、\"no\"（否）和 \"auto\"（自动）(已知可用)。默认为 \"auto\"。"
},
配置文件:
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
    "auto"
),
commander 描述文件:
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

任务: