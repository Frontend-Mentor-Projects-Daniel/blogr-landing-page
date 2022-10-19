var menuButton = document.querySelector('.menu');
var navbar = document.querySelector('.header-top__navbar');
var tabWithSubMenu = Array.from(document.querySelectorAll('.tab.has-submenu'));
var arrowButtons = Array.from(document.querySelectorAll('button.has-icon'));
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
        var _a, _b, _c, _d;
        (_a = tab.firstElementChild) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-expanded', 'true');
        console.log((_b = tab.firstElementChild) === null || _b === void 0 ? void 0 : _b.firstElementChild);
        (_d = (_c = tab.firstElementChild) === null || _c === void 0 ? void 0 : _c.nextElementSibling) === null || _d === void 0 ? void 0 : _d.classList.add('rotate-180');
    });
    tab.addEventListener('mouseout', function () {
        var _a, _b, _c;
        (_a = tab.firstElementChild) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-expanded', 'false');
        (_c = (_b = tab.firstElementChild) === null || _b === void 0 ? void 0 : _b.nextElementSibling) === null || _c === void 0 ? void 0 : _c.classList.remove('rotate-180');
    });
});
// show submenu on click/tab/enter
arrowButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var _a, _b, _c;
        if (((_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.className) == '[ tab has-submenu ]') {
            button.parentElement.className = '[ tab has-submenu ] open';
            button.setAttribute('aria-expanded', 'true');
            button.classList.add('rotate-180');
            (_b = button.previousElementSibling) === null || _b === void 0 ? void 0 : _b.setAttribute('aria-expanded', 'true');
        }
        else {
            if (button.parentElement) {
                button.parentElement.className = '[ tab has-submenu ]';
            }
            button.setAttribute('aria-expanded', 'false');
            button.classList.remove('rotate-180');
            (_c = button.previousElementSibling) === null || _c === void 0 ? void 0 : _c.setAttribute('aria-expanded', 'false');
        }
    });
});
