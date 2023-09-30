// *********************
// 处理在主题逻辑
// *********************


// css dark mode适配：     document.body.classList.remove('dark_mode')    document.body.classList.add('dark_mode')

function change_theme(theme) {
    //todo 更改 theme


    switch (theme) {
        case "light":
            console.log("change_theme: light");
            break;
        case "dark":
            console.log("change_theme: dark");
            break;
        case "auto":
            document.body.classList.remove("dark_mode");
            break;
    }
    change_theme_change_dropdown(false);
}