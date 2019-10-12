'use strict'

// const obj = {
//   name: 'Object',
//   type: 'test',
//   act() {
//     console.log('this :', this);
//     this.type = 'rezult'
//   },
//   length: 4,
// }
// console.log('obj :', obj);

// obj.act();

// console.log('obj :', obj);

// function showFunctionThis() {
//   function innerFun(){
//     console.log('this :', this);
//     return 5;
//   }
//   return innerFun();
// }

// console.log('showFunctionThis() :', showFunctionThis());

// // console.log(obj.act.bind(obj));

// Объект пользователя
// let user = {
//   name: "Джон",
//   age: 30,
//   sayHi() {
//     alert(`${this.name}`);
//   },  
// };

// user.sayHi();

// console.log('user :', user);
// // user.sayHi(); // Привет!


// let user = {
//   name: "Джон",
//   hi() { alert(this.name); },
//   bye() { alert("Пока"); }
// };

// // user.hi(); // Джон (простой вызов метода работает хорошо)

// // теперь давайте попробуем вызывать user.hi или user.bye
// // в зависимости от имени пользователя user.name
// user.name === "Джон" ? user.hi() : user.bye(); // Ошибка!

// let user = {
//   name: "Джон",
//   hi() { alert(this.name); }
// }

// // разделим получение метода объекта и его вызов в разных строках
// let double = user.hi;

// let user = {
//   name: "Джон",
//   go: function() { alert(this.name) }
// }

// user.go()

// let obj, method;

// obj = {
//   go: function() { 
//     console.log('this :', this);
//     alert(this); }
// };

// // console.log(obj.go());
// // obj.go();               // (1) [object Object]

// // (obj.go)();             // (2) [object Object]
// method = obj.go;

// (method.bind(obj))();
// // (method = obj.go)();    // (3) undefined

// // (obj.go || obj.stop)(); // (4) undefined

// function makeUser() {
//   return {
//     name: "Джон",
//     ref() {
//       return this;
//     },
//   };
// };

// console.log(makeUser());

// let user = makeUser();

// console.log('user :', user);

// alert( user.ref().name ); // Каким будет результат?

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);
// console.log(getWage(baseSalary, overtime, rate));

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());

// const Hotel = function(name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// // В результате вызова
// const hotel1 = new Hotel('Resort Hotel', 5, 100);
// // Получаем такой объект
// console.log(hotel1);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

// const Hotel = function(name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// const hotel = new Hotel('Resort Hotel', 5, 100);
// console.log(hotel);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

// const motel = new Hotel('Sunlight Motel', 4, 300);
// console.log(motel);
// // Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}

// const Hotel = function(name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function(guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function(amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function(amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
// hotel.addGuests(70);
// hotel.removeGuests(50);

// console.log('hotel :', hotel);

// const mango = {
//   name: 'Mango',
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}. They have ${this.sales} sales `;
//   },
// };

// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = {
//   name: 'Poly',
//   sales: 10,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}. They have ${this.sales} sales`;
//   },
// };

// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// const Manager = function(name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}. They have ${this.sales} sales`;
//   };
// };

// const mango = new Manager('Mango', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// console.log('mango :', mango);
// console.log('poly :', poly);

// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog.barks); // true
// console.log(dog.eats); // true

// console.log(dog);
// console.log(dog.name);

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key); // barks, eats
// }

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// dog.name = 'Pablo';

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']


// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// const mango = new Guest('Mango', 28);

// console.log(Guest.prototype);
// console.log(mango);

// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);


// Guest.prototype.showGuestInfo = function() {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

// console.log(mango);

// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype = {
//   constructor: Guest,
// };

// const mango = new Guest('bob', 28);

// console.log('mango :', mango);

// console.log(Guest);

// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// /*
//  * Теперь у нас есть конструктор базового класса героя,
//  * добавим в prototype какой-то метод.
//  */
// Hero.prototype.gainXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
// mango.gainXp(500); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }

// const Warrior = function(name, xp, weapon) {
//   /*
//    * Во время выполнения функции Warrior вызываем функцию Hero
//    * в контексте объекта создающегося в Warrior, а так же передаем
//    * аргументы для инициализации полей this.name и this.xp
//    *
//    * this это будущий экземпляр Warrior
//    */
//   Hero.call(this, name, xp);

//   // Тут добавляем новое свойство - оружие
//   this.weapon = weapon;
// };

// // // Сразу добавим метод для атаки в prototype воина
// // Warrior.prototype.attack = function() {
// //   console.log(`${this.name} attacks with ${this.weapon}`);
// // };

// const poly = new Warrior('Poly', 200, 'sword');

// console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
// // poly.attack(); // Poly attacks with sword

// /*
//  * Используем Object.create() для того чтобы изначально записать
//  * в Warrior.prototype пустой объект, в __proto__ которого будет
//  * ссылка на Hero.prototype. Это необходимо сделать до того
//  * как добавлять методы
//  */
// Warrior.prototype = Object.create(Hero.prototype);

// // Не забываем добавить в Warrior.prototype свойство constructor
// Warrior.prototype.constructor = Warrior;

// // Добавим метод для атаки
// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// // Попробуем теперь
// poly.gainXp(300); // Poly gained 300 experience points

// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function(name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');

// console.log(poly);

// poly.gainXp(500);

