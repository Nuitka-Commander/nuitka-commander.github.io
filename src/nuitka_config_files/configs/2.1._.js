/**
 * @Description 2.1版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {add_option, add_watcher, watcher_key} from "@/vals/templates.js";
import {nuitka_element_status} from "@/vals/enums.js";

const config = {
    support_language: {
        "zh-CN": "zh_cn",
    },

};
//基本就这个格式 回调函数接受一个参数
config[watcher_key] = [add_watcher({
    s: config.basic.content_mult_test,
}, (config) => {
    console.log(config, "callback");
})];

// noinspection JSUnusedGlobalSymbols
export default config;