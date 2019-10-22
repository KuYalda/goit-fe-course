// const message = 'Hello Node.js!'
// console.log(message);

// // index.js
// const validator = require('validator');

// const validateEmail = email => {
//   return validator.isEmail(email);
// };

// console.log(
//   'Is mango@mail.com a valid email?: ',
//   validateEmail('mango@mail.com'),
// );

// console.log(
//   'Is Mangozedog.com a valid email?: ',
//   validateEmail('Mangozedog.com'),
// );

// const greeter = require('./greeter');

// console.log(greeter.hello()); // 'hello!'
// console.log(greeter.goodbye()); // 'goodbye!'

import { square, diag } from './myModule.js';

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
