// noinspection JSUnusedGlobalSymbols

/**
 * @Description English language pack （LLM translation）
 * @Author: erduotong
 * @Date: 2023-11-26 11:09:00
 */
export default {
    website_info: { // Miscellaneous information display
        supported_to_nuitka_version: "Supported Nuitka Version",
        report_issue: "Report Issue",
        nuitka_website: "Nuitka Official Website",
        get_involved: "Get Involved",
        changelog: "Changelog",
        project_homepage: "Project Homepage",
        github_website: "Use on Github",
        local_use: "Local Use",
        current_version_author: "Current Version Contributors",
        open_source_license: "Open Source License",
        long_info: {
            license: "We use the GPLv3 open source license, you can view the full license here:",
            author: "As of the current version, thanks to the following contributors for their contributions to this project (in no particular order):",
        },
    },
    setting: { // Settings page
        guide: {
            title: "Guide",
            start: "Start Guide",
        },
        theme: {
            auto: "Follow System",
            light: "Light Mode",
            dark: "Dark Mode",
            theme: "Theme",
        },
        language: {
            title: "Language",
            interface_language: "Interface Language",
            command_language: "Command Language",
        },
        nuitka_language_no_support: "The current Nuitka version does not support this language",
        storage: {
            title: "Storage Settings",
            user: "User Settings",
            reset_user: "Reset User Settings",
            command: "Command Settings",
            reset_command: "Reset Command Settings",
        },
    },
    nav_bar: { // Navigation bar
        mode: {
            easy_mode: "Easy Mode",
            full_mode: "Full Mode",
            info: {
                l1: "Whether to show the full list of commands",
                l2: "Easy Mode: Show common Nuitka options",
                l3: "Full Mode: Show all available options",
            },
            show_raw_command: "Show Raw Command",
            no_show_raw_command: "Hide Raw Command",
            show_raw_command_info: "Whether to show the raw command in command settings",
        },
        now_nuitka_version: "Currently selected configuration file version:",
        select_nuitka_version: "Select the version of Nuitka you are using",
    },
    tabs: {
        edit: "Edit",
        output: "Output",
        input: "Input",
    },
    input_page: {
        input_from_cli: "Import from CLI",
        start_input: "Start Import",
        please_input_cli_command: "Please input the Nuitka CLI command",
        general: {
            unable_parse_check: "There are unrecognizable attributes in the provided data, please check if the input data meets the requirements or input manually",
            please_check_down: "There are unrecognizable attributes in the provided data, please check below",
        },
        json: {
            input_from_json: "Import from JSON",
            please_input_json: "Please input the JSON data exported from this website",
            json_parse_error: "JSON parsing failed, please check if the input data is in the correct JSON format",
        },
    },
    nuitka_elements: {
        select_placeholder: "Select",
        not_selected: "Not Selected",
        selected: "Selected",
        user_provide: "This is a custom option provided by you",
        add_option: "Add an Option",
        input_an_option: "Input an Option",
        option_desc: "Option Description",
    },
    message: {
        will_del_option: "You are about to delete this custom option",
        continue_del: "Do you want to continue?",
        warning: "Warning",
        OK: "OK",
        cancel: "Cancel",
        cancel_del: "Deletion canceled",
        del_success: "Deletion successful",
        have_been_created: "This option already exists!",
        drop_file: "Drag and drop files here",
        or: "or",
        click_select_file: "Click to select a file",
        next_step: "Next Step",
        prev_step: "Previous Step",
        data_input_success: "Data import successful",
        calling: "Calling, please wait",
    },
    output_page: {
        run_nuitka_through_python: "Run Nuitka through Python",
        CLI: "CLI Output",
        JSON: "JSON Output",
    },
    // User guide
    website_guide: {
        start: {
            title: "User Guide",
            desc: "Welcome to Nuitka Commander, next, please click the bottom right corner to learn how to use it step by step",
        },
        navbar: {
            title: "Navigation Bar",
            desc: "This is the navigation bar, some global functions are set here",
        },
        navbar_original_command: {
            title: "Navigation Bar — Raw Command Toggle",
            desc: "Here you can toggle whether to show the original nuitka command for easy viewing. You can try toggling it",
        },
        navbar_version_select: {
            title: "Navigation Bar — Version Selection",
            desc: "In the selection box on the right, you can choose different Nuitka versions to find the configuration file suitable for your version. If you want a more streamlined command, you can select 'Easy Mode' at the bottom",
        },
        navbar_settings_button: {
            title: "Navigation Bar — Settings Button",
            desc: "Click this button to enter the settings page",
        },
        settings_page: {
            title: "Settings Page",
            desc: "Next, is the settings page",
        },
        settings_page_intro: {
            title: "Settings Page — Introduction",
            desc: "This is the settings interface, you can adjust your preferred settings here",
        },
        settings_page_tour: {
            title: "Settings Page — Guide",
            desc: "If you want to review the tutorial in the future, you can click here",
        },
        edit_page_buffer: {
            title: "Edit Page",
            desc: "Next, is the edit page",
        },
        edit_page_intro: {
            title: "Edit Page — Introduction",
            desc: "This is the edit page, you can configure your nuitka command here. You can click on the left to switch command categories and edit commands in the middle",
        },
        edit_page_edit_box: {
            title: "Edit Page — Edit Box",
            desc: "There are many edit boxes here, each representing a parameter. If you hover the mouse over them, there will be detailed introductions. Why not try it now",
        },
        output_page_intro: {
            title: "Output Page — Introduction",
            desc: "This is the output page, you can get the output of the command you just edited here. You can click on the left to switch the type of output and view the command in the middle. Click the top right corner to directly copy the command. Of course, you can also hover the mouse over each element to view detailed introductions.",
        },
        input_page_intro: {
            title: "Input Page — Introduction",
            desc: "This is the input page, you can input commands here and then import them into nuitka commander for editing. You can click on the left to switch the type of input and start the import in the top right corner.",
        },
        website_footer: {
            title: "Website Footer",
            desc: "This is the website footer, you can find some useful links here, such as the Nuitka official website and project homepage. You can also find the project version number, author, and other information",
        },
        end: {
            title: "End",
            desc: "The tutorial ends here, thank you for using it. If you have any questions or suggestions, please feel free to raise an issue on github",
        },
    },
    // Configuration file version titles. If you want, you can give a title for each version. If not, use the default key name.
    nuitka_config_title: {
        simple: "Simple Mode",
    },
};
