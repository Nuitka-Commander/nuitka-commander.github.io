// *********************
// 处理翻译相关的脚本
// *********************

let current_language; //存储翻译的json
let supported_languages; //存储支持的语言对象
let raw_state_object; // 存储原始状态机json

//根据键从翻译字典中获得翻译
function get_translation(key) {
    //尝试直接return
    try {
        if (current_language[key] !== undefined) {
            return current_language[key];
        } else {
            console.error(`Error in getting translation: \ntKey:${key}\nError:No such key\n` + `language:${options["language"]}\ntranslation:`);
            console.error(current_language);
        }
    } catch (e) {
        console.error(`Error in getting translation: \ntKey:${key}\nError:${e}`);
    }
    return "Panic!";
}

//根据tKey对整个页面的元素进行重载翻译文本
function reload_all_translation() {
    let elements = document.querySelectorAll("[tKey]");
    elements.forEach(element => {   //遍历所有有有tKey属性的标签
        element.textContent = get_translation(element.getAttribute("tKey"));
    });
}

//加载语言json
function load_language() {
    fetch(supported_languages[options["language"]]["path"])
        .then(response => response.json())
        .then(data => {
            current_language = data;
            //加载状态对象
            fetch("./src/state_machine.json")
                .then(response => response.json())
                .then(data2 => {
                    raw_state_object = data2;
                    //等待html加载完毕后加载翻译
                    // todo 告诉程序现在可以开始生成页面了
                    if (document.readyState === "loading") { //html还在加载
                        document.addEventListener("DOMContentLoaded", function () {
                            reload_all_translation();
                            stop_loading();
                        });
                    } else {  // 加载完
                        reload_all_translation();
                        stop_loading();
                    }
                })
                .catch(error => {
                    console.error("An error occurred in loading the stateMachine:\n---\n", error);
                });

        })
        .catch(error => {
            console.error("An error occurred in loading the language:\n---\n", error);
        });
}

//添加语言切换dropdown里面那一堆按钮
function add_language_change_button() {
    const dropdown = document.getElementById("language_change_dropdown");
    //遍历所有支持的语言 分别保存到key和value
    for (let [key, value] of Object.entries(supported_languages)) {
        let button = document.createElement("button");
        button.textContent = value["language_self_identification"];
        button.classList.add("language_change_buttons");

        button.onclick = function () {//button被点击后切换语言
            options["language"] = key;
            load_language();
            change_language_change_dropdown(false);
        };
        dropdown.appendChild(button);
    }
}


//加载"可用语言"对象
fetch("./src/i18n/supported_languages.json")
    .then(response => response.json())
    .then(data => {
        supported_languages = data;
        //用户未定义语言或语言不支持时检测一下语言
        if (options["language"] === undefined || !(options["language"] in supported_languages)) {
            let user_language = navigator.languages;
            for (let i = 0; i < user_language.length; i++) {
                if (user_language[i] in supported_languages) {
                    options["language"] = user_language[i];
                    console.log(options["language"]);
                    break;
                }
            }
            //实在没有语言了，就用英语
            if (options["language"] === undefined) {
                options["language"] = "en-US";
            }
        }
        load_language(); //开始加载语言进json对象
        //加载html文档完毕后便开始添加翻译切换按钮
        if (document.readyState === "loading") { //html还在加载
            document.addEventListener("DOMContentLoaded", function () {
                add_language_change_button();
            });
        } else {  // 加载完毕
            add_language_change_button();
        }

    })
    .catch(error => {
        console.error("An error occurred in loading the language:", error);
        alert("Oh no, there was an error loading supported languages. \nError:\n" + error);
    });