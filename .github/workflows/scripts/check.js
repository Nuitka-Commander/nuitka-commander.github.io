import fs from "fs";
import path, {dirname} from "path";

import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const constantsPath = path.join(__dirname, "/src/stores/constants.json");
const constants = JSON.parse(fs.readFileSync(constantsPath, "utf8"));
const version = constants.version;

// 读取latest_change_log.md文件的第一行
const changeLogPath = path.join(__dirname, "latest_change_log.md");
const changeLogFirstLine = fs.readFileSync(changeLogPath, "utf8").split("\n")[0];
const trimmedChangeLogFirstLine = changeLogFirstLine.substring(1).trim();

// 比较version和trimmedChangeLogFirstLine是否相同
if (version !== trimmedChangeLogFirstLine) {
    console.warn("警告: 版本号与更新日志版本号不一致，请检查是否其中一个有误\n" +
        `读取到的版本号: ${version}\n 更新日志的版本号:${trimmedChangeLogFirstLine}`);
    process.exit(1);//停止执行
} else {
    console.log("版本号与更新日志版本号一致，检查通过");
    process.exit(0);//停止执行
}