import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import {resolve} from "path";
import viteImagemin from "vite-plugin-imagemin";

const timestamp = new Date().getTime();
// noinspection JSUnusedGlobalSymbols
export default ({mode}) => {
    if (mode === "local_use") {
        //打包成本地可以直接运行的html
        return {

            plugins: [
                viteImagemin({
                    svgo: {
                        plugins: [
                            {
                                name: "removeViewBox",
                            },
                            {
                                name: "removeEmptyAttrs",
                                active: false,
                            },
                        ],
                    },
                }), vue(),
                AutoImport({
                    resolvers: [ElementPlusResolver()],
                }),
                Components({
                    extensions: ["vue"],
                    resolvers: [ElementPlusResolver(({
                        importStyle: "sass",
                    }))],
                })],
            resolve: {
                alias: {
                    "@": resolve(__dirname, "src"),
                },
            },
            build: {
                rollupOptions: {
                    output: {
                        // 入口文件名
                        entryFileNames: `[name].js`,
                        // 块文件名
                        chunkFileNames: `chunk-[name].js`,
                        // 资源文件名 css 图片等等
                        assetFileNames: `assets/[name]-[hash].${timestamp}.[ext]`,
                    },
                },
            },
        };

    } else { //正常为网站构建
        return {
            plugins: [viteImagemin({
                svgo: {
                    plugins: [{name: "removeViewBox"}, {
                        name: "removeEmptyAttrs",
                        active: false,
                    }],
                },
            }), vue(), AutoImport({
                resolvers: [ElementPlusResolver()],
            }), Components({
                extensions: ["vue"],
                resolvers: [ElementPlusResolver(({
                    importStyle: "sass",
                }))],
            }),
            ],
            resolve: {
                alias: {
                    "@": resolve(__dirname, "src"),
                },
            },
            build: {
                rollupOptions: {
                    output: {
                        // 入口文件名
                        entryFileNames: `assets/[name].${timestamp}.js`,
                        // 块文件名
                        chunkFileNames: `assets/[name]-[hash].${timestamp}.js`,
                        // 资源文件名 css 图片等等
                        assetFileNames: `assets/[name]-[hash].${timestamp}.[ext]`,
                    },
                },
            },
        };
    }
}