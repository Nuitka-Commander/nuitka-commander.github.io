// noinspection JSUnusedGlobalSymbols

/**
 * @Description 中文语言包
 * @Author: erduotong
 * @Date: 2023-11-26 11:09:00
 */
export default {
    website_info: { //杂碎的信息显示
        supported_to_nuitka_version: "支持到 Nuitka 版本",
        report_issue: "报告问题",
        nuitka_website: "Nuitka官网",
        get_involved: "参与贡献",
        changelog: "更新日志",
        project_homepage: "项目主页",
        github_website: "在官网源使用",
        local_use: "本地使用",
        current_version_author: "当前版本贡献者",
        open_source_license: "开源协议",
        long_info: {
            license: "我们使用GPLv3开源协议，您可以在此处查看完整协议:",
            author: "截止到目前版本，感谢以下贡献者为此项目做出的贡献(排名不分先后):",
        },
    },
    setting: { //设置页面
        guide: {
            title: "教程",
            start: "开始教程",
        },
        theme: {
            auto: "跟随系统",
            light: "浅色模式",
            dark: "深色模式",
            theme: "主题",
        },
        language: {
            title: "语言",
            interface_language: "界面语言",
            command_language: "命令语言",
        },
        nuitka_language_no_support: "当前Nuitka版本暂不支持该语言",
        storage: {
            title: "存储设置",
            user: "用户设置",
            reset_user: "重置用户设置",
            command: "命令设置",
            reset_command: "重置命令设置",
        },


    },
    nav_bar: { //导航栏
        mode: {
            easy_mode: "简单模式",
            full_mode: "完整模式",
            info: {
                l1: "是否显示完整的指令列表",
                l2: "简单模式:显示Nuitka常用选项",
                l3: "复杂模式:显示完整的可用选项",
            },
            show_raw_command: "显示原命令",
            no_show_raw_command: "隐藏原命令",
            show_raw_command_info: "是否在所有选项中显示原始命令",
        },
        now_nuitka_version: "当前选择的配置文件版本:",
        select_nuitka_version: "选择您使用的Nuitka的版本",

    },
    tabs: {
        edit: "编辑",
        output: "输出",
        input: "输入",
    },
    input_page: {
        input_from_cli: "从命令行导入",
        start_input: "开始导入",
        please_input_cli_command: "请输入Nuitka的命令行指令",
        general: {
            unable_parse_check: "提供的数据中存在无法识别的属性，请检查输入的数据是否符合要求或者手动输入",
            please_check_down: "提供的数据中存在无法识别的属性，请在下方检查",
        },
        json: {
            input_from_json: "从JSON导入",
            please_input_json: "请输入从本网站导出的JSON数据",
            json_parse_error: "JSON解析失败，请检查输入的数据是否符合JSON格式",
        },
        cli: {
            wait_bash_parser: "请等待Bash Parser加载完毕",
            unsupported_operate: "输入错误——不支持操作符，请检查您的输入",
            error_command: "输入错误——命令错误，请确保你的命令正确，并选择了正确的Nuitka版本",
        },
    },
    nuitka_elements: {
        select_placeholder: "选择",
        not_selected: "未选择",
        selected: "已选择",
        user_provide: "这是你自定义的选项",
        add_option: "添加一个选项",
        input_an_option: "输入一个选项",
        option_desc: "选项描述",
    },
    message: {
        will_del_option: "你即将删除此该自定义选项",
        continue_del: "要继续吗?",
        warning: "警告",
        OK: "确认",
        cancel: "取消",
        cancel_del: "已取消删除",
        del_success: "删除成功",
        have_been_created: "该选项已存在!",
        drop_file: "将文件拖拽到此处",
        or: "或",
        click_select_file: "选择一个文件",
        next_step: "下一步",
        prev_step: "上一步",
        data_input_success: "数据导入成功",
        calling: "正在调用，请稍后",
    },
    output_page: {
        run_nuitka_through_python: "通过Python运行Nuitka",
        CLI: "命令行输出",
        JSON: "JSON输出",

    },
    //使用说明
    website_guide: {
        start: {
            title: "使用教程",
            desc: "欢迎使用Nuitka Commander，接下来，请点击右下角，让我们一步步学习如何使用",
        },
        navbar: {
            title: "导航栏",
            desc: "这里是导航栏，一些全局的功能都在这里设置",
        },
        navbar_original_command: {
            title: "导航栏——原始命令切换",
            desc: "这里可以切换是否展示原始的nuitka命令，方便查看。你可以尝试切换一下",
        },
        navbar_version_select: {
            title: "导航栏——版本选择",
            desc: "在右侧的选择框可以选择不同的Nuitka版本，你可以找到适合自己版本的配置文件。如果你想要一个精简一点的命令，你可以选择最下方的'简单模式'",
        },
        navbar_settings_button: {
            title: "导航栏——设置按钮",
            desc: "点击这个按钮，就可以进入到设置页面中",
        },
        settings_page: {
            title: "设置页面",
            desc: "接下来，是设置页面",
        },
        settings_page_intro: {
            title: "设置页面——介绍",
            desc: "这里是设置界面，你可以在这里调整你心怡的设置",
        },
        settings_page_tour: {
            title: "设置页面——引导",
            desc: "若要在将来重新查看教程，可以点击这里",
        },
        edit_page_buffer: {
            title: "编辑页面",
            desc: "接下来，是编辑页面",
        },
        edit_page_intro: {
            title: "编辑页面——介绍",
            desc: "这里是编辑页面，你可以在这里配置你的nuitka命令。你可以点击左侧来切换命令的分类，在中间进行命令的编辑",
        },
        edit_page_edit_box: {
            title: "编辑页面——编辑框",
            desc: "这里面具有很多编辑框，每个都代表了一个参数。若是让鼠标悬停在上面，会有详细的介绍。不妨现在试试",
        },
        output_page_intro: {
            title: "输出页面——介绍",
            desc: "这里是输出页面，你可以在这里获得你刚刚编辑的命令的输出成果。你可以点击左侧来切换输出的种类，中间查看输出的命令。点击右上角可直接复制命令。当然，你也可以将鼠标悬停在每个元素上面，查看详细的介绍。",
        },
        input_page_intro: {
            title: "输入页面——介绍",
            desc: "这里是输入页面，你可以在这里输入命令，然后将其导入到nuitka commander中进行编辑。你可以点击左侧切换输入的种类，右上角开始导入。",
        },
        website_footer: {
            title: "网页底部",
            desc: "这里是网页底部，你可以在这里找到一些有用的链接，例如Nuitka官网和项目主页。同时，也能找到项目的版本号，作者等信息",
        },
        end: {
            title: "结束",
            desc: "教程就到这里结束了，感谢你的使用。若是有任何问题或者建议，欢迎在github上提出Issue",
        },
    },
    search: { //搜索
        search_placeholder: "搜索",
        please_input: "请输入搜索内容",
        no_result: "没有找到包含该关键字的选项",
        try_keyword: "请尝试替换其他的关键字再次搜索",
        jump: "跳转",
        select: "选择",
        exit: "退出",

    },
    //配置文件版本的标题 如果你想要的话其实哪个版本都能给一个 如果没有的话就调用默认的key name
    nuitka_config_title: {
        simple: "简单模式",
    },


};