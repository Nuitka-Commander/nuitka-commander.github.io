// noinspection JSUnusedGlobalSymbols

/**
 * @Description Italian language pack (LLM translation)
 * @Author: AI Assistant
 * @Date: 2025-06-01
 */
export default {
    website_info: { // Informazioni varie
        supported_to_nuitka_version: "Supportato fino alla versione Nuitka",
        report_issue: "Segnala problema",
        nuitka_website: "Sito web Nuitka",
        get_involved: "Partecipa",
        changelog: "Registro delle modifiche",
        project_homepage: "Homepage del progetto",
        github_website: "Usa sul sito web",
        local_use: "Uso locale",
        current_version_author: "Contributori della versione attuale",
        open_source_license: "Licenza open source",
        long_info: {
            license: "Utilizziamo la licenza open source GPLv3, puoi visualizzare la licenza completa qui:",
            author: "Fino alla versione attuale, ringraziamo i seguenti contributori per i loro contributi a questo progetto (senza ordine particolare):",
        },
    },
    setting: { // Pagina delle impostazioni
        guide: {
            title: "Guida",
            start: "Inizia guida",
        },
        theme: {
            auto: "Segui sistema",
            light: "Modalità chiara",
            dark: "Modalità scura",
            theme: "Tema",
        },
        language: {
            title: "Lingua",
            interface_language: "Lingua dell'interfaccia",
            command_language: "Lingua dei comandi",
        },
        nuitka_language_no_support: "La versione attuale di Nuitka non supporta questa lingua",
        storage: {
            title: "Impostazioni di archiviazione",
            user: "Impostazioni utente",
            reset_user: "Ripristina impostazioni utente",
            command: "Impostazioni comandi",
            reset_command: "Ripristina impostazioni comandi",
        },
    },
    nav_bar: { // Barra di navigazione
        mode: {
            easy_mode: "Modalità facile",
            full_mode: "Modalità completa",
            info: {
                l1: "Se visualizzare l'elenco completo dei comandi",
                l2: "Modalità facile: Visualizza le opzioni Nuitka comunemente utilizzate",
                l3: "Modalità completa: Visualizza tutte le opzioni disponibili",
            },
            show_raw_command: "Mostra comando grezzo",
            no_show_raw_command: "Nascondi comando grezzo",
            show_raw_command_info: "Se visualizzare il comando grezzo in tutte le opzioni",
        },
        now_nuitka_version: "Versione del file di configurazione attualmente selezionata:",
        select_nuitka_version: "Seleziona la versione di Nuitka che stai utilizzando",
    },
    tabs: {
        edit: "Modifica",
        output: "Output",
        input: "Input",
    },
    input_page: {
        input_from_cli: "Importa da riga di comando",
        start_input: "Inizia importazione",
        please_input_cli_command: "Inserisci l'istruzione della riga di comando Nuitka",
        general: {
            unable_parse_check: "Ci sono attributi non riconosciuti nei dati forniti, controlla se i dati di input soddisfano i requisiti o inseriscili manualmente",
            please_check_down: "Ci sono attributi non riconosciuti nei dati forniti, controlla qui sotto",
        },
        json: {
            input_from_json: "Importa da JSON",
            please_input_json: "Inserisci i dati JSON esportati da questo sito web",
            json_parse_error: "Analisi JSON fallita, controlla se i dati di input sono in formato JSON",
        },
        cli: {
            wait_bash_parser: "Attendi il caricamento di Bash Parser",
            unsupported_operate: "Errore di input - operatore non supportato, controlla il tuo input",
            error_command: "Errore di input - errore comando, assicurati che il tuo comando sia corretto e che tu abbia selezionato la versione corretta di Nuitka",
        },
    },
    nuitka_elements: {
        select_placeholder: "Seleziona",
        not_selected: "Non selezionato",
        selected: "Selezionato",
        user_provide: "Questa è la tua opzione personalizzata",
        add_option: "Aggiungi un'opzione",
        input_an_option: "Inserisci un'opzione",
        option_desc: "Descrizione dell'opzione",
    },
    message: {
        will_del_option: "Stai per eliminare questa opzione personalizzata",
        continue_del: "Vuoi continuare?",
        warning: "Avvertimento",
        OK: "OK",
        cancel: "Annulla",
        cancel_del: "Eliminazione annullata",
        del_success: "Eliminato con successo",
        have_been_created: "Questa opzione esiste già!",
        drop_file: "Trascina il file qui",
        or: "o",
        click_select_file: "Seleziona un file",
        next_step: "Passo successivo",
        prev_step: "Passo precedente",
        data_input_success: "Dati importati con successo",
        calling: "Chiamata in corso, attendi",
    },
    output_page: {
        run_nuitka_through_python: "Esegui Nuitka tramite Python",
        CLI: "Output riga di comando",
        JSON: "Output JSON",
    },
    // Guida utente
    website_guide: {
        start: {
            title: "Guida Utente",
            desc: "Benvenuto in Nuitka Commander, ora clicca nell'angolo in basso a destra, impariamo come usarlo passo dopo passo",
        },
        navbar: {
            title: "Barra di Navigazione",
            desc: "Questa è la barra di navigazione, dove sono impostate alcune funzioni globali",
        },
        navbar_original_command: {
            title: "Barra di Navigazione - Attiva/Disattiva Comando Grezzo",
            desc: "Qui puoi attivare/disattivare la visualizzazione del comando Nuitka originale per una facile visualizzazione. Puoi provare ad attivarlo/disattivarlo",
        },
        navbar_version_select: {
            title: "Barra di Navigazione - Selezione Versione",
            desc: "Nella casella di selezione a destra, puoi scegliere diverse versioni di Nuitka. Puoi trovare il file di configurazione adatto alla tua versione. Se vuoi un comando più semplice, puoi scegliere 'Modalità Facile' in basso",
        },
        navbar_settings_button: {
            title: "Barra di Navigazione - Pulsante Impostazioni",
            desc: "Clicca questo pulsante per entrare nella pagina delle impostazioni",
        },
        settings_page: {
            title: "Pagina Impostazioni",
            desc: "Successivamente, c'è la pagina delle impostazioni",
        },
        settings_page_intro: {
            title: "Pagina Impostazioni - Introduzione",
            desc: "Questa è l'interfaccia delle impostazioni, dove puoi regolare le tue impostazioni desiderate",
        },
        settings_page_tour: {
            title: "Pagina Impostazioni - Guida",
            desc: "Per visualizzare di nuovo la guida in futuro, puoi cliccare qui",
        },
        edit_page_buffer: {
            title: "Pagina Modifica",
            desc: "Successivamente, c'è la pagina di modifica",
        },
        edit_page_intro: {
            title: "Pagina Modifica - Introduzione",
            desc: "Questa è la pagina di modifica, dove puoi configurare i tuoi comandi Nuitka. Puoi cliccare a sinistra per cambiare le categorie di comandi e modificare i comandi al centro",
        },
        edit_page_edit_box: {
            title: "Pagina Modifica - Casella di Modifica",
            desc: "Ci sono molte caselle di modifica qui, ognuna rappresenta un parametro. Se passi il mouse sopra, ci sarà un'introduzione dettagliata. Prova ora",
        },
        output_page_intro: {
            title: "Pagina Output - Introduzione",
            desc: "Questa è la pagina di output, dove puoi ottenere i risultati di output dei comandi che hai appena modificato. Puoi cliccare a sinistra per cambiare il tipo di output e visualizzare il comando di output al centro. Clicca nell'angolo in alto a destra per copiare direttamente il comando. Naturalmente, puoi anche passare il mouse su ogni elemento per vedere le introduzioni dettagliate.",
        },
        input_page_intro: {
            title: "Pagina Input - Introduzione",
            desc: "Questa è la pagina di input, dove puoi inserire comandi e poi importarli in Nuitka Commander per la modifica. Puoi cliccare a sinistra per cambiare il tipo di input e iniziare l'importazione nell'angolo in alto a destra.",
        },
        website_footer: {
            title: "Footer del Sito Web",
            desc: "Questo è il footer del sito web, dove puoi trovare alcuni link utili, come il sito web Nuitka e la homepage del progetto. Puoi anche trovare il numero di versione del progetto, gli autori e altre informazioni",
        },
        end: {
            title: "Fine",
            desc: "La guida finisce qui, grazie per averla utilizzata. Se hai domande o suggerimenti, sentiti libero di aprire un issue su GitHub",
        },
    },
    search: { // Ricerca
        search_placeholder: "Cerca",
        please_input: "Inserisci contenuto di ricerca",
        no_result: "Nessuna opzione contenente questa parola chiave è stata trovata",
        try_keyword: "Prova a sostituire con altre parole chiave e cerca di nuovo",
        jump: "Vai a",
        select: "Seleziona",
        exit: "Esci",
    },
    // Titoli della versione del file di configurazione, se vuoi, puoi dare un titolo a ogni versione. Se no, verrà utilizzato il nome della chiave predefinita
    nuitka_config_title: {
        simple: "Modalità semplice",
    },
};
