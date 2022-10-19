var menuButton = document.querySelector('.menu');
var navbar = document.querySelector('.header-top__navbar');
var tabItemWithPopup = Array.from(document.querySelectorAll('.tab__item[aria-haspopup="true"]'));
var tabWithSubMenu = Array.from(document.querySelectorAll('.tab.has-submenu'));
var subMenus = Array.from(document.querySelectorAll('sub-menu'));
// toggle menu on click
menuButton.addEventListener('click', function () {
    var _a, _b;
    navbar.classList.toggle('active');
    if (navbar.classList.contains('active')) {
        menuButton.setAttribute('aria-expanded', 'true');
        (_a = menuButton === null || menuButton === void 0 ? void 0 : menuButton.firstElementChild) === null || _a === void 0 ? void 0 : _a.setAttribute('src', './develop/assets/images/icon-close.svg');
    }
    else {
        menuButton.setAttribute('aria-expanded', 'false');
        (_b = menuButton === null || menuButton === void 0 ? void 0 : menuButton.firstElementChild) === null || _b === void 0 ? void 0 : _b.setAttribute('src', './develop/assets/images/icon-hamburger.svg');
    }
});
// show submenu on hover
tabWithSubMenu.forEach(function (tab) {
    tab.addEventListener('mouseover', function () {
        var _a;
        (_a = tab.firstElementChild) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-expanded', 'true');
    });
    tab.addEventListener('mouseout', function () {
        closeTab(tab);
    });
});
function closeTab(tab) {
    setTimeout(function () {
        var _a;
        (_a = tab.firstElementChild) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-expanded', 'false');
    }, 2000);
}
