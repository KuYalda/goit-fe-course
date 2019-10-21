'use strict'

import users from '../../../module-06/classwork/js/users.js'

// const cartLink = document.querySelector('.link');
// console.log('cartLink :', cartLink);

// cartLink.textContent = 'I am your mother basket'


const url = document.querySelector('.users__list');

function renderUsers(arrUsers, ref) {
  const markup = arrUsers.reduce((acc, el) => {
    const li = `
      <li class ='users__item' data-modal='${el.about}'>
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

const modalWrapper = document.querySelector('.modal__wrapper');
const modalTitle = modalWrapper.querySelector('.modal__title');

modalWrapper.addEventListener('click', (e) => {
  if(e.target.nodeName === 'BUTTON' || 
  e.target === e.currentTarget
  ) {
    modalWrapper.classList.remove('active');
  } //else if(e.currentTarget === modalWrapper) {
    // modalWrapper.classList.remove('active');

  // }
})


url.addEventListener('click', (e) => {
  // console.log('e.target', e.target);
  // console.log('e.currentTarget', e.currentTarget);
  // // console.log('e.target.nodeName', e.target.nodeName);
  // console.log('e.target.parentNode', e.target.parentNode)

  if(
    e.target.nodeName === 'BUTTON' && 
    e.target.dataset.action === 'DEL'
    ) {
      e.target.closest('.users__item').remove();
    } else if(e.target !== e.currentTarget) //if(e.target.nodeName === 'LI') 
  {
    let discription;
    // alert('this is LI')
    if(e.target.nodeName !== 'LI') {
      discription = e.target
        .closest('.users__item').dataset.modal;
    } else {
      discription = e.target.dataset.modal;
    }
    modalTitle.textContent = discription;
    modalWrapper.classList.add('active');
  }
});

window.addEventListener('keydown', (e) => {
  // console.log(e.keyCode);
  // console.log(e);
  if(e.keyCode === 27 
    && modalWrapper.classList.contains('active')) 
    {
    modalWrapper.classList.toggle('active');
    }
})

// console.log(
//   url.contains(document.querySelector('.users__item'))
// );