// 设置i18n
import {createI18n} from "vue-i18n";
import {user_options} from "@/utils/global_stores/user_options.js";
import {supported_i18n} from "@/languages/supported_i18n.js";

let is_language_load = false; //语言是否加载完成

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    missing(locale, key) {
        //防止语言文件未加载完成时报错
        if (!is_language_load) {
            return;
        }
        console.error(`i18n: missing '${key}' for locale '${locale}'`);
        return "error!";
    },
    messages: {},
});

export function init_i18n() {
    let final_language = "en";
    // 设置语言
    if (user_options.value.language !== undefined && supported_i18n[user_options.value.language] !== undefined) { // 已经设置了语言
        final_language = user_options.value.language;
    } else {
        //尝试从浏览器获取语言
        const browser_language = navigator.languages;
        for (let i = 0; i < browser_language.length; i++) { //从用户推荐的一个一个找
            const language = browser_language[i];
            if (supported_i18n[language] !== undefined) {
                final_language = language;
                break;
            }
        }
    }
    //如果最终仍未找到语言，则使用en作为默认值
    document.querySelector("html").setAttribute("lang", final_language);
    set_i18n_language(final_language);
}

export function set_i18n_language(locale) {
    if (locale === i18n.global.locale.value) {
        return;//语言相同的时候不加载
    }
    document.querySelector("html").setAttribute("lang", locale);
    load_locale_messages(locale);
}

//加载语言文件
function load_locale_messages(locale) {
    const path = supported_i18n[locale].path_name;
    import(
        `@/languages/translations/${path}.js`
        ).then((messages) => {

        //todo 加载动画？

        const old_locale = i18n.global.locale.value;
        i18n.global.locale.value = locale;  //设置新的值
        user_options.value.language = locale;  //保存到用户设置
        i18n.global.setLocaleMessage(locale, messages.default);
        if (old_locale !== undefined) {      //删除旧的语言文件
            i18n.global.setLocaleMessage(old_locale, null);
        }
        is_language_load = true;
    }).catch((e) => {
        //todo global error
        console.error("load language error: " + e);
    });


}
