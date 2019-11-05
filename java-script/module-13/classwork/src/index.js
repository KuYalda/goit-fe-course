import './styles.css';

// const a = Symbol(5);
// const b = Number(5);
// const c = Symbol(5);

// console.log('a :', a);

// console.log('a === b :', a === b);
// console.log('a === c :', a === c);

// const obj = {};
// obj[a] = 'secret data';

// console.log('obj :', obj);

// console.log('obj[Symbol(5)] :', obj[Symbol(5)]);

// console.log('obj[a] :', obj[a]);

// const iterator = arr => {
//   let step = 0;
//   return {
//     next() {
//       step += 1;
//       const done = step <= arr.length ? false : true;
//       const value = !done ? step : null;

//       return {
//         value,
//         done,
//       };
//     },
//   };
// };

// const i = iterator([1, 2, 3]);
// console.log('i :', i);

// console.log('i.next :', i.next());
// console.log('i.next :', i.next());
// console.log('i.next :', i.next());
// console.log('i.next :', i.next());
// console.log('i.next :', i.next());

// const generator = function*() {
//   const a = yield 'some data';
//   yield a + ' some text';
// };

// const generatorIterator = generator();

// console.log('generator().next() :', generatorIterator.next());
// console.log('generator().next() :', generatorIterator.next('sada'));
// console.log('generator().next() :', generatorIterator.next());

// const someGen = function*() {
//   yield prompt('Enter number > 10');
//   yield alert('you are right');
//   yield console.log('next step');
// };

// const i2 = someGen();

// // console.log('i2.next() :', i2.next());

// if (+i2.next().value > 10) {
//   i2.next();
// }

// i2.next();

// async function getSome() {
//   try {
//     const users = await fetch('https://swapi.co/api/people').then(res =>
//       res.json(),
//     );
//     const firstUser = await fetch('https://swapi.co/api/peopleeee/1').then(
//       res => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           throw new Error(res.status);
//         }
//       },
//     );
//     console.log('users :', users);
//     console.log('firstUser :', firstUser);
//     return console.log({
//       users: users.results,
//       firstUser,
//     });
//   } catch (err) {
//     console.log('err :', err);
//   }
// }

// console.log('getSome() :', getSome());

// const symbol = Symbol('symbol');

// console.dir(symbol);
// console.dir(Symbol());

// let mySymbol = Symbol('mySymbol');

// // let prob;

// const user = {
//   name: 'Mango',
//   mySymbol: 'very happy!',
//   // prob: 55,
//   [mySymbol]: 55,
// };

// // const [a,b,c,d,e,f,g,h] = [1,2,3,4,5,6,7,8];

// user[mySymbol] = 'very happy!';

// console.log(mySymbol); // very happy!
// console.log(user[mySymbol]);

// console.log('user :', user);

// // console.log(prob);

// function createIterator(items) {
//   let i = 0;

//   //  Возвращаем итератор, объект с методом next
//   return {
//     next() {
//       const done = i >= items.length;
//       const value = !done ? items[i++] : undefined;

//       return {
//         done: done,
//         value: value,
//       };
//     },
//   };
// }

// const iterator = createIterator([1, 2, 3]);

// console.log(iterator.next()); // "{ value: 1, done: false }"
// console.log(iterator.next()); // "{ value: 2, done: false }"
// console.log(iterator.next()); // "{ value: 3, done: false }"
// console.log(iterator.next()); // "{ value: undefined, done: true }"

// const range = {
//   from: 1,
//   to: 10,
// };

// const range = {
//   from: 1,
//   to: 10,
//   /*
//    * Добавляем метод, ключом обязательно должен быть глобальный символ Sybmol.iterator
//    * Для добавления ключа прямо во время объявления используем вычисляемое свойство
//    */
//   [Symbol.iterator]() {
//     let current = this.from;
//     const last = this.to;

//     /*
//      * Возвращаем итератор со всей логикой
//      * done будет true когда текущее число больше последнего
//      */
//     return {
//       next() {
//         return {
//           done: current > last,
//           value: current <= last ? current++ : undefined,
//         };
//       },
//     };
//   },
// };

// // В консоли увидим числа от 1 до 10
// for (const number of range) {
//   console.log(number);
// }

// // А тут будет массив чиcел от 1 до 10
// // const rangeArray = [...range];

// console.log([...range]);

// const myGenerator = function*(max) {
//   for (let i = 0; i < max; i += 1) {
//     yield i;
//   }
// };

// const generator = myGenerator(5);

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// const questionGenerator = function*() {
//   const answer = yield 'Сколько будет 5 + 5?';

//   console.log(answer);
// };

// const question = questionGenerator();

// console.log(question.next().value);
// generator.next(10);

fetch('/user-profile')
  .then(user => fetch(`/users/${user.id}/friends`))
  .then(idList => {
    const friends = idList.map(id => fetch(`/users/${id}`));
    return Promise.all(friends);
  })
  .then(friends => console.log(friends))
  .catch(error => console.error(error));
