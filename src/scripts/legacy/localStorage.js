// *********************
// 处理localStorage相关
// *********************
let localStorage_available; //localStorage是否可用

// //检测localStorage是否可用并检测是否已满(如果不可用则返回false)
// function check_localStorage() {
//     try {
//         const x = "__storage_test__";
//         localStorage.setItem(x, x);
//         localStorage.getItem(x);
//         localStorage.removeItem(x);
//         return true;
//     } catch (e) {
//         console.warn("localStorage is not available! \nError: " + e);
//         alert("Unable to store data locally! This will not record your choices." + " Please try changing your browser or starting localStorage.\n------\nError: " + e);
//         return false;
//     }
//
// }
//
// localStorage_available = check_localStorage();

//=========================================================

let options;

function save_options_to_localStorage() { // 保存options到localStorage
    try {
        if (localStorage_available) {
            localStorage.setItem("options", JSON.stringify(options));
        }

    } catch (e) {
        console.warn("Unable to save data to localStorage! \n-----\nError: " + e);
    }
}

// options = (function () { //(函数用于绑定localStorage进行闭包) 使用undefined无法保存到localStorage(但是不影响使用)
//     let __private_options_for_proxy = {
//         "theme": "auto",
//         "language": undefined
//     };
//     let handler = {
//         set: function (target, key, value) {
//             let result = Reflect.set(target, key, value);
//             save_options_to_localStorage();
//             return result;
//         },
//         deleteProperty: function (target, key) {
//             let result = Reflect.deleteProperty(target, key);
//             save_options_to_localStorage();
//             return result;
//         }
//     };
//     return new Proxy(__private_options_for_proxy, handler);
// })();


//尝试加载localStorage中的数据到options中
if (localStorage_available) {
    try {
        let options_in_localStorage = JSON.parse(localStorage.getItem("options"));
        for (let key in options) {
            if (options_in_localStorage.hasOwnProperty(key)) {
                options[key] = options_in_localStorage[key];
            }
        }
    } catch (e) {
        console.warn("Unable to load data from localStorage! \n-----\nError: " + e);
        save_options_to_localStorage();
    }
}



