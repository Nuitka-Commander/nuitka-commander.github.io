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

let support_language = {};


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
    load_new_config().then().catch(r => {
        console.error(`Failed to load config file: \n${r}`);
    }); //加载一次先
}


/**
 * 加载新的配置文件
 * @return {Promise<void>}
 */
export async function load_new_config() {
    const new_version = user_options.value.nuitka_version;
    set_loading(true);
    const response = await import(`@/nuitka_config_files/configs/${supported_nuitka_version.versions[new_version]}.js`);

    console.log(response);
    console.log(user_options.value.language.toString());
    await use_command.update_config(response.default);
    set_loading(false);
    support_language = response.default.support_language;
    await load_config_language(user_options.value.language);

    console.log("finish loading");
}

/**]
 * 从本地加载翻译文件到i18n中
 * @param language {string} 语言标识符
 * @return {Promise<void>}
 */
export async function load_config_language(language) {
    console.log(`loading language ${language}`);
    if (support_language[language] === undefined) {
        //看起来这个版本不支持当前的语言，告诉用户这个悲惨的事实 todo
    }
    const translation = await import(`@/nuitka_config_files/translations/${supported_nuitka_version.versions[user_options.value.nuitka_version]}/${support_language[language]}.js`);
    const message = i18n.global.getLocaleMessage(language);
    i18n.global.setLocaleMessage(language, {
        ...message,
        "nuitka_info": translation.default,
    });

}
