'use strict'

// TASK#1

// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// TASK SOLUTION

// console.log('TASK#1');
// const name = '"Shield Generator"';
// let price = 1000;
// console.log(`Selected ${name} cost per piece ${price} credits.`);
// price = 2000;
// console.log(`Selected ${name} cost per piece ${price} credits.`);

// TASK#2

// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 50;

// TASK SOLUTION

// const total = 100;
// const ordered = Number(prompt('TASK#2. Enter the required quantity of goods :'));
// if (ordered > total) {
//   alert('Not enough goods in stock!');
// } else {
//   alert('The order is placed, the manager will contact you!')
// }

// TASK#3

// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// TASK SOLUTION

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message = prompt('TASK#3. Enter Admin password:');
// // console.log(message);
// if (message === null) {
//   alert('Canceled by user!');
// } else if(message === ADMIN_PASSWORD) {
//   alert('Welcome darling!');
// } else {
//   alert('Access is denied. Red button activated')
// }
// alert(message);

// TASK#4

// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// TASK SOLUTION

// let credits = 23580;
// const pricePerDroid = 3000;
// const countDroid = Number(prompt('TASK#4. How much Droid do you need?'));
// // console.log(typeof countDroid);
// if (countDroid === 0) {
//   alert('Canceled by user!');
// } else {
//   const totalPrice = pricePerDroid * countDroid;
//   if (totalPrice >= credits) {
//     console.log('Not enough funds in the account');
//   } else {
//     credits = credits - totalPrice;
//     alert(`You bought ${countDroid} of droids, ${credits} of credits remained on your account.`)
//   }
// }

// TASK#5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// TASK SOLUTION

// const costDeliveryChina = 100;
// const costDeliveryChile = 250;
// const costDeliveryAustralia = 170;
// const costDeliveryIndia = 80;
// const costDeliveryJamaica = 120;

// const countryDelivery = prompt('TASK#5. What country do you need delivery to?');
// // const Delivery = countryDelivery.toLowerCase();
// // console.log(countryDelivery);
// if(countryDelivery === null) {
//   alert(`Delivery is not available`);
// } else {
//   const Delivery = countryDelivery.toLowerCase();
//   switch(Delivery) {
//     case 'китай':
//       alert(`Delivery to ${countryDelivery.toUpperCase()} will cost ${costDeliveryChina} credits`);
//       break;
//     case 'чили':
//       alert(`Delivery to ${countryDelivery.toUpperCase()} will cost ${costDeliveryChile} credits`);
//       break;
//     case 'австралия':
//       alert(`Delivery to ${countryDelivery.toUpperCase()} will cost ${costDeliveryAustralia} credits`);
//       break;
//     case 'индия':
//       alert(`Delivery to ${countryDelivery.toUpperCase()} will cost ${costDeliveryIndia} credits`);
//       break;
//     case 'ямайка':
//       alert(`Delivery to ${countryDelivery.toUpperCase()} will cost ${costDeliveryJamaica} credits`);
//       break;
//     default:
//       alert(`Delivery is not available in ${countryDelivery}`);
//       break;
//   }
// }

// TASK#6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;

// TASK SOLUTION
// Version 1. Without checking

// let input = prompt('Enter a number:');
// // console.log(Number.isNaN(Number(input)));
// let total = 0;
// if (input  === null && Number.isNaN(Number(input)) === true) {
//   alert(`The total sum of numbers is ${total}.`); //First Cancel
// } else { while (input !== null) {
//     // console.log(Number(input));
//     total = total + Number(input);
//     input = prompt('Enter a number:');
//   }
// alert(`The total sum of numbers is ${total}.`);
// }

// Version 2. With checking

// let input = prompt('Enter a number:');
// let total = 0;

// for (let i = 0; i < Infinity; i += 1) {
//   console.log(input);
//   if (input === null) {
//   alert(`The total sum of numbers is ${total}.`);
//   break; //End of script
//   } else if (Number.isNaN(Number(input)) === true) {
//     alert('You entered no number');
//     input = 0;
//   } else {
//     total = total + Number(input);
//     input = prompt('Enter a number:');
//   }
// }
