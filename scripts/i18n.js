// *********************
// 处理翻译及加载逻辑
// *********************



function start_loading() {
    document.querySelectorAll('.loading_page span').forEach(span => {
        span.style.animationPlayState = "running"; // 恢复动画
    });
    document.querySelector('.loading_page').style.display = "flex";

}

function stop_loading() {
    document.querySelectorAll('.loading_page span').forEach(span => {
        span.style.animationPlayState = "paused"; // 暂停动画
    });
    document.querySelector('.loading_page').style.display = "none";
}

// ===========================================

//加载语言到字典中
function load_language() {
    fetch('./src/translation/supported_languages.json')
        .then(response => response.json())
        .then(data => {
            current_language = data;
        })
        .catch(error => {
            console.error('An error occurred in loading the language:', error);
            alert('An error occurred while loading the language! Please provide us with an issue. \nError:' + error);
        });
}

//根据键从翻译字典中获得翻译
function get_translation(key) {
    //todo 错误判断
    return current_language[key];
}

//根据tKey对整个页面的元素进行重载翻译文本
function reload_all_translation() {
    let elements = document.querySelectorAll('[tKey]');
    elements.forEach(element => {   //遍历所有有有tKey属性的标签
        element.textContent = get_translation(element.getAttribute('tKey'));
    });
}


