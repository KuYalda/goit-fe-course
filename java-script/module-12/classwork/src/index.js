import './styles.css';

// const apiForm = document.querySelector('.api__form');

// const peopleUL = document.querySelector('#people');

// let peopleData = [];

// apiForm.addEventListener('submit', e => {
//   e.preventDefault();
//   // console.log('e.target.elements.api.value :', e.target.elements.api.value);

//   // console.dir(e.target);

//   const href = e.target.elements.api.value;

//   function renderPeople(arrPeoples) {
//     const markup = arrPeoples.reduce((acc, el) => {
//       return (acc += `
//       <li>
//         <p>${el.name}</p>
//         <p>hair_color:${el.hair_color}<p>
//       </li>
//       `);
//     }, '');

//     peopleUL.innerHTML = markup;
//   }

//   fetch(href, {
//     method: 'GET',
//   })
//     .then(response => response.json())
//     .then(resData => {
//       // console.log('resData :', resData);
//       // peopleData = (resData.results && resData.results) || [resData];
//       peopleData = resData.results ? resData.results : [resData];
//       // console.log(peopleData);
//     })
//     .then(() => renderPeople(peopleData));
// });

// https://github.com/typicode/json-server

const todoForm = document.querySelector('.todo__form');
const todoUL = document.querySelector('#todo');
const basicUrl = 'http://localhost:3000';

let todoData = [];

function renderTodo(arrTodo) {
  const markup = arrTodo.reduce((acc, el) => {
    return (acc += `<li data-id=${el.id}>${el.title}</li>`);
  }, '');
  todoUL.innerHTML = markup;
}

fetch(`${basicUrl}/todo`)
  .then(response => response.json())
  .then(resData => {
    console.log('get resData', resData);
    todoData = resData;
  })
  .then(() => renderTodo(todoData));

todoForm.addEventListener('submit', e => {
  e.preventDefault();

  const title = e.target.elements.todo.value;
  createTodo(title);
  e.target.reset();
});

function createTodo(title) {
  return fetch(`${basicUrl}/todo`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ title }),
  })
    .then(res => res.json())
    .then(resData => {
      console.log('create resData', resData);
      const newLi = `
        <li data-id=${resData.id}>${resData.title}</li>
      `;
      todoUL.insertAdjacentHTML('beforeend', newLi);
      todoData.push(resData);
    });
}

todoUL.addEventListener('contextmenu', e => {
  e.preventDefault();

  if (e.target.nodeName === 'LI') {
    const id = e.target.dataset.id;
    console.log('id', id);
    deleteTodo(id, e.target);
  }
});

function deleteTodo(id, element) {
  fetch(`${basicUrl}/todo/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(resData => {
      console.log('del resData', resData);
      element.remove();
    });
}

todoUL.addEventListener('click', e => {
  console.log('good');
  if (e.target.nodeName === 'LI') {
    const oldEl = todoData.find(todo => todo.id === +e.target.dataset.id);
    console.log('oldEl :', oldEl);
    const form = document.createElement('form');
    const input = document.createElement('input');
    form.id = 'update';
    input.name = 'update';
    input.type = 'text';
    input.value = oldEl.title;
    form.append(input);
    form.addEventListener('submit', formEv => {
      formEv.preventDefault();

      const title = formEv.target.elements.update.value;
      alert(title);
    });
    e.target.innerHTML = '';
    e.target.append(form);
  }
});
