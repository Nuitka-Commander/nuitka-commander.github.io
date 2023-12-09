const fs = require("fs");
const crypto = require("crypto");
const readline = require("readline");

// 读取存储的版本号和哈希
let storedData;
try {
    storedData = JSON.parse(fs.readFileSync("storedData.json").toString());
} catch (error) {
    storedData = {
        version: undefined,
        hash: undefined,
    };
    fs.writeFileSync("storedData.json", JSON.stringify(storedData));
}

// 读取constants.json中的版本号
const constants = JSON.parse(fs.readFileSync("/src/stores/constants.json").toString());
const currentVersion = constants.version;

// 比对版本号
if (storedData.version === currentVersion) {
    console.log(`版本号相同，请检查\n原版本号：${storedData.version}\n现版本号：${currentVersion}`);
    process.exit(1);
}

// 计算latest_change_log.md的哈希
const hasher = crypto.createHash("sha256");
const fileStream = fs.createReadStream("/src/docs/latest_change_log.md");
fileStream.on("data", data => hasher.update(data));
fileStream.on("end", () => {
    const currentHash = hasher.digest("hex");
    // 比对哈希
    if (storedData.hash === currentHash) {
        console.log(`更新日志哈希相同，请检查\n原哈希：${storedData.hash}\n现哈希：${currentHash}`);
        process.exit(1);
    }

    // 读取latest_change_log.md的第一行
    const rl = readline.createInterface({
        input: fs.createReadStream("/src/docs/latest_change_log.md"),
        output: process.stdout,
        terminal: false,
    });

    rl.on("line", (line) => {
        rl.close();
        const logVersion = line.substring(1).trim();

        // 比对版本号
        if (logVersion !== currentVersion) {
            console.log(`版本号和更新日志中的版本号不同，请检查\n原版本号：${storedData.version}\n现版本号：${currentVersion}\n更新日志版本号：${logVersion}`);
            process.exit(1);
        }

        console.log(`检查完成，一切正常\n原版本号：${storedData.version}\n现版本号：${currentVersion}\n原哈希：${storedData.hash}\n现哈希：${currentHash}\n更新日志版本号：${logVersion}`);
    });
});