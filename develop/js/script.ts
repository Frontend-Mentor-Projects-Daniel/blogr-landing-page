const menuButton = document.querySelector('.menu') as HTMLButtonElement;
const navbar = document.querySelector('.header-top__navbar') as HTMLElement;
const tabItemWithPopup = Array.from(
  document.querySelectorAll('.tab__item[aria-haspopup="true"]')
) as HTMLAnchorElement[];
const tabWithSubMenu = Array.from(
  document.querySelectorAll('.tab.has-submenu')
) as HTMLLIElement[];
const subMenus = Array.from(
  document.querySelectorAll('sub-menu')
) as HTMLUListElement[];

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
    closeTab(tab);
  });
});

function closeTab(tab: HTMLLIElement): void {
  setTimeout(() => {
    tab.firstElementChild?.setAttribute('aria-expanded', 'false');
  }, 2000);
}
