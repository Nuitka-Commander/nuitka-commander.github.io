/**
 * @Description 重置更新日志为模板中的状态
 * @Author: erduotong
 * @Date: 2023-12-29 20:16:55
 */
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatePath = path.join(__dirname, "../template/change_log.yaml");
const docsPath = path.join(__dirname, "../../../docs/change_log.yaml");

// Read the template file
fs.readFile(templatePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading template file:", err);
        process.exit(1);
    }

    // Write the template content to the docs file
    fs.writeFile(docsPath, data, (err) => {
        if (err) {
            console.error("Error writing to docs file:", err);
            process.exit(1);
        }

        console.log("Successfully reset the change log.");
        process.exit(0);
    });
});