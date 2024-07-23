/**
 * @Description 读取CHANGELOG.md并添加必要的信息，然后写入script内部
 * @Author: erduotong
 * @Date: 2023-12-25 23:35:49
 */
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const changelog_path = path.join(__dirname, "../../../docs/CHANGELOG.md");
const package_path = path.join(__dirname, "../../../package.json");
const output_path = path.join(__dirname, "./CHANGELOG.md");

const file = fs.readFileSync(changelog_path, "utf-8");
const version = JSON.parse(fs.readFileSync(package_path, "utf-8")).version;
const today = new Date().toISOString().split("T")[0];
const to_write = `# v${version} (${today})\n` // 要写入的内容
//写入文件
const full_content = to_write + file;
fs.writeFileSync(output_path, full_content);