'use strict'

// TASK#1

// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

// const listItems = [...document.querySelector('#categories').children];

// console.log(`In the list ${listItems.length} categories`);

// listItems.forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.innerHTML}.\n` +
//               `Amount of elements: ${[...item.lastElementChild.children].length}`);
// })

// TASK#2

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// function addTextInTags(arrText, tagName, selector = 'afterbegin') {
//   const input = arrText.reduce((string, textItem) => {
//   const tag = document.createElement(tagName);
//   tag.innerHTML = `${textItem}`;
//   const text = tag.outerHTML;
//   string += text;
//   return string;
//   }, '');
  
// const pointInput = document.querySelector('#ingredients');
//   pointInput.insertAdjacentHTML(selector, input)
// }

// addTextInTags(ingredients, 'li');

// TASK#3

// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// function addImage({ url, alt: alternative }) {
//   const element = `
//   <li>
//     <img src='${url}' alt='${alternative}'>
//   </li>
//   `;
  
//   return element;
// }

// function addGalery(imagesArr, selector, position = 'beforeend') {
//   const html = imagesArr.map((image) => addImage(image)).join('');
//   const pointInput = document.querySelector(`${selector}`);
//   pointInput.insertAdjacentHTML(position, html);
//   return pointInput;
// }

// const fatherElem = addGalery(images, '#gallery');
// fatherElem.classList.add('our-gallery');

// TASK#4

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// const reduce = document.querySelector('button[data-action="decrement"]');
// const increase = document.querySelector('button[data-action="increment"]');
// let counterValue = 0;
// const total = document.querySelector('#value');


// increase.addEventListener('click', increment);
// reduce.addEventListener('click', decrement);

// function increment() {
//   counterValue += 1;
//   total.textContent = counterValue
// }

// function decrement() {
//   counterValue -= 1;
//   total.textContent = counterValue
// }

// TASK#5

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// const textInput = document.querySelector('#name-input');
// const textOutput = document.querySelector('#name-output');
// let currentValue = 'незнакомец'

// textInput.addEventListener('input', changeText)

// function changeText() {
//   textOutput.textContent = textInput.value;
//   if(textInput.value === '') {
//     textOutput.textContent = currentValue;
//   }
// }

// TASK#6

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// const ourInput = document.querySelector('#validation-input');
// const quantity = +ourInput.dataset.length;

// ourInput.addEventListener('blur', textEntered);

// function textEntered() {
//   let length = ourInput.value.length;
//   if(length === quantity){
//     ourInput.classList.add('valid');
//     ourInput.classList.remove('invalid');
//   } else {
//     ourInput.classList.add('invalid');
//     ourInput.classList.remove('valid');
//   }
// }

// TASK#7

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// const controller = document.querySelector('#font-size-control');
// const textValue = document.querySelector('#text');

// controller.addEventListener('input', () => {textValue.style.fontSize = `${controller.valueAsNumber * 2}%`});

// TASK#8

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// const container = document.getElementById('boxes');
// let number = document.querySelector('input[type="number"]');
// let currentSize = 30;

// document.querySelector('button[data-action="render"]').addEventListener('click', createBoxes);
// document.querySelector('button[data-action="destroy"]').addEventListener('click', destroyBoxes);


// function createBoxes() {
//   container.innerHTML = '';
//   let num = number.valueAsNumber;
//   let rezult = '';
//   for(let i = 1; i <= num; i += 1) {
//     const el = document.createElement('div');
//     el.classList.add(`wrap-${i}`);
//     const r = Math.round(Math.random() * 256); ///разброс значений до 255
//     const g = Math.round(Math.random() * 256); ///разброс значений до 255
//     const b = Math.round(Math.random() * 256); ///разброс значений до 255
//     el.style.width = `${currentSize}px`;
//     el.style.height = `${currentSize}px`;
//     el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;   
//     const text = el.outerHTML;
//     rezult = rezult + `${text}`;
//     currentSize += 10;
//   }

//   container.insertAdjacentHTML('beforeend', rezult);
//   currentSize = 30;
//   number.valueAsNumber = '';
// }

// function destroyBoxes() {
//   container.innerHTML = '';
//   currentSize = 30;
//   number.valueAsNumber = '';
// }