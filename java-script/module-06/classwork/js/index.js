'use strict'

// Императивный подход

// const filter = array => {
//   const filtered = [];

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] >= 2) {
//       filtered.push(array[i]);
//     }
//   }
//   console.log('done');

//   return filtered;
// };


// const arr = [2, 5, 1, 0, 6, 8, 1];

// Декларативный подход
// const arr = [2, 5, 1, 0, 6, 8, 1];
// const filter = arr.filter(value => value >= 2);


// console.log(filter);

// const dirtyDoubleFn = arr => {
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     arr[i] = arr[i] * 2;
//   }
// };

// const numbers = [1, 2, 3];

// dirtyDoubleFn(numbers);
// // Произошла мутация исходных данных
// console.log(numbers); // [2, 4, 6]

// const pureDoubleFn = arr => {
//   const newArr = [];

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     newArr.push(arr[i] * 2);
//   }

//   return newArr;
// };

// const numbers = [1, 2, 3];
// const doubledNumbers = pureDoubleFn(numbers);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3]
// // Функция вернула новый массив с измененными данными
// console.log(doubledNumbers); // [2, 4, 6]

// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // [2, 4, 6]

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => user.name);

// console.log(names); // ["Mango", "Poly", "Ajax"]

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.filter(num => num > 5)); // [6, 7, 8, 9]

// console.log(numbers.filter(num => num < 5)); // [0, 1, 2, 3, 4]

// console.log(numbers.filter(num => num === 5)); // [5]

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.find(num => num > 5)); // 6

// console.log(numbers.find(num => num < 5)); // 0

// console.log(numbers.find(num => num === 5)); // 5

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === '002');
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

// // Функция которая проверяет величину значения, возвращает true или false.
// const isBigEnough = val => val >= 10;

// // Допустим нам нужно узнать достаточно ли большие ВСЕ числа в коллекции.
// // Все что нам нужно это буль true/false. Метод every вернет true только тогда,
// // когда все элементы коллекции будут удовлетворять условию в callback-функции.

// console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// // Допустим нам нужно узнать ЕСТЬ ЛИ в коллекции числа больше 10, хотя бы одно
// // или больше. Все что нам нужно это буль true/false. Метод some вернет true
// // только тогда, когда хотябы 1 или более элементов коллекции будут
// // удовлетворять условию в callback-функции.

// console.log([2, 5, 8, 1, 4].some(isBigEnough)); // false
// console.log([12, 5, 8, 1, 4].some(isBigEnough)); // true

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// console.log(allAvailable);

// // some вернет true если хотябы одного фрукта будет больше чем 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

// console.log(anyAvailable);

const numbers = [1, 2, 3, 4, 5];

const summ = numbers.reduce((acc, value) => acc + value, 0);

console.log(summ); // 15

