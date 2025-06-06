// noinspection JSUnusedGlobalSymbols

/**
 * @Description Turkish language pack
 * @Author: GitHub Copilot
 * @Date: 2025-06-01
 */
export default {
    website_info: { // Web sitesi bilgi görüntüleme
        supported_to_nuitka_version: "Nuitka sürümüne kadar desteklenir",
        report_issue: "Sorun bildir",
        nuitka_website: "Nuitka web sitesi",
        get_involved: "Katkıda bulun",
        changelog: "Değişiklik günlüğü",
        project_homepage: "Proje ana sayfası",
        github_website: "Web sitesinde kullan",
        local_use: "Yerel kullanım",
        current_version_author: "Mevcut sürüm katkıda bulunanlar",
        open_source_license: "Açık kaynak lisansı",
        long_info: {
            license: "GPLv3 açık kaynak lisansını kullanıyoruz, tam lisansı burada görüntüleyebilirsiniz:",
            author: "Mevcut sürüme kadar, bu projeye katkılarından dolayı aşağıdaki katkıda bulunanlara teşekkürler (belirli bir sıra yoktur):",
        },
    },
    setting: { // Ayarlar sayfası
        guide: {
            title: "Rehber",
            start: "Rehberi başlat",
        },
        theme: {
            auto: "Sistemi takip et",
            light: "Açık mod",
            dark: "Koyu mod",
            theme: "Tema",
        },
        language: {
            title: "Dil",
            interface_language: "Arayüz dili",
            command_language: "Komut dili",
        },
        nuitka_language_no_support: "Nuitka'nın mevcut sürümü bu dili desteklemiyor",
        storage: {
            title: "Depolama ayarları",
            user: "Kullanıcı ayarları",
            reset_user: "Kullanıcı ayarlarını sıfırla",
            command: "Komut ayarları",
            reset_command: "Komut ayarlarını sıfırla",
        },
    },
    nav_bar: { // Navigasyon çubuğu
        mode: {
            easy_mode: "Kolay mod",
            full_mode: "Tam mod",
            info: {
                l1: "Tam komut listesini gösterip göstermeme",
                l2: "Kolay mod: Yaygın olarak kullanılan Nuitka seçeneklerini göster",
                l3: "Tam mod: Tüm mevcut seçenekleri göster",
            },
            show_raw_command: "Ham komutu göster",
            no_show_raw_command: "Ham komutu gizle",
            show_raw_command_info: "Tüm seçeneklerde ham komutu gösterip göstermeme",
        },
        now_nuitka_version: "Şu anda seçili yapılandırma dosyası sürümü:",
        select_nuitka_version: "Kullandığınız Nuitka sürümünü seçin",
    },
    tabs: {
        edit: "Düzenle",
        output: "Çıktı",
        input: "Giriş",
    },
    input_page: {
        input_from_cli: "Komut satırından içe aktar",
        start_input: "İçe aktarmayı başlat",
        please_input_cli_command: "Lütfen Nuitka komut satırı talimatını girin",
        general: {
            unable_parse_check: "Sağlanan veride tanınmayan özellikler var, lütfen giriş verisinin gereksinimleri karşılayıp karşılamadığını kontrol edin veya manuel olarak girin",
            please_check_down: "Sağlanan veride tanınmayan özellikler var, lütfen aşağıyı kontrol edin",
        },
        json: {
            input_from_json: "JSON'dan içe aktar",
            please_input_json: "Lütfen bu web sitesinden dışa aktarılan JSON verisini girin",
            json_parse_error: "JSON ayrıştırma başarısız, lütfen giriş verisinin JSON formatında olup olmadığını kontrol edin",
        },
        cli: {
            wait_bash_parser: "Lütfen Bash Parser'ın yüklenmesini bekleyin",
            unsupported_operate: "Giriş hatası - desteklenmeyen operatör, lütfen girişinizi kontrol edin",
            error_command: "Giriş hatası - komut hatası, lütfen komutunuzun doğru olduğunu ve doğru Nuitka sürümünü seçtiğinizi kontrol edin",
        },
    },
    nuitka_elements: {
        select_placeholder: "Seç",
        not_selected: "Seçilmedi",
        selected: "Seçildi",
        user_provide: "Bu sizin özel seçeneğiniz",
        add_option: "Seçenek ekle",
        input_an_option: "Bir seçenek girin",
        option_desc: "Seçenek açıklaması",
    },
    message: {
        will_del_option: "Bu özel seçeneği silmek üzeresiniz",
        continue_del: "Devam etmek istiyor musunuz?",
        warning: "Uyarı",
        OK: "Tamam",
        cancel: "İptal",
        cancel_del: "Silme iptal edildi",
        del_success: "Başarıyla silindi",
        have_been_created: "Bu seçenek zaten mevcut!",
        drop_file: "Dosyayı buraya sürükleyin",
        or: "veya",
        click_select_file: "Dosya seç",
        next_step: "Sonraki adım",
        prev_step: "Önceki adım",
        data_input_success: "Veri başarıyla içe aktarıldı",
        calling: "Çağrılıyor, lütfen bekleyin",
    },
    output_page: {
        run_nuitka_through_python: "Python aracılığıyla Nuitka'yı çalıştır",
        CLI: "Komut satırı çıktısı",
        JSON: "JSON çıktısı",
    },
    // Kullanıcı rehberi
    website_guide: {
        start: {
            title: "Kullanıcı Rehberi",
            desc: "Nuitka Commander'a hoş geldiniz, sonra, lütfen sağ alt köşeye tıklayın, adım adım nasıl kullanılacağını öğrenelim",
        },
        navbar: {
            title: "Navigasyon Çubuğu",
            desc: "Bu navigasyon çubuğudur, burada bazı genel işlevler ayarlanmıştır",
        },
        navbar_original_command: {
            title: "Navigasyon Çubuğu - Ham Komut Geçişi",
            desc: "Burada kolay görüntüleme için ham Nuitka komutunu gösterip göstermemeyi değiştirebilirsiniz. Değiştirmeyi deneyebilirsiniz",
        },
        navbar_version_select: {
            title: "Navigasyon Çubuğu - Sürüm Seçimi",
            desc: "Sağdaki seçim kutusunda, Nuitka'nın farklı sürümlerini seçebilirsiniz. Sürümünüz için uygun yapılandırma dosyasını bulabilirsiniz. Daha basit komut istiyorsanız, altta 'Kolay Mod'u seçebilirsiniz",
        },
        navbar_settings_button: {
            title: "Navigasyon Çubuğu - Ayarlar Düğmesi",
            desc: "Ayarlar sayfasına girmek için bu düğmeye tıklayın",
        },
        settings_page: {
            title: "Ayarlar Sayfası",
            desc: "Sonra, ayarlar sayfasıdır",
        },
        settings_page_intro: {
            title: "Ayarlar Sayfası - Giriş",
            desc: "Bu ayarlar arayüzüdür, burada istediğiniz ayarları yapabilirsiniz",
        },
        settings_page_tour: {
            title: "Ayarlar Sayfası - Rehber",
            desc: "Gelecekte rehberi tekrar görüntülemek için, buraya tıklayabilirsiniz",
        },
        edit_page_buffer: {
            title: "Düzenleme Sayfası",
            desc: "Sonra, düzenleme sayfasıdır",
        },
        edit_page_intro: {
            title: "Düzenleme Sayfası - Giriş",
            desc: "Bu düzenleme sayfasıdır, burada Nuitka komutlarınızı yapılandırabilirsiniz. Komut kategorilerini değiştirmek için solda tıklayabilir ve ortada komutları düzenleyebilirsiniz",
        },
        edit_page_edit_box: {
            title: "Düzenleme Sayfası - Düzenleme Kutusu",
            desc: "Burada birçok düzenleme kutusu var, her biri bir parametreyi temsil eder. Fareyi üzerine getirirseniz, ayrıntılı giriş olacaktır. Şimdi deneyin",
        },
        output_page_intro: {
            title: "Çıktı Sayfası - Giriş",
            desc: "Bu çıktı sayfasıdır, burada az önce düzenlediğiniz komutların çıktı sonuçlarını alabilirsiniz. Çıktı türünü değiştirmek için solda tıklayabilir ve ortada çıktı komutunu görüntüleyebilirsiniz. Komutu doğrudan kopyalamak için sağ üst köşeye tıklayın. Tabii ki, ayrıntılı girişleri görüntülemek için her öğenin üzerine fareyi getirebilirsiniz.",
        },
        input_page_intro: {
            title: "Giriş Sayfası - Giriş",
            desc: "Bu giriş sayfasıdır, burada komutları girebilir ve sonra düzenleme için Nuitka Commander'a içe aktarabilirsiniz. Giriş türünü değiştirmek için solda tıklayabilir ve sağ üst köşede içe aktarmayı başlatabilirsiniz.",
        },
        website_footer: {
            title: "Web Sitesi Alt Bilgisi",
            desc: "Bu web sitesi alt bilgisidir, burada Nuitka web sitesi ve proje ana sayfası gibi bazı yararlı bağlantılar bulabilirsiniz. Ayrıca proje sürüm numarası, yazarlar ve diğer bilgileri de bulabilirsiniz",
        },
        end: {
            title: "Son",
            desc: "Rehber burada sona erer, kullandığınız için teşekkürler. Herhangi bir sorunuz veya öneriniz varsa, GitHub'da bir sorun oluşturmaktan çekinmeyin",
        },
    },
    search: { // Arama
        search_placeholder: "Ara",
        please_input: "Lütfen arama içeriği girin",
        no_result: "Bu anahtar kelimeyi içeren seçenek bulunamadı",
        try_keyword: "Lütfen diğer anahtar kelimelerle değiştirmeyi deneyin ve tekrar arayın",
        jump: "Atla",
        select: "Seç",
        exit: "Çık",
    },
    // Yapılandırma dosyası sürüm başlıkları, istiyorsanız, her sürüm için bir başlık verebilirsiniz. Yoksa, varsayılan anahtar adı kullanılacaktır
    nuitka_config_title: {
        simple: "Basit mod",
    },
};
