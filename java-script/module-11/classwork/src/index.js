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

// выполнится первым
console.log('First');

setTimeout(() => {
  // выполнится третьим, спустя 2 секунды
  console.log('Second');
}, 2000);

// выполнится вторым
console.log('Third');
