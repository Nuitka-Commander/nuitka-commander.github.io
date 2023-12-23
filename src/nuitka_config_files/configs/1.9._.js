/**
 * @Description 1.9版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {nuitka_templates} from "@/stores/templates.js";

export default {
    basic: { //顶级元素
        some_content: {//二级元素
            ...nuitka_templates.Bool, //继承模板
        },

    },
};