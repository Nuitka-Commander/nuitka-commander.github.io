// noinspection JSUnusedGlobalSymbols

/**
 * @Description Dutch language pack
 * @Author: GitHub Copilot
 * @Date: 2025-06-01
 */
export default {
    website_info: { // Website informatie weergave
        supported_to_nuitka_version: "Ondersteund tot Nuitka versie",
        report_issue: "Probleem rapporteren",
        nuitka_website: "Nuitka website",
        get_involved: "Bijdragen",
        changelog: "Wijzigingslog",
        project_homepage: "Project homepage",
        github_website: "Gebruik op website",
        local_use: "Lokaal gebruik",
        current_version_author: "Huidige versie bijdragers",
        open_source_license: "Open source licentie",
        long_info: {
            license: "We gebruiken de GPLv3 open source licentie, u kunt de volledige licentie hier bekijken:",
            author: "Tot de huidige versie, dank aan de volgende bijdragers voor hun bijdragen aan dit project (geen specifieke volgorde):",
        },
    },
    setting: { // Instellingen pagina
        guide: {
            title: "Gids",
            start: "Gids starten",
        },
        theme: {
            auto: "Systeem volgen",
            light: "Lichte modus",
            dark: "Donkere modus",
            theme: "Thema",
        },
        language: {
            title: "Taal",
            interface_language: "Interface taal",
            command_language: "Commando taal",
        },
        nuitka_language_no_support: "De huidige versie van Nuitka ondersteunt deze taal niet",
        storage: {
            title: "Opslag instellingen",
            user: "Gebruikersinstellingen",
            reset_user: "Gebruikersinstellingen resetten",
            command: "Commando instellingen",
            reset_command: "Commando instellingen resetten",
        },
    },
    nav_bar: { // Navigatiebalk
        mode: {
            easy_mode: "Eenvoudige modus",
            full_mode: "Volledige modus",
            info: {
                l1: "Of de volledige commandolijst weergeven",
                l2: "Eenvoudige modus: Toon veelgebruikte Nuitka opties",
                l3: "Volledige modus: Toon alle beschikbare opties",
            },
            show_raw_command: "Toon ruwe commando",
            no_show_raw_command: "Verberg ruwe commando",
            show_raw_command_info: "Of ruwe commando weergeven in alle opties",
        },
        now_nuitka_version: "Momenteel geselecteerde configuratiebestand versie:",
        select_nuitka_version: "Selecteer de versie van Nuitka die u gebruikt",
    },
    tabs: {
        edit: "Bewerken",
        output: "Uitvoer",
        input: "Invoer",
    },
    input_page: {
        input_from_cli: "Importeren vanuit commandoregel",
        start_input: "Import starten",
        please_input_cli_command: "Voer alstublieft de Nuitka commandoregel instructie in",
        general: {
            unable_parse_check: "Er zijn onherkende attributen in de verstrekte gegevens, controleer of de invoergegevens voldoen aan de vereisten of voer handmatig in",
            please_check_down: "Er zijn onherkende attributen in de verstrekte gegevens, controleer hieronder",
        },
        json: {
            input_from_json: "Importeren vanuit JSON",
            please_input_json: "Voer alstublieft de JSON gegevens in die van deze website zijn geëxporteerd",
            json_parse_error: "JSON parsing mislukt, controleer of de invoergegevens in JSON formaat zijn",
        },
        cli: {
            wait_bash_parser: "Wacht alstublieft tot Bash Parser is geladen",
            unsupported_operate: "Invoerfout - niet-ondersteunde operator, controleer uw invoer",
            error_command: "Invoerfout - commandofout, zorg ervoor dat uw commando correct is en u de juiste Nuitka versie hebt geselecteerd",
        },
    },
    nuitka_elements: {
        select_placeholder: "Selecteren",
        not_selected: "Niet geselecteerd",
        selected: "Geselecteerd",
        user_provide: "Dit is uw aangepaste optie",
        add_option: "Optie toevoegen",
        input_an_option: "Voer een optie in",
        option_desc: "Optie beschrijving",
    },
    message: {
        will_del_option: "U staat op het punt deze aangepaste optie te verwijderen",
        continue_del: "Wilt u doorgaan?",
        warning: "Waarschuwing",
        OK: "OK",
        cancel: "Annuleren",
        cancel_del: "Verwijdering geannuleerd",
        del_success: "Succesvol verwijderd",
        have_been_created: "Deze optie bestaat al!",
        drop_file: "Sleep het bestand hierheen",
        or: "of",
        click_select_file: "Selecteer een bestand",
        next_step: "Volgende stap",
        prev_step: "Vorige stap",
        data_input_success: "Gegevens succesvol geïmporteerd",
        calling: "Oproepen, wacht alstublieft",
    },
    output_page: {
        run_nuitka_through_python: "Nuitka uitvoeren via Python",
        CLI: "Commandoregel uitvoer",
        JSON: "JSON uitvoer",
    },
    // Gebruikersgids
    website_guide: {
        start: {
            title: "Gebruikersgids",
            desc: "Welkom bij Nuitka Commander, vervolgens, klik alstublieft op de rechter benedenhoek, laten we stap voor stap leren hoe het te gebruiken",
        },
        navbar: {
            title: "Navigatiebalk",
            desc: "Dit is de navigatiebalk, waar enkele globale functies zijn ingesteld",
        },
        navbar_original_command: {
            title: "Navigatiebalk - Ruwe Commando Schakelaar",
            desc: "Hier kunt u schakelen of het ruwe Nuitka commando weergeven voor eenvoudig bekijken. U kunt proberen te schakelen",
        },
        navbar_version_select: {
            title: "Navigatiebalk - Versie Selectie",
            desc: "In het selectievak aan de rechterkant, kunt u verschillende versies van Nuitka kiezen. U kunt het configuratiebestand vinden dat geschikt is voor uw versie. Als u een eenvoudiger commando wilt, kunt u 'Eenvoudige Modus' onderaan kiezen",
        },
        navbar_settings_button: {
            title: "Navigatiebalk - Instellingen Knop",
            desc: "Klik op deze knop om naar de instellingenpagina te gaan",
        },
        settings_page: {
            title: "Instellingen Pagina",
            desc: "Vervolgens, is de instellingenpagina",
        },
        settings_page_intro: {
            title: "Instellingen Pagina - Introductie",
            desc: "Dit is de instellingen interface, waar u uw gewenste instellingen kunt aanpassen",
        },
        settings_page_tour: {
            title: "Instellingen Pagina - Gids",
            desc: "Om de gids in de toekomst opnieuw te bekijken, kunt u hier klikken",
        },
        edit_page_buffer: {
            title: "Bewerkingspagina",
            desc: "Vervolgens, is de bewerkingspagina",
        },
        edit_page_intro: {
            title: "Bewerkingspagina - Introductie",
            desc: "Dit is de bewerkingspagina, waar u uw Nuitka commando's kunt configureren. U kunt links klikken om commandocategorieën te wisselen en in het midden commando's bewerken",
        },
        edit_page_edit_box: {
            title: "Bewerkingspagina - Bewerkingsvak",
            desc: "Er zijn veel bewerkingsvakken hier, elk vertegenwoordigt een parameter. Als u de muis eroverheen beweegt, zal er een gedetailleerde introductie zijn. Probeer het nu",
        },
        output_page_intro: {
            title: "Uitvoerpagina - Introductie",
            desc: "Dit is de uitvoerpagina, waar u de uitvoerresultaten kunt krijgen van de commando's die u zojuist hebt bewerkt. U kunt links klikken om het uitvoertype te wisselen en in het midden het uitvoercommando bekijken. Klik rechtsboven om het commando direct te kopiëren. Natuurlijk kunt u ook de muis over elk element bewegen om gedetailleerde introducties te bekijken.",
        },
        input_page_intro: {
            title: "Invoerpagina - Introductie",
            desc: "Dit is de invoerpagina, waar u commando's kunt invoeren en ze vervolgens importeren in Nuitka Commander voor bewerking. U kunt links klikken om het invoertype te wisselen en rechtsboven beginnen met importeren.",
        },
        website_footer: {
            title: "Website Footer",
            desc: "Dit is de website footer, waar u enkele nuttige links kunt vinden, zoals de Nuitka website en de project homepage. U kunt ook het project versienummer, auteurs en andere informatie vinden",
        },
        end: {
            title: "Einde",
            desc: "De gids eindigt hier, bedankt voor het gebruik. Als u vragen of suggesties heeft, voel u vrij om een issue op GitHub aan te maken",
        },
    },
    search: { // Zoeken
        search_placeholder: "Zoeken",
        please_input: "Voer alstublieft zoekinhoud in",
        no_result: "Geen opties gevonden die dit trefwoord bevatten",
        try_keyword: "Probeer alstublieft te vervangen met andere trefwoorden en zoek opnieuw",
        jump: "Springen",
        select: "Selecteren",
        exit: "Afsluiten",
    },
    // Configuratiebestand versie titels, als u wilt, kunt u elke versie een titel geven. Zo niet, dan wordt de standaard sleutelnaam gebruikt
    nuitka_config_title: {
        simple: "Eenvoudige modus",
    },
};
