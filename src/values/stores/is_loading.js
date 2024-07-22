/**
 * @Description 管理加载页面状态
 * @Author: erduotong
 * @Date: 2023-11-26 10:33:25
 */
import {ref} from "vue";

/**
 * 加载页面是否开启
 */
export const is_loading = ref(false);
/**
 * 所需加载的总数，若大于0则设为加载状态，否则关闭加载状态
 * @type {number}
 */
let loading_tot = 0;

/**
 * 设置加载页面是否开启
 * @param state {boolean} 要切换的状态
 */
export function set_loading(state) {

    if (state === true) {
        loading_tot++;
    } else {
        loading_tot--;
    }
    is_loading.value = loading_tot > 0;

}