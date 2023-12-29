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

// 通用的格式化函数
const formatContent = (title, content) => {
    let result = `### ${title}  \n\n`;
    content.forEach((item) => {
        if (item === null || item === undefined || item === "") {
            return;
        }
        item = item.toString();
        item = item.replace(/\n/g, "  \n");
        result += `* ${item}  \n`;
    });
    return result;
};

// 用于格式化更新日志内容的对象
const formatter = {
    added: (content) => formatContent("✨ 新增 Added", content),
    changed: (content) => formatContent("🔧 更改 Changed", content),
    deprecated: (content) => formatContent("🚨 弃用 Deprecated", content),
    removed: (content) => formatContent("🗑️ 删除 Removed", content),
    fixed: (content) => formatContent("🐛 修复 Fixed", content),
    security: (content) => formatContent("🔒 安全 Security", content),
    others: (content) => formatContent("📦 其他 Others", content),
};

// 读取更新日志文件
fs.readFile(constants_path, "utf8", (err, file_data) => {
    if (err) {
        console.log("读取文件失败\n", err);
        process.exit(1);
    }

    // 将 YAML 文件解析为 JSON
    const change_log = yaml.load(file_data.toString(), {json: true});
    if (change_log["version"] === "please_write_here") {
        console.log("请在change_log.yaml中写入版本号");
        process.exit(1);
    }

    // 尝试生成更新日志。如果失败，格式不正确
    let opt = `# ${change_log["version"]}  \n\n` + `## 更新内容 Update Content  \n\n`;
    let tot = 0;
    for (const [key, value] of Object.entries(change_log)) {
        if (key === "version") {
            continue;
        }
        if (value === [] || value === null) {
            tot+=1;
            continue;
        }
        try {
            const content = formatter[key](value);
            // 为内容添加缩进
            opt += content;
        } catch (e) {
            console.log("更新日志格式不正确\n", e);
            process.exit(1);
        }
    }
    if (tot >= formatter.length) {
        console.log("更新日志内容为空，请检查change_log.yaml中的内容");
        process.exit(1);
    }
    console.log("更新日志格式正确，已处理完毕");
    //保存opt到./CHANGELOG.md
    fs.writeFileSync(path.join(__dirname, "./CHANGELOG.md"), opt);
});