/**
 * @Description 入口主文件
 * @Author: erduotong
 * @Date: 2023-11-26 11:03:51
 * ## 圣经:
 * 1. 不要过早优化
 * 2. 考虑该产品的使用场景，性能问题不是第一位
 */
import {createApp} from "vue";
import App from "./App.vue";
import {init_all} from "@/modules/init_all.js";
import {i18n} from "@/assets/languages/i18n.js";
import "element-plus/theme-chalk/dark/css-vars.css";
import "element-plus/theme-chalk/el-message-box.css";
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-notification.css";
import "@/assets/styles/main.scss";
import "default-passive-events";

init_all();
const app = createApp(App);
app.use(i18n);
app.mount("#app");
