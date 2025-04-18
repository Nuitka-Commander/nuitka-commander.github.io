// noinspection JSUnusedGlobalSymbols

/**
 * @Description English language pack （LLM translation）
 * @Author: erduotong
 * @Date: 2023-11-26 11:09:00
 */
export default {
    website_info: { // Miscellaneous information display
        supported_to_nuitka_version: "Supported to Nuitka version",
        report_issue: "Report issue",
        nuitka_website: "Nuitka website",
        get_involved: "Get involved",
        changelog: "Changelog",
        project_homepage: "Project homepage",
        github_website: "Use on website",
        local_use: "Local use",
        current_version_author: "Current version contributors",
        open_source_license: "Open source license",
        long_info: {
            license: "We use the GPLv3 open source license, you can view the full license here:",
            author: "Up to the current version, thanks to the following contributors for their contributions to this project (in no particular order):",
        },
    },
    setting: { // Settings page
        guide: {
            title: "Guide",
            start: "Start guide",
        },
        theme: {
            auto: "Follow system",
            light: "Light mode",
            dark: "Dark mode",
            theme: "Theme",
        },
        language: {
            title: "Language",
            interface_language: "Interface language",
            command_language: "Command language",
        },
        nuitka_language_no_support: "The current version of Nuitka does not support this language",
        storage: {
            title: "Storage settings",
            user: "User settings",
            reset_user: "Reset user settings",
            command: "Command settings",
            reset_command: "Reset command settings",
        },
    },
    nav_bar: { // Navigation bar
        mode: {
            easy_mode: "Easy mode",
            full_mode: "Full mode",
            info: {
                l1: "Whether to display the full list of commands",
                l2: "Easy mode: Display commonly used Nuitka options",
                l3: "Full mode: Display all available options",
            },
            show_raw_command: "Show raw command",
            no_show_raw_command: "Hide raw command",
            show_raw_command_info: "Whether to display the raw command in all options",
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
        input_from_cli: "Import from command line",
        start_input: "Start import",
        please_input_cli_command: "Please enter the Nuitka command line instruction",
        general: {
            unable_parse_check: "There are unrecognized attributes in the provided data, please check if the input data meets the requirements or enter it manually",
            please_check_down: "There are unrecognized attributes in the provided data, please check below",
        },
        json: {
            input_from_json: "Import from JSON",
            please_input_json: "Please enter the JSON data exported from this website",
            json_parse_error: "JSON parsing failed, please check if the input data is in JSON format",
        },
        cli: {
            wait_bash_parser: "Please wait for Bash Parser to load",
            unsupported_operate: "Input error - unsupported operator, please check your input",
            error_command: "Input error - command error, please ensure your command is correct and you have selected the correct Nuitka version",
        },
    },
    nuitka_elements: {
        select_placeholder: "Select",
        not_selected: "Not selected",
        selected: "Selected",
        user_provide: "This is your custom option",
        add_option: "Add an option",
        input_an_option: "Enter an option",
        option_desc: "Option description",
    },
    message: {
        will_del_option: "You are about to delete this custom option",
        continue_del: "Do you want to continue?",
        warning: "Warning",
        OK: "OK",
        cancel: "Cancel",
        cancel_del: "Deletion canceled",
        del_success: "Deleted successfully",
        have_been_created: "This option already exists!",
        drop_file: "Drag the file here",
        or: "or",
        click_select_file: "Select a file",
        next_step: "Next step",
        prev_step: "Previous step",
        data_input_success: "Data imported successfully",
        calling: "Calling, please wait",
    },
    output_page: {
        run_nuitka_through_python: "Run Nuitka through Python",
        CLI: "Command line output",
        JSON: "JSON output",
    },
    // User guide
    website_guide: {
        start: {
            title: "User Guide",
            desc: "Welcome to Nuitka Commander, next, please click the bottom right corner, let's learn how to use it step by step",
        },
        navbar: {
            title: "Navigation Bar",
            desc: "This is the navigation bar, where some global functions are set",
        },
        navbar_original_command: {
            title: "Navigation Bar - Raw Command Toggle",
            desc: "Here you can toggle whether to display the original Nuitka command for easy viewing. You can try toggling it",
        },
        navbar_version_select: {
            title: "Navigation Bar - Version Selection",
            desc: "In the selection box on the right, you can choose different versions of Nuitka. You can find the configuration file suitable for your version. If you want a simpler command, you can choose 'Easy Mode' at the bottom",
        },
        navbar_settings_button: {
            title: "Navigation Bar - Settings Button",
            desc: "Click this button to enter the settings page",
        },
        settings_page: {
            title: "Settings Page",
            desc: "Next, is the settings page",
        },
        settings_page_intro: {
            title: "Settings Page - Introduction",
            desc: "This is the settings interface, where you can adjust your desired settings",
        },
        settings_page_tour: {
            title: "Settings Page - Guide",
            desc: "To view the guide again in the future, you can click here",
        },
        edit_page_buffer: {
            title: "Edit Page",
            desc: "Next, is the edit page",
        },
        edit_page_intro: {
            title: "Edit Page - Introduction",
            desc: "This is the edit page, where you can configure your Nuitka commands. You can click on the left to switch command categories and edit commands in the middle",
        },
        edit_page_edit_box: {
            title: "Edit Page - Edit Box",
            desc: "There are many edit boxes here, each representing a parameter. If you hover the mouse over it, there will be a detailed introduction. Try it now",
        },
        output_page_intro: {
            title: "Output Page - Introduction",
            desc: "This is the output page, where you can get the output results of the commands you just edited. You can click on the left to switch the type of output and view the output command in the middle. Click the top right corner to copy the command directly. Of course, you can also hover the mouse over each element to view detailed introductions.",
        },
        input_page_intro: {
            title: "Input Page - Introduction",
            desc: "This is the input page, where you can enter commands and then import them into Nuitka Commander for editing. You can click on the left to switch the type of input and start importing in the top right corner.",
        },
        website_footer: {
            title: "Website Footer",
            desc: "This is the website footer, where you can find some useful links, such as the Nuitka website and the project homepage. You can also find the project version number, authors, and other information",
        },
        end: {
            title: "End",
            desc: "The guide ends here, thank you for using it. If you have any questions or suggestions, feel free to raise an issue on GitHub",
        },
    },
    search: { // Search
        search_placeholder: "Search",
        please_input: "Please enter search content",
        no_result: "No options containing this keyword were found",
        try_keyword: "Please try replacing with other keywords and search again",
        jump: "Jump",
        select: "Select",
        exit: "Exit",
    },
    // Configuration file version titles, if you want, you can give each version a title. If not, the default key name will be used
    nuitka_config_title: {
        simple: "Simple mode",
    },
};
