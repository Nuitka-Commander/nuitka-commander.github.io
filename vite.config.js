import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import {resolve} from "path";
// https://vitejs.dev/config/
// noinspection JSUnresolvedReference
export default defineConfig({
    plugins: [vue(), AutoImport({
        resolvers: [ElementPlusResolver()],
    }), Components({
        extensions: ["vue"],
        resolvers: [ElementPlusResolver(({
            //importStyle配置样式引入方式，自动引入修改主题色设置此属性
            // importStyle可以配置element-plus的样式引入方式，它默认是css，利用scss变量修改主题时，需要将这个属性设置为scss
            importStyle: "sass",
        }))],
    })],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                @use "./src/assets/styles/element/index.scss" as *;
                @use "./src/assets/styles/main.scss" as globalScss;
                `,
            },
        },
    },
});
