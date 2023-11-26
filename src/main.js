/**
 * @Description 入口主文件
 * @Author: erduotong
 * @Date: 2023-11-26 11:03:51
 */
import {createApp} from "vue";
import App from "./App.vue";
import {init_all} from "@/utils/init_all.js";
import {i18n} from "@/assets/languages/i18n.js";
import "element-plus/theme-chalk/dark/css-vars.css"
// import "@/assets/styles/themes/light.css"
import "@/assets/styles/themes/dark.css"
// import "@/assets/styles/main.scss";

init_all();
const app = createApp(App);
app.use(i18n);
app.mount("#app");
