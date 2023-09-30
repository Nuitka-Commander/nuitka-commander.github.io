// *********************
// 处理localStorage相关
// *********************
let localStorage_available; //localStorage是否可用


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
//======================================================================================================================

//todo 创建options对象
//todo 创建handler对象 并创建proxy绑定

//尝试加载localStorage中的数据到options中
if (localStorage_available) {
    try {
        let options_in_localStorage = JSON.parse(localStorage.getItem("options"));
        for (let key in __options) {
            if (options_in_localStorage.hasOwnProperty(key)) {
                __options[key] = options_in_localStorage[key];
            }
        }
    } catch (e) {
        console.warn("Unable to load data from localStorage! \nError: " + e);
        alert("Unable to load data from localStorage! \nError: " + e);
    }
}
