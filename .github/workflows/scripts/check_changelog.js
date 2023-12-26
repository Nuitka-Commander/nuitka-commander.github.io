/**
 * @Description 检查更新日志格式是否规范
 * @Author: erduotong
 * @Date: 2023-12-25 23:35:49
 */
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";
import * as yaml from "js-yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const constants_path = path.join(__dirname, "../../../docs/change_log.yaml");
fs.readFile(constants_path, "utf8", (err, file_data) => {
    if (err) {
        console.log("读取文件失败\n", err);
        process.exit(1);
    }
    //加载yaml到json
    const change_log = yaml.load(file_data.toString(), {json: true});
    if (change_log["version"] === "please_write_here") {
        console.log("请在change_log.yaml中写入版本号");
        process.exit(1);
    }
    //检查格式是否正确


});
