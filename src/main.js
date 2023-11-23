import {createApp} from "vue";
import App from "./App.vue";
import {init_utils} from "@/utils/init_utils.js";
import {i18n} from "@/assets/languages/i18n.js";

init_utils();
const app = createApp(App);
app.use(i18n);
app.mount("#app");
