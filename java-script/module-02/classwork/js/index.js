'use strict'

// // Пустой массив
// const arr = [];

// // Массив clients с тремя элементами
// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients); // ["Mango", "Poly", "Ajax"]

// 

// const clients = ['Mango', 'Poly', 'Ajax'];

// // Значение элемента можно заменить
// clients[0] = 'Kiwi';
// console.log(clients[0]); // Kiwi

// // Или добавить
// clients[3] = 'Alex';
// console.log(clients[3]); // Alex

// console.log(clients); // ["Kiwi", "Poly", "Ajax", "Alex"]

// const clients = ['Mango', 'Poly', 'Ajax'];

// // length вернет текущую длину массива
// console.log(clients.length); // 3

// clients.length = 5;
// console.log(clients.length); // 5
// console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
// console.log(clients[4]); // undefined

// clients.length = 2;
// console.log(clients); // ["Mango", "Poly"]

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

// // Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = `Клиент с именем ${clientNameToFind} есть в базе данных!`;
//     break;
//   }
//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   message = `Клиента с именем ${clientNameToFind} нету в базе данных!`;
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Ajax';
// let message = `Клиента с именем ${clientNameToFind} нету в базе данных!`;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = `Клиент с именем ${clientNameToFind} есть в базе данных!`;
//     break;
//   }

//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// /*
//  * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
//  * и управление передаётся на следующую итерацию.
//  */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }


// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(matrix[0][0]); // 1
// console.log(matrix[1][2]); // 6
// console.log(matrix[2][2]); // 9

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let total = 0;
// console.log('matrix.length :', matrix.length);

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// const a = ['Mango'];
// // Присвоение по ссылке.
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ['Mango']
// console.log(b); // ['Mango']

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push('Poly');
// console.log(a); // ['Mango', 'Poly']

// // b изменилось тоже, потому что b, как и a,
// // просто содержат ссылку на одино и то же место в памяти
// console.log(b); // ['Mango', 'Poly']

// // Результат повторяется
// b.push('Ajax');
// console.log(a); // ['Mango', 'Poly', 'Ajax']
// console.log(b); // ['Mango', 'Poly', 'Ajax']

// // split
// const message = 'Welcome to Bahamas!';

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split('')); // [много букв :)]

// // join
// const clients = ['Mango', 'Poly', 'Ajax'];

// // Сошьет все элементы массива в строку,
// // между каждой парой элементов будет указанный разделитель
// console.log(clients.join(' ')); // "Mango Poly Ajax"
// console.log(clients.join(',')); // "Mango,Poly,Ajax"
// console.log(clients.join('-')); // "Mango-Poly-Ajax"

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false

// // Создаем пустой массив
// const stack = [];

// // Добавляем элементы в конец массива
// stack.push(1);
// console.log(stack); // [1]

// stack.push(2);
// console.log(stack); // [1, 2]

// stack.push(3);
// console.log(stack); // [1, 2, 3]

// // Удаляем элементы из конца массива
// console.log(stack.pop()); //  3
// console.log(stack); // [1, 2]

// console.log(stack.pop()); //  2
// console.log(stack); // [1]

// console.log(stack.pop()); //  1
// console.log(stack); // []

// console.log(stack.pop()); //  undefined

// const clients = ['Mango', 'Ajax', 'Poly'];

// console.log(clients.shift()); // Mango
// console.log(clients); // ["Ajax", "Poly"]

// clients.unshift('Kiwi');
// console.log(clients); // ["Kiwi", "Ajax", "Poly"]

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// // Вернет новый массив в котором будут элементы с индексами от 1 до 2
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// // Вернет новый массив в котором будут
// // элементы с индексами от 1 до (clients.length - 1)
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]

// // Вернет копию исходного массива
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// // Вернет новый массив состоящих из последних двух элементом исходного
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// // Предположим, у нас есть массив оценок, который содержит пять чисел от 1 до 5.
// const scores = [1, 2, 3, 4, 5];

// // Следующая операция удаляет три элемента массива,
// // начиная с первого элемента (индекс 0).
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента.
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента.
// console.log(deletedScores); // [1, 2, 3]

// // Предположим, что у вас есть массив с названиями цветов в виде строк.
// const colors = ['red', 'green', 'blue'];

// // Следующая операция помещает один новый элемент перед вторым элементом.
// colors.splice(2, 0, 'purple');

// // Теперь массив цветов содержит четыре элемента
// // с новым элементом, вставленным во вторую позицию.
// console.log(colors); // ["red", "green", "purple", "blue"]

// // Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
// colors.splice(1, 0, 'yellow', 'pink');

// // Предположим, у вас есть массив языков программирования из четырех элементов.
// const languages = ['C', 'C++', 'Java', 'JavaScript'];

// // Следующая операция заменяет второй элемент на новый.
// languages.splice(1, 1, 'Python');

// // В массиве языков теперь все еще четыре элемента,
// // но второй элемент теперь «Python» вместо «C++».
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Вы можете заменить один элемент на несколько элементов,
// // передав больше аргументов
// languages.splice(2, 1, 'C#', 'Swift', 'Go');

// console.log(languages);
// // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// 

// const arr = ['Luck', 'Rob', 'Sansa'];

// arr.splice(0, 2, 'Chaky', 'Romeo', 'Frank');

// console.log('arr :', arr);
// console.log(
//     arr.splice(arr.length - 1,
//         0,
//         'Jessika')
// );
// console.log('arr :', arr);

// const newUsers = ['Unknown'];
// const users = newUsers.concat(arr);
// newUsers.push('Some');
// console.log('users :', users);
// console.log('newUsers :', newUsers);
// console.log('arr :', arr);

// users.push('Bart');
// console.log('users :', users);

// const players = ['Bob', 'Pinky', 'Jack', 'Alan'];
// const winner = 'Jack';
// let winnerIndex;
// for(let i = 0; i < players.length; i += 1) {
//     if(players[i] === winner) {
//         winnerIndex = i;
//         break;
//     }
// }
// alert(`Winner is ${players[winnerIndex]}`);

// const userName = 'Alex';
// const userSurname = 'Duglas';
// // `Hello ${userName} ${userSurname}`;

// function getUserInfo(name, surname) {
//     return `Hello ${name} ${surname}`;
// }

// console.log(
//     getUserInfo(userName, userSurname)
// );

// const salary = [1000, 1200, 1200, 1500];
// const currency = 25;

// function getSalarySum(salaryArr, currencyValue, ...args) {
//     // console.log(arguments);
//     console.log('args :', args);
//     let summ = 0;
//     for(const el of salaryArr) {
//         summ += el * currencyValue;
//     }
//     return summ;
// }

// console.log(getSalarySum(salary, currency));

// // const getSalarySum = function(params) {
    
// // }

// function fnB() {
//     console.log('Выполняется [fnB]');
//   }
  
//   function fnA() {
//     console.log('Начала выполняться [fnA]');
//     fnB();
//     console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
//     // return '5';
//   }
  
//   console.log('Начал выполнение [global]');
//   fnA();
//   console.log('Продолжил выполняться [global] после выхода из [fnA]');
  
//   /*
//    * Начал выполнение [global]
//    * Начала выполняться [fnA]
//    * Выполняется [fnB]
//    * Продолжила выполняться [fnA] после выхода из [fnB]
//    * Продолжил выполняться [global] после выхода из [fnA]
//    */

// console.log(fnA());

// const counter = function(initialValue = 0, step = 1) {
//     console.log(`initialValue = ${initialValue}, step = ${step}`);
//   };
  
//   counter(10, 5); // initialValue = 10, step = 5
//   counter(10); // initialValue = 10, step = 1
//   counter(undefined, 10); // initialValue = 0, step = 10
//   counter(); // initialValue = 0, step = 1
//   counter(15, undefined);
  
// const sum = function() {
//     let total = 0;
  
//     for (const argument of arguments) {
//       total += argument;
//     }
//     return total;
//   };

  
//   console.log(sum(1, 2, 3)); //  6
//   console.log(sum(1, 2, 3, 4)); //  10
//   console.log(sum(1, 2, 3, 4, 5)); //  15
//   console.log(sum(1, 2, 5, 9, 1));

// const fn = function() {
//   const args = Array.from(arguments); // args это полноценный массив
//   // return args;
//   return arguments;
// };

// console.log(fn(1, 2, 3,));

// const fn = function(...args) {
//   // args это полноценный массив
//   return args;
// };

// let newArr = fn(5, 10, 15, 20, 25);

// console.log(newArr);

// console.log('Этого сообщения не будет в консоли');

// const value = 5;

// const product = 'apples';
// const products = ['apples', 'grapes', 'bananas'];
// products[0] = 'chicken'; // change element arr products
// console.log(products[0]);
// // products[0] = 5;
// // products[1] = 15;
// // products[2] = 50;
// // console.log(products[0]);

// console.log(products.length);
// console.log(products);
// products[3] = 'hare';

// console.log(products);

// const board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // многомерный массив

// console.log(board[0][2]); // доступ к его элементу

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a === b); //не равны

// const a = [1, 2, 3];
// let b = a;
// console.log(a === b); //ссылка на массив идентична

// a[3] = 4;
// console.log('a:', a);
// console.log('b:', b);
// b[4] = 5;
// console.log('a:', a);
// console.log('b:', b);

// const products = ['apples', 'grapes', 'bananas'];
// const message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, odit!';
// console.log(message);

// const words = message.split(' ');
// console.log(words);

// const snakeCaseMessage = words.join('_');
// console.log(snakeCaseMessage);

// const indexOfApples = products.indexOf('apples');

// console.log(indexOfApples);

// const isInProducts = products.includes('apples');

// console.log(isInProducts);

// const add = function(x, y) {
//   console.log('x :', x);
//   console.log('y :', y);
//   return x + y;
// }
// add(2, 3);
// console.log(add(22, 5));

// function add1(x, y) {
//   console.log('x :', x);
//   console.log('y :', y);
//   return x + y;  
// }

// console.log('add1 :', add1(10, 5));

// const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem nesciunt, ut nisi maiores possimus?';

// const words = string.split(' ');
// console.log('words :', words);
// let longestWord = words[0];
// for (const word of words) {
//   if(word.length > longestWord.length) {
//     longestWord = word;
//   }
// }

// console.log('longestWord :', longestWord);

// const findLongestWord = function(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];
//   for (const word of words) {
//   if(word.length >= longestWord.length) {
//     longestWord = word;
//     // continue;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem nesciunt, ut nisi maiores possimus?'));