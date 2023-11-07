//从values中导入变量并且让他们都可读写
import * as values from "./src/scripts/values.js";
import * as functions from "./src/scripts/functions.js";
import * as local_storage from "./src/scripts/local_storage.js";
import * as i18n from "./src/scripts/i18n.js";
import * as theme from "./src/scripts/theme.js";
import * as menu_setting from "./src/scripts/menu_setting.js";

functions.stop_loading();
values.localStorage_enable = local_storage.check_localStorage();
local_storage.load_options();
