// noinspection JSUnusedGlobalSymbols

/**
 * @Description Korean language pack
 * @Author: GitHub Copilot
 * @Date: 2025-06-01
 */
export default {
    website_info: { // 웹사이트 정보 표시
        supported_to_nuitka_version: "Nuitka 버전까지 지원",
        report_issue: "문제 신고",
        nuitka_website: "Nuitka 웹사이트",
        get_involved: "기여하기",
        changelog: "변경 로그",
        project_homepage: "프로젝트 홈페이지",
        github_website: "웹사이트에서 사용",
        local_use: "로컬 사용",
        current_version_author: "현재 버전 기여자",
        open_source_license: "오픈 소스 라이선스",
        long_info: {
            license: "우리는 GPLv3 오픈 소스 라이선스를 사용합니다. 전체 라이선스는 여기에서 볼 수 있습니다:",
            author: "현재 버전까지, 이 프로젝트에 기여해 주신 다음 기여자들에게 감사드립니다 (특별한 순서 없음):",
        },
    },
    setting: { // 설정 페이지
        guide: {
            title: "가이드",
            start: "가이드 시작",
        },
        theme: {
            auto: "시스템 따름",
            light: "라이트 모드",
            dark: "다크 모드",
            theme: "테마",
        },
        language: {
            title: "언어",
            interface_language: "인터페이스 언어",
            command_language: "명령어 언어",
        },
        nuitka_language_no_support: "현재 Nuitka 버전은 이 언어를 지원하지 않습니다",
        storage: {
            title: "저장소 설정",
            user: "사용자 설정",
            reset_user: "사용자 설정 재설정",
            command: "명령어 설정",
            reset_command: "명령어 설정 재설정",
        },
    },
    nav_bar: { // 네비게이션 바
        mode: {
            easy_mode: "간편 모드",
            full_mode: "전체 모드",
            info: {
                l1: "전체 명령어 목록 표시 여부",
                l2: "간편 모드: 자주 사용되는 Nuitka 옵션 표시",
                l3: "전체 모드: 모든 사용 가능한 옵션 표시",
            },
            show_raw_command: "원시 명령어 보기",
            no_show_raw_command: "원시 명령어 숨기기",
            show_raw_command_info: "모든 옵션에서 원시 명령어 표시 여부",
        },
        now_nuitka_version: "현재 선택된 구성 파일 버전:",
        select_nuitka_version: "사용 중인 Nuitka 버전을 선택하세요",
    },
    tabs: {
        edit: "편집",
        output: "출력",
        input: "입력",
    },
    input_page: {
        input_from_cli: "명령줄에서 가져오기",
        start_input: "가져오기 시작",
        please_input_cli_command: "Nuitka 명령줄 명령어를 입력해 주세요",
        general: {
            unable_parse_check: "제공된 데이터에 인식할 수 없는 속성이 있습니다. 입력 데이터가 요구사항을 충족하는지 확인하거나 수동으로 입력하세요",
            please_check_down: "제공된 데이터에 인식할 수 없는 속성이 있습니다. 아래를 확인하세요",
        },
        json: {
            input_from_json: "JSON에서 가져오기",
            please_input_json: "이 웹사이트에서 내보낸 JSON 데이터를 입력해 주세요",
            json_parse_error: "JSON 파싱 실패, 입력 데이터가 JSON 형식인지 확인하세요",
        },
        cli: {
            wait_bash_parser: "Bash Parser 로딩을 기다려 주세요",
            unsupported_operate: "입력 오류 - 지원되지 않는 연산자, 입력을 확인하세요",
            error_command: "입력 오류 - 명령어 오류, 명령어가 올바른지 확인하고 올바른 Nuitka 버전을 선택했는지 확인하세요",
        },
    },
    nuitka_elements: {
        select_placeholder: "선택",
        not_selected: "선택되지 않음",
        selected: "선택됨",
        user_provide: "이것은 사용자 정의 옵션입니다",
        add_option: "옵션 추가",
        input_an_option: "옵션 입력",
        option_desc: "옵션 설명",
    },
    message: {
        will_del_option: "이 사용자 정의 옵션을 삭제하려고 합니다",
        continue_del: "계속하시겠습니까?",
        warning: "경고",
        OK: "확인",
        cancel: "취소",
        cancel_del: "삭제 취소됨",
        del_success: "성공적으로 삭제됨",
        have_been_created: "이 옵션은 이미 존재합니다!",
        drop_file: "파일을 여기로 드래그하세요",
        or: "또는",
        click_select_file: "파일 선택",
        next_step: "다음 단계",
        prev_step: "이전 단계",
        data_input_success: "데이터 가져오기 성공",
        calling: "호출 중, 기다려 주세요",
    },
    output_page: {
        run_nuitka_through_python: "Python을 통해 Nuitka 실행",
        CLI: "명령줄 출력",
        JSON: "JSON 출력",
    },
    // 사용자 가이드
    website_guide: {
        start: {
            title: "사용자 가이드",
            desc: "Nuitka Commander에 오신 것을 환영합니다. 다음으로, 오른쪽 하단 모서리를 클릭하여 단계별로 사용법을 배워보겠습니다",
        },
        navbar: {
            title: "네비게이션 바",
            desc: "이것은 네비게이션 바입니다. 여기서 일부 글로벌 기능이 설정됩니다",
        },
        navbar_original_command: {
            title: "네비게이션 바 - 원시 명령어 토글",
            desc: "여기서 쉬운 조회를 위해 원시 Nuitka 명령어를 표시할지 토글할 수 있습니다. 토글을 시도해 볼 수 있습니다",
        },
        navbar_version_select: {
            title: "네비게이션 바 - 버전 선택",
            desc: "오른쪽 선택 상자에서 Nuitka의 다른 버전을 선택할 수 있습니다. 버전에 적합한 구성 파일을 찾을 수 있습니다. 더 간단한 명령어를 원한다면 하단의 '간편 모드'를 선택할 수 있습니다",
        },
        navbar_settings_button: {
            title: "네비게이션 바 - 설정 버튼",
            desc: "이 버튼을 클릭하여 설정 페이지로 이동하세요",
        },
        settings_page: {
            title: "설정 페이지",
            desc: "다음은 설정 페이지입니다",
        },
        settings_page_intro: {
            title: "설정 페이지 - 소개",
            desc: "이것은 설정 인터페이스입니다. 여기서 원하는 설정을 조정할 수 있습니다",
        },
        settings_page_tour: {
            title: "설정 페이지 - 가이드",
            desc: "미래에 가이드를 다시 보려면 여기를 클릭할 수 있습니다",
        },
        edit_page_buffer: {
            title: "편집 페이지",
            desc: "다음은 편집 페이지입니다",
        },
        edit_page_intro: {
            title: "편집 페이지 - 소개",
            desc: "이것은 편집 페이지입니다. 여기서 Nuitka 명령어를 구성할 수 있습니다. 왼쪽을 클릭하여 명령어 카테고리를 전환하고 가운데에서 명령어를 편집할 수 있습니다",
        },
        edit_page_edit_box: {
            title: "편집 페이지 - 편집 상자",
            desc: "여기에 많은 편집 상자가 있으며, 각각은 매개변수를 나타냅니다. 마우스를 위에 올리면 자세한 소개가 있을 것입니다. 지금 시도해 보세요",
        },
        output_page_intro: {
            title: "출력 페이지 - 소개",
            desc: "이것은 출력 페이지입니다. 여기서 방금 편집한 명령어의 출력 결과를 얻을 수 있습니다. 왼쪽을 클릭하여 출력 유형을 전환하고 가운데에서 출력 명령어를 볼 수 있습니다. 오른쪽 상단을 클릭하여 명령어를 직접 복사하세요. 물론 각 요소에 마우스를 올려 자세한 소개를 볼 수도 있습니다.",
        },
        input_page_intro: {
            title: "입력 페이지 - 소개",
            desc: "이것은 입력 페이지입니다. 여기서 명령어를 입력하고 편집을 위해 Nuitka Commander로 가져올 수 있습니다. 왼쪽을 클릭하여 입력 유형을 전환하고 오른쪽 상단에서 가져오기를 시작할 수 있습니다.",
        },
        website_footer: {
            title: "웹사이트 푸터",
            desc: "이것은 웹사이트 푸터입니다. 여기서 Nuitka 웹사이트 및 프로젝트 홈페이지와 같은 유용한 링크를 찾을 수 있습니다. 프로젝트 버전 번호, 작성자 및 기타 정보도 찾을 수 있습니다",
        },
        end: {
            title: "끝",
            desc: "가이드는 여기서 끝납니다. 사용해 주셔서 감사합니다. 질문이나 제안이 있으시면 GitHub에서 이슈를 자유롭게 제기해 주세요",
        },
    },
    search: { // 검색
        search_placeholder: "검색",
        please_input: "검색 내용을 입력해 주세요",
        no_result: "이 키워드를 포함하는 옵션을 찾을 수 없습니다",
        try_keyword: "다른 키워드로 바꿔서 다시 검색해 보세요",
        jump: "이동",
        select: "선택",
        exit: "나가기",
    },
    // 구성 파일 버전 제목, 원한다면 각 버전에 제목을 줄 수 있습니다. 그렇지 않으면 기본 키 이름이 사용됩니다
    nuitka_config_title: {
        simple: "간단 모드",
    },
};
