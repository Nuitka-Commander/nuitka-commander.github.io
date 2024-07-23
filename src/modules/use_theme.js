/**
 * @Description 管理网页主题相关逻辑
 * @Author: erduotong
 * @Date: 2023-11-26 10:34:05
 */
import {user_options} from "@/values/stores/user_options.js";

/**
 * 更新网页主题
 * @param theme {"light"|"dark"} 要更新到的主题
 */
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

/**
 * 初始化网页主题
 */
export function init_theme() {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
        const newColorScheme = e.matches ? "dark" : "light";
        if (user_options.value.theme === "auto") {
            update_theme(newColorScheme);
        }
    });
    set_theme(user_options.value.theme);//手动调用一次保证页面不会出问题
}

/**
 * 设置主题
 * @param new_theme {"light"|"dark"|"auto"} 要设置的主题
 */
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
    update_theme(colorScheme);

}

