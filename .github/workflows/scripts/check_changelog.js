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

// 用于格式化更新日志内容的对象
const formatter = {
    // 格式化 'added' 内容
    added: (content) => {
        let result = "### ✨ 新增 Added  \n\n";
        content.forEach((item) => {
            item = item.replace(/\n/g, "  \n");
            result += `* ${item}  \n`;
        });
        return result;
    },
    // 格式化 'changed' 内容
    changed: (content) => {
        let result = `### 🔧 更改 Changed  \n\n`;
        content.forEach((item) => {
            item = item.replace(/\n/g, "  \n");
            result += `* ${item}  \n`;
        });
        return result;
    },
    // 格式化 'deprecated' 内容
    deprecated: (content) => {
        let result = `### 🚨 弃用 Deprecated  \n\n`;
        content.forEach((item) => {
            item = item.replace(/\n/g, "  \n");
            result += `* ${item}  \n`;
        });
        return result;
    },
    // 格式化 'removed' 内容
    removed: (content) => {
        let result = `### 🗑️ 删除 Removed  \n\n`;
        content.forEach((item) => {
            item = item.replace(/\n/g, "  \n");
            result += `* ${item}  \n`;
        });
        return result;
    },
    // 格式化 'fixed' 内容
    fixed: (content) => {
        let result = `### 🐛 修复 Fixed  \n\n`;
        content.forEach((item) => {
            item = item.replace(/\n/g, "  \n");
            result += `* ${item}  \n`;
        });
        return result;
    },
    // 格式化 'security' 内容
    security: (content) => {
        let result = `### 🔒 安全 Security  \n\n`;
        content.forEach((item) => {
            item = item.replace(/\n/g, "  \n");
            result += `* ${item}  \n`;
        });
        return result;
    },
    // 格式化 'others' 内容
    others: (content) => {
        let result = `### 📦 其他 Others  \n\n`;
        content.forEach((item) => {
            item = item.replace(/\n/g, "  \n");
            result += `* ${item}  \n`;
        });
        return result;
    },
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
    for (const [key, value] of Object.entries(change_log)) {
        if (key === "version") {
            continue;
        }
        if (value === [] || value === null) {
            continue;
        }
        try {
            const content = formatter[key](value);
            // 为内容添加缩进
           opt += content
        } catch (e) {
            console.log("更新日志格式不正确\n", e);
            process.exit(1);
        }
    }
    console.log("更新日志格式正确，已处理完毕");
    //保存opt到./CHANGELOG.md
    fs.writeFileSync(path.join(__dirname, "./CHANGELOG.md"), opt);
});