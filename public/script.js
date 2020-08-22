var isShowMenu = false;

function navMenuMobile() {
    let menu = document.getElementById('menu');
    if (isShowMenu) {
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
    }

    isShowMenu = !isShowMenu;
   console.log('menu');
}