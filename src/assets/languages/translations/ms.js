// noinspection JSUnusedGlobalSymbols

/**
 * @Description Malay language pack （LLM translation）
 * @Author: erduotong
 * @Date: 2025-06-01
 */
export default {
    website_info: { // Paparan maklumat pelbagai
        supported_to_nuitka_version: "Disokong hingga versi Nuitka",
        report_issue: "Laporkan isu",
        nuitka_website: "Laman web Nuitka",
        get_involved: "Libatkan diri",
        changelog: "Log perubahan",
        project_homepage: "Laman utama projek",
        github_website: "Guna di laman web",
        local_use: "Penggunaan tempatan",
        current_version_author: "Penyumbang versi semasa",
        open_source_license: "Lesen sumber terbuka",
        long_info: {
            license: "Kami menggunakan lesen sumber terbuka GPLv3, anda boleh melihat lesen penuh di sini:",
            author: "Sehingga versi semasa, terima kasih kepada penyumbang berikut atas sumbangan mereka kepada projek ini (dalam susunan tidak tertentu):",
        },
    },
    setting: { // Halaman tetapan
        guide: {
            title: "Panduan",
            start: "Mula panduan",
        },
        theme: {
            auto: "Ikut sistem",
            light: "Mod terang",
            dark: "Mod gelap",
            theme: "Tema",
        },
        language: {
            title: "Bahasa",
            interface_language: "Bahasa antara muka",
            command_language: "Bahasa arahan",
        },
        nuitka_language_no_support: "Versi Nuitka semasa tidak menyokong bahasa ini",
        storage: {
            title: "Tetapan penyimpanan",
            user: "Tetapan pengguna",
            reset_user: "Set semula tetapan pengguna",
            command: "Tetapan arahan",
            reset_command: "Set semula tetapan arahan",
        },
    },
    nav_bar: { // Bar navigasi
        mode: {
            easy_mode: "Mod mudah",
            full_mode: "Mod penuh",
            info: {
                l1: "Sama ada untuk memaparkan senarai penuh arahan",
                l2: "Mod mudah: Papar pilihan Nuitka yang biasa digunakan",
                l3: "Mod penuh: Papar semua pilihan yang tersedia",
            },
            show_raw_command: "Tunjuk arahan mentah",
            no_show_raw_command: "Sembunyikan arahan mentah",
            show_raw_command_info: "Sama ada untuk memaparkan arahan mentah dalam semua pilihan",
        },
        now_nuitka_version: "Versi fail konfigurasi yang dipilih sekarang:",
        select_nuitka_version: "Pilih versi Nuitka yang anda gunakan",
    },
    tabs: {
        edit: "Edit",
        output: "Output",
        input: "Input",
    },
    input_page: {
        input_from_cli: "Import dari baris arahan",
        start_input: "Mula import",
        please_input_cli_command: "Sila masukkan arahan baris Nuitka",
        general: {
            unable_parse_check: "Terdapat atribut yang tidak dikenali dalam data yang diberikan, sila periksa sama ada data input memenuhi keperluan atau masukkan secara manual",
            please_check_down: "Terdapat atribut yang tidak dikenali dalam data yang diberikan, sila periksa di bawah",
        },
        json: {
            input_from_json: "Import dari JSON",
            please_input_json: "Sila masukkan data JSON yang dieksport dari laman web ini",
            json_parse_error: "Parsing JSON gagal, sila periksa sama ada data input dalam format JSON",
        },
        cli: {
            wait_bash_parser: "Sila tunggu untuk Bash Parser dimuat",
            unsupported_operate: "Ralat input - operator tidak disokong, sila periksa input anda",
            error_command: "Ralat input - ralat arahan, sila pastikan arahan anda betul dan anda telah memilih versi Nuitka yang betul",
        },
    },
    nuitka_elements: {
        select_placeholder: "Pilih",
        not_selected: "Tidak dipilih",
        selected: "Dipilih",
        user_provide: "Ini adalah pilihan kustom anda",
        add_option: "Tambah pilihan",
        input_an_option: "Masukkan pilihan",
        option_desc: "Penerangan pilihan",
    },
    message: {
        will_del_option: "Anda akan memadamkan pilihan kustom ini",
        continue_del: "Adakah anda mahu meneruskan?",
        warning: "Amaran",
        OK: "OK",
        cancel: "Batal",
        cancel_del: "Pemadaman dibatalkan",
        del_success: "Berjaya dipadamkan",
        have_been_created: "Pilihan ini sudah wujud!",
        drop_file: "Seret fail ke sini",
        or: "atau",
        click_select_file: "Pilih fail",
        next_step: "Langkah seterusnya",
        prev_step: "Langkah sebelumnya",
        data_input_success: "Data berjaya diimport",
        calling: "Memanggil, sila tunggu",
    },
    output_page: {
        run_nuitka_through_python: "Jalankan Nuitka melalui Python",
        CLI: "Output baris arahan",
        JSON: "Output JSON",
    },
    // Panduan pengguna
    website_guide: {
        start: {
            title: "Panduan Pengguna",
            desc: "Selamat datang ke Nuitka Commander, seterusnya, sila klik penjuru kanan bawah, mari kita belajar cara menggunakannya langkah demi langkah",
        },
        navbar: {
            title: "Bar Navigasi",
            desc: "Ini adalah bar navigasi, di mana beberapa fungsi global ditetapkan",
        },
        navbar_original_command: {
            title: "Bar Navigasi - Toggle Arahan Mentah",
            desc: "Di sini anda boleh beralih sama ada untuk memaparkan arahan Nuitka asal untuk tontonan mudah. Anda boleh cuba beralihnya",
        },
        navbar_version_select: {
            title: "Bar Navigasi - Pemilihan Versi",
            desc: "Dalam kotak pemilihan di sebelah kanan, anda boleh memilih versi Nuitka yang berbeza. Anda boleh mencari fail konfigurasi yang sesuai untuk versi anda. Jika anda mahukan arahan yang lebih mudah, anda boleh memilih 'Mod Mudah' di bahagian bawah",
        },
        navbar_settings_button: {
            title: "Bar Navigasi - Butang Tetapan",
            desc: "Klik butang ini untuk masuk ke halaman tetapan",
        },
        settings_page: {
            title: "Halaman Tetapan",
            desc: "Seterusnya, adalah halaman tetapan",
        },
        settings_page_intro: {
            title: "Halaman Tetapan - Pengenalan",
            desc: "Ini adalah antara muka tetapan, di mana anda boleh melaraskan tetapan yang anda inginkan",
        },
        settings_page_tour: {
            title: "Halaman Tetapan - Panduan",
            desc: "Untuk melihat panduan lagi pada masa hadapan, anda boleh klik di sini",
        },
        edit_page_buffer: {
            title: "Halaman Edit",
            desc: "Seterusnya, adalah halaman edit",
        },
        edit_page_intro: {
            title: "Halaman Edit - Pengenalan",
            desc: "Ini adalah halaman edit, di mana anda boleh mengkonfigurasi arahan Nuitka anda. Anda boleh klik di sebelah kiri untuk beralih kategori arahan dan edit arahan di tengah",
        },
        edit_page_edit_box: {
            title: "Halaman Edit - Kotak Edit",
            desc: "Terdapat banyak kotak edit di sini, setiap satu mewakili parameter. Jika anda hover tetikus di atasnya, akan ada pengenalan terperinci. Cuba sekarang",
        },
        output_page_intro: {
            title: "Halaman Output - Pengenalan",
            desc: "Ini adalah halaman output, di mana anda boleh mendapat hasil output arahan yang baru sahaja anda edit. Anda boleh klik di sebelah kiri untuk beralih jenis output dan melihat arahan output di tengah. Klik penjuru kanan atas untuk menyalin arahan secara langsung. Sudah tentu, anda juga boleh hover tetikus di atas setiap elemen untuk melihat pengenalan terperinci.",
        },
        input_page_intro: {
            title: "Halaman Input - Pengenalan",
            desc: "Ini adalah halaman input, di mana anda boleh memasukkan arahan dan kemudian mengimportnya ke dalam Nuitka Commander untuk editing. Anda boleh klik di sebelah kiri untuk beralih jenis input dan mula mengimport di penjuru kanan atas.",
        },
        website_footer: {
            title: "Footer Laman Web",
            desc: "Ini adalah footer laman web, di mana anda boleh mencari beberapa pautan berguna, seperti laman web Nuitka dan laman utama projek. Anda juga boleh mencari nombor versi projek, pengarang, dan maklumat lain",
        },
        end: {
            title: "Tamat",
            desc: "Panduan berakhir di sini, terima kasih kerana menggunakannya. Jika anda mempunyai sebarang soalan atau cadangan, jangan ragu untuk menimbulkan isu di GitHub",
        },
    },
    search: { // Carian
        search_placeholder: "Cari",
        please_input: "Sila masukkan kandungan carian",
        no_result: "Tiada pilihan yang mengandungi kata kunci ini ditemui",
        try_keyword: "Sila cuba gantikan dengan kata kunci lain dan cari lagi",
        jump: "Lompat",
        select: "Pilih",
        exit: "Keluar",
    },
    // Tajuk versi fail konfigurasi, jika anda mahu, anda boleh memberikan setiap versi tajuk. Jika tidak, nama kunci lalai akan digunakan
    nuitka_config_title: {
        simple: "Mod mudah",
    },
};
