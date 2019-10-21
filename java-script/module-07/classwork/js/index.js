'use strict'

import users from '../../../module-06/classwork/js/users.js'

// const cartLink = document.querySelector('.link');
// console.log('cartLink :', cartLink);

// cartLink.textContent = 'I am your mother basket'


const url = document.querySelector('.users__list');

function renderUsers(arrUsers, ref) {
  const markup = arrUsers.reduce((acc, el) => {
    const li = `
      <li class ='users__item'>
        <img class='users__img' src=${el.picture} />
        <p class='users__name'>${el.name}</p>
        <span class='users__email'>${el.email}</span>
        <button class='delete' data-action='DEL'>X</button>
      </li>
    `;
    return acc += li;
  }, '')
  ref.insertAdjacentHTML('beforeend', markup);
}

renderUsers(users, url);

url.addEventListener('click', (e) => {
  console.log('e.target', e.target);
  console.log('e.currentTarget', e.currentTarget);
  console.log('e.target.nodeName', e.target.nodeName);
  console.log('e.target.parentNode', e.target.parentNode)

  if(
    e.target.nodeName === 'BUTTON' && 
    e.target.dataset.action === 'DEL') {
      e.target.closest('.users__item').remove();
  }
});

console.log(
  url.contains(document.querySelector('.users__item'))
);
