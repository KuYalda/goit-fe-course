'use script'

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// const printMessage = function(message) {
//   console.log(message);
// };

// higherOrderFunction(printMessage);

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаем console.log как callback-функцию
// repeat(3, console.log);
// // 0
// // 1
// // 2

// const labels = [];

// repeat(5, function(i) {
//   labels.push(`Label ${i + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]


// console.log('work');

// const users = [
//   {
//     id: 1,
//     name: 'Susana',
//     salary: 1000,
//   },
//   {
//     id: 2,
//     name: 'Leon',
//     salary: 3000,
//   },
//   {
//     id: 3,
//     name: 'Sansa',
//     salary: 2000,
//   },
//   {
//     id: 4,
//     name: 'Rob',
//     salary: 4000,
//   },
// ];

// const getSalaryBy = function(arrUsers, currency, tax, action) {
//   const usersSalary = [];
//   for(const user of arrUsers) {
//     const { salary } = user;
//     usersSalary.push(action(salary, currency, tax));
//     // usersSalary = [...usersSalary, currency]
//   }
//   return usersSalary;
// }


// const updateWithTax = (salary, currency, tax) => salary * currency * tax;
// console.log('getSalaryBy(users, 25, 0.6) :', getSalaryBy(users, 25, 0.6, updateWithTax));

// const filterBy = function(arr, action) {
//   const filterArr = [];
//   for(const user of arr) {
//     if(action(user)) {
//       filterArr.push(user);
//     }
//   }
//   return filterArr;
// }

// const getMore = el => el.salary >= 2000;
// const getByNames = el => el.name === 'Rob';
// console.log('filterBy(users) :', filterBy(users, getMore));
// console.log('filterBy(users) :', filterBy(users, getByNames));


// const a = () => console.log('func a');
// const b = () => {
//   a();
//   console.log('func b');
// }; 
// const c = () => {
//   b();
//   console.log('func c');
// };

// c();