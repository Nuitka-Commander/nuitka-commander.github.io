/**
 * @Description 管理需要indexDB存储的数据 使用localforage库
 * @Author: erduotong
 * @Date: 2023-12-13 21:27:08
 */
import localforage from "localforage";

class LocalNuitkaVersionConfig {
    constructor() {
        this.localforage = localforage.createInstance({
            name: "nuitka_commander_version_configs",
            storeName: "nuitka_commander_version_config",
        });
    }

    /**
     * 更新版本的配置
     * @param version {String} 版本号
     * @param config {Object} 配置对象
     * @param callback {Function} 回调函数
     */
    update_config(version, config, callback) {
        this.localforage.setItem(version, config).then(callback);
    }

    /**
     * 读取版本的配置
     * @param version {String} 版本号
     * @param callback {Function} 回调函数
     */
    read_config(version, callback) {
        this.localforage.getItem(version).then(callback);
    }

    /**
     * 删除该版本的配置
     * @param version {String} 版本号
     * @param callback  {Function} 回调函数
     */
    remove_config(version, callback) {
        this.localforage.removeItem(version).then(callback);
    }

    /**
     * 删除所有版本的配置 谨慎使用
     * @param callback {Function} 回调函数
     */
    remove_all_config(callback) {
        this.localforage.clear().then(callback);
    }

}

export const local_nuitka_version_config = new LocalNuitkaVersionConfig();