// noinspection JSUnusedGlobalSymbols

/**
 * @Description Polish language pack
 * @Author: GitHub Copilot
 * @Date: 2025-06-01
 */
export default {
    website_info: { // Wyświetlanie informacji o stronie
        supported_to_nuitka_version: "Obsługiwane do wersji Nuitka",
        report_issue: "Zgłoś problem",
        nuitka_website: "Strona Nuitka",
        get_involved: "Zaangażuj się",
        changelog: "Dziennik zmian",
        project_homepage: "Strona główna projektu",
        github_website: "Użyj na stronie",
        local_use: "Użycie lokalne",
        current_version_author: "Współtwórcy bieżącej wersji",
        open_source_license: "Licencja open source",
        long_info: {
            license: "Używamy licencji open source GPLv3, pełną licencję można zobaczyć tutaj:",
            author: "Do bieżącej wersji, podziękowania dla następujących współtwórców za ich wkład w ten projekt (bez szczególnej kolejności):",
        },
    },
    setting: { // Strona ustawień
        guide: {
            title: "Przewodnik",
            start: "Rozpocznij przewodnik",
        },
        theme: {
            auto: "Podążaj za systemem",
            light: "Tryb jasny",
            dark: "Tryb ciemny",
            theme: "Motyw",
        },
        language: {
            title: "Język",
            interface_language: "Język interfejsu",
            command_language: "Język poleceń",
        },
        nuitka_language_no_support: "Bieżąca wersja Nuitka nie obsługuje tego języka",
        storage: {
            title: "Ustawienia przechowywania",
            user: "Ustawienia użytkownika",
            reset_user: "Resetuj ustawienia użytkownika",
            command: "Ustawienia poleceń",
            reset_command: "Resetuj ustawienia poleceń",
        },
    },
    nav_bar: { // Pasek nawigacji
        mode: {
            easy_mode: "Tryb łatwy",
            full_mode: "Tryb pełny",
            info: {
                l1: "Czy wyświetlać pełną listę poleceń",
                l2: "Tryb łatwy: Wyświetl często używane opcje Nuitka",
                l3: "Tryb pełny: Wyświetl wszystkie dostępne opcje",
            },
            show_raw_command: "Pokaż surowe polecenie",
            no_show_raw_command: "Ukryj surowe polecenie",
            show_raw_command_info: "Czy wyświetlać surowe polecenie we wszystkich opcjach",
        },
        now_nuitka_version: "Obecnie wybrana wersja pliku konfiguracyjnego:",
        select_nuitka_version: "Wybierz wersję Nuitka, której używasz",
    },
    tabs: {
        edit: "Edytuj",
        output: "Wyjście",
        input: "Wejście",
    },
    input_page: {
        input_from_cli: "Importuj z linii poleceń",
        start_input: "Rozpocznij import",
        please_input_cli_command: "Proszę wprowadzić instrukcję linii poleceń Nuitka",
        general: {
            unable_parse_check: "W podanych danych są nierozpoznane atrybuty, sprawdź czy dane wejściowe spełniają wymagania lub wprowadź ręcznie",
            please_check_down: "W podanych danych są nierozpoznane atrybuty, sprawdź poniżej",
        },
        json: {
            input_from_json: "Importuj z JSON",
            please_input_json: "Proszę wprowadzić dane JSON wyeksportowane z tej strony",
            json_parse_error: "Parsowanie JSON nie powiodło się, sprawdź czy dane wejściowe są w formacie JSON",
        },
        cli: {
            wait_bash_parser: "Proszę poczekać na załadowanie Bash Parser",
            unsupported_operate: "Błąd wejścia - nieobsługiwany operator, sprawdź swoje dane wejściowe",
            error_command: "Błąd wejścia - błąd polecenia, upewnij się, że polecenie jest poprawne i wybrałeś właściwą wersję Nuitka",
        },
    },
    nuitka_elements: {
        select_placeholder: "Wybierz",
        not_selected: "Nie wybrano",
        selected: "Wybrano",
        user_provide: "To jest Twoja niestandardowa opcja",
        add_option: "Dodaj opcję",
        input_an_option: "Wprowadź opcję",
        option_desc: "Opis opcji",
    },
    message: {
        will_del_option: "Zamierzasz usunąć tę niestandardową opcję",
        continue_del: "Czy chcesz kontynuować?",
        warning: "Ostrzeżenie",
        OK: "OK",
        cancel: "Anuluj",
        cancel_del: "Usunięcie anulowane",
        del_success: "Pomyślnie usunięto",
        have_been_created: "Ta opcja już istnieje!",
        drop_file: "Przeciągnij plik tutaj",
        or: "lub",
        click_select_file: "Wybierz plik",
        next_step: "Następny krok",
        prev_step: "Poprzedni krok",
        data_input_success: "Dane pomyślnie zaimportowane",
        calling: "Wywołanie, proszę czekać",
    },
    output_page: {
        run_nuitka_through_python: "Uruchom Nuitka przez Python",
        CLI: "Wyjście linii poleceń",
        JSON: "Wyjście JSON",
    },
    // Przewodnik użytkownika
    website_guide: {
        start: {
            title: "Przewodnik użytkownika",
            desc: "Witamy w Nuitka Commander, następnie proszę kliknąć w prawym dolnym rogu, nauczmy się krok po kroku jak z tego korzystać",
        },
        navbar: {
            title: "Pasek nawigacji",
            desc: "To jest pasek nawigacji, gdzie ustawione są niektóre funkcje globalne",
        },
        navbar_original_command: {
            title: "Pasek nawigacji - Przełącznik surowego polecenia",
            desc: "Tutaj możesz przełączać czy wyświetlać surowe polecenie Nuitka dla łatwego przeglądania. Możesz spróbować przełączyć",
        },
        navbar_version_select: {
            title: "Pasek nawigacji - Wybór wersji",
            desc: "W polu wyboru po prawej stronie możesz wybierać różne wersje Nuitka. Możesz znaleźć plik konfiguracyjny odpowiedni dla Twojej wersji. Jeśli chcesz prostszego polecenia, możesz wybrać 'Tryb łatwy' na dole",
        },
        navbar_settings_button: {
            title: "Pasek nawigacji - Przycisk ustawień",
            desc: "Kliknij ten przycisk, aby przejść do strony ustawień",
        },
        settings_page: {
            title: "Strona ustawień",
            desc: "Następnie jest strona ustawień",
        },
        settings_page_intro: {
            title: "Strona ustawień - Wprowadzenie",
            desc: "To jest interfejs ustawień, gdzie możesz dostosować pożądane ustawienia",
        },
        settings_page_tour: {
            title: "Strona ustawień - Przewodnik",
            desc: "Aby ponownie wyświetlić przewodnik w przyszłości, możesz kliknąć tutaj",
        },
        edit_page_buffer: {
            title: "Strona edycji",
            desc: "Następnie jest strona edycji",
        },
        edit_page_intro: {
            title: "Strona edycji - Wprowadzenie",
            desc: "To jest strona edycji, gdzie możesz konfigurować swoje polecenia Nuitka. Możesz kliknąć po lewej stronie, aby przełączać kategorie poleceń i edytować polecenia w środku",
        },
        edit_page_edit_box: {
            title: "Strona edycji - Pole edycji",
            desc: "Jest tutaj wiele pól edycji, każde reprezentuje parametr. Jeśli najeżdżasz na nie myszką, będzie szczegółowe wprowadzenie. Spróbuj teraz",
        },
        output_page_intro: {
            title: "Strona wyjścia - Wprowadzenie",
            desc: "To jest strona wyjścia, gdzie możesz uzyskać wyniki wyjściowe poleceń, które właśnie edytowałeś. Możesz kliknąć po lewej stronie, aby przełączać typ wyjścia i przeglądać polecenie wyjściowe w środku. Kliknij w prawym górnym rogu, aby skopiować polecenie bezpośrednio. Oczywiście możesz także najechać myszką na każdy element, aby zobaczyć szczegółowe wprowadzenia.",
        },
        input_page_intro: {
            title: "Strona wejścia - Wprowadzenie",
            desc: "To jest strona wejścia, gdzie możesz wprowadzać polecenia, a następnie importować je do Nuitka Commander do edycji. Możesz kliknąć po lewej stronie, aby przełączać typ wejścia i rozpocząć import w prawym górnym rogu.",
        },
        website_footer: {
            title: "Stopka strony",
            desc: "To jest stopka strony, gdzie możesz znaleźć niektóre przydatne linki, takie jak strona Nuitka i strona główna projektu. Możesz także znaleźć numer wersji projektu, autorów i inne informacje",
        },
        end: {
            title: "Koniec",
            desc: "Przewodnik kończy się tutaj, dziękujemy za użytkowanie. Jeśli masz jakieś pytania lub sugestie, nie wahaj się zgłosić problem na GitHub",
        },
    },
    search: { // Wyszukiwanie
        search_placeholder: "Szukaj",
        please_input: "Proszę wprowadzić treść wyszukiwania",
        no_result: "Nie znaleziono opcji zawierających to słowo kluczowe",
        try_keyword: "Proszę spróbować zamienić innymi słowami kluczowymi i wyszukać ponownie",
        jump: "Skocz",
        select: "Wybierz",
        exit: "Wyjdź",
    },
    // Tytuły wersji pliku konfiguracyjnego, jeśli chcesz, możesz nadać tytuł każdej wersji. Jeśli nie, zostanie użyta domyślna nazwa klucza
    nuitka_config_title: {
        simple: "Tryb prosty",
    },
};
