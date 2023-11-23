import {user_options} from "@/utils/global_stores/user_options.js";
//更新网页的主题
function update_theme(theme) {
    switch (theme) {
        case "light":
            document.documentElement.classList.remove("dark");
            break;
        case "dark":
            document.documentElement.classList.add("dark");
            break;
        default:
            throw new Error("Undefined theme: " + theme);
    }
}

export function init_theme() {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
        const newColorScheme = e.matches ? "dark" : "light";
        if (user_options.value.theme === "auto") {
            update_theme(newColorScheme);
        }
    });
    set_theme(user_options.value.theme);//手动调用一次保证页面不会出问题
}

//设置主题
export function set_theme(new_theme) {
    //判断new_theme是否合法
    if (!["light", "dark", "auto"].includes(new_theme)) {
        throw new Error("Undefined theme: " + new_theme);
    }
    user_options.value.theme = new_theme;
    //常规的light/dark
    if (["light", "dark"].includes(new_theme)) {
        update_theme(new_theme);
        return;
    }

    //手动读取一次系统设置
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    console.log(colorScheme);
    update_theme(colorScheme);


}