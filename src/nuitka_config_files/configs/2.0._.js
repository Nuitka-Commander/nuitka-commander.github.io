/**
 * @Description 2.0版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {nuitka_templates} from "@/vals/templates.js";
// noinspection JSUnusedGlobalSymbols
export default {
    basic: { //顶级元素
        some_content: {//二级元素
            ...nuitka_templates.Bool, //继承模板
        },

    },
};