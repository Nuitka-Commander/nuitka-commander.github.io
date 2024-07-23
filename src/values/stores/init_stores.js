/**
 * @Description 初始化所有的store
 * @Author: erduotong
 * @Date: 2023-11-26 11:01:37
 */
import {init_user_options} from "@/values/stores/user_options.js";

/**
 * 初始化所有的store
 */
export function init_stores() {
    init_user_options();

}