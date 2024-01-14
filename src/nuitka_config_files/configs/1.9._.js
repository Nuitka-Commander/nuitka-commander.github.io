/**
 * @Description 1.9版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {nuitka_templates} from "@/vals/templates.js";

export default {
    basic: { //顶级元素
        some_content: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                command_i18n: "some_content i18n", //国际化命令描述 自动拼接
                desc_i18n: "some_content desc", //国际化介绍 自动拼接
            },
        },
    },
};
