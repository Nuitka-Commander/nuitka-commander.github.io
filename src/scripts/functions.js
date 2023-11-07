/*
=====================
常用功能函数
=====================
 */


//开启加载界面
export function start_loading() {
    document.querySelectorAll(".loading_page span").forEach(span => {
        span.style.animationPlayState = "running"; // 恢复动画
    });
    document.querySelector(".loading_page").style.display = "flex";

}

//关闭加载页面
export function stop_loading() {
    document.querySelectorAll(".loading_page span").forEach(span => {
        span.style.animationPlayState = "paused"; // 暂停动画
    });
    document.querySelector(".loading_page").style.display = "none";
}
