/**
 * @Description 管理加载Nuitka配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:06:31
 */

import supported_nuitka_version from "@/nuitka_config_files/supported_nuitka_version.js";
import {user_options} from "@/values/stores/user_options.js";
import {nuitka_config_first_loaded, set_loading} from "@/values/stores/loading.js";
import {use_command} from "@/modules/use_command.js";
import {i18n} from "@/assets/languages/i18n.js";
import {ElMessage} from "element-plus";
import {nextTick} from "vue";

export let current_version_support_language = {};
export let nuitka_info_loaded = false;
export let nuitka_config_loaded = false;

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
    nuitka_config_loaded = false
    set_loading(true);
    const response = await import(`@/nuitka_config_files/configs/${supported_nuitka_version.versions[new_version]}.js`);
    console.log(`Loading new language: ${user_options.value.nuitka_language.toString()}`);
    current_version_support_language = response.default.support_language;
    await load_config_language(user_options.value.nuitka_language);
    await use_command.update_config(response.default);
    set_loading(false);
    nuitka_config_loaded = true;
}

/**
 * 从本地加载翻译文件到i18n中
 * @param language {string} 语言标识符
 * @return {Promise<void>}
 */
export async function load_config_language(language) {

    if (current_version_support_language[language] === undefined) {
        const first_key = Object.keys(current_version_support_language)[0];// 获得一个key保证可用
        user_options.value.nuitka_language = first_key
        await set_language(first_key);
        if (nuitka_config_first_loaded.value) {
            ElMessage({
                message: i18n.global.t("setting.nuitka_language_no_support").toString(),
                type: "warning",
            })
        }
        nuitka_config_first_loaded.value = true;
        return;
    }
    user_options.value.nuitka_language = language;
    await set_language(language);
    nuitka_config_first_loaded.value = true;


}

async function set_language(language) {
    set_loading(true);
    nuitka_info_loaded = false;
    const translation = await import(`@/nuitka_config_files/translations/` +
    `${supported_nuitka_version.versions[user_options.value.nuitka_version]}/${current_version_support_language[language].path}.js`);
    const message = i18n.global.getLocaleMessage(user_options.value.language); //从用户那边读一下信息
    // 这边因为是从网页读取的，所以要用网页语言信息
    i18n.global.setLocaleMessage(user_options.value.language, {
        ...message,
        "nuitka_info": translation.default,
    });
    await nextTick();
    nuitka_info_loaded = true;


    set_loading(false);
}