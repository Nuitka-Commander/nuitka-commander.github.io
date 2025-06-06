// noinspection JSUnusedGlobalSymbols

/**
 * @Description Japanese language pack (LLM translation)
 * @Author: AI Assistant
 * @Date: 2025-06-01
 */
export default {
    website_info: { // その他の情報表示
        supported_to_nuitka_version: "Nuitkaバージョンまでサポート",
        report_issue: "問題を報告",
        nuitka_website: "Nuitkaウェブサイト",
        get_involved: "参加する",
        changelog: "変更履歴",
        project_homepage: "プロジェクトホームページ",
        github_website: "ウェブサイトで使用",
        local_use: "ローカル使用",
        current_version_author: "現在のバージョンの貢献者",
        open_source_license: "オープンソースライセンス",
        long_info: {
            license: "私たちはGPLv3オープンソースライセンスを使用しています。完全なライセンスはこちらで確認できます：",
            author: "現在のバージョンまで、このプロジェクトに貢献してくださった以下の貢献者の皆様に感謝いたします（順不同）：",
        },
    },
    setting: { // 設定ページ
        guide: {
            title: "ガイド",
            start: "ガイドを開始",
        },
        theme: {
            auto: "システムに従う",
            light: "ライトモード",
            dark: "ダークモード",
            theme: "テーマ",
        },
        language: {
            title: "言語",
            interface_language: "インターフェース言語",
            command_language: "コマンド言語",
        },
        nuitka_language_no_support: "現在のNuitkaバージョンはこの言語をサポートしていません",
        storage: {
            title: "ストレージ設定",
            user: "ユーザー設定",
            reset_user: "ユーザー設定をリセット",
            command: "コマンド設定",
            reset_command: "コマンド設定をリセット",
        },
    },
    nav_bar: { // ナビゲーションバー
        mode: {
            easy_mode: "簡単モード",
            full_mode: "完全モード",
            info: {
                l1: "完全なコマンドリストを表示するかどうか",
                l2: "簡単モード：よく使用されるNuitkaオプションを表示",
                l3: "完全モード：利用可能なすべてのオプションを表示",
            },
            show_raw_command: "生コマンドを表示",
            no_show_raw_command: "生コマンドを非表示",
            show_raw_command_info: "すべてのオプションで生コマンドを表示するかどうか",
        },
        now_nuitka_version: "現在選択されている設定ファイルバージョン：",
        select_nuitka_version: "使用しているNuitkaのバージョンを選択してください",
    },
    tabs: {
        edit: "編集",
        output: "出力",
        input: "入力",
    },
    input_page: {
        input_from_cli: "コマンドラインからインポート",
        start_input: "インポートを開始",
        please_input_cli_command: "Nuitkaのコマンドライン命令を入力してください",
        general: {
            unable_parse_check: "提供されたデータに認識できない属性があります。入力データが要件を満たしているか確認するか、手動で入力してください",
            please_check_down: "提供されたデータに認識できない属性があります。以下で確認してください",
        },
        json: {
            input_from_json: "JSONからインポート",
            please_input_json: "このウェブサイトからエクスポートされたJSONデータを入力してください",
            json_parse_error: "JSON解析に失敗しました。入力データがJSON形式であることを確認してください",
        },
        cli: {
            wait_bash_parser: "Bash Parserの読み込みをお待ちください",
            unsupported_operate: "入力エラー - サポートされていない演算子です。入力を確認してください",
            error_command: "入力エラー - コマンドエラーです。コマンドが正しく、正しいNuitkaバージョンを選択していることを確認してください",
        },
    },
    nuitka_elements: {
        select_placeholder: "選択",
        not_selected: "未選択",
        selected: "選択済み",
        user_provide: "これはあなたのカスタムオプションです",
        add_option: "オプションを追加",
        input_an_option: "オプションを入力",
        option_desc: "オプションの説明",
    },
    message: {
        will_del_option: "このカスタムオプションを削除しようとしています",
        continue_del: "続行しますか？",
        warning: "警告",
        OK: "OK",
        cancel: "キャンセル",
        cancel_del: "削除がキャンセルされました",
        del_success: "正常に削除されました",
        have_been_created: "このオプションは既に存在します！",
        drop_file: "ファイルをここにドロップ",
        or: "または",
        click_select_file: "ファイルを選択",
        next_step: "次のステップ",
        prev_step: "前のステップ",
        data_input_success: "データが正常にインポートされました",
        calling: "呼び出し中、お待ちください",
    },
    output_page: {
        run_nuitka_through_python: "Python経由でNuitkaを実行",
        CLI: "コマンドライン出力",
        JSON: "JSON出力",
    },
    // ユーザーガイド
    website_guide: {
        start: {
            title: "ユーザーガイド",
            desc: "Nuitka Commanderへようこそ。次に、右下角をクリックして、ステップバイステップで使い方を学びましょう",
        },
        navbar: {
            title: "ナビゲーションバー",
            desc: "これはナビゲーションバーで、いくつかのグローバル機能が設定されています",
        },
        navbar_original_command: {
            title: "ナビゲーションバー - 生コマンド切り替え",
            desc: "ここで、簡単に表示するために元のNuitkaコマンドの表示を切り替えることができます。切り替えを試してみてください",
        },
        navbar_version_select: {
            title: "ナビゲーションバー - バージョン選択",
            desc: "右側の選択ボックスで、異なるNuitkaバージョンを選択できます。あなたのバージョンに適した設定ファイルを見つけることができます。より簡単なコマンドが必要な場合は、下部の「簡単モード」を選択できます",
        },
        navbar_settings_button: {
            title: "ナビゲーションバー - 設定ボタン",
            desc: "このボタンをクリックして設定ページに入ります",
        },
        settings_page: {
            title: "設定ページ",
            desc: "次は設定ページです",
        },
        settings_page_intro: {
            title: "設定ページ - 紹介",
            desc: "これは設定インターフェースで、希望する設定を調整できます",
        },
        settings_page_tour: {
            title: "設定ページ - ガイド",
            desc: "将来ガイドを再度表示するには、ここをクリックしてください",
        },
        edit_page_buffer: {
            title: "編集ページ",
            desc: "次は編集ページです",
        },
        edit_page_intro: {
            title: "編集ページ - 紹介",
            desc: "これは編集ページで、Nuitkaコマンドを設定できます。左側をクリックしてコマンドカテゴリを切り替え、中央でコマンドを編集できます",
        },
        edit_page_edit_box: {
            title: "編集ページ - 編集ボックス",
            desc: "ここには多くの編集ボックスがあり、それぞれがパラメータを表しています。マウスを上に置くと、詳細な紹介があります。今試してみてください",
        },
        output_page_intro: {
            title: "出力ページ - 紹介",
            desc: "これは出力ページで、今編集したコマンドの出力結果を取得できます。左側をクリックして出力タイプを切り替え、中央で出力コマンドを表示できます。右上角をクリックしてコマンドを直接コピーできます。もちろん、各要素にマウスを置いて詳細な紹介を見ることもできます。",
        },
        input_page_intro: {
            title: "入力ページ - 紹介",
            desc: "これは入力ページで、コマンドを入力してからNuitka Commanderにインポートして編集できます。左側をクリックして入力タイプを切り替え、右上角でインポートを開始できます。",
        },
        website_footer: {
            title: "ウェブサイトフッター",
            desc: "これはウェブサイトのフッターで、Nuitkaウェブサイトやプロジェクトホームページなどの便利なリンクを見つけることができます。プロジェクトのバージョン番号、作者、その他の情報も見つけることができます",
        },
        end: {
            title: "終了",
            desc: "ガイドはここで終了です。ご利用いただきありがとうございます。質問や提案がございましたら、GitHubでissueを作成してください",
        },
    },
    search: { // 検索
        search_placeholder: "検索",
        please_input: "検索内容を入力してください",
        no_result: "このキーワードを含むオプションが見つかりませんでした",
        try_keyword: "他のキーワードに置き換えて再度検索してみてください",
        jump: "ジャンプ",
        select: "選択",
        exit: "終了",
    },
    // 設定ファイルバージョンタイトル、必要に応じて各バージョンにタイトルを付けることができます。そうでない場合は、デフォルトのキー名が使用されます
    nuitka_config_title: {
        simple: "簡単モード",
    },
};
