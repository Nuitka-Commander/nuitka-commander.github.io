import * as constants from "@/vals/constants.json";
import {user_options} from "@/vals/stores/user_options.js";

class Debug {
    debug = constants.debug;

    /**
     * 检查Nuitka的配置文件是否符合格式
     * @param config {Object}
     */
    check_nuitka_config(config) {
        if (this.debug === false) {
            return;
        }
        if (config.support_language === undefined) {
            console.error(`Version:${user_options.value.nuitka_version} \n 未找到support_language`);
        }
        // todo 遍历其中的所有项，寻找是否有重复项
    }
}

export const debug = new Debug();
