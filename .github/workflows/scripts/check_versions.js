import path, {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";

const URL = "https://api.github.com/repos/nuitka-commander/nuitka-commander/releases/latest";
const __dirname = dirname(fileURLToPath(import.meta.url));
const constants_path = path.join(__dirname, "../../../src/vals/constants.json");
fetch(URL)
    .then(response => response.json())
    .then(data => {
        fs.readFile(constants_path, "utf8", (err, file_data) => {
            if (err) {
                console.log("读取文件失败\n", err);
                process.exit(1);
            } else {
                const constants = JSON.parse(file_data.toString());
                if (data["name"] !== data["tag_name"]) {
                    console.log("上个版本的版本号是:\n", data["name"], "tag name是:\n", data["tag_name"], "\n二者不一致,请检查");
                    process.exit(1);
                }
                if (data["name"] === constants["version"]) {
                    console.log(`当前版本号${data["name"]}与constants.json中的版本号${constants["version"]}一致\n请检查是否已更新版本号/误发布`);
                    process.exit(1);
                }
                console.log("版本号检查通过"); //相安无事
                process.exit(0);
            }
        });
    })
    .catch(error => {
        console.error(`Error fetching contributors from GitHub API: \n${error}`);
        process.exit(1);
    });
