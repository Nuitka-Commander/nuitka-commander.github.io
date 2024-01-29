import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import {resolve} from "path";
import viteImagemin from "vite-plugin-imagemin";
import {viteSingleFile} from "vite-plugin-singlefile";
import {createHtmlPlugin} from "vite-plugin-html";
import fs, {readFileSync, writeFileSync} from "fs";
import {JSDOM} from "jsdom";


const timestamp = new Date().getTime();
const finally_process = () => {
    return {
        name: "inline-svg",
        apply: "build",
        enforce: "post",

        closeBundle() {
            //注意Linux上会失效 需要单独一个网页头图片
            console.log("内联svg");
            const indexPath = resolve(__dirname, "dist", "index.html");
            const html = readFileSync(indexPath, "utf-8");
            const dom = new JSDOM(html);
            const document = dom.window.document;
            // Remove all meta tags with name="description"
            const metaTags = document.querySelectorAll("meta[name=\"description\"]");
            metaTags.forEach(tag => {
                tag.parentNode.removeChild(tag);
            });
            const links = document.querySelectorAll("link[href$='.svg']");
            links.forEach((link) => {
                let href = link.getAttribute("href");
                if (href.startsWith("/")) {
                    href = href.substring(1);
                } else if (href.startsWith("./")) {
                    href = href.substring(2);
                }
                const svgPath = resolve(__dirname, "dist", href);
                const svgContent = readFileSync(svgPath, "utf-8");
                const dataUrl = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;

                // Set the data URL as the href attribute of the link element
                link.setAttribute("href", dataUrl);

                // Delete the SVG file
                fs.unlinkSync(svgPath);
            });

            const updatedHtml = dom.serialize();
            writeFileSync(indexPath, updatedHtml);
            console.log("内联svg完成");
        },
    };
};
// 共用插件列表
const plugin_array = [viteImagemin({
    svgo: {
        plugins: [{
            name: "removeViewBox",
        }, {
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
})];
// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default ({mode}) => {
    if (mode === "local_use") {
        //打包成本地可以直接运行的html
        return {
            server: {
                port: 3001,
            },
            base: "./",
            plugins: [...plugin_array,
                      viteSingleFile(),
                      createHtmlPlugin({
                          minify: {
                              collapseWhitespace: true,
                              removeComments: true,
                              removeEmptyAttributes: true,
                              removeRedundantAttributes: true,
                              removeScriptTypeAttributes: true,
                              removeStyleLinkTypeAttributes: true,
                              useShortDoctype: true,
                              minifyJS: true,
                              minifyCSS: true,
                              minifyURLs: true,
                          },
                      }), finally_process(),
            ],

            resolve: {
                alias: {
                    "@": resolve(__dirname, "src"),
                },
            },
            build: {
                assetsInlineLimit: Number.MAX_SAFE_INTEGER,
                rollupOptions: {
                    output: {
                        // 入口文件名
                        entryFileNames: `[name].js`, // 块文件名
                        chunkFileNames: `chunk-[name].js`, // 资源文件名 css 图片等等
                        assetFileNames: `[name]-[hash].${timestamp}.[ext]`,
                    },
                },

            },
            esbuild: {
                pure: ["console.log", "console.debug"]
                ,
                drop: ["debugger"],
            },
        };

    } else { //正常为网站构建
        return {
            server: {
                port: 3001,
            },
            plugins: [...plugin_array],
            resolve: {
                alias: {
                    "@": resolve(__dirname, "src"),
                },
            },
            build: {
                rollupOptions: {
                    output: {
                        // 入口文件名
                        entryFileNames: `assets/[name].${timestamp}.js`, // 块文件名
                        chunkFileNames: `assets/[name]-[hash].${timestamp}.js`, // 资源文件名 css 图片等等
                        assetFileNames: `assets/[name]-[hash].${timestamp}.[ext]`,
                    },
                },
            },
            esbuild: {
                pure: ["console.log", "console.debug"]
                ,
                drop: ["debugger"],
            },
        };
    }
}