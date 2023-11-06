// *********************
// 处理生成命令相关
// *********************

let raw_state_machine;

//生成页面
function generate_page() {
    start_loading();

    stop_loading();
}

fetch("./src/state_machine.json")
    .then(response => response.json())
    .then(data => {
        raw_state_machine = data;
        if (document.readyState === "loading") { //html还在加载
            document.addEventListener("DOMContentLoaded", function () {
                generate_page();
            });
        } else {  // 加载完毕
            generate_page();
        }
    })
    .catch(error => {
        console.error("An error occurred in loading the state machine:\n", error);
        alert("An error occurred in loading the state machine:\n" + error)
    });