'use strict'
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// console.log('hotel.capacity :', hotel.capacity);

// console.log(hotel.name); // Resort Hotel
// console.log(hotel['name']); // Resort Hotel

// hotel.stars = 4;

// console.log('hotel.stars :', hotel.stars);

// hotel['capacity'] = 150;

// console.log('hotel.capacity :', hotel.capacity);

// hotel.name = 'Coastline Resort';
// console.log(hotel.name); // Coastline Resort
// console.log(hotel['name']); // Coastline Resort

// hotel['name'] = 'Stardust Hotel';
// console.log(hotel.name); // Stardust Hotel
// console.log(hotel['name']); // Stardust Hotel

// hotel.address = '1, Beach ave.';
// hotel['manager'] = 'Chuck Norris';

// console.log(hotel.address); // 1, Beach ave.
// console.log(hotel.manager); // Chuck Norris

// console.log('hotel :', hotel);

// delete hotel.name;
// console.log(hotel); // {stars: 5, capacity: 100}

// delete hotel['stars'];
// console.log(hotel); // {capacity: 100}

// console.log(hotel.pool); // undefined

// let name = 'Resort Hotel';
// let stars = 5;

// // Эта ES5 запись избыточна
// const es5hotel = {
//   name: name,
//   stars: stars,
//   capacity: 100,
// };

// /*
//  * ES6 Shorthand properties
//  * Имя ключа будет аналогично имени переменной
//  * Значение свойства будет равно значению переменной
//  */
// const es6hotel = {
//   name,
//   stars,
//   capacity: 100,
// };

// console.log(es6hotel); // {name: "Resort Hotel", stars: 5, capacity: 100}

// const key = 'person';
// const object = {};

// object[key] = 'Mango';
// console.log(object); // {person: 'Mango'}

// const key = 'person';
// const getKey = function() {
//   return 'age';
// };

// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}

/* DONT WORK */

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   // Так метод объявлялся в ES5
//   greetInES5: function() {
//     console.log('Welcome!');
//   },
//   // Так метод объявляется в ES6
//   greetInES6() {
//     console.log('Welcome!');
//   },
// };

// // hotel.greetInEs5(); // Welcome!
// // hotel.greetInEs6(); // Welcome!
// // console.log('hotel :', hotel);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// hotel.greet = function() {
//   console.log('Welcome!');
// };

// hotel.greet(); // Welcome!

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.showName(); // Resort Hotel

// hotel.changeCapacity(200);
// console.log(hotel.capacity); // 200

// function getFruitsWithColor(color) {
//   switch (color) {
//     case 'red':
//       return ['apple', 'strawberry'];
//     case 'yellow':
//       return ['banana', 'pineapple'];
//     case 'purple':
//       return ['grape', 'plum'];
//     default:
//       return [];
//   }
// }

// console.log(getFruitsWithColor(null)); // []
// console.log(getFruitsWithColor('yellow')); // ['banana', 'pineapple']

// // Создаем карту где ключом свойства будет цвет, а значением данные
// const fruitsByColor = {
//   red: ['apple', 'strawberry'],
//   yellow: ['banana', 'pineapple'],
//   purple: ['grape', 'plum'],
// };

// function getFruitsWithColor(color) {
//   return fruitsByColor[{color}] || [];
// }

// console.log('getFruitsWithColor :', getFruitsWithColor(red));

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// /*
//  * Key: name
//  * Key: stars
//  * Key: capacity
//  */

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log('Value: ', hotel[key]);
// }

// /*
//  * Value: "Resort Hotel"
//  * Value: 5
//  * Value: 100
//  */

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]
// console.log('entries :', entries);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]


// for (const key of keys) {
//   console.log(`${key}`, hotel[key]);
// }
// /*
//  * Value: Resort Hotel
//  * Value: 5
//  * Value: 100
//  */

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// /*
//  * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
//  * Первый элемент это ключ свойства, второй это значение.
//  */
// const entries = Object.entries(hotel);
// console.log('entries :', entries);

// /*
//  * На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  * в переменную key, а второй (значение) в переменную value
//  */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

// /*
//  * name: Resort Hotel
//  * stars: 5
//  * capacity: 100
//  */

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyOfHouses = [...houses];

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(copyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const completeHouses = [...houses, 'Targaryen'];

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(completeHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell','Targaryen']

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

// console.log(houses);
// console.log(housesInDebt); // ['Arryn','Frey','Greyjoy','Stark','Tyrell']

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// // Вертикальная запись удобнее для чтения
// const updatedHouses = [
//   ...houses.slice(0, 1),
//   'Frey of the Crossing',
//   ...houses.slice(2),
// ];

// console.log(updatedHouses);
// // ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({}, a, b);
// // console.log(c); // {x: 0, y: 2, z: 3}

// // То же самое используя операцию spread
// const c = { ...a, ...b };

// console.log(c); // {x: 0, y: 2, z: 3}

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { j: 10, ...a, z: 15, ...b, x: 5 };

// console.log(c); // {x: 0, j: 10, y: 2, z: 3}

// const add = function(...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

// const add = function(value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Объявим переменные и присвоим им значения из объекта
// const { name, stars, status, capacity } = hotel;

// console.log(name, stars, status, capacity); // "Resort Hotel", 5, undefined

// const target = { x: 5, y: 10, z: 20};

// const i = Object.assign(target, ...sources);

// console.log('sources :', sources);