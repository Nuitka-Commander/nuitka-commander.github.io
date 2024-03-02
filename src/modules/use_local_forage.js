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
            driver: localforage.INDEXEDDB,
        });
        this.enable = true;

    }


    /**
     * 更新版本的配置
     * @param version {String} 版本号
     * @param config {Object} 配置对象
     * @returns {Promise}
     */
    async update_config(version, config) {
        return this.localforage.setItem(version, config);
    }

    /**
     * 读取版本的配置
     * @param version {String} 版本号
     * @returns {Promise}
     */
    async read_config(version) {
        return this.localforage.getItem(version);
    }

    /**
     * 删除该版本的配置
     * @param version {String} 版本号
     * @returns {Promise}
     */
    async remove_config(version) {
        return this.localforage.removeItem(version);
    }

    /**
     * 删除所有版本的配置 谨慎使用
     * @returns {Promise}
     */
    async remove_all_config() {
        return this.localforage.clear();
    }

}

export const local_nuitka_version_config = new LocalNuitkaVersionConfig();