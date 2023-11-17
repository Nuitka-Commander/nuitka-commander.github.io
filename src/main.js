import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import {init_utils} from "@/utils/init_utils.js";
import {user_options} from "@/utils/global_stores/user_options.js";

init_utils();

const app = createApp(App);
app.mount("#app");
