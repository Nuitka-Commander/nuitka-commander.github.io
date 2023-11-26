/**
 * @Description 初始化各种配置
 * @Author: erduotong
 * @Date: 2023-11-26 10:58:34
 */
import {init_local_storage} from "@/utils/local_storage.js";
import {init_stores} from "@/stores/init_stores.js";
import {init_i18n} from "@/assets/languages/i18n.js";
import {init_theme} from "@/utils/use_theme.js";

/**
 * @Description 初始化各种需要初始化的配置
 */
export function init_all() {
    init_local_storage();
    init_stores();
    init_i18n();
    init_theme();
}