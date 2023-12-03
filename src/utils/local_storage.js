/**
 * @Description 管理localStorage
 * @Author: erduotong
 * @Date: 2023-11-26 10:38:36
 **/

import {warn} from "vue";

/**
 * localStorage是否可用
 * @type {boolean} true: 可用 false: 不可用
 */
export let local_storage_enabled = false;

/**
 * 进行初始化操作 并检查localStorage是否可用
 */
export function init_local_storage() {
    //检查localStorage是否可用
    try {
        const x = "__storage_test__";
        localStorage.setItem(x, x);
        localStorage.getItem(x);
        localStorage.removeItem(x);
        local_storage_enabled = true;
    } catch (e) {
        console.log("not able to use localStorage! ")
        local_storage_enabled = false;
    }
}

/**
 * 保存数据到localStorage中
 * @param key {string} localStorage的键名
 * @param value {string} localStorage的值
 */
export function save_local_storage(key, value) {
    if (typeof value !== "string") {
        throw new Error("value must be string!");
    }
    if (!local_storage_enabled) {
        return;
    }
    try {
        localStorage.setItem(key, value);
    } catch (e) {

        console.warn("localStorage is not available! \nError: " + e);
        local_storage_enabled = false;
    }
}

/**
 * 从localStorage中读取数据
 * @param key {string} 要读取的localStorage的键名
 * @returns {string}
 */
export function read_local_storage(key) {
    if (!local_storage_enabled) {
        throw new warn("localStorage is not available! You can't read any data from it!");
    }
    try {
        return localStorage.getItem(key);
    } catch (e) {
        throw new Error("localStorage is not available! \nError: " + e);
    }
}