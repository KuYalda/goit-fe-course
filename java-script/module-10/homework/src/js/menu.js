import dishes from './menu.json';
import menuTemplate from '../templates/dish.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuHTML = menuTemplate(dishes);
document.getElementById('menu').innerHTML = menuHTML;

const themeControl = document.getElementById('theme-switch-control');

const siteBody = document.getElementsByTagName('body');

if (localStorage.getItem('theme') === 'dark-theme') {
  siteBody[0].classList.add(Theme.DARK);
  themeControl.checked = true;
} else {
  siteBody[0].classList.add(Theme.LIGHT);
  localStorage.setItem('theme', `${Theme.LIGHT}`);
}

// console.log(activeTheme);

themeControl.addEventListener('change', () => {
  // console.dir(themeControl);
  if (themeControl.checked) {
    siteBody[0].classList.toggle(Theme.LIGHT);
    siteBody[0].classList.add(Theme.DARK);
    localStorage.setItem('theme', `${Theme.DARK}`);
  } else {
    siteBody[0].classList.add(Theme.LIGHT);
    siteBody[0].classList.toggle(Theme.DARK);
    localStorage.setItem('theme', `${Theme.LIGHT}`);
  }
});
