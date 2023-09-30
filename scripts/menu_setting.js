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

function change_theme_change_dropdown(hope_status) {
    /*反转*/
    if (theme_change_dropdown_status !== hope_status) {
        document.getElementById("theme_change-dropdown_content").classList.toggle("show");
        theme_change_dropdown_status = hope_status;
        console.log("change_theme_change_dropdown: " + hope_status);
    }
}

function invert_theme_dropdown_status() {
    change_theme_change_dropdown(!theme_change_dropdown_status);
}

// 如果用户在下拉菜单之外点击，则关闭下拉菜单
window.onclick = function (event) {
    if (!event.target.matches(".change_theme_btn")) {
        change_theme_change_dropdown(false);
    }
};

