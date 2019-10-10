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
//   let usersSalary = [];
//   for(const user of arrUsers) {
//     const { salary } = user;
//     // usersSalary.push(action(salary, currency, tax));
//     usersSalary = [...usersSalary, action(salary, currency, tax)];
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

// const counter = function() {
//   let increment = 0;
//   const onIncrement = function() {
//     return increment += 1;
//   }
//   return onIncrement;
// }

// const counter1 = counter();
// const counter2 = counter();

// console.log('counter1() :', counter1());
// console.log('counter1() :', counter1());
// console.log('counter1() :', counter1());
// console.log('counter2() :', counter2());
// console.log('counter1() :', counter1());
// console.log('counter1() :', counter1());
// console.log('counter1() :', counter1());
// console.log('counter1() :', counter1());
// console.log('counter2() :', counter2());
// console.log('counter1 :', counter1);

// эти объекты делают одно и то же (одинаковые методы)

// let user = {
//   sayHi: function() {
//     alert("Привет");
//   }
// };

// // сокращённая запись выглядит лучше, не так ли?
// user = {
//   sayHi() { // то же самое, что и "sayHi: function()"
//     alert("Привет");
//   }
// };

// console.log('user :', user);
// user.sayHi()

// let user = {
//   name: "Джон",
//   age: 30,

//   sayHi() {
//     // this - это "текущий объект"
//     alert(this.name);
//   }

// };

// user.sayHi(); // Джон

// let user = {
//   name: "Джон",
//   age: 30,

//   sayHi() {
//     alert(this.name); // используем переменную "user" вместо ключевого слова "this"
//   }

// };

// console.log('eser.sayHi() :', user.sayHi());

// let user = { name: "Джон" };
// let admin = { name: "Админ" };

// function sayHi() {
//   alert( this.name );
// }

// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// // console.log('admin :', admin);

// // вызовы функции, приведённые ниже, имеют разное значение this
// // "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); // Джон  (this == user)
// admin.f(); // Админ  (this == admin)

// admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)

// console.log('this :', this);

// const user = {
//   name: 'Boris',
//   age: 20,
// }

// const getInfo = () => `${this.name}, age: ${this.age}`; not in object only in function

// const getInfo = function() {
//   const getAge = () => this.age;
//   return `${this.name}, age: ${getAge()}`;
// }

// user.getInfo = getInfo;
// console.log('user :', user);
// console.log('user.getInfo :', user.getInfo());

// console.log('getInfo :', getInfo()); // err not this

// let user = {
//   name: "Джон",
//   hi() { alert(this.name); },
//   bye() { alert("Пока"); }
// };

// user.hi(); // Джон (простой вызов метода работает хорошо)

// // теперь давайте попробуем вызывать user.hi или user.bye
// // в зависимости от имени пользователя user.name
// (user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!

// const someFunc = function(action) {
//   console.log('this :', this);
//   return action();
// }

// console.log(someFunc(user.getInfo.bind(user)));

// console.log('getInfo.call(user) :', getInfo.call(user));

// const arr = [1, 2, 3, 4, 5];
// const users = [{id: 12313},{id: 'asdasdasd'}];
// const index = 3;

// const squareOfArr = [];

// for(const el of arr) {
//   console.log(`el ${arr.indexOf(el)}:`, el);
//   squareOfArr.push(el*el);
// }

// console.log('squareOfArr :', squareOfArr);

// const squareOfArr1 = [];

// for(const el of arr) {
//   console.log(`el ${arr.indexOf(el)}:`, el);
//   squareOfArr1.push(el*el*el);
// }

// console.log('squareOfArr1 :', squareOfArr1);

// const arrToSquare = function() {
//   const newArr = [];
//   for(const el of arr) {
//     newArr.push(el*el);
//   }
//   return newArr;
// }

// console.log('arrToSquare() :', arrToSquare());


// const hero = {
//   name:'Lancelot',
//   defence: 10,
//   health: 200,
//   attack: 20,
// }

// const dragon = {
//   name:'Drakaries',
//   defence: 40,
//   health: 500,
//   attack: 100,
// }

// const attackTarget = function(agressor) {
//   let hit;
//   if(agressor.name === 'Lancelot'){
//     const chance = Math.round((Math.random() * 100));
//     hit = chance <= 40 ? 300 : Math.round((1 - this.defence *0.01) * agressor.attack);
//   } else {
//     hit = Math.round((1 - this.defence *0.01) * agressor.attack);
//   }

//   this.health -= hit;
//   console.log(`${agressor.name} hit : ${hit}`);
//   console.log(`${this.name} : ${this.health}`);
// }

// while(hero.health > 0 && dragon.health > 0) {
//   attackTarget.call(dragon, hero);
//   if(dragon.health > 0) {
//   attackTarget.call(hero, dragon)
//   };
// }

// if(hero.health > 0) {
//   alert(`${hero.name} winner!`)
// } else {
//   alert(`${dragon.name} winner!`)
// }

// // const higherOrderFunction = function(callback) {
// //   const string = 'HOCs are awesome';
// //   callback(string);
// // };

// // const printMessage = function(message) {
// //   console.log(message);
// // };

// // console.log('higherOrderFunction(printMessage) :', higherOrderFunction(printMessage));

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(`${i+1} :`, i);
//   }
// }

// repeatLog(5);

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(`${i} :`, i);
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

// const filter = function(array, test) {
//   const filtered = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filtered.push(element);
//     }
//   }

//   return filtered;
// };

// const filter = function(array, test) {
//   const filtered = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filtered.push(element);
//     }
//   }

//   return filtered;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const action = fruit => fruit.isFresh

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// const bar = function() {
//   console.log('bar');
// };

// const baz = function() {
//   console.log('baz');
// };

// const foo = function() {
//   console.log('foo');
//   bar();
//   baz();
//   console.log('exit foo');
// };

// foo();

// /*
//   Global env - создается при исполнении файла скрипта
//     Record: {}
//     Parent: null
// */

// const x = 10;
// /*
//   Global env
//     Record: {x: 10}
//     Parent: null
// */

// const y = 20;
// /*
//   Global env
//     Record: {x: 10, y: 20}
//     Parent: null
// */

// /*
//   Записывается в момент объявления функции
//   [[Environment]] = Global env
// */
// const foo = function(z) {
//   /*
//     Foo env - создается в момент вызова функции
//       Record: {z: 30}
//       Parent: Global env
//   */

//   const x = 100;
//   /*
//     Foo env - создается в момент вызова функции
//       Record: {z: 30, x: 100}
//       Parent: Global env
//   */

//   return x + y + z;
// };

// /*
//   Global env
//     Record: {x: 10, y: 20, foo: <function>}
//     Parent: null
// */

// foo(30); // 150

// const createCounter = function() {
//   // Локальная переменная privateCounter, доступна только в замыкании
//   let privateCounter = 0;

//   const increment = function() {
//     privateCounter += 1;
//     console.log(``, privateCounter);
//   };

//   return increment;
// };

// const counterA = createCounter();

// const counterB = createCounter();

// counterA(); //1
// counterA(); //2
// counterB(); //1
// counterA(); //3
// counterB(); //2
// counterA(); //4
// counterB(); //3
// counterB(); //4
// counterA(); //5
// counterB(); //5
// counterB(); //6

// function numberGenerator() {
//   // Local “free” variable that ends up within the closure
//   let num = 1;
//   function checkNumber() { 
//     console.log(num);
//     // num ++; Number Generator
//     // return num;
//   }
//   // console.log('num :', num);
//   num++; //Not number Generator
//   // console.table('num :', num);
//   return checkNumber;
// }

// let number = numberGenerator();
// number(); // 2
// number(); // 2
// number(); // 2


// function sayHello() {
//   var say = function() { console.log(hello); }
//   // Local variable that ends up within the closure 
//   var hello = 'Hello, world!';
//   return say;
// }
// var sayHelloClosure = sayHello(); 
// sayHelloClosure(); // ‘Hello, world!’

