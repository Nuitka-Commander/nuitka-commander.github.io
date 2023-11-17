// 对store们进行统一初始化
import {init_user_options} from "@/utils/global_stores/user_options.js";

export function init_global_stores() {
    init_user_options();

}