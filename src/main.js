import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import {init_utils} from "@/utils/init_utils.js";
import {user_options} from "@/utils/global_stores/user_options.js";
import {i18n, init_i18n} from "@/languages/setup_i18n.js";

init_utils();
init_i18n();

const app = createApp(App);
app.use(i18n);
app.mount("#app");
