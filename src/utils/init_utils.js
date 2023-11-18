// init
import {init_local_storage} from "@/utils/local_storage.js";
import {init_global_stores} from "@/utils/global_stores/init_global_stores.js";
import {init_i18n} from "@/languages/setup_i18n.js";

export function init_utils() {
    init_local_storage();
    init_global_stores();
    init_i18n();
}