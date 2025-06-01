// noinspection JSUnusedGlobalSymbols

/**
 * @Description Indonesian language pack
 * @Author: GitHub Copilot
 * @Date: 2025-06-01
 */
export default {
    website_info: { // Tampilan informasi website
        supported_to_nuitka_version: "Didukung hingga versi Nuitka",
        report_issue: "Laporkan masalah",
        nuitka_website: "Website Nuitka",
        get_involved: "Ikut berkontribusi",
        changelog: "Log perubahan",
        project_homepage: "Beranda proyek",
        github_website: "Gunakan di website",
        local_use: "Penggunaan lokal",
        current_version_author: "Kontributor versi saat ini",
        open_source_license: "Lisensi open source",
        long_info: {
            license: "Kami menggunakan lisensi open source GPLv3, Anda dapat melihat lisensi lengkap di sini:",
            author: "Hingga versi saat ini, terima kasih kepada kontributor berikut atas kontribusi mereka untuk proyek ini (tanpa urutan tertentu):",
        },
    },
    setting: { // Halaman pengaturan
        guide: {
            title: "Panduan",
            start: "Mulai panduan",
        },
        theme: {
            auto: "Ikuti sistem",
            light: "Mode terang",
            dark: "Mode gelap",
            theme: "Tema",
        },
        language: {
            title: "Bahasa",
            interface_language: "Bahasa antarmuka",
            command_language: "Bahasa perintah",
        },
        nuitka_language_no_support: "Versi Nuitka saat ini tidak mendukung bahasa ini",
        storage: {
            title: "Pengaturan penyimpanan",
            user: "Pengaturan pengguna",
            reset_user: "Reset pengaturan pengguna",
            command: "Pengaturan perintah",
            reset_command: "Reset pengaturan perintah",
        },
    },
    nav_bar: { // Bilah navigasi
        mode: {
            easy_mode: "Mode mudah",
            full_mode: "Mode lengkap",
            info: {
                l1: "Apakah menampilkan daftar perintah lengkap",
                l2: "Mode mudah: Tampilkan opsi Nuitka yang umum digunakan",
                l3: "Mode lengkap: Tampilkan semua opsi yang tersedia",
            },
            show_raw_command: "Tampilkan perintah mentah",
            no_show_raw_command: "Sembunyikan perintah mentah",
            show_raw_command_info: "Apakah menampilkan perintah mentah di semua opsi",
        },
        now_nuitka_version: "Versi file konfigurasi yang dipilih saat ini:",
        select_nuitka_version: "Pilih versi Nuitka yang Anda gunakan",
    },
    tabs: {
        edit: "Edit",
        output: "Output",
        input: "Input",
    },
    input_page: {
        input_from_cli: "Impor dari baris perintah",
        start_input: "Mulai impor",
        please_input_cli_command: "Silakan masukkan instruksi baris perintah Nuitka",
        general: {
            unable_parse_check: "Ada atribut yang tidak dikenali dalam data yang diberikan, silakan periksa apakah data input memenuhi persyaratan atau masukkan secara manual",
            please_check_down: "Ada atribut yang tidak dikenali dalam data yang diberikan, silakan periksa di bawah",
        },
        json: {
            input_from_json: "Impor dari JSON",
            please_input_json: "Silakan masukkan data JSON yang diekspor dari website ini",
            json_parse_error: "Parsing JSON gagal, silakan periksa apakah data input dalam format JSON",
        },
        cli: {
            wait_bash_parser: "Silakan tunggu Bash Parser dimuat",
            unsupported_operate: "Kesalahan input - operator tidak didukung, silakan periksa input Anda",
            error_command: "Kesalahan input - kesalahan perintah, pastikan perintah Anda benar dan Anda telah memilih versi Nuitka yang benar",
        },
    },
    nuitka_elements: {
        select_placeholder: "Pilih",
        not_selected: "Tidak dipilih",
        selected: "Dipilih",
        user_provide: "Ini adalah opsi kustom Anda",
        add_option: "Tambah opsi",
        input_an_option: "Masukkan opsi",
        option_desc: "Deskripsi opsi",
    },
    message: {
        will_del_option: "Anda akan menghapus opsi kustom ini",
        continue_del: "Apakah Anda ingin melanjutkan?",
        warning: "Peringatan",
        OK: "OK",
        cancel: "Batal",
        cancel_del: "Penghapusan dibatalkan",
        del_success: "Berhasil dihapus",
        have_been_created: "Opsi ini sudah ada!",
        drop_file: "Seret file ke sini",
        or: "atau",
        click_select_file: "Pilih file",
        next_step: "Langkah berikutnya",
        prev_step: "Langkah sebelumnya",
        data_input_success: "Data berhasil diimpor",
        calling: "Memanggil, silakan tunggu",
    },
    output_page: {
        run_nuitka_through_python: "Jalankan Nuitka melalui Python",
        CLI: "Output baris perintah",
        JSON: "Output JSON",
    },
    // Panduan pengguna
    website_guide: {
        start: {
            title: "Panduan Pengguna",
            desc: "Selamat datang di Nuitka Commander, selanjutnya, silakan klik sudut kanan bawah, mari kita pelajari cara menggunakannya langkah demi langkah",
        },
        navbar: {
            title: "Bilah Navigasi",
            desc: "Ini adalah bilah navigasi, di mana beberapa fungsi global diatur",
        },
        navbar_original_command: {
            title: "Bilah Navigasi - Toggle Perintah Mentah",
            desc: "Di sini Anda dapat beralih apakah menampilkan perintah Nuitka mentah untuk kemudahan melihat. Anda dapat mencoba beralih",
        },
        navbar_version_select: {
            title: "Bilah Navigasi - Pemilihan Versi",
            desc: "Di kotak pilihan sebelah kanan, Anda dapat memilih versi Nuitka yang berbeda. Anda dapat menemukan file konfigurasi yang sesuai dengan versi Anda. Jika Anda menginginkan perintah yang lebih sederhana, Anda dapat memilih 'Mode Mudah' di bagian bawah",
        },
        navbar_settings_button: {
            title: "Bilah Navigasi - Tombol Pengaturan",
            desc: "Klik tombol ini untuk masuk ke halaman pengaturan",
        },
        settings_page: {
            title: "Halaman Pengaturan",
            desc: "Selanjutnya, adalah halaman pengaturan",
        },
        settings_page_intro: {
            title: "Halaman Pengaturan - Pengantar",
            desc: "Ini adalah antarmuka pengaturan, di mana Anda dapat menyesuaikan pengaturan yang diinginkan",
        },
        settings_page_tour: {
            title: "Halaman Pengaturan - Panduan",
            desc: "Untuk melihat panduan lagi di masa depan, Anda dapat klik di sini",
        },
        edit_page_buffer: {
            title: "Halaman Edit",
            desc: "Selanjutnya, adalah halaman edit",
        },
        edit_page_intro: {
            title: "Halaman Edit - Pengantar",
            desc: "Ini adalah halaman edit, di mana Anda dapat mengkonfigurasi perintah Nuitka Anda. Anda dapat klik di sebelah kiri untuk beralih kategori perintah dan mengedit perintah di tengah",
        },
        edit_page_edit_box: {
            title: "Halaman Edit - Kotak Edit",
            desc: "Ada banyak kotak edit di sini, masing-masing mewakili parameter. Jika Anda mengarahkan mouse ke atasnya, akan ada pengantar detail. Coba sekarang",
        },
        output_page_intro: {
            title: "Halaman Output - Pengantar",
            desc: "Ini adalah halaman output, di mana Anda dapat mendapatkan hasil output dari perintah yang baru saja Anda edit. Anda dapat klik di sebelah kiri untuk beralih jenis output dan melihat perintah output di tengah. Klik sudut kanan atas untuk menyalin perintah langsung. Tentu saja, Anda juga dapat mengarahkan mouse ke setiap elemen untuk melihat pengantar detail.",
        },
        input_page_intro: {
            title: "Halaman Input - Pengantar",
            desc: "Ini adalah halaman input, di mana Anda dapat memasukkan perintah dan kemudian mengimpornya ke Nuitka Commander untuk pengeditan. Anda dapat klik di sebelah kiri untuk beralih jenis input dan mulai mengimpor di sudut kanan atas.",
        },
        website_footer: {
            title: "Footer Website",
            desc: "Ini adalah footer website, di mana Anda dapat menemukan beberapa tautan berguna, seperti website Nuitka dan beranda proyek. Anda juga dapat menemukan nomor versi proyek, penulis, dan informasi lainnya",
        },
        end: {
            title: "Selesai",
            desc: "Panduan berakhir di sini, terima kasih telah menggunakan. Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk mengajukan issue di GitHub",
        },
    },
    search: { // Pencarian
        search_placeholder: "Cari",
        please_input: "Silakan masukkan konten pencarian",
        no_result: "Tidak ditemukan opsi yang mengandung kata kunci ini",
        try_keyword: "Silakan coba mengganti dengan kata kunci lain dan cari lagi",
        jump: "Lompat",
        select: "Pilih",
        exit: "Keluar",
    },
    // Judul versi file konfigurasi, jika Anda mau, Anda dapat memberikan judul untuk setiap versi. Jika tidak, nama kunci default akan digunakan
    nuitka_config_title: {
        simple: "Mode sederhana",
    },
};
