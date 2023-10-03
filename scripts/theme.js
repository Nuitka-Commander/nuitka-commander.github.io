// *********************
// 处理在主题逻辑
// *********************


// css dark mode适配：     document.body.classList.remove('dark_mode')    document.body.classList.add('dark_mode')

function change_theme(theme) {
    //todo 更改 theme
    //todo 设置当前主题对于用户的选项

    options["theme"] = theme;
    switch (theme) {
        case "light":
            console.log("change_theme: light");
            document.body.classList.remove("dark_mode");
            break;
        case "dark":
            console.log("change_theme: dark");
            document.body.classList.add("dark_mode");
            break;
        case "auto":
            auto_set_theme();
            break;
    }
    change_theme_change_dropdown(false);
}

//根据用户设置的主题设置页面主题
function auto_set_theme() {
    if (options["theme"] === "auto") {
        console.log("auto")
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark_mode");
        } else {
            document.body.classList.remove("dark_mode");
        }
    }
}
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", auto_set_theme); //监听系统主题变化

