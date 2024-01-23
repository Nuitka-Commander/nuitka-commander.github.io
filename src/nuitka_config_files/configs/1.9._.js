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
                i18n: "content0",
            },
        },
        some_content1: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },
        some_conten2t: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },
        some_con3tent: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },
        some_co4n3tent: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },
        some4_con3tent: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },

        },
        some_co1n3tent: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },some_co1n3t1ent: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },some_c2o1n3tent: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },some_3co1n3tent: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },some_5co1n3tent: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },
    },
    basi2c: { //顶级元素
        some_content: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },
        some_content1: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },
        some_conten2t: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },
        some_con3tent: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            show: {
                command: "some_content command",//命令描述 可用于生成 在非默认值时显示
                i18n: "content0",
            },
        },
    },
    support_language: {
        //国际标识符 位于transitions中的路径
        "zh-CN": "zh_cn",
    },
};
