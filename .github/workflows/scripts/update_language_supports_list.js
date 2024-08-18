/**
 * @Description 更新已支持语言列表
 * @Author: erduotong
 * @Date: 2024-02-18 19:20:45
 */

import fs, {readFileSync, writeFileSync} from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";
// noinspection ES6PreferShortImport
import {supported_i18n} from "../../../src/assets/languages/supported_i18n.js";
import * as Supported_nuitka_version from "../../../src/nuitka_config_files/supported_nuitka_version.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "../../../docs/development/translation.md");
let data = fs.readFileSync(file, "utf-8");
///////////////////////
let output_data_page = "";

//相当于translation.md文件内的路径
const page_translations_path = "../../src/assets/languages/translations";
Object.keys(supported_i18n).forEach((key) => {
    output_data_page += `* [${key}: ${supported_i18n[key].name}](${page_translations_path}/${supported_i18n[key].path_name}.js)\n`;
});
const regex = /<div id="nuitka_commander_translation_page">([\s\S]*?)<\/div>/;
data = data.replace(regex, `<div id="nuitka_commander_translation_page"> \n\n${output_data_page}</div>`);
/////////////////////
let output_data_config = "";
(async () => {
    for (const key of Object.keys(Supported_nuitka_version.default.versions)) {
        const import_path = path.join(__dirname, "../../../src/nuitka_config_files") + "/configs/" + Supported_nuitka_version.default.versions[key] + ".js";
        const random = Date.now().toString() + Math.random() % 100;


        const content = readFileSync(import_path, "utf-8").replace(/@\//g, "../../../src/");
        const filename = "./temp_" + random + ".js";
        writeFileSync(filename, content, "utf-8");
        let content1 = await import(filename);
        content1 = content1.default.support_language;
        output_data_config += `* [${key}](../../src/nuitka_config_files/configs/${Supported_nuitka_version.default.versions[key]}.js)\n`;
        for (const lang in content1) {

            output_data_config += `    * [${content1[lang].name}(${lang})](../../src/nuitka_config_files/translations/${Supported_nuitka_version.default.versions[key]}/${content1[lang].path}.js)\n`;
        }
        fs.unlinkSync(filename);
    }
    const regex = /<div id="nuitka_commander_translation_config">([\s\S]*?)<\/div>/;
    data = data.replace(regex, `<div id="nuitka_commander_translation_config"> \n\n${output_data_config}</div>`);
})().then(() => {
    fs.writeFileSync(file, data, "utf-8");
});



