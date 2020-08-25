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

function reportWindowSize() {
    location.reload();
}

window.onresize = reportWindowSize;

window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var sidebar = document.getElementById("sidebar");

var posStickyActive = navbar.offsetTop;
var posActiveSidebar = sidebar.offsetTop;

function myFunction() {
    // console.log(window.pageYOffset + ' ' + posStickyActive);
    if (window.pageYOffset >= posStickyActive) {
        navbar.classList.add("position-fixed--fullwidth")
    } else {
        navbar.classList.remove("position-fixed--fullwidth");
    }

    if (window.pageYOffset >= posStickyActive && window.innerWidth > 768) {
        sidebar.classList.add("position-fixed--sidebar")
    } else {
        sidebar.classList.remove("position-fixed--sidebar");
    }
}