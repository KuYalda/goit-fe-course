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

const basicUrl = 'http://localhost:3000';
fetch(`${basicUrl}/todo`)
  .then(response => response.json())
  .then(resData => console.log('resData :', resData));

fetch(`${basicUrl}/todo`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({ title: 'learn fetch()' }),
})
  .then(res => res.json())
  .then(resData => console.log('resData :', resData));
