/**
 * @Description 初始化各种配置
 * @Author: erduotong
 * @Date: 2023-11-26 10:58:34
 */
import {init_local_storage} from "@/modules/local_storage.js";
import {init_stores} from "@/values/stores/init_stores.js";
import {init_i18n} from "@/assets/languages/i18n.js";
import {init_theme} from "@/modules/use_theme.js";
import {init_nuitka_config} from "@/modules/use_nuitka_config.js";


/**
 * @Description 初始化各种需要初始化的配置
 */
export function init_all() {
    init_local_storage();
    init_stores();
    init_i18n();
    init_theme();
    init_nuitka_config();
}