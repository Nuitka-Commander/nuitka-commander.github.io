/**
 * @Description 管理加载Nuitka配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:06:31
 */

import supported_nuitka_version from "@/nuitka_config_files/supported_nuitka_version.js";
import {user_options} from "@/stores/user_options.js";

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
        //todo 下一步操作
        return;
    }
    new_version = supported_nuitka_version.versions[new_version];// 获取路径
    import(
        `@/nuitka_config_files/${new_version}.js`
        ).then((messages) => {
        versions[new_version] = messages.default;
        // todo 下一步操作
    }).catch((e) => {
            throw new Error(`nuitka_config: load new config files failed: ${e}`);
        },
    );
}
