/**
 * @Description 管理加载Nuitka配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:06:31
 */

import supported_nuitka_version from "@/nuitka_config_files/supported_nuitka_version.js";
import {user_options} from "@/vals/stores/user_options.js";
import {set_loading} from "@/vals/stores/is_loading.js";
import {use_command} from "@/modules/use_command.js";
import {i18n} from "@/assets/languages/i18n.js";

export let current_version_support_language = {};
export let nuitka_info_loaded = false;

/**
 * 初始化
 */
export function init_nuitka_config() {
    // 先检查用户设置的版本是否存在
    let key_defined = false;
    for (let key in supported_nuitka_version.versions) {
        if (user_options.value.nuitka_version === key) {
            key_defined = true;
            break;
        }
    }
    if (!key_defined) {
        user_options.value.nuitka_version = supported_nuitka_version.latest_key;
    }

    load_new_config().then();
}


/**
 * 加载新的配置文件
 * @return {Promise<void>}
 */
export async function load_new_config() {
    const new_version = user_options.value.nuitka_version;
    set_loading(true);
    const response = await import(`@/nuitka_config_files/configs/${supported_nuitka_version.versions[new_version]}.js`);
    console.log(`Loading new language: ${user_options.value.nuitka_language.toString()}`);
    await use_command.update_config(response.default);
    current_version_support_language = response.default.support_language;
    await load_config_language(user_options.value.nuitka_language);
    set_loading(false);
}

/**
 * 从本地加载翻译文件到i18n中
 * @param language {string} 语言标识符
 * @return {Promise<void>}
 */
export async function load_config_language(language) {

    if (current_version_support_language[language] === undefined) {
        const first_key = Object.keys(current_version_support_language)[0];// 获得一个key保证可用
        user_options.value.nuitka_language = current_version_support_language[first_key];
        await set_language(first_key);
        return;
    }
    user_options.value.nuitka_language = language;
    await set_language(language);


}

async function set_language(language) {
    set_loading(true);
    const translation = await import(`@/nuitka_config_files/translations/` +
    `${supported_nuitka_version.versions[user_options.value.nuitka_version]}/${current_version_support_language[language].path}.js`);
    const message = i18n.global.getLocaleMessage(language);
    i18n.global.setLocaleMessage(language, {
        ...message,
        "nuitka_info": translation.default,
    });
    nuitka_info_loaded = true;
    set_loading(false);
}