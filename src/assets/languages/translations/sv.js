// noinspection JSUnusedGlobalSymbols

/**
 * @Description Swedish language pack
 * @Author: GitHub Copilot
 * @Date: 2025-06-01
 */
export default {
    website_info: { // Webbplats informationsvisning
        supported_to_nuitka_version: "Stöds till Nuitka version",
        report_issue: "Rapportera problem",
        nuitka_website: "Nuitka webbplats",
        get_involved: "Engagera dig",
        changelog: "Ändringslogg",
        project_homepage: "Projekts hemsida",
        github_website: "Använd på webbplats",
        local_use: "Lokal användning",
        current_version_author: "Bidragsgivare till nuvarande version",
        open_source_license: "Öppen källkod licens",
        long_info: {
            license: "Vi använder GPLv3 öppen källkod licens, du kan se den fullständiga licensen här:",
            author: "Fram till nuvarande version, tack till följande bidragsgivare för deras bidrag till detta projekt (ingen specifik ordning):",
        },
    },
    setting: { // Inställningssida
        guide: {
            title: "Guide",
            start: "Starta guide",
        },
        theme: {
            auto: "Följ systemet",
            light: "Ljust läge",
            dark: "Mörkt läge",
            theme: "Tema",
        },
        language: {
            title: "Språk",
            interface_language: "Gränssnittsspråk",
            command_language: "Kommandospråk",
        },
        nuitka_language_no_support: "Nuvarande version av Nuitka stöder inte detta språk",
        storage: {
            title: "Lagringsinställningar",
            user: "Användarinställningar",
            reset_user: "Återställ användarinställningar",
            command: "Kommandoinställningar",
            reset_command: "Återställ kommandoinställningar",
        },
    },
    nav_bar: { // Navigationsfält
        mode: {
            easy_mode: "Enkelt läge",
            full_mode: "Fullständigt läge",
            info: {
                l1: "Visa fullständig kommandolista eller inte",
                l2: "Enkelt läge: Visa vanligt använda Nuitka-alternativ",
                l3: "Fullständigt läge: Visa alla tillgängliga alternativ",
            },
            show_raw_command: "Visa råkommando",
            no_show_raw_command: "Dölj råkommando",
            show_raw_command_info: "Visa råkommando i alla alternativ eller inte",
        },
        now_nuitka_version: "För närvarande vald konfigurationsfilversion:",
        select_nuitka_version: "Välj version av Nuitka som du använder",
    },
    tabs: {
        edit: "Redigera",
        output: "Utdata",
        input: "Indata",
    },
    input_page: {
        input_from_cli: "Importera från kommandorad",
        start_input: "Starta import",
        please_input_cli_command: "Vänligen ange Nuitka kommandoradsinstruktion",
        general: {
            unable_parse_check: "Det finns okända attribut i den tillhandahållna datan, kontrollera om indatan uppfyller kraven eller ange manuellt",
            please_check_down: "Det finns okända attribut i den tillhandahållna datan, kontrollera nedan",
        },
        json: {
            input_from_json: "Importera från JSON",
            please_input_json: "Vänligen ange JSON-data som exporterats från denna webbplats",
            json_parse_error: "JSON-analys misslyckades, kontrollera om indatan är i JSON-format",
        },
        cli: {
            wait_bash_parser: "Vänligen vänta på att Bash Parser laddas",
            unsupported_operate: "Indatafel - operatör som inte stöds, kontrollera din indata",
            error_command: "Indatafel - kommandofel, se till att ditt kommando är korrekt och att du har valt rätt Nuitka-version",
        },
    },
    nuitka_elements: {
        select_placeholder: "Välj",
        not_selected: "Inte valt",
        selected: "Valt",
        user_provide: "Detta är ditt anpassade alternativ",
        add_option: "Lägg till alternativ",
        input_an_option: "Ange ett alternativ",
        option_desc: "Alternativbeskrivning",
    },
    message: {
        will_del_option: "Du är på väg att ta bort detta anpassade alternativ",
        continue_del: "Vill du fortsätta?",
        warning: "Varning",
        OK: "OK",
        cancel: "Avbryt",
        cancel_del: "Borttagning avbruten",
        del_success: "Framgångsrikt borttaget",
        have_been_created: "Detta alternativ finns redan!",
        drop_file: "Dra filen hit",
        or: "eller",
        click_select_file: "Välj fil",
        next_step: "Nästa steg",
        prev_step: "Föregående steg",
        data_input_success: "Data framgångsrikt importerat",
        calling: "Ringer, vänligen vänta",
    },
    output_page: {
        run_nuitka_through_python: "Kör Nuitka genom Python",
        CLI: "Kommandorads utdata",
        JSON: "JSON utdata",
    },
    // Användarguide
    website_guide: {
        start: {
            title: "Användarguide",
            desc: "Välkommen till Nuitka Commander, nästa, klicka på nedre högra hörnet, låt oss lära oss hur man använder det steg för steg",
        },
        navbar: {
            title: "Navigationsfält",
            desc: "Detta är navigationsfältet, där vissa globala funktioner är inställda",
        },
        navbar_original_command: {
            title: "Navigationsfält - Råkommando växel",
            desc: "Här kan du växla om att visa råkommandot Nuitka för enkel visning. Du kan prova att växla",
        },
        navbar_version_select: {
            title: "Navigationsfält - Versionsval",
            desc: "I valrutan till höger kan du välja olika versioner av Nuitka. Du kan hitta konfigurationsfilen som passar din version. Om du vill ha enklare kommando kan du välja 'Enkelt läge' längst ner",
        },
        navbar_settings_button: {
            title: "Navigationsfält - Inställningsknapp",
            desc: "Klicka på denna knapp för att gå till inställningssidan",
        },
        settings_page: {
            title: "Inställningssida",
            desc: "Nästa är inställningssidan",
        },
        settings_page_intro: {
            title: "Inställningssida - Introduktion",
            desc: "Detta är inställningsgränssnittet, där du kan justera önskade inställningar",
        },
        settings_page_tour: {
            title: "Inställningssida - Guide",
            desc: "För att visa guiden igen i framtiden kan du klicka här",
        },
        edit_page_buffer: {
            title: "Redigeringssida",
            desc: "Nästa är redigeringssidan",
        },
        edit_page_intro: {
            title: "Redigeringssida - Introduktion",
            desc: "Detta är redigeringssidan, där du kan konfigurera dina Nuitka-kommandon. Du kan klicka till vänster för att växla kommandokategorier och redigera kommandon i mitten",
        },
        edit_page_edit_box: {
            title: "Redigeringssida - Redigeringsruta",
            desc: "Det finns många redigeringsrutor här, var och en representerar en parameter. Om du håller muspekaren över den kommer det att finnas en detaljerad introduktion. Prova nu",
        },
        output_page_intro: {
            title: "Utdatasida - Introduktion",
            desc: "Detta är utdatasidan, där du kan få utdataresultaten från kommandona du just redigerade. Du kan klicka till vänster för att växla utdatatyp och visa utdatakommandot i mitten. Klicka uppe till höger för att kopiera kommandot direkt. Naturligtvis kan du också hålla muspekaren över varje element för att se detaljerade introduktioner.",
        },
        input_page_intro: {
            title: "Indatasida - Introduktion",
            desc: "Detta är indatasidan, där du kan ange kommandon och sedan importera dem till Nuitka Commander för redigering. Du kan klicka till vänster för att växla indatatyp och börja importera uppe till höger.",
        },
        website_footer: {
            title: "Webbplats sidfot",
            desc: "Detta är webbplatsens sidfot, där du kan hitta några användbara länkar, som Nuitka-webbplatsen och projektets hemsida. Du kan också hitta projektets versionsnummer, författare och annan information",
        },
        end: {
            title: "Slut",
            desc: "Guiden slutar här, tack för att du använder. Om du har några frågor eller förslag, tveka inte att skapa ett problem på GitHub",
        },
    },
    search: { // Sök
        search_placeholder: "Sök",
        please_input: "Vänligen ange sökinnehåll",
        no_result: "Inga alternativ som innehåller detta nyckelord hittades",
        try_keyword: "Vänligen försök att ersätta med andra nyckelord och sök igen",
        jump: "Hoppa",
        select: "Välj",
        exit: "Avsluta",
    },
    // Konfigurationsfil versionstitlar, om du vill kan du ge varje version en titel. Om inte kommer standardnyckelnamnet att användas
    nuitka_config_title: {
        simple: "Enkelt läge",
    },
};
