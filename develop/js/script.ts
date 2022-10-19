const menuButton = document.querySelector('.menu') as HTMLButtonElement;
const navbar = document.querySelector('.header-top__navbar') as HTMLElement;
const tabWithSubMenu = Array.from(
  document.querySelectorAll('.tab.has-submenu')
) as HTMLLIElement[];
const arrowButtons = Array.from(
  document.querySelectorAll('button.has-icon')
) as HTMLButtonElement[];

// toggle menu on click
menuButton.addEventListener('click', () => {
  navbar.classList.toggle('active');

  if (navbar.classList.contains('active')) {
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton?.firstElementChild?.setAttribute(
      'src',
      './develop/assets/images/icon-close.svg'
    );
  } else {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton?.firstElementChild?.setAttribute(
      'src',
      './develop/assets/images/icon-hamburger.svg'
    );
  }
});

// show submenu on hover
tabWithSubMenu.forEach((tab) => {
  tab.addEventListener('mouseover', () => {
    tab.firstElementChild?.setAttribute('aria-expanded', 'true');
  });

  tab.addEventListener('mouseout', () => {
    tab.firstElementChild?.setAttribute('aria-expanded', 'false');
  });
});

// show submenu on click/tab/enter
arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.parentElement?.className == '[ tab has-submenu ]') {
      button.parentElement.className = '[ tab has-submenu ] open';

      button.setAttribute('aria-expanded', 'true');
      button.classList.add('rotate-180');
      button.previousElementSibling?.setAttribute('aria-expanded', 'true');
    } else {
      if (button.parentElement) {
        button.parentElement.className = '[ tab has-submenu ]';
      }

      button.setAttribute('aria-expanded', 'false');
      button.classList.remove('rotate-180');
      button.previousElementSibling?.setAttribute('aria-expanded', 'false');
    }
  });
});
