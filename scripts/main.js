let current_language; //存储翻译的json
let supported_languages; //存储支持的语言对象
let localStorage_available;//localStorage是否可用
let options = {
    "theme": "auto", "language": "en_us",
};//todo update监听

// ===========================================

//检测localStorage是否可用并检测是否已满(如果不可用则返回false)
function check_localStorage() {
    try {
        const x = "__storage_test__";
        localStorage.setItem(x, x);
        localStorage.getItem(x);
        localStorage.removeItem(x);
        return true;
    } catch (e) {
        console.warn("localStorage is not available! \nError: " + e);
        alert("Unable to store data locally! This will not record your choices. Please try changing your browser or starting localStorage.\nError: " + e);
        return false;
    }

}

localStorage_available = check_localStorage();
//尝试加载localStorage中的数据到本地字典中
if (localStorage_available) {
    try {
        let options_in_localStorage = JSON.parse(localStorage.getItem("options"));
        for (let key in options) {
            if (options_in_localStorage.hasOwnProperty(key)) {
                options[key] = options_in_localStorage[key];
            }
        }
    } catch (e) {
        console.warn("Unable to load data from localStorage! \nError: " + e);
        alert("Unable to load data from localStorage! \nError: " + e);
    }
}


// ===========================================

//打开加载页面
function start_loading() {
    document.querySelectorAll(".loading_page span").forEach(span => {
        span.style.animationPlayState = "running"; // 恢复动画
    });
    document.querySelector(".loading_page").style.display = "flex";

}

//关闭加载页面
function stop_loading() {
    document.querySelectorAll(".loading_page span").forEach(span => {
        span.style.animationPlayState = "paused"; // 暂停动画
    });
    document.querySelector(".loading_page").style.display = "none";
}
