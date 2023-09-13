function openMenu() {
    console.log("open")
    let open_menu_button = document.querySelector(".open_menu_button");
    open_menu_button.style.visibility = "hidden";
    open_menu_button.style.opacity = "0";
    document.getElementById("menu_sidebar").style.width = Math.max(window.innerWidth * 0.15, 150) + "px";


}

function closeMenu() {
      console.log("close")
    document.getElementById("menu_sidebar").style.width = "0";
    let open_menu_button = document.querySelector(".open_menu_button");
    open_menu_button.style.visibility = "visible";
    open_menu_button.style.opacity = "1";
}