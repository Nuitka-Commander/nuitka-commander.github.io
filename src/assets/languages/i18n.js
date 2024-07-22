/**
 * @Description 国际化相关逻辑管理
 * @Author: erduotong
 * @Date: 2023-11-26 10:49:04
 */
import {createI18n} from "vue-i18n";
import {user_options} from "@/values/stores/user_options.js";
import {supported_i18n} from "@/assets/languages/supported_i18n.js";
import {set_loading} from "@/values/stores/is_loading.js";
import {load_config_language, nuitka_info_loaded} from "@/modules/use_nuitka_config.js";
import * as constants from "@/values/constants.json";

/**
 * @Description 是否语言加载完成
 * @type {boolean} true:加载完成 false:未加载完成
 */
let is_language_load = false;

/** i18n实例
 */
export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackWarn: false,
    silentTranslationWarn: true,

    /**
     * @Description 语言文件加载失败时的回调
     * @param locale 语言
     * @param key 翻译key
     * @returns {string} 错误提示
     */
    missing(locale, key) {
        //防止语言文件未加载完成时报错
        if (!is_language_load) {
            return "loading...";
        }
        if (key.startsWith("nuitka_info.") && nuitka_info_loaded === false) {
            return "loading...";
        }
        if (constants.debug === true) {
            //构建后文件结构不同，就不给用户看了
            const error = new Error(`i18n: missing '${key}' for locale '${locale}`);
            Error.captureStackTrace(error, i18n.global.missing);
            console.error(error.stack);
        } else {
            console.error(`i18n: missing '${key}' for locale '${locale}`);
        }
        return "error!";
    },
    messages: {},
});

/**
 * 初始化i18n 尝试读取用户设置的语言，如果没有则使用浏览器推荐的语言
 */
export function init_i18n() {
    let final_language = "en";
    // 设置语言
    if (user_options.value.language !== undefined && supported_i18n[user_options.value.language] !== undefined) { // 已经设置了语言且存在支持
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

/**
 * @Description 设置语言
 * @param locale {string} 要设置的语言 需在supported_i18n中存在
 */
export function set_i18n_language(locale) {
    if (locale === i18n.global.locale.value) {
        return;//语言相同的时候不加载
    }
    document.querySelector("html").setAttribute("lang", locale);
    load_locale_messages(locale).catch(r => {
        console.error(`Failed to load language file: \n${r}`);
    });
}

/**
 * @Description 加载语言文件并设置为当前语言 删除旧的语言文件释放内存
 * @param locale 要加载的语言 需在supported_i18n中存在
 */
async function load_locale_messages(locale) {

    const path = supported_i18n[locale].path_name;
    set_loading(true);
    const messages = await import(`@/assets/languages/translations/${path}.js`);
    set_loading(false);
    const old_locale = i18n.global.locale.value;
    i18n.global.locale.value = locale;  //设置新的值
    user_options.value.language = locale;  //保存到用户设置
    i18n.global.setLocaleMessage(locale, messages.default);
    if (old_locale !== undefined) {      //删除旧的语言文件
        i18n.global.setLocaleMessage(old_locale, null);
    }
    if (is_language_load) {
        await load_config_language(locale);
    } else {
        is_language_load = true;
    }

}

/**
 * @Description 设置i18n的可用状态
 * @param status {boolean} true:加载完成 false:未加载完成
 */
export function set_i18n_available(status) {
    is_language_load = status;
}