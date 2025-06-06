// noinspection JSUnusedGlobalSymbols

/**
 * @Description French language pack (LLM translation)
 * @Author: AI Assistant
 * @Date: 2025-06-01
 */
export default {
    website_info: { // Informations diverses
        supported_to_nuitka_version: "Pris en charge jusqu'à la version Nuitka",
        report_issue: "Signaler un problème",
        nuitka_website: "Site web Nuitka",
        get_involved: "Participer",
        changelog: "Journal des modifications",
        project_homepage: "Page d'accueil du projet",
        github_website: "Utiliser sur le site web",
        local_use: "Utilisation locale",
        current_version_author: "Contributeurs de la version actuelle",
        open_source_license: "Licence open source",
        long_info: {
            license: "Nous utilisons la licence open source GPLv3, vous pouvez consulter la licence complète ici :",
            author: "Jusqu'à la version actuelle, merci aux contributeurs suivants pour leurs contributions à ce projet (sans ordre particulier) :",
        },
    },
    setting: { // Page des paramètres
        guide: {
            title: "Guide",
            start: "Commencer le guide",
        },
        theme: {
            auto: "Suivre le système",
            light: "Mode clair",
            dark: "Mode sombre",
            theme: "Thème",
        },
        language: {
            title: "Langue",
            interface_language: "Langue de l'interface",
            command_language: "Langue des commandes",
        },
        nuitka_language_no_support: "La version actuelle de Nuitka ne prend pas en charge cette langue",
        storage: {
            title: "Paramètres de stockage",
            user: "Paramètres utilisateur",
            reset_user: "Réinitialiser les paramètres utilisateur",
            command: "Paramètres de commande",
            reset_command: "Réinitialiser les paramètres de commande",
        },
    },
    nav_bar: { // Barre de navigation
        mode: {
            easy_mode: "Mode facile",
            full_mode: "Mode complet",
            info: {
                l1: "Afficher ou non la liste complète des commandes",
                l2: "Mode facile : Afficher les options Nuitka couramment utilisées",
                l3: "Mode complet : Afficher toutes les options disponibles",
            },
            show_raw_command: "Afficher la commande brute",
            no_show_raw_command: "Masquer la commande brute",
            show_raw_command_info: "Afficher ou non la commande brute dans toutes les options",
        },
        now_nuitka_version: "Version du fichier de configuration actuellement sélectionnée :",
        select_nuitka_version: "Sélectionnez la version de Nuitka que vous utilisez",
    },
    tabs: {
        edit: "Éditer",
        output: "Sortie",
        input: "Entrée",
    },
    input_page: {
        input_from_cli: "Importer depuis la ligne de commande",
        start_input: "Commencer l'importation",
        please_input_cli_command: "Veuillez entrer l'instruction de ligne de commande Nuitka",
        general: {
            unable_parse_check: "Il y a des attributs non reconnus dans les données fournies, veuillez vérifier si les données d'entrée répondent aux exigences ou les saisir manuellement",
            please_check_down: "Il y a des attributs non reconnus dans les données fournies, veuillez vérifier ci-dessous",
        },
        json: {
            input_from_json: "Importer depuis JSON",
            please_input_json: "Veuillez entrer les données JSON exportées depuis ce site web",
            json_parse_error: "Échec de l'analyse JSON, veuillez vérifier si les données d'entrée sont au format JSON",
        },
        cli: {
            wait_bash_parser: "Veuillez attendre le chargement de Bash Parser",
            unsupported_operate: "Erreur d'entrée - opérateur non pris en charge, veuillez vérifier votre entrée",
            error_command: "Erreur d'entrée - erreur de commande, veuillez vous assurer que votre commande est correcte et que vous avez sélectionné la bonne version de Nuitka",
        },
    },
    nuitka_elements: {
        select_placeholder: "Sélectionner",
        not_selected: "Non sélectionné",
        selected: "Sélectionné",
        user_provide: "Ceci est votre option personnalisée",
        add_option: "Ajouter une option",
        input_an_option: "Entrer une option",
        option_desc: "Description de l'option",
    },
    message: {
        will_del_option: "Vous êtes sur le point de supprimer cette option personnalisée",
        continue_del: "Voulez-vous continuer ?",
        warning: "Avertissement",
        OK: "OK",
        cancel: "Annuler",
        cancel_del: "Suppression annulée",
        del_success: "Supprimé avec succès",
        have_been_created: "Cette option existe déjà !",
        drop_file: "Glissez le fichier ici",
        or: "ou",
        click_select_file: "Sélectionner un fichier",
        next_step: "Étape suivante",
        prev_step: "Étape précédente",
        data_input_success: "Données importées avec succès",
        calling: "Appel en cours, veuillez patienter",
    },
    output_page: {
        run_nuitka_through_python: "Exécuter Nuitka via Python",
        CLI: "Sortie de ligne de commande",
        JSON: "Sortie JSON",
    },
    // Guide utilisateur
    website_guide: {
        start: {
            title: "Guide Utilisateur",
            desc: "Bienvenue dans Nuitka Commander, maintenant, veuillez cliquer sur le coin inférieur droit, apprenons comment l'utiliser étape par étape",
        },
        navbar: {
            title: "Barre de Navigation",
            desc: "Ceci est la barre de navigation, où certaines fonctions globales sont définies",
        },
        navbar_original_command: {
            title: "Barre de Navigation - Basculer la Commande Brute",
            desc: "Ici vous pouvez basculer l'affichage de la commande Nuitka originale pour un visionnage facile. Vous pouvez essayer de la basculer",
        },
        navbar_version_select: {
            title: "Barre de Navigation - Sélection de Version",
            desc: "Dans la boîte de sélection à droite, vous pouvez choisir différentes versions de Nuitka. Vous pouvez trouver le fichier de configuration adapté à votre version. Si vous voulez une commande plus simple, vous pouvez choisir 'Mode Facile' en bas",
        },
        navbar_settings_button: {
            title: "Barre de Navigation - Bouton Paramètres",
            desc: "Cliquez sur ce bouton pour entrer dans la page des paramètres",
        },
        settings_page: {
            title: "Page des Paramètres",
            desc: "Ensuite, c'est la page des paramètres",
        },
        settings_page_intro: {
            title: "Page des Paramètres - Introduction",
            desc: "Ceci est l'interface des paramètres, où vous pouvez ajuster vos paramètres souhaités",
        },
        settings_page_tour: {
            title: "Page des Paramètres - Guide",
            desc: "Pour voir le guide à nouveau dans le futur, vous pouvez cliquer ici",
        },
        edit_page_buffer: {
            title: "Page d'Édition",
            desc: "Ensuite, c'est la page d'édition",
        },
        edit_page_intro: {
            title: "Page d'Édition - Introduction",
            desc: "Ceci est la page d'édition, où vous pouvez configurer vos commandes Nuitka. Vous pouvez cliquer à gauche pour changer les catégories de commandes et éditer les commandes au milieu",
        },
        edit_page_edit_box: {
            title: "Page d'Édition - Boîte d'Édition",
            desc: "Il y a de nombreuses boîtes d'édition ici, chacune représentant un paramètre. Si vous passez la souris dessus, il y aura une introduction détaillée. Essayez maintenant",
        },
        output_page_intro: {
            title: "Page de Sortie - Introduction",
            desc: "Ceci est la page de sortie, où vous pouvez obtenir les résultats de sortie des commandes que vous venez d'éditer. Vous pouvez cliquer à gauche pour changer le type de sortie et voir la commande de sortie au milieu. Cliquez sur le coin supérieur droit pour copier directement la commande. Bien sûr, vous pouvez aussi passer la souris sur chaque élément pour voir les introductions détaillées.",
        },
        input_page_intro: {
            title: "Page d'Entrée - Introduction",
            desc: "Ceci est la page d'entrée, où vous pouvez entrer des commandes puis les importer dans Nuitka Commander pour édition. Vous pouvez cliquer à gauche pour changer le type d'entrée et commencer l'importation dans le coin supérieur droit.",
        },
        website_footer: {
            title: "Pied de Page du Site Web",
            desc: "Ceci est le pied de page du site web, où vous pouvez trouver des liens utiles, comme le site web Nuitka et la page d'accueil du projet. Vous pouvez aussi trouver le numéro de version du projet, les auteurs, et d'autres informations",
        },
        end: {
            title: "Fin",
            desc: "Le guide se termine ici, merci de l'avoir utilisé. Si vous avez des questions ou des suggestions, n'hésitez pas à ouvrir une issue sur GitHub",
        },
    },
    search: { // Recherche
        search_placeholder: "Rechercher",
        please_input: "Veuillez entrer le contenu de recherche",
        no_result: "Aucune option contenant ce mot-clé n'a été trouvée",
        try_keyword: "Veuillez essayer de remplacer par d'autres mots-clés et rechercher à nouveau",
        jump: "Aller à",
        select: "Sélectionner",
        exit: "Quitter",
    },
    // Titres de version du fichier de configuration, si vous voulez, vous pouvez donner un titre à chaque version. Sinon, le nom de clé par défaut sera utilisé
    nuitka_config_title: {
        simple: "Mode simple",
    },
};
