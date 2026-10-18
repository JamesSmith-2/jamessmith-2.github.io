'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menuButton && navigation) {
  const dropdowns = [...navigation.querySelectorAll('.nav-dropdown')];
  const closeDropdowns = () => dropdowns.forEach((item) => (item.open = false));
  dropdowns.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        dropdowns.forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target)) closeDropdowns();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const openDropdown = dropdowns.find((item) => item.open);
      if (openDropdown) {
        closeDropdowns();
        openDropdown.querySelector('summary').focus();
      } else if (menuButton.getAttribute('aria-expanded') === 'true') {
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
        menuButton.focus();
      }
    }
  });
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('is-open', !expanded);
    if (expanded) closeDropdowns();
  });
  navigation.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      closeDropdowns();
    }),
  );
}
document
  .querySelector('.print-button')
  ?.addEventListener('click', () => window.print());
