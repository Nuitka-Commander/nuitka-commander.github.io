// noinspection JSUnusedGlobalSymbols

/**
 * @Description Deutsch Sprachpaket (LLM Übersetzung)
 * @Author: erduotong
 * @Date: 2023-11-26 11:09:00
 */
export default {
    website_info: { //Informationen anzeigen
        supported_to_nuitka_version: "Unterstützt bis Nuitka Version",
        report_issue: "Problem melden",
        nuitka_website: "Nuitka Webseite",
        get_involved: "Mitwirken",
        changelog: "Änderungsprotokoll",
        project_homepage: "Projekt-Homepage",
        github_website: "Auf Github verwenden",
        local_use: "Lokal verwenden",
        current_version_author: "Aktuelle Version Beitragende",
        open_source_license: "Open Source Lizenz",
        long_info: {
            license: "Wir verwenden die GPLv3 Open Source Lizenz, Sie können die vollständige Lizenz hier ansehen:",
            author: "Bis zur aktuellen Version, danke den folgenden Beitragenden für ihre Beiträge (Reihenfolge ohne Bedeutung):",
        },
    },
    setting: { //Einstellungsseite
        guide: {
            title: "Anleitung",
            start: "Anleitung starten",
        },
        theme: {
            auto: "Systemfolgen",
            light: "Helles Modus",
            dark: "Dunkles Modus",
            theme: "Thema",
        },
        language: {
            title: "Sprache",
            interface_language: "Oberflächensprache",
            command_language: "Befehlssprache",
        },
        nuitka_language_no_support: "Die aktuelle Nuitka Version unterstützt diese Sprache nicht",
        storage: {
            title: "Speichereinstellungen",
            user: "Benutzereinstellungen",
            reset_user: "Benutzereinstellungen zurücksetzen",
            command: "Befehleinstellungen",
            reset_command: "Befehleinstellungen zurücksetzen",
        },
    },
    nav_bar: { //Navigationsleiste
        mode: {
            easy_mode: "Einfaches Modus",
            full_mode: "Vollständiges Modus",
            info: {
                l1: "Ob die vollständige Befehlsliste angezeigt werden soll",
                l2: "Einfaches Modus: Zeigt häufig verwendete Nuitka-Optionen an",
                l3: "Komplexes Modus: Zeigt alle verfügbaren Optionen an",
            },
            show_raw_command: "Originalbefehl anzeigen",
            no_show_raw_command: "Originalbefehl verbergen",
            show_raw_command_info: "Ob der Originalbefehl in den Befehlseinstellungen angezeigt werden soll",
        },
        now_nuitka_version: "Aktuell ausgewählte Konfigurationsdateiversion:",
        select_nuitka_version: "Wählen Sie die Version von Nuitka, die Sie verwenden",
    },
    tabs: {
        edit: "Bearbeiten",
        output: "Ausgabe",
        input: "Eingabe",
    },
    input_page: {
        input_from_cli: "Von der Kommandozeile importieren",
        start_input: "Import starten",
        please_input_cli_command: "Bitte geben Sie den Nuitka-Befehlszeilenbefehl ein",
        general: {
            unable_parse_check: "Es gibt nicht erkennbare Attribute in den bereitgestellten Daten, bitte überprüfen Sie, ob die eingegebenen Daten korrekt sind oder manuell eingeben",
            please_check_down: "Es gibt nicht erkennbare Attribute in den bereitgestellten Daten, bitte überprüfen Sie unten",
        },
        json: {
            input_from_json: "Von JSON importieren",
            please_input_json: "Bitte geben Sie die von dieser Website exportierten JSON-Daten ein",
            json_parse_error: "JSON-Parsing fehlgeschlagen, bitte überprüfen Sie, ob die eingegebenen Daten das JSON-Format haben",
        },
    },
    nuitka_elements: {
        select_placeholder: "Auswählen",
        not_selected: "Nicht ausgewählt",
        selected: "Ausgewählt",
        user_provide: "Dies ist eine von Ihnen benutzerdefinierte Option",
        add_option: "Eine Option hinzufügen",
        input_an_option: "Eine Option eingeben",
        option_desc: "Option Beschreibung",
    },
    message: {
        will_del_option: "Sie sind dabei, diese benutzerdefinierte Option zu löschen",
        continue_del: "Möchten Sie fortfahren?",
        warning: "Warnung",
        OK: "Bestätigen",
        cancel: "Abbrechen",
        cancel_del: "Löschen abgebrochen",
        del_success: "Erfolgreich gelöscht",
        have_been_created: "Diese Option existiert bereits!",
        drop_file: "Datei hierher ziehen",
        or: "oder",
        click_select_file: "Datei auswählen",
        next_step: "Nächster Schritt",
        prev_step: "Vorheriger Schritt",
        data_input_success: "Dateneingabe erfolgreich",
        calling: "Wird aufgerufen, bitte warten",
    },
    output_page: {
        run_nuitka_through_python: "Nuitka über Python ausführen",
        CLI: "Befehlszeilenausgabe",
        JSON: "JSON-Ausgabe",
    },
    website_guide: {
        start: {
            title: "Anleitung",
            desc: "Willkommen bei Nuitka Commander, klicken Sie auf die rechte untere Ecke, um Schritt für Schritt zu lernen, wie man es benutzt",
        },
        navbar: {
            title: "Navigationsleiste",
            desc: "Hier ist die Navigationsleiste, einige globale Funktionen werden hier eingestellt",
        },
        navbar_original_command: {
            title: "Navigationsleiste – Originalbefehl umschalten",
            desc: "Hier können Sie umschalten, ob der originale Nuitka-Befehl angezeigt werden soll, um die Anzeige zu erleichtern. Sie können es versuchen",
        },
        navbar_version_select: {
            title: "Navigationsleiste – Version auswählen",
            desc: "Im rechten Auswahlfeld können Sie verschiedene Nuitka-Versionen auswählen, Sie können die für Ihre Version passende Konfigurationsdatei finden. Wenn Sie einen einfacheren Befehl wollen, können Sie die unterste Option 'Einfaches Modus' auswählen",
        },
        navbar_settings_button: {
            title: "Navigationsleiste – Einstellungsbutton",
            desc: "Klicken Sie auf diesen Button, um in die Einstellungsseite zu gelangen",
        },
        settings_page: {
            title: "Einstellungsseite",
            desc: "Als nächstes ist die Einstellungsseite",
        },
        settings_page_intro: {
            title: "Einstellungsseite – Einführung",
            desc: "Hier ist die Einstellungsseite, Sie können hier Ihre bevorzugten Einstellungen anpassen",
        },
        settings_page_tour: {
            title: "Einstellungsseite – Tour",
            desc: "Wenn Sie die Anleitung in Zukunft erneut ansehen möchten, können Sie hier klicken",
        },
        edit_page_buffer: {
            title: "Bearbeitungsseite",
            desc: "Als nächstes ist die Bearbeitungsseite",
        },
        edit_page_intro: {
            title: "Bearbeitungsseite – Einführung",
            desc: "Hier ist die Bearbeitungsseite, Sie können hier Ihren Nuitka-Befehl konfigurieren. Sie können auf der linken Seite klicken, um die Befehlskategorie zu wechseln, und in der Mitte die Befehle bearbeiten",
        },
        edit_page_edit_box: {
            title: "Bearbeitungsseite – Bearbeitungsfeld",
            desc: "Hier gibt es viele Bearbeitungsfelder, jedes repräsentiert einen Parameter. Wenn Sie die Maus darüber halten, gibt es eine detaillierte Einführung. Probieren Sie es jetzt aus",
        },
        output_page_intro: {
            title: "Ausgabeseite – Einführung",
            desc: "Hier ist die Ausgabeseite, Sie können hier die Ergebnisse der von Ihnen bearbeiteten Befehle sehen. Sie können auf der linken Seite klicken, um die Art der Ausgabe zu wechseln, und in der Mitte die ausgegebenen Befehle anzeigen. Klicken Sie oben rechts, um den Befehl direkt zu kopieren. Natürlich können Sie auch die Maus über jedes Element halten, um eine detaillierte Einführung zu erhalten.",
        },
        input_page_intro: {
            title: "Eingabeseite – Einführung",
            desc: "Hier ist die Eingabeseite, Sie können hier Befehle eingeben und sie in Nuitka Commander importieren, um sie zu bearbeiten. Sie können auf der linken Seite klicken, um die Art der Eingabe zu wechseln, und oben rechts den Import starten.",
        },
        website_footer: {
            title: "Website-Fußzeile",
            desc: "Hier ist die Website-Fußzeile, Sie können hier einige nützliche Links finden, wie die Nuitka-Webseite und die Projekt-Homepage. Gleichzeitig können Sie auch die Versionsnummer, Autoren und andere Informationen finden",
        },
        end: {
            title: "Ende",
            desc: "Die Anleitung endet hier, danke für Ihre Nutzung. Wenn Sie irgendwelche Probleme oder Vorschläge haben, zögern Sie nicht, auf Github ein Issue zu erstellen",
        },
    },
    nuitka_config_title: {
        simple: "Einfaches Modus",
    },
};