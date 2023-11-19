// 设置i18n
import {createI18n} from "vue-i18n";
import {user_options} from "@/utils/global_stores/user_options.js";
import {supported_i18n} from "@/languages/translations/supported_i18n.js";


export const i18n = createI18n({
    locale: "en",
    legacy: false,
    globalInjection: true,

});

export function init_i18n() {
    // 设置语言
    if (user_options.value.language !== undefined && supported_i18n[user_options.value.language] !== undefined) { // 已经设置了语言
        i18n.global.locale.value = user_options.value.language;
    } else {
        //尝试从浏览器获取语言
        const browser_language = navigator.languages;
        for (let i = 0; i < browser_language.length; i++) { //从用户推荐的一个一个找
            const language = browser_language[i];
            if (supported_i18n[language] !== undefined) {
                i18n.global.locale.value = language;
                user_options.value.language = language;
                break;
            }
        }
    }
    //如果最终仍未找到语言，则使用en作为默认值
    set_i18n_language(i18n.global.locale.value);


}

export function set_i18n_language(locale) {
    i18n.global.locale.value = locale;
    user_options.value.language = locale;
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
        i18n.global.setLocaleMessage(locale, messages.default);
    });


}
