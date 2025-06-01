// noinspection JSUnusedGlobalSymbols

/**
 * @Description Vietnamese language pack
 * @Author: GitHub Copilot
 * @Date: 2025-06-01
 */
export default {
    website_info: { // Hiển thị thông tin website
        supported_to_nuitka_version: "Hỗ trợ đến phiên bản Nuitka",
        report_issue: "Báo cáo vấn đề",
        nuitka_website: "Website Nuitka",
        get_involved: "Tham gia đóng góp",
        changelog: "Nhật ký thay đổi",
        project_homepage: "Trang chủ dự án",
        github_website: "Sử dụng trên website",
        local_use: "Sử dụng cục bộ",
        current_version_author: "Người đóng góp phiên bản hiện tại",
        open_source_license: "Giấy phép mã nguồn mở",
        long_info: {
            license: "Chúng tôi sử dụng giấy phép mã nguồn mở GPLv3, bạn có thể xem giấy phép đầy đủ tại đây:",
            author: "Đến phiên bản hiện tại, cảm ơn những người đóng góp sau đây cho sự đóng góp của họ vào dự án này (không theo thứ tự cụ thể):",
        },
    },
    setting: { // Trang cài đặt
        guide: {
            title: "Hướng dẫn",
            start: "Bắt đầu hướng dẫn",
        },
        theme: {
            auto: "Theo hệ thống",
            light: "Chế độ sáng",
            dark: "Chế độ tối",
            theme: "Chủ đề",
        },
        language: {
            title: "Ngôn ngữ",
            interface_language: "Ngôn ngữ giao diện",
            command_language: "Ngôn ngữ lệnh",
        },
        nuitka_language_no_support: "Phiên bản Nuitka hiện tại không hỗ trợ ngôn ngữ này",
        storage: {
            title: "Cài đặt lưu trữ",
            user: "Cài đặt người dùng",
            reset_user: "Đặt lại cài đặt người dùng",
            command: "Cài đặt lệnh",
            reset_command: "Đặt lại cài đặt lệnh",
        },
    },
    nav_bar: { // Thanh điều hướng
        mode: {
            easy_mode: "Chế độ dễ",
            full_mode: "Chế độ đầy đủ",
            info: {
                l1: "Có hiển thị danh sách lệnh đầy đủ không",
                l2: "Chế độ dễ: Hiển thị các tùy chọn Nuitka thường dùng",
                l3: "Chế độ đầy đủ: Hiển thị tất cả các tùy chọn có sẵn",
            },
            show_raw_command: "Hiển thị lệnh thô",
            no_show_raw_command: "Ẩn lệnh thô",
            show_raw_command_info: "Có hiển thị lệnh thô trong tất cả các tùy chọn không",
        },
        now_nuitka_version: "Phiên bản tệp cấu hình hiện tại được chọn:",
        select_nuitka_version: "Chọn phiên bản Nuitka bạn đang sử dụng",
    },
    tabs: {
        edit: "Chỉnh sửa",
        output: "Đầu ra",
        input: "Đầu vào",
    },
    input_page: {
        input_from_cli: "Nhập từ dòng lệnh",
        start_input: "Bắt đầu nhập",
        please_input_cli_command: "Vui lòng nhập lệnh dòng lệnh Nuitka",
        general: {
            unable_parse_check: "Có các thuộc tính không nhận dạng được trong dữ liệu được cung cấp, vui lòng kiểm tra xem dữ liệu đầu vào có đáp ứng yêu cầu không hoặc nhập thủ công",
            please_check_down: "Có các thuộc tính không nhận dạng được trong dữ liệu được cung cấp, vui lòng kiểm tra bên dưới",
        },
        json: {
            input_from_json: "Nhập từ JSON",
            please_input_json: "Vui lòng nhập dữ liệu JSON được xuất từ website này",
            json_parse_error: "Phân tích JSON thất bại, vui lòng kiểm tra xem dữ liệu đầu vào có ở định dạng JSON không",
        },
        cli: {
            wait_bash_parser: "Vui lòng đợi Bash Parser tải",
            unsupported_operate: "Lỗi đầu vào - toán tử không được hỗ trợ, vui lòng kiểm tra đầu vào của bạn",
            error_command: "Lỗi đầu vào - lỗi lệnh, vui lòng đảm bảo lệnh của bạn đúng và bạn đã chọn đúng phiên bản Nuitka",
        },
    },
    nuitka_elements: {
        select_placeholder: "Chọn",
        not_selected: "Chưa chọn",
        selected: "Đã chọn",
        user_provide: "Đây là tùy chọn tùy chỉnh của bạn",
        add_option: "Thêm tùy chọn",
        input_an_option: "Nhập một tùy chọn",
        option_desc: "Mô tả tùy chọn",
    },
    message: {
        will_del_option: "Bạn sắp xóa tùy chọn tùy chỉnh này",
        continue_del: "Bạn có muốn tiếp tục không?",
        warning: "Cảnh báo",
        OK: "OK",
        cancel: "Hủy",
        cancel_del: "Đã hủy xóa",
        del_success: "Xóa thành công",
        have_been_created: "Tùy chọn này đã tồn tại!",
        drop_file: "Kéo tệp vào đây",
        or: "hoặc",
        click_select_file: "Chọn tệp",
        next_step: "Bước tiếp theo",
        prev_step: "Bước trước",
        data_input_success: "Nhập dữ liệu thành công",
        calling: "Đang gọi, vui lòng đợi",
    },
    output_page: {
        run_nuitka_through_python: "Chạy Nuitka thông qua Python",
        CLI: "Đầu ra dòng lệnh",
        JSON: "Đầu ra JSON",
    },
    // Hướng dẫn người dùng
    website_guide: {
        start: {
            title: "Hướng dẫn người dùng",
            desc: "Chào mừng đến với Nuitka Commander, tiếp theo, vui lòng nhấp vào góc phải dưới, hãy học cách sử dụng từng bước",
        },
        navbar: {
            title: "Thanh điều hướng",
            desc: "Đây là thanh điều hướng, nơi thiết lập một số chức năng toàn cục",
        },
        navbar_original_command: {
            title: "Thanh điều hướng - Chuyển đổi lệnh thô",
            desc: "Ở đây bạn có thể chuyển đổi việc có hiển thị lệnh Nuitka thô để xem dễ dàng. Bạn có thể thử chuyển đổi",
        },
        navbar_version_select: {
            title: "Thanh điều hướng - Lựa chọn phiên bản",
            desc: "Trong hộp chọn bên phải, bạn có thể chọn các phiên bản khác nhau của Nuitka. Bạn có thể tìm tệp cấu hình phù hợp với phiên bản của mình. Nếu bạn muốn lệnh đơn giản hơn, bạn có thể chọn 'Chế độ dễ' ở dưới",
        },
        navbar_settings_button: {
            title: "Thanh điều hướng - Nút cài đặt",
            desc: "Nhấp vào nút này để vào trang cài đặt",
        },
        settings_page: {
            title: "Trang cài đặt",
            desc: "Tiếp theo, là trang cài đặt",
        },
        settings_page_intro: {
            title: "Trang cài đặt - Giới thiệu",
            desc: "Đây là giao diện cài đặt, nơi bạn có thể điều chỉnh các cài đặt mong muốn",
        },
        settings_page_tour: {
            title: "Trang cài đặt - Hướng dẫn",
            desc: "Để xem lại hướng dẫn trong tương lai, bạn có thể nhấp vào đây",
        },
        edit_page_buffer: {
            title: "Trang chỉnh sửa",
            desc: "Tiếp theo, là trang chỉnh sửa",
        },
        edit_page_intro: {
            title: "Trang chỉnh sửa - Giới thiệu",
            desc: "Đây là trang chỉnh sửa, nơi bạn có thể cấu hình các lệnh Nuitka của mình. Bạn có thể nhấp vào bên trái để chuyển đổi danh mục lệnh và chỉnh sửa lệnh ở giữa",
        },
        edit_page_edit_box: {
            title: "Trang chỉnh sửa - Hộp chỉnh sửa",
            desc: "Có nhiều hộp chỉnh sửa ở đây, mỗi hộp đại diện cho một tham số. Nếu bạn di chuột qua nó, sẽ có giới thiệu chi tiết. Hãy thử bây giờ",
        },
        output_page_intro: {
            title: "Trang đầu ra - Giới thiệu",
            desc: "Đây là trang đầu ra, nơi bạn có thể nhận kết quả đầu ra của các lệnh mà bạn vừa chỉnh sửa. Bạn có thể nhấp vào bên trái để chuyển đổi loại đầu ra và xem lệnh đầu ra ở giữa. Nhấp vào góc phải trên để sao chép lệnh trực tiếp. Tất nhiên, bạn cũng có thể di chuột qua mỗi phần tử để xem giới thiệu chi tiết.",
        },
        input_page_intro: {
            title: "Trang đầu vào - Giới thiệu",
            desc: "Đây là trang đầu vào, nơi bạn có thể nhập lệnh và sau đó nhập chúng vào Nuitka Commander để chỉnh sửa. Bạn có thể nhấp vào bên trái để chuyển đổi loại đầu vào và bắt đầu nhập ở góc phải trên.",
        },
        website_footer: {
            title: "Chân trang website",
            desc: "Đây là chân trang website, nơi bạn có thể tìm thấy một số liên kết hữu ích, như website Nuitka và trang chủ dự án. Bạn cũng có thể tìm thấy số phiên bản dự án, tác giả và thông tin khác",
        },
        end: {
            title: "Kết thúc",
            desc: "Hướng dẫn kết thúc ở đây, cảm ơn bạn đã sử dụng. Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào, hãy thoải mái tạo issue trên GitHub",
        },
    },
    search: { // Tìm kiếm
        search_placeholder: "Tìm kiếm",
        please_input: "Vui lòng nhập nội dung tìm kiếm",
        no_result: "Không tìm thấy tùy chọn nào chứa từ khóa này",
        try_keyword: "Vui lòng thử thay thế bằng từ khóa khác và tìm kiếm lại",
        jump: "Nhảy",
        select: "Chọn",
        exit: "Thoát",
    },
    // Tiêu đề phiên bản tệp cấu hình, nếu bạn muốn, bạn có thể đặt tiêu đề cho mỗi phiên bản. Nếu không, tên khóa mặc định sẽ được sử dụng
    nuitka_config_title: {
        simple: "Chế độ đơn giản",
    },
};
