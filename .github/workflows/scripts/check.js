import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const constantsPath = join(__dirname, '/src/stores/constants.json');
const constants = JSON.parse(fs.readFileSync(constantsPath, 'utf8'));
const version = constants.version;

const changeLogPath = join(__dirname, 'latest_change_log.md');
const changeLogFirstLine = fs.readFileSync(changeLogPath, 'utf8').split('\n')[0];
const trimmedChangeLogFirstLine = changeLogFirstLine.substring(1).trim();

if (version !== trimmedChangeLogFirstLine) {
    console.warn(`警告: 版本号与更新日志版本号不一致，请检查是否其中一个有误
读取到的版本号: ${version}
更新日志的版本号:${trimmedChangeLogFirstLine}`);
    process.exit(1);
} else {
    console.log('版本号与更新日志版本号一致，检查通过');
    process.exit(0);
}