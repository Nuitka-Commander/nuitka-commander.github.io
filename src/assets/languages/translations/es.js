// noinspection JSUnusedGlobalSymbols

/**
 * @Description Spanish language pack (LLM translation)
 * @Author: AI Assistant
 * @Date: 2025-06-01
 */
export default {
    website_info: { // Información miscelánea
        supported_to_nuitka_version: "Compatible hasta la versión de Nuitka",
        report_issue: "Reportar problema",
        nuitka_website: "Sitio web de Nuitka",
        get_involved: "Participar",
        changelog: "Registro de cambios",
        project_homepage: "Página principal del proyecto",
        github_website: "Usar en el sitio web",
        local_use: "Uso local",
        current_version_author: "Contribuyentes de la versión actual",
        open_source_license: "Licencia de código abierto",
        long_info: {
            license: "Usamos la licencia de código abierto GPLv3, puedes ver la licencia completa aquí:",
            author: "Hasta la versión actual, gracias a los siguientes contribuyentes por sus contribuciones a este proyecto (sin orden particular):",
        },
    },
    setting: { // Página de configuración
        guide: {
            title: "Guía",
            start: "Iniciar guía",
        },
        theme: {
            auto: "Seguir sistema",
            light: "Modo claro",
            dark: "Modo oscuro",
            theme: "Tema",
        },
        language: {
            title: "Idioma",
            interface_language: "Idioma de la interfaz",
            command_language: "Idioma de comandos",
        },
        nuitka_language_no_support: "La versión actual de Nuitka no soporta este idioma",
        storage: {
            title: "Configuración de almacenamiento",
            user: "Configuración de usuario",
            reset_user: "Restablecer configuración de usuario",
            command: "Configuración de comandos",
            reset_command: "Restablecer configuración de comandos",
        },
    },
    nav_bar: { // Barra de navegación
        mode: {
            easy_mode: "Modo fácil",
            full_mode: "Modo completo",
            info: {
                l1: "Si mostrar la lista completa de comandos",
                l2: "Modo fácil: Mostrar opciones de Nuitka comúnmente usadas",
                l3: "Modo completo: Mostrar todas las opciones disponibles",
            },
            show_raw_command: "Mostrar comando sin procesar",
            no_show_raw_command: "Ocultar comando sin procesar",
            show_raw_command_info: "Si mostrar el comando sin procesar en todas las opciones",
        },
        now_nuitka_version: "Versión del archivo de configuración actualmente seleccionada:",
        select_nuitka_version: "Selecciona la versión de Nuitka que estás usando",
    },
    tabs: {
        edit: "Editar",
        output: "Salida",
        input: "Entrada",
    },
    input_page: {
        input_from_cli: "Importar desde línea de comandos",
        start_input: "Iniciar importación",
        please_input_cli_command: "Por favor ingresa la instrucción de línea de comandos de Nuitka",
        general: {
            unable_parse_check: "Hay atributos no reconocidos en los datos proporcionados, por favor verifica si los datos de entrada cumplen los requisitos o ingrésalos manualmente",
            please_check_down: "Hay atributos no reconocidos en los datos proporcionados, por favor verifica abajo",
        },
        json: {
            input_from_json: "Importar desde JSON",
            please_input_json: "Por favor ingresa los datos JSON exportados desde este sitio web",
            json_parse_error: "Falló el análisis JSON, por favor verifica si los datos de entrada están en formato JSON",
        },
        cli: {
            wait_bash_parser: "Por favor espera a que se cargue el Bash Parser",
            unsupported_operate: "Error de entrada - operador no soportado, por favor verifica tu entrada",
            error_command: "Error de entrada - error de comando, por favor asegúrate de que tu comando sea correcto y hayas seleccionado la versión correcta de Nuitka",
        },
    },
    nuitka_elements: {
        select_placeholder: "Seleccionar",
        not_selected: "No seleccionado",
        selected: "Seleccionado",
        user_provide: "Esta es tu opción personalizada",
        add_option: "Agregar una opción",
        input_an_option: "Ingresar una opción",
        option_desc: "Descripción de la opción",
    },
    message: {
        will_del_option: "Estás a punto de eliminar esta opción personalizada",
        continue_del: "¿Quieres continuar?",
        warning: "Advertencia",
        OK: "OK",
        cancel: "Cancelar",
        cancel_del: "Eliminación cancelada",
        del_success: "Eliminado exitosamente",
        have_been_created: "¡Esta opción ya existe!",
        drop_file: "Arrastra el archivo aquí",
        or: "o",
        click_select_file: "Seleccionar un archivo",
        next_step: "Siguiente paso",
        prev_step: "Paso anterior",
        data_input_success: "Datos importados exitosamente",
        calling: "Llamando, por favor espera",
    },
    output_page: {
        run_nuitka_through_python: "Ejecutar Nuitka a través de Python",
        CLI: "Salida de línea de comandos",
        JSON: "Salida JSON",
    },
    // Guía del usuario
    website_guide: {
        start: {
            title: "Guía del Usuario",
            desc: "Bienvenido a Nuitka Commander, ahora, por favor haz clic en la esquina inferior derecha, aprendamos cómo usarlo paso a paso",
        },
        navbar: {
            title: "Barra de Navegación",
            desc: "Esta es la barra de navegación, donde se configuran algunas funciones globales",
        },
        navbar_original_command: {
            title: "Barra de Navegación - Alternar Comando Sin Procesar",
            desc: "Aquí puedes alternar si mostrar el comando Nuitka original para una visualización fácil. Puedes intentar alternarlo",
        },
        navbar_version_select: {
            title: "Barra de Navegación - Selección de Versión",
            desc: "En el cuadro de selección a la derecha, puedes elegir diferentes versiones de Nuitka. Puedes encontrar el archivo de configuración adecuado para tu versión. Si quieres un comando más simple, puedes elegir 'Modo Fácil' en la parte inferior",
        },
        navbar_settings_button: {
            title: "Barra de Navegación - Botón de Configuración",
            desc: "Haz clic en este botón para entrar a la página de configuración",
        },
        settings_page: {
            title: "Página de Configuración",
            desc: "A continuación, está la página de configuración",
        },
        settings_page_intro: {
            title: "Página de Configuración - Introducción",
            desc: "Esta es la interfaz de configuración, donde puedes ajustar tus configuraciones deseadas",
        },
        settings_page_tour: {
            title: "Página de Configuración - Guía",
            desc: "Para ver la guía nuevamente en el futuro, puedes hacer clic aquí",
        },
        edit_page_buffer: {
            title: "Página de Edición",
            desc: "A continuación, está la página de edición",
        },
        edit_page_intro: {
            title: "Página de Edición - Introducción",
            desc: "Esta es la página de edición, donde puedes configurar tus comandos Nuitka. Puedes hacer clic a la izquierda para cambiar categorías de comandos y editar comandos en el medio",
        },
        edit_page_edit_box: {
            title: "Página de Edición - Caja de Edición",
            desc: "Hay muchas cajas de edición aquí, cada una representando un parámetro. Si pasas el mouse sobre ella, habrá una introducción detallada. Inténtalo ahora",
        },
        output_page_intro: {
            title: "Página de Salida - Introducción",
            desc: "Esta es la página de salida, donde puedes obtener los resultados de salida de los comandos que acabas de editar. Puedes hacer clic a la izquierda para cambiar el tipo de salida y ver el comando de salida en el medio. Haz clic en la esquina superior derecha para copiar el comando directamente. Por supuesto, también puedes pasar el mouse sobre cada elemento para ver introducciones detalladas.",
        },
        input_page_intro: {
            title: "Página de Entrada - Introducción",
            desc: "Esta es la página de entrada, donde puedes ingresar comandos y luego importarlos a Nuitka Commander para edición. Puedes hacer clic a la izquierda para cambiar el tipo de entrada e iniciar la importación en la esquina superior derecha.",
        },
        website_footer: {
            title: "Pie de Página del Sitio Web",
            desc: "Este es el pie de página del sitio web, donde puedes encontrar algunos enlaces útiles, como el sitio web de Nuitka y la página principal del proyecto. También puedes encontrar el número de versión del proyecto, autores y otra información",
        },
        end: {
            title: "Fin",
            desc: "La guía termina aquí, gracias por usarla. Si tienes alguna pregunta o sugerencia, siéntete libre de crear un issue en GitHub",
        },
    },
    search: { // Búsqueda
        search_placeholder: "Buscar",
        please_input: "Por favor ingresa contenido de búsqueda",
        no_result: "No se encontraron opciones que contengan esta palabra clave",
        try_keyword: "Por favor intenta reemplazar con otras palabras clave y busca de nuevo",
        jump: "Saltar",
        select: "Seleccionar",
        exit: "Salir",
    },
    // Títulos de versión del archivo de configuración, si quieres, puedes dar un título a cada versión. Si no, se usará el nombre de clave por defecto
    nuitka_config_title: {
        simple: "Modo simple",
    },
};
