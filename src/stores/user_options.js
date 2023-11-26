/**
 * @Description 管理用户设置
 * @Author: erduotong
 * @Date: 2023-11-26 10:59:18
 */
import {ref, watch} from "vue";
import {read_local_storage, save_local_storage} from "@/utils/local_storage.js";

/**
 * 响应式的用户设置 尽可能避免直接修改 而是使用函数间接修改
 */
export const user_options = ref({
    theme: "auto",
    language: "undefined",
});
/**
 * 监听用户设置的变化 并保存到localStorage
 */
watch(user_options, () => {
    save_local_storage("user_options", JSON.stringify(user_options.value));
}, {deep: true});

/**
 * 初始化用户设置 读取localStorage并覆盖默认设置
 */
export function init_user_options() {
    const r = JSON.parse(read_local_storage("user_options"));
    if (r === null || r === undefined) {
        save_local_storage("user_options", JSON.stringify(user_options.value));
        return;
    }
    for (let key in user_options.value) {
        if (r[key] !== undefined) {
            user_options.value[key] = r[key];
        }
    }
}

