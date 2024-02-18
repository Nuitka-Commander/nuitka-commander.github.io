/**
 * @Description 1.9版本的配置文件
 * @Author: erduotong
 * @Date: 2023-12-05 22:28:39
 */
import {nuitka_templates} from "@/vals/templates.js";


// noinspection JSUnusedGlobalSymbols
export default {
    support_language: {
        //国际标识符 位于transitions中的路径
        "zh-CN": "zh_cn",
    },
    basic: { //顶级元素
        some_content: {//二级元素
            ...nuitka_templates.Bool, //继承模板
            i18n: "content0",
            command: {
                original: "some_content command",
            },
        },

        content_opt_test: {
            ...nuitka_templates.SingleOption,

            command: {
                original: "genshin imapct",
            },
            i18n: "content_single_test",
            elements: {
                python: {
                    ...nuitka_templates.multi_select_elements,
                    command: {
                        original: "python",
                    },
                    i18n: "python",
                },
                go: {
                    ...nuitka_templates.multi_select_elements,
                    command: {
                        original: "go",
                    },
                    i18n: "go",

                },
                genshin_impact: {
                    ...nuitka_templates.multi_select_elements,
                    command: {
                        original: "genshin_impact",
                    },
                    i18n: "genshin_impact",
                },
                kotlin: {
                    ...nuitka_templates.multi_select_elements,
                    command: {
                        original: "kotlin",
                    },
                    i18n: "kotlin",

                },

            },
            default: "python",
        },


    },
    page2: {},

};

