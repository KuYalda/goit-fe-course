import usersData from './usersData';
// import HandleBars from 'handlebars/dist/handlebars.min';
import userTemplate from '../templates/user.hbs';
import usersTemplate from '../templates/users.hbs';

// console.log('usersData', usersData);

// console.log('HandleBars :', HandleBars);

// console.log('userTemplate() :', userTemplate(usersData[0]));

// const markUp = usersData.reduce((acc, user) => {
//   return (acc += usersTemplate(user));
// }, '');

// console.log('markUp :', markUp);

// const markUp1 = usersTemplate(usersData);
// console.log('markUp1 :', markUp1);

const jsonUsers = JSON.stringify(usersData);

// console.log('jsonUsers :', jsonUsers);

const normalUsers = JSON.parse(jsonUsers);

// console.log('normalUsers :', normalUsers);

localStorage.setItem('jsonUsers', jsonUsers);

const localUsers = localStorage.getItem('jsonUsers');

console.log('localUsers :', localUsers);

localStorage.setItem('user', JSON.stringify(usersData[0]));

console.log('localUsers :', JSON.parse(localUsers));

const getUser = JSON.parse(localStorage.getItem('user'));
const loginText = document.querySelector('.login');

if (getUser) {
  loginText.textContent = getUser.name;
}

console.log('getUser :', getUser);

const form = document.querySelector('.form');
const todos = document.querySelector('.todos');

let todosArr = JSON.parse(localStorage.getItem('todos'));

if (!todosArr) {
  todosArr = [];
} else {
  todosArr.forEach(el => {
    todos.append(createTodo(el));
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = e.target.elements.text.value;
  todos.append(createTodo(inputValue));
  todosArr.push(inputValue);
  localStorage.setItem('todos', JSON.stringify(todosArr));
  e.target.reset();
});

function createTodo(text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}
