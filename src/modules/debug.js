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
        const temp = {};
        Object.keys(config).forEach(key => {
            const value = config[key];
            Object.keys(value).forEach(sub_key => {
                if (temp[sub_key] === undefined) {
                    temp[sub_key] = 0;
                }
                temp[sub_key] += 1;
                if (temp[sub_key] > 1) {
                    console.error(`Version:${user_options.value.nuitka_version} \n @${key}  @${sub_key} 重复`);
                }
            });
        });

    }
}

export const debug = new Debug();
