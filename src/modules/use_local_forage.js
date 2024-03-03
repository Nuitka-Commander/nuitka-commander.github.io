/**
 * @Description 管理需要indexDB存储的数据 使用localforage库
 * @Author: erduotong
 * @Date: 2023-12-13 21:27:08
 */
import localforage from "localforage";
import {ref} from "vue";

class LocalNuitkaVersionConfig {

    constructor() {
        this.localforage = localforage.createInstance({
            name: "nuitka_commander_version_configs",
            storeName: "nuitka_commander_version_config",
            driver: localforage.INDEXEDDB,
        });
        this.enable = ref(true);
        this.localforage.ready().then(() => {
            this.test().then();
        });
    }

    /**
     * 测试可用性
     * @return {Promise<void>}
     */
    async test() {
        try {
            const date = Date.now().toString();
            await this.localforage.setItem(date, date);
            console.log("测试indexDB写入成功");
            await this.localforage.removeItem(date);
            console.log("测试indexDB删除成功");
            this.enable.value = true;
        } catch (e) {
            console.warn("测试indexDB失败\n", e);
            this.enable.value = false;
        }
    }


    /**
     * 更新版本的配置
     * @param version {String} 版本号
     * @param config {Object} 配置对象
     * @returns {Promise}
     */
    async update_config(version, config) {
        try {
            await this.localforage.setItem(version, config);
        } catch (e) {
            console.warn(`更新版本${version}的配置失败`, e);
            this.enable.value = false;
        }
    }

    /**
     * 读取版本的配置
     * @param version {String} 版本号
     * @returns {Promise}
     */
    async read_config(version) {
        try {
            return await this.localforage.getItem(version);
        } catch (e) {
            console.warn(`读取版本${version}的配置失败`, e);
            this.enable.value = false;
        }
    }

    /**
     * 删除该版本的配置
     * @param version {String} 版本号
     * @returns {Promise}
     */
    async remove_config(version) {
        try {
            await this.localforage.removeItem(version);
        } catch (e) {
            console.warn(`删除版本${version}的配置失败`, e);
            this.enable.value = false;
        }
    }

    /**
     * 删除所有版本的配置 谨慎使用
     * @returns {Promise}
     */
    async remove_all_config() {
        try {
            await this.localforage.clear();
        } catch (e) {
            console.warn(`删除所有版本的配置失败`, e);
            this.enable.value = false;
        }
    }

}

export const local_nuitka_version_config = new LocalNuitkaVersionConfig();