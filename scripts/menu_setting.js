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

// css dark mode适配：     document.body.classList.remove('dark_mode')    document.body.classList.add('dark_mode')

//打开下拉栏
function myFunction() {
    document.getElementById("theme_change-dropdown_content").classList.toggle("show");
}

// 如果用户在下拉菜单之外点击，则关闭下拉菜单
window.onclick = function (event) {
    if (!event.target.matches(".change_theme_btn")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};