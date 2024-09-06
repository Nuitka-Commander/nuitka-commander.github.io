/**
 * @Description 管理用户设置
 * @Author: erduotong
 * @Date: 2023-11-26 10:59:18
 */
import {ref, watch} from "vue";
import {read_local_storage, remove_localstorage_key, save_local_storage} from "@/modules/local_storage.js";
import supported_nuitka_version from "@/nuitka_config_files/supported_nuitka_version.js";

const localstorage_name = "_Nuitka_Commander_user_options";
/**
 * 响应式的用户设置
 */
export const user_options = ref({
    theme: "auto",
    language: "undefined",
    nuitka_language: "undefined",
    nuitka_version: supported_nuitka_version.versions[supported_nuitka_version.latest_key], //获取最新版
    show_original_command: false,
    settings_page_show: false,
    action_tab: "edit",
    action_command_tab: null,
});

/**
 * 监听用户设置的变化 并保存到localStorage
 */
watch(user_options, () => {
    save_local_storage(localstorage_name, JSON.stringify(user_options.value));
}, {deep: true});

/**
 * 初始化用户设置 读取localStorage并覆盖默认设置
 */
export function init_user_options() {

    const r = JSON.parse(read_local_storage(localstorage_name));
    if (r === null || r === undefined) {
        save_local_storage(localstorage_name, JSON.stringify(user_options.value));
        return;
    }

    for (let key in user_options.value) {

        if (r[key] !== undefined) {
            user_options.value[key] = r[key];

        }
    }

}

/**
 * 重置用户设置
 */
export function reset_user_options() {
    remove_localstorage_key(localstorage_name);
    location.reload();

}