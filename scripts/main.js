let current_language; //存储翻译的json
let localStorage_available;//localStorage是否可用
// ===========================================
//检测localStorage是否可用并检测是否已满(如果不可用则返回false)
function check_localStorage() {
    try {
        let x = "__storage_test__";
        localStorage.setItem(x, x);
        localStorage.removeItem(x);
        return true;
    } catch (e) {
        console.warn("localStorage is not available! \nError: " + e);
        alert("Unable to store data locally! This will not record your choices. Please try changing your browser or starting localStorage.\nError: " + e);
        return false;
    }
}

localStorage_available = check_localStorage();
