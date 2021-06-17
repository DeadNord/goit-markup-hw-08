{
  const refs = {
    openMenuBtn: document.querySelector('[data-mobile-menu-open]'),
    closeMenuBtn: document.querySelector('[data-mobile-menu-close]'),
    menu: document.querySelector('[data-mobile-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
}