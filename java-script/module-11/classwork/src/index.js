import './styles.css';

// const interval = 10000;
// const timeOut = 20000;

// setTimeout(() => {
//   alert('clg1');
// }, interval);

// console.log('clg2');
// console.log('clg3');

// const timerId = setInterval(() => {
//   console.log('interval', new Date());
//   const DateNow = new Date();
// }, 20000);

// setTimeout(() => {
//   alert('timerId');
//   clearInterval(timerId);
// }, 4000);

// const myPromis = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("it's true");
//   } else {
//     reject("it's false");
//   }
// });

// console.dir(myPromis);
// console.dir(Promise);
// console.dir(document);

// console.dir(document.styleSheets[0]);

// console.log('First');
// console.log('Second');
// console.log('Third');

// // выполнится первым
// console.log('First');

// setTimeout(() => {
//   // выполнится третьим, спустя 2 секунды
//   console.log('Second');
// }, 2000);

// // выполнится вторым
// console.log('Third');

// function sayHello() {
//   console.log('Hello!');
// }

// const timerId = setTimeout(sayHello, 5000);

// clearTimeout(timerId);

// const date = new Date();
// console.log(date); // Mon Mar 19 2018 16:51:32 GMT+0200 (FLE Standard Time)

// const date = new Date();
// console.log('Date: ' + date);

// // возвращает день месяца от 1 до 31
// console.log('getDate(): ' + date.getDate());

// // возвращает день недели от 0 до 6
// console.log('getDay(): ' + date.getDay());

// // возвращает месяц от 0 до 11
// console.log('getMonth(): ' + date.getMonth());

// // возвращает год из 4 цифр
// console.log('getFullYear(): ' + date.getFullYear());

// // возвращает час
// console.log('getHours(): ' + date.getHours());

// // возвращает минуты
// console.log('getMinutes(): ' + date.getMinutes());

// // возвращает секунды
// console.log('getSeconds(): ' + date.getSeconds());

// // возвращает миллисекунды
// console.log('getMilliseconds(): ' + date.getMilliseconds());

// // возвращает кол-во миллисекунд прошедших со старта эпохи Unix
// console.log('getTime(): ' + date.getTime());

// const date = new Date();

// // проверим количество мс с с начала эпохи Unix
// console.log(`Время в мс с начала эпохи Unix: ${date.getTime()}`);
// // "Время в мс с начала эпохи Unix: ....  значения будут меняться :-)
// // "Время в мс с начала эпохи Unix: 1504721892483"

// let result = 'Date: ';
// result += date.getFullYear() + '/'; // год
// result += date.getMonth() + '/'; // месяц, начиная с 0
// result += date.getDate() + '. Day of week: '; // день недели, начиная с 1
// result += date.getDay() + '.'; // день , начиная с 0

// result += ' Time: ' + date.getHours() + ':'; // часы
// result += date.getMinutes() + ':'; // минуты
// result += date.getSeconds() + ':'; // секунды
// result += date.getMilliseconds() + ''; // милисекунды

// // строка должна показать текущее время и дату
// console.log(result); // "Date: 2017/8/6. Day of week: 3. Time: 21:18:12:483"
// // ...  значения будут меняться :-)

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success!');
//   }, 2000);
// });

// console.dir(promise);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     /*
//      * Если какое-то условие выполняется, то есть все хорошо,
//      * вызываем resolve и получает данные. Условие зависит от задачи.
//      */
//     resolve('Data passed into resolve function :)');

//     // Если что-то не так, вызваем reject и передаем ошибку
//     // reject("Error passed into reject function :(")
//   }, 2000);
// });

// // Выполнится мгновенно
// console.log('BEFORE promise.then');

// const onResolve = data => {
//   console.log('INSIDE promise.then - onResolve');
//   console.log(data); // "Data passed into resolve function :)"
// };

// const onReject = error => {
//   console.log('INSIDE promise.then - onReject');
//   console.log(error); // "Error passed into reject function :("
// };

// promise.then(
//   // будет вызвана через 2 секунды, если обещание выполнится успешно
//   onResolve,
//   // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//   onReject,
// );

// // Выполнится мгновенно
// console.log('AFTER promise.then');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Если все ок, то вызывается resolve и передаем данные
//     resolve('Data passed into resolve function :)');

//     // Если что-то не так, вызваем reject и передаем ошибку
//     // reject("Error passed into reject function :(")
//   }, 2000);
// });

// // Выполнится мгновенно
// console.log('BEFORE promise.then');

// promise.then(
//   // Будет вызвана через 2 секунды, если обещание выполнится успешно
//   data => {
//     console.log('INSIDE promise.then - onResolve');
//     console.log(data); // "Data passed into resolve function :)"
//   },
//   // Будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//   error => {
//     console.log('INSIDE promise.then - onReject');
//     console.log(error); // "Error passed into reject function :("
//   },
// );

// // Выполнится мгновенно
// console.log('AFTER promise.then');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('There was an error :(');
//   }, 2000);
// });

// /*
//  * then не выполнится так как в функции fn, внутри new Promise(fn),
//  * был вызван reject(). А catch как раз выполнится через 2 секунды
//  */
// promise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 3000);

// /*
//  * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
//  * Первый выполнится через секунду и просто будет готов
//  */
// Promise.all([promiseA, promiseB])
//   .then(result => console.log(result)) //["promiseA", "promiseB"]
//   .catch(err => console.log(err));

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 3000);

// /*
//  * Выполнится спустя 1 секунду, когда выполнится самый быстрый promiseA
//  * с задержкой в 1c. Второй промис promiseB будет проигнорирован
//  */
// Promise.race([promiseA, promiseB])
//   .then(result => console.log(result)) // "promiseA"
//   .catch(err => console.log(err));

// const getMessage = function(callback) {
//   const input = prompt('Введите сообщение');

//   callback(input);
// };

// const logger = message => console.log(message);

// getMessage(logger);

const getMessage = function() {
  const input = prompt('Введите сообщение');

  return Promise.resolve(input);
};

const logger = message => console.log(message);

getMessage().then(message => logger(message));

// Или еще короче
// getMessage().then(logger);
