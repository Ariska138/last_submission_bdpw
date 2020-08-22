var isShowMenu = false;

function navMenuMobile() {
    let menu = document.getElementById('menu');
    let iconMenu = document.getElementById('icon-menu');
    if (isShowMenu) {
        menu.style.display = "none";
        iconMenu.classList.remove('fa-close');
        iconMenu.classList.add('fa-bars');
    } else {
        menu.style.display = "grid";
        iconMenu.classList.remove('fa-bars');
        iconMenu.classList.add('fa-close');
    }

    isShowMenu = !isShowMenu;
}