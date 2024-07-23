/**
 * @Description 检查版本号是否符合规范并同步一下版本号
 * @Author: erduotong
 * @Date: 2023-12-25 23:35:26
 */
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";
import fetch from "node-fetch";

const URL = "https://api.github.com/repos/nuitka-commander/nuitka-commander/releases/latest";
const __dirname = dirname(fileURLToPath(import.meta.url));
const constants_path = path.join(__dirname, "../../../src/values/constants.json");
const package_path = path.join(__dirname, "../../../package.json");
const version_path = path.join(__dirname, "../../../.github/workflows/scripts/version")
fetch(URL)
    .then(response => response.json())
    .then(data => {
        const latest_version = data.name;
        console.log(`Latest version: ${latest_version}`);
        const constants = JSON.parse(fs.readFileSync(constants_path, "utf-8"));
        const package_json = JSON.parse(fs.readFileSync(package_path, "utf-8"));
        console.log(`Package.json version: ${package_json.version}`);
        //这边以package.json的版本号为准
        if (package_json.version === latest_version) {
            console.error(`The version perhaps has been updated, please check the version in package.json`);
            process.exit(1);
        }
        console.log("Check version successfully ✔");
        console.log("start to sync version to constants.json ....");
        constants.version = package_json.version;
        console.log(`Change successfully\nNow Content: `)
        console.log(constants, "\n\n\n");
        console.log("rewriting...")
        fs.writeFileSync(constants_path, JSON.stringify(constants, null, 2), "utf-8");
        console.log("Successful!")
        console.log("writing version to version file...")
        fs.writeFileSync(version_path, package_json.version, "utf-8");
        console.log("Successful!")
    })
    .catch(error => {
        console.error(`Error fetching contributors from GitHub API: \n${error}`);
        process.exit(1);
    });
