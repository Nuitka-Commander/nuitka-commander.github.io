/**
 * @Description 管理加载Nuitka配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:06:31
 */

import supported_nuitka_version from "@/nuitka_config_files/supported_nuitka_version.js";
import {user_options} from "@/vals/stores/user_options.js";
import {use_command} from "@/modules/use_command.js";


/**
 * 已加载的版本，进行缓存
 * @type {Object}
 */
let versions = {};

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
    load_new_config(); //加载一次先
}

//load_new_config -> 异步加载(生成骨架屏占位) -> 停止加载 返回等待使用
/**
 * 加载新的配置文件
 */
export function load_new_config() {
    let new_version = user_options.value.nuitka_version;
    if (new_version in versions) {
        use_command.update_config(versions[new_version]);
        return;
    }
    import(`@/nuitka_config_files/configs/${supported_nuitka_version.versions[new_version]}.js`).then((messages) => {
        versions[new_version] = messages.default;
        use_command.update_config(messages.default);
    });

}
