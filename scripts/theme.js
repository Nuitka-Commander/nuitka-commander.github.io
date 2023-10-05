// *********************
// 处理在主题逻辑
// *********************


function change_theme(theme) {
    //设置当前选择的主题按钮
    const buttons = document.getElementsByClassName("change_theme_btn");
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        // 如果当前按钮对应的主题与传入的主题相同，则为该按钮添加selected_theme类
        if (button.id === theme + "_mode_btn") {
            button.style.border = "1px solid";
            button.style.borderColor = "var(--hover-color)";
        } else { // 否则，删除该按钮的selected_theme类
            button.style.border = "none";
        }
    }
    const now_theme_img = document.getElementById("now_theme_img");
    //设置主题
    options["theme"] = theme;
    switch (theme) {
        case "light":
            document.body.classList.remove("dark_mode");
            now_theme_img.src = "src/images/light_theme.svg";
            break;
        case "dark":
            document.body.classList.add("dark_mode")
            now_theme_img.src = "src/images/dark_theme.svg";
            break;
        case "auto":
            auto_set_theme();
            now_theme_img.src = "src/images/auto_theme.svg";
            break;
    }
    change_theme_change_dropdown(false);
}

//根据用户设置的主题设置页面主题
function auto_set_theme() {
    if (options["theme"] === "auto") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark_mode");
        } else {
            document.body.classList.remove("dark_mode");
        }
    }
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", auto_set_theme); //监听系统主题变化

