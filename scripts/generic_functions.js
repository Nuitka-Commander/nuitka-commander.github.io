// *********************
// 一些常用的函数
// *********************
const current_language = {
    "Genshin": "原神",
    "start": "启动"
};

// 刷新body来更新语言
function t(key) {
    return current_language[key];
}

console.log(`${t("Genshin")}?${t("start")}!`);