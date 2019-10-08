'use strict'
// TASK#1

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// TASK SOLUTION

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby ='javascript';
// user.premium = false;
// const keys = Object.keys(user);
// for(const key of keys) {
//   console.log(`${key}:`, user[key]);
// }

// TASK#2

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

// Вызовы функции для проверки работоспособности твоей реализации.

// TASK SOLUTION

// function countProps(obj) {
//   let i = Object.entries(obj).length;
//   return i;
// }

// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// TASK#3

// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// Вызовы функции для проверки работоспособности твоей реализации.

// TASK SOLUTION

// function findBestEmployee(employees) {
//   let max = 0;
//   let name;
//   const keys = Object.keys(employees);
//   for(const key of keys) {
//     if(employees[key] > max) {
//       max = employees[key];
//       name = key;
//     }
//   }
//   return name;
// }

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// TASK#4

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// Вызовы функции для проверки работоспособности твоей реализации.

// TASK SOLUTION

// function countTotalSalary(employees) {
//   let arr = Object.values(employees);
//   let sum = arr.reduce((a, b) => a + b, 0);
//   return sum;
// }

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400


// TASK#5

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа. Возвращает массив значений определенного поля prop из каждого объекта в массиве.

// Вызовы функции для проверки работоспособности твоей реализации.

// TASK SOLUTION

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// function getAllPropValues(arr, prop) {
//   const array = [];
//   for(let i = 0; i < arr.length; i += 1) {
//     const obj = arr[i];
//     for(const key in obj){
//       if(key === prop) {
//         array.push(obj[key]);
//       }
//     }
//   }
//   return array;
// }

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// TASK#6

// Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// TASK SOLUTION

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// function calculateTotalPrice(arr, productName) {
//   let total = 0;
//   for(let i = 0; i < arr.length; i += 1) {
//     const array = Object.values(arr[i]);
//     if(array.includes(productName))
//     total = array[1] * array[2];
//   }
//   return total;
// }

// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// TASK#7

// // Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const transactionsTypes = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод отвечающий за добавление суммы к балансу
//    * Создает объект транзакции и вызывает addTransaction
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction ={
//       id: this.transactions.length +1,
//       type: transactionsTypes.DEPOSIT,
//       amount,
//     }
//     this.addTransaction(transaction);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Создает объект транзакции и вызывает addTransaction
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if(amount > this.balance) {
//       const transaction ={
//         id: this.transactions.length +1,
//         type: transactionsTypes.WITHDRAW,
//         amount,
//       }
//       this.addTransaction(transaction);
//       return alert('Withdrawing such an amount is not possible, insufficient funds');
//     }

//     this.balance -= amount;
//     const transaction ={
//       id: this.transactions.length +1,
//       type: transactionsTypes.WITHDRAW,
//       amount,
//     }
//     this.addTransaction(transaction);
//   },

//   /*
//    * Метод добавляющий транзацию в свойство transactions
//    * Принимает объект трназкции
//    */
//   addTransaction(transaction) {
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     let finder;
//     for(const transaction of this.transactions){
//       if(transaction.id === id) {
//         finder = transaction;
//         return finder;
//       };
//     }
//     return 'Transaction not found';
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for(const transaction of this.transactions) {
//       if(transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(1333);
// console.log('account :', account);

// account.withdraw(400);
// console.log('account :', account);

// account.withdraw(1400);
// console.log('account :', account);

// account.deposit(1400);
// console.log('account :', account);

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(7));

// console.log(account.getTransactionTotal(transactionsTypes.DEPOSIT));