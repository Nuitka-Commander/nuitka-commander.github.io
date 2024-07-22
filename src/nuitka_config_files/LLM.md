请你根据 nuitka help 信息(英文)，分开生成 nuitka commander 的配置文件和描述文件(中文)。
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
nuitka help:
"--standalone          Enable standalone mode for output. This allows you to
                        transfer the created binary to other machines without
                        it using an existing Python installation. This also
                        means it will become big. It implies these option: "--
                        follow-imports" and "--python-flag=no_site". Defaults
                        to off."
配置文件：
standalone: add_option.bool(
            "standalone",
            {
                original: "--standalone",
            },
            true,
            false),
描述文件:
standalone: {
    name: "独立模式",
    desc: "启用独立模式进行输出。这允许你将二进制文件传输到其他机器, 而无需使用已有的Python环境。这也意味着它将变得很大\n它将启用这些选项: \"--follow-imports\" 和 \"--python-flag=no_site\"。",
},

例子2:
nuitka help:
"--onefile-tempdir-spec=ONEFILE_TEMPDIR_SPEC
                        Use this as a folder to unpack to in onefile mode.
                        Defaults to '{TEMP}/onefile_{PID}_{TIME}', i.e. user
                        temporary directory and being non-static it's removed.
                        Use e.g. a string like
                        '{CACHE_DIR}/{COMPANY}/{PRODUCT}/{VERSION}' which is a
                        good static cache path, this will then not be removed."
配置文件:
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
描述文件:
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

例子3:
nuitka help:
"--main=PATH           If specified once, this takes the place of the
                    positional argument, i.e. the filename to compile.
                    When given multiple times, it enables "multidist" (see
                    User Manual) it allows you to create binaries that
                    depending on file name or invocation name."
配置文件:
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
    ["main"],
),
描述文件:
main: {
    name: "主程序路径",
    desc: "如果只指定一次(如--main=\"1.py\")，这将取代位置参数，也就是要编译的文件名(入口)。\n" + "如果指定多次(如--main=\"1.py\" --main=\"2.py\"), 它将启用\"multidist\",它允许您创建依赖于文件名或调用名的二进制文件。\n" + "(允许多个主程序使用同一套编译参数)\n",
},

任务:--spacy-language-model=INCLUDE_LANGUAGE_MODELS
                        Spacy language models to use. Can be specified
                        multiple times. Use 'all' to include all downloaded
                        models.