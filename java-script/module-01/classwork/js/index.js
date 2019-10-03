/* console.log('work');

const PI_CASE = 3.14;
const a = 5 + 1;
let b = a + 6;

console.log(b);

b = b + 10;

console.log('b:', b);

console.log(typeof b);
console.log(typeof "Word");
console.log(typeof g);

b = '5' + b;

console.log('b:', b);

b = Number(b);

b = b + 10;

console.log(b);

console.log('type of b:', typeof b);

console.log('String b:', String(b));

console.log('5 == 5', 5 == 5);
console.log('5 == 5', 5 == '5');

console.log('5 === 5', 5 === 5);
console.log('5 === 5', 5 === '5');

console.log('5 !== 5', 5 !== '5');
console.log('5 !== 5', 5 !== 5);

let message = 'Some word';

console.log("'Some word':", "Some word".toLocaleLowerCase());

console.log("'Some word':", message.toUpperCase());

console.log(message.length);

message = message.toUpperCase();

console.log(message, typeof(message));

console.log(message[3]);
console.log(message[message.length]);

console.log(message[message.length-1]);

console.log(Number.parseInt('12.123 number'));

console.log(Number.parseFloat('12.123number'));

console.log(Number.parseFloat('12,123number'));

console.log(Number('12.123number'));
console.log(NaN === NaN);
console.log('Number.isNaN() :', isNaN(Number('message.length')));
 */
/* 
let cash = 1000;
const price= 500;

if(cash >= price) {
    alert('success');
} else {
    alert('no cash');
} */
/* 
if('number' && 0 || 100) {
    console.log(true);
} else {
    console.log(false);
}

const userInput = prompt('What is your name?');
console.log(userInput);

if(userInput && userInput !== '') {
    alert('Welcome ' + userInput);
} else {
    alert('Enter your name');
} */
/* 
const cash = +prompt('Have many cash do you have?');
const credit = 1000;
const price = 800;

if(cash >= price) {
    console.log('pay with cash!');
} else if (cash >= credit){
    console.log('pay with credit');
} else {
    console.log('check your balance');
}

console.log(cash); */
/* 
const day = prompt('What is the day now?');

switch(day) {
    case 'monday':
        alert('Good morning');
        break;
    case 'thursday':
        alert('Sorry. We don\'t work');
        break;
    default:
        alert('Are you stupid?');
} */

/* const isComing = confirm('Confirm hotel reservation');
alert(isComing); */

/* 
const userAge = +prompt('What your age?');
// const userAge = +a; 
alert(typeof userAge);
 */

/* let cost;
const subscription = 'premium';

switch (subscription) {
  case 'free':
    cost = 0;
    break;

  case 'pro':
    cost = 100;
    break;

  case 'premium':
    cost = 500;
    break;

  default:
    console.log('Invalid subscription type');
}

console.log(cost); // 500
 */

/* const value = NaN;

if (false) {
  console.log('Block scope: ', value); // 5
} else {
  console.log('Global scope: ', value); // 5
} */

/* const global = 'global';

if (true) {
  const blockA = 'block A';

  // Видим глобальную + локальную A
  console.log(global); // 'global'
  console.log(blockA); // block A
  // console.log(blockB); // ReferenceError: blockB is not defined
  // console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = 'block B';

    // Видим глобальную + внешнюю A + локальную B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B
    // console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = 'block C';

  // Видим глобальную + локальную C
  console.log(global); // global
  // console.log(blockA); // ReferenceError: blockA is not defined
  // console.log(blockB); // ReferenceError: blockB is not defined
  console.log(blockC); // block C
}

// Видим только глобальную
console.log(global); // global
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

 */

/* let counter = 0;

while (counter <= 10) {
  console.log('counter: ', counter);
  counter += 1;
} */

/* const maxClients = 18;
let clientCounter = 17;

while (clientCounter <= maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

console.log(clientCounter + 1);
 */

/* let password = '';

do {
  password = prompt('Введите пароль длиннее 4-х символов', '');
} while (password.length < 5);

console.log('Ввели пароль: ', password);
 */

/* const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(i);
}
 */

/* const target = 4;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum); */

/* const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
} */

/* for (let i = 0; i < 10; i += 1) {
  console.log(i);
  if (i === 5) {
    console.log('Дошли до 5-й итерации, прерываем цикл!');
    break;
  }
} */

/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */

/* const number = 10;

for (let i = 0; i < number; i += 1) {
  console.log(i);
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}
 */

 /* 
let userChoice;

while (true) {
  userChoice = prompt(
    'Выберите вариант доставки: 1 - самовывоз, 2 - курьер, 3 - почта',
  );

  if (userChoice === null) {
    break;
  }

  userChoice = Number(userChoice);

  const isValid = userChoice >= 1 && userChoice <= 3;

  if (isValid) {
    break;
  }

  console.log('Невалидный ввод, попробуйте еще раз!');
}

switch (userChoice) {
  case 1:
    alert('Самовывоз!');
    break;

  case 2:
    alert('Курьер!');
    break;

  case 3:
    alert('Почта!');
    break;

  default:
    alert('Вам перезвонит менеджер!');
}
 */

/* let userInput;
let total = 0;

while (true) {
  userInput = prompt('Введите число больше нуля');

  if (userInput === null) {
    break;
  }

  userInput = Number(userInput);

  if (userInput <= 0) {
    break;
  }

  total += userInput;
}

console.log(total);
 */

/*  let i = Number('25px');
 console.log(+i); */

// let number = 5;
// console.log(number);
// number = 10;
// console.log(number);

// const number = 5;
// const MESSAGE_SUCCES = 'Hello!';
// let a = 6;
// alert(a);

// const isActive = true;
// console.log(typeof isActive);

// alert('Hello!');
// console.log('wefib');

// const isGoing = confirm('Do you want bear?');
// console.log(isGoing);

// const input = prompt('How many bear you want?');
// console.log(input);
// console.log(typeof input);

// const a = 5;
// const b = 10;
// const result = a < b;
// console.log(result);
// const number = 15;
// const isNumberInRange = number > 10 && number > 30;
// console.log(isNumberInRange);

// console.log(0 == '0');

// let input = prompt('Input number');
// input = Number(input);
// console.log(typeof input);
// console.log(input);

// const boxWidth = '.2.55px';
// const width = Number.parseFloat(boxWidth);
// console.log(width);

// let input = prompt('Input number');
// input = Number(input);
// console.log(typeof input);
// console.log(input);
// const isNumber = Number.isNaN(input);
// console.log(isNumber);

// console.log(0.3 === 0.2 + 0.1); // 0.30000000..4
// console.log(0.2 + 0.1);
// console.log((0.2 *10 + 0.1 * 10) / 10);

// console.log(Math);

// const number = Math.floor(2.6);
// console.log(number);

