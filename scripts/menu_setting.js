// *********************
// 处理在菜单操作处理的逻辑
// *********************
function openMenu() {
    let open_menu_button = document.querySelector(".open_menu_button");
    open_menu_button.style.visibility = "hidden";
    open_menu_button.style.opacity = "0";
    let menu_sidebar = document.getElementById("menu_sidebar");
    menu_sidebar.style.width = Math.max(window.innerWidth * 0.15, 150) + "px";
}

function closeMenu() {
    let menu_sidebar = document.getElementById("menu_sidebar");
    menu_sidebar.style.width = "0";
    let open_menu_button = document.querySelector(".open_menu_button");
    open_menu_button.style.visibility = "visible";
    open_menu_button.style.opacity = "1";
}

// css darkmode适配：     document.body.classList.remove('dark_mode')    document.body.classList.add('dark_mode')
