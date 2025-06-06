// noinspection JSUnusedGlobalSymbols

/**
 * @Description Traditional Chinese language pack
 * @Author: GitHub Copilot
 * @Date: 2025-06-01
 */
export default {
    website_info: { // 網站信息展示
        supported_to_nuitka_version: "支援至 Nuitka 版本",
        report_issue: "回報問題",
        nuitka_website: "Nuitka 官方網站",
        get_involved: "參與貢獻",
        changelog: "變更日誌",
        project_homepage: "專案首頁",
        github_website: "在網站上使用",
        local_use: "本地使用",
        current_version_author: "當前版本貢獻者",
        open_source_license: "開源許可證",
        long_info: {
            license: "我們使用 GPLv3 開源許可證，您可以在此檢視完整許可證：",
            author: "截至當前版本，感謝以下貢獻者對此專案的貢獻（排名不分先後）：",
        },
    },
    setting: { // 設定頁面
        guide: {
            title: "指南",
            start: "開始指南",
        },
        theme: {
            auto: "跟隨系統",
            light: "淺色模式",
            dark: "深色模式",
            theme: "主題",
        },
        language: {
            title: "語言",
            interface_language: "介面語言",
            command_language: "指令語言",
        },
        nuitka_language_no_support: "當前 Nuitka 版本不支援此語言",
        storage: {
            title: "儲存設定",
            user: "使用者設定",
            reset_user: "重置使用者設定",
            command: "指令設定",
            reset_command: "重置指令設定",
        },
    },
    nav_bar: { // 導航欄
        mode: {
            easy_mode: "簡易模式",
            full_mode: "完整模式",
            info: {
                l1: "是否顯示完整的指令列表",
                l2: "簡易模式：顯示常用的 Nuitka 選項",
                l3: "完整模式：顯示所有可用選項",
            },
            show_raw_command: "顯示原始指令",
            no_show_raw_command: "隱藏原始指令",
            show_raw_command_info: "是否在所有選項中顯示原始指令",
        },
        now_nuitka_version: "當前選擇的設定檔版本：",
        select_nuitka_version: "選擇您使用的 Nuitka 版本",
    },
    tabs: {
        edit: "編輯",
        output: "輸出",
        input: "輸入",
    },
    input_page: {
        input_from_cli: "從指令行匯入",
        start_input: "開始匯入",
        please_input_cli_command: "請輸入 Nuitka 指令行指令",
        general: {
            unable_parse_check: "提供的資料中有無法識別的屬性，請檢查輸入資料是否符合要求或手動輸入",
            please_check_down: "提供的資料中有無法識別的屬性，請檢查以下內容",
        },
        json: {
            input_from_json: "從 JSON 匯入",
            please_input_json: "請輸入從此網站匯出的 JSON 資料",
            json_parse_error: "JSON 解析失敗，請檢查輸入資料是否為 JSON 格式",
        },
        cli: {
            wait_bash_parser: "請等待 Bash Parser 載入",
            unsupported_operate: "輸入錯誤 - 不支援的操作符，請檢查您的輸入",
            error_command: "輸入錯誤 - 指令錯誤，請確保您的指令正確且已選擇正確的 Nuitka 版本",
        },
    },
    nuitka_elements: {
        select_placeholder: "選擇",
        not_selected: "未選擇",
        selected: "已選擇",
        user_provide: "這是您的自訂選項",
        add_option: "新增選項",
        input_an_option: "輸入選項",
        option_desc: "選項描述",
    },
    message: {
        will_del_option: "您即將刪除此自訂選項",
        continue_del: "是否繼續？",
        warning: "警告",
        OK: "確定",
        cancel: "取消",
        cancel_del: "已取消刪除",
        del_success: "刪除成功",
        have_been_created: "此選項已存在！",
        drop_file: "拖曳檔案到此處",
        or: "或",
        click_select_file: "選擇檔案",
        next_step: "下一步",
        prev_step: "上一步",
        data_input_success: "資料匯入成功",
        calling: "呼叫中，請稍候",
    },
    output_page: {
        run_nuitka_through_python: "透過 Python 執行 Nuitka",
        CLI: "指令行輸出",
        JSON: "JSON 輸出",
    },
    // 使用者指南
    website_guide: {
        start: {
            title: "使用者指南",
            desc: "歡迎來到 Nuitka Commander，接下來，請點擊右下角，讓我們逐步學習如何使用",
        },
        navbar: {
            title: "導航欄",
            desc: "這是導航欄，這裡設定了一些全域功能",
        },
        navbar_original_command: {
            title: "導航欄 - 原始指令切換",
            desc: "這裡可以切換是否顯示原始 Nuitka 指令以便檢視。您可以嘗試切換",
        },
        navbar_version_select: {
            title: "導航欄 - 版本選擇",
            desc: "在右側的選擇框中，您可以選擇不同版本的 Nuitka。您可以找到適合您版本的設定檔。如果您想要更簡單的指令，可以在底部選擇「簡易模式」",
        },
        navbar_settings_button: {
            title: "導航欄 - 設定按鈕",
            desc: "點擊此按鈕進入設定頁面",
        },
        settings_page: {
            title: "設定頁面",
            desc: "接下來，是設定頁面",
        },
        settings_page_intro: {
            title: "設定頁面 - 介紹",
            desc: "這是設定介面，您可以在這裡調整您所需的設定",
        },
        settings_page_tour: {
            title: "設定頁面 - 指南",
            desc: "若要在將來再次檢視指南，您可以點擊這裡",
        },
        edit_page_buffer: {
            title: "編輯頁面",
            desc: "接下來，是編輯頁面",
        },
        edit_page_intro: {
            title: "編輯頁面 - 介紹",
            desc: "這是編輯頁面，您可以在這裡設定您的 Nuitka 指令。您可以點擊左側切換指令類別並在中間編輯指令",
        },
        edit_page_edit_box: {
            title: "編輯頁面 - 編輯框",
            desc: "這裡有許多編輯框，每個都代表一個參數。如果您將滑鼠懸停在上面，會有詳細介紹。現在試試看",
        },
        output_page_intro: {
            title: "輸出頁面 - 介紹",
            desc: "這是輸出頁面，您可以在這裡獲得剛才編輯的指令的輸出結果。您可以點擊左側切換輸出類型並在中間檢視輸出指令。點擊右上角可直接複製指令。當然，您也可以將滑鼠懸停在每個元素上檢視詳細介紹。",
        },
        input_page_intro: {
            title: "輸入頁面 - 介紹",
            desc: "這是輸入頁面，您可以在這裡輸入指令然後匯入到 Nuitka Commander 進行編輯。您可以點擊左側切換輸入類型並在右上角開始匯入。",
        },
        website_footer: {
            title: "網站頁尾",
            desc: "這是網站頁尾，您可以在這裡找到一些有用的連結，例如 Nuitka 網站和專案首頁。您還可以找到專案版本號、作者和其他資訊",
        },
        end: {
            title: "結束",
            desc: "指南到此結束，感謝您的使用。如果您有任何問題或建議，歡迎在 GitHub 上提出 issue",
        },
    },
    search: { // 搜尋
        search_placeholder: "搜尋",
        please_input: "請輸入搜尋內容",
        no_result: "未找到包含此關鍵字的選項",
        try_keyword: "請嘗試替換其他關鍵字並重新搜尋",
        jump: "跳轉",
        select: "選擇",
        exit: "退出",
    },
    // 設定檔版本標題，如果您想要，可以為每個版本提供標題。如果沒有，將使用預設的鍵名
    nuitka_config_title: {
        simple: "簡易模式",
    },
};
