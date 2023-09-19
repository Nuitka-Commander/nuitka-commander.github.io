// *********************
// 一些常用的函数
// *********************
const current_language = {
    "Genshin": "原神",
    "start": "启动"
};

// todo 刷新body来更新语言
//加载语言到字典中
function load_language() {
    fetch('./src/translation/supported_languages.json')
        .then(response => response.json())
        .then(data => {
            let a = data;
            console.log(a);
        })
        .catch(error => {
            console.error('An error occurred in loading the language:', error);
            alert('An error occurred while loading the language! Please provide us with an issue. \nError:' + error);
        });
}

//翻译函数 输入key 从当前语言字典中获取key对应的当前语言字符串
function t(key) {

    return current_language[key];
}
