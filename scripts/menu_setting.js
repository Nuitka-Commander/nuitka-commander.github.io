// *********************
// 处理在菜单操作的逻辑
// *********************

function openMenu() {
    let open_menu_button = document.querySelector(".open_menu_button");
    open_menu_button.style.visibility = "hidden";
    open_menu_button.style.opacity = "0";
    let menu_sidebar = document.getElementById("menu_sidebar");
    menu_sidebar.style.width = Math.max(window.innerWidth * 0.15, 150) + "px";

}


function closeMenu() {
    change_theme_change_dropdown(false);
    let menu_sidebar = document.getElementById("menu_sidebar");
    menu_sidebar.style.width = "0";
    let open_menu_button = document.querySelector(".open_menu_button");
    open_menu_button.style.visibility = "visible";
    open_menu_button.style.opacity = "1";

}


//打开下拉栏
let theme_change_dropdown_status = false;
let language_change_dropdown_status = false;

function change_theme_change_dropdown(hope_status) {
    if (hope_status === false) {
        document.getElementById("theme_change-dropdown_content").classList.remove("show");
        theme_change_dropdown_status = false;
    } else {
        document.getElementById("theme_change-dropdown_content").classList.add("show");
        theme_change_dropdown_status = true;
    }
}


function invert_theme_dropdown_status() {
    change_theme_change_dropdown(!theme_change_dropdown_status);
}


function change_language_change_dropdown(hope_status) {
    if (hope_status === false) {
        document.getElementById("language_change_dropdown").classList.remove("show");
        language_change_dropdown_status = false;
    } else {
        document.getElementById("language_change_dropdown").classList.add("show");
        language_change_dropdown_status = true;
    }
}

function invert_language_dropdown_status() {
    console.log("invert_language_dropdown_status");
    change_language_change_dropdown(!language_change_dropdown_status);
}

// 如果用户在下拉菜单之外点击，则关闭下拉菜单
window.onclick = function (event) {
    if (!document.getElementById("theme_change_dropdown").contains(event.target)) { //如果点到了下拉菜单之外
        change_theme_change_dropdown(false);
    }
    if (!(document.getElementById("language_set_dropdown").contains(event.target))) {
        change_language_change_dropdown(false);
    }
};
