let local_storage_enabled = false;

export function init_local_storage() {
    //检查localStorage是否可用
    try {
        const x = "__storage_test__";
        localStorage.setItem(x, x);
        localStorage.getItem(x);
        localStorage.removeItem(x);
        local_storage_enabled = true;
    } catch (e) {
        console.warn("localStorage is not available! \nError: " + e);
    }
}

//保存数据到localStorage
//key: 键名
//value:要存储的值(string)
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
    }
}

//阅读localStorage中的数据
//key: 要读取的键名
//return: string
export function read_local_storage(key) {
    if (!local_storage_enabled) {
        return;
    }
    try {
        return localStorage.getItem(key);
    } catch (e) {
        console.warn("localStorage is not available! \nError: " + e);
    }
}