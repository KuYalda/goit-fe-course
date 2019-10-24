import dishes from './menu.json';
import menuTemplate from '../templates/dish.hbs';

const menuHTML = menuTemplate(dishes);
document.getElementById('menu').innerHTML = menuHTML;
