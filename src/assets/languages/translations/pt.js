// noinspection JSUnusedGlobalSymbols

/**
 * @Description Portuguese language pack (LLM translation)
 * @Author: AI Assistant
 * @Date: 2025-06-01
 */
export default {
    website_info: { // Informações diversas
        supported_to_nuitka_version: "Suportado até a versão Nuitka",
        report_issue: "Relatar problema",
        nuitka_website: "Site web Nuitka",
        get_involved: "Participar",
        changelog: "Registro de alterações",
        project_homepage: "Página inicial do projeto",
        github_website: "Usar no site web",
        local_use: "Uso local",
        current_version_author: "Contribuidores da versão atual",
        open_source_license: "Licença de código aberto",
        long_info: {
            license: "Usamos a licença de código aberto GPLv3, você pode visualizar a licença completa aqui:",
            author: "Até a versão atual, agradecemos aos seguintes contribuidores por suas contribuições a este projeto (sem ordem particular):",
        },
    },
    setting: { // Página de configurações
        guide: {
            title: "Guia",
            start: "Iniciar guia",
        },
        theme: {
            auto: "Seguir sistema",
            light: "Modo claro",
            dark: "Modo escuro",
            theme: "Tema",
        },
        language: {
            title: "Idioma",
            interface_language: "Idioma da interface",
            command_language: "Idioma dos comandos",
        },
        nuitka_language_no_support: "A versão atual do Nuitka não suporta este idioma",
        storage: {
            title: "Configurações de armazenamento",
            user: "Configurações do usuário",
            reset_user: "Redefinir configurações do usuário",
            command: "Configurações de comando",
            reset_command: "Redefinir configurações de comando",
        },
    },
    nav_bar: { // Barra de navegação
        mode: {
            easy_mode: "Modo fácil",
            full_mode: "Modo completo",
            info: {
                l1: "Se deve exibir a lista completa de comandos",
                l2: "Modo fácil: Exibir opções Nuitka comumente usadas",
                l3: "Modo completo: Exibir todas as opções disponíveis",
            },
            show_raw_command: "Mostrar comando bruto",
            no_show_raw_command: "Ocultar comando bruto",
            show_raw_command_info: "Se deve exibir o comando bruto em todas as opções",
        },
        now_nuitka_version: "Versão do arquivo de configuração atualmente selecionada:",
        select_nuitka_version: "Selecione a versão do Nuitka que você está usando",
    },
    tabs: {
        edit: "Editar",
        output: "Saída",
        input: "Entrada",
    },
    input_page: {
        input_from_cli: "Importar da linha de comando",
        start_input: "Iniciar importação",
        please_input_cli_command: "Por favor, insira a instrução da linha de comando Nuitka",
        general: {
            unable_parse_check: "Há atributos não reconhecidos nos dados fornecidos, verifique se os dados de entrada atendem aos requisitos ou insira-os manualmente",
            please_check_down: "Há atributos não reconhecidos nos dados fornecidos, verifique abaixo",
        },
        json: {
            input_from_json: "Importar do JSON",
            please_input_json: "Por favor, insira os dados JSON exportados deste site web",
            json_parse_error: "Falha na análise JSON, verifique se os dados de entrada estão no formato JSON",
        },
        cli: {
            wait_bash_parser: "Por favor, aguarde o carregamento do Bash Parser",
            unsupported_operate: "Erro de entrada - operador não suportado, verifique sua entrada",
            error_command: "Erro de entrada - erro de comando, certifique-se de que seu comando está correto e você selecionou a versão correta do Nuitka",
        },
    },
    nuitka_elements: {
        select_placeholder: "Selecionar",
        not_selected: "Não selecionado",
        selected: "Selecionado",
        user_provide: "Esta é sua opção personalizada",
        add_option: "Adicionar uma opção",
        input_an_option: "Inserir uma opção",
        option_desc: "Descrição da opção",
    },
    message: {
        will_del_option: "Você está prestes a excluir esta opção personalizada",
        continue_del: "Deseja continuar?",
        warning: "Aviso",
        OK: "OK",
        cancel: "Cancelar",
        cancel_del: "Exclusão cancelada",
        del_success: "Excluído com sucesso",
        have_been_created: "Esta opção já existe!",
        drop_file: "Arraste o arquivo aqui",
        or: "ou",
        click_select_file: "Selecionar um arquivo",
        next_step: "Próximo passo",
        prev_step: "Passo anterior",
        data_input_success: "Dados importados com sucesso",
        calling: "Chamando, por favor aguarde",
    },
    output_page: {
        run_nuitka_through_python: "Executar Nuitka através do Python",
        CLI: "Saída da linha de comando",
        JSON: "Saída JSON",
    },
    // Guia do usuário
    website_guide: {
        start: {
            title: "Guia do Usuário",
            desc: "Bem-vindo ao Nuitka Commander, agora, clique no canto inferior direito, vamos aprender como usá-lo passo a passo",
        },
        navbar: {
            title: "Barra de Navegação",
            desc: "Esta é a barra de navegação, onde algumas funções globais são definidas",
        },
        navbar_original_command: {
            title: "Barra de Navegação - Alternar Comando Bruto",
            desc: "Aqui você pode alternar a exibição do comando Nuitka original para visualização fácil. Você pode tentar alterná-lo",
        },
        navbar_version_select: {
            title: "Barra de Navegação - Seleção de Versão",
            desc: "Na caixa de seleção à direita, você pode escolher diferentes versões do Nuitka. Você pode encontrar o arquivo de configuração adequado para sua versão. Se quiser um comando mais simples, pode escolher 'Modo Fácil' na parte inferior",
        },
        navbar_settings_button: {
            title: "Barra de Navegação - Botão de Configurações",
            desc: "Clique neste botão para entrar na página de configurações",
        },
        settings_page: {
            title: "Página de Configurações",
            desc: "Em seguida, está a página de configurações",
        },
        settings_page_intro: {
            title: "Página de Configurações - Introdução",
            desc: "Esta é a interface de configurações, onde você pode ajustar suas configurações desejadas",
        },
        settings_page_tour: {
            title: "Página de Configurações - Guia",
            desc: "Para visualizar o guia novamente no futuro, você pode clicar aqui",
        },
        edit_page_buffer: {
            title: "Página de Edição",
            desc: "Em seguida, está a página de edição",
        },
        edit_page_intro: {
            title: "Página de Edição - Introdução",
            desc: "Esta é a página de edição, onde você pode configurar seus comandos Nuitka. Você pode clicar à esquerda para alternar categorias de comandos e editar comandos no meio",
        },
        edit_page_edit_box: {
            title: "Página de Edição - Caixa de Edição",
            desc: "Há muitas caixas de edição aqui, cada uma representando um parâmetro. Se você passar o mouse sobre ela, haverá uma introdução detalhada. Tente agora",
        },
        output_page_intro: {
            title: "Página de Saída - Introdução",
            desc: "Esta é a página de saída, onde você pode obter os resultados de saída dos comandos que acabou de editar. Você pode clicar à esquerda para alternar o tipo de saída e visualizar o comando de saída no meio. Clique no canto superior direito para copiar o comando diretamente. Claro, você também pode passar o mouse sobre cada elemento para ver introduções detalhadas.",
        },
        input_page_intro: {
            title: "Página de Entrada - Introdução",
            desc: "Esta é a página de entrada, onde você pode inserir comandos e depois importá-los para o Nuitka Commander para edição. Você pode clicar à esquerda para alternar o tipo de entrada e iniciar a importação no canto superior direito.",
        },
        website_footer: {
            title: "Rodapé do Site Web",
            desc: "Este é o rodapé do site web, onde você pode encontrar alguns links úteis, como o site web Nuitka e a página inicial do projeto. Você também pode encontrar o número da versão do projeto, autores e outras informações",
        },
        end: {
            title: "Fim",
            desc: "O guia termina aqui, obrigado por usá-lo. Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para criar um issue no GitHub",
        },
    },
    search: { // Pesquisa
        search_placeholder: "Pesquisar",
        please_input: "Por favor, insira o conteúdo de pesquisa",
        no_result: "Nenhuma opção contendo esta palavra-chave foi encontrada",
        try_keyword: "Por favor, tente substituir por outras palavras-chave e pesquise novamente",
        jump: "Pular para",
        select: "Selecionar",
        exit: "Sair",
    },
    // Títulos da versão do arquivo de configuração, se quiser, você pode dar um título a cada versão. Se não, o nome da chave padrão será usado
    nuitka_config_title: {
        simple: "Modo simples",
    },
};
