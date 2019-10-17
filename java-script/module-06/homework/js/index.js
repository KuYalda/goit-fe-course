'use strict'

import users from './users.js';
console.log(users);

// TASK#1

// Получить массив имен всех пользователей (поле name).

// const getUserNames = users => {
//   const names = users.map(users => users.name);
//   return names;
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// // TASK#2

// // Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   const objColor = users.filter(user => user.eyeColor === color);
//   return objColor;
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// TASK#3
// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, _gender) => {
//   const userGender = users.reduce((ourUsers, { name, gender })  => {
//     gender === _gender ? ourUsers.push(name) : ourUsers;
//     return ourUsers;
//   }, []);
//   return userGender;
// }

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// TASK#4

// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   const notActive = users.filter(user => !user.isActive);
//   return notActive;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// TASK#5

// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   const requiredUser = users.find(user => user.email === email);
//   return requiredUser;
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// TASK#6

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
//   const allUsers = users.filter(user => user.age >= min && user.age <= max);
//   return allUsers;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// TASK#7

// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   let total = 0;
//   users.forEach(user => total += user.balance);
//   return total;
// };

// console.log(calculateTotalBalance(users)); // 20916

// TASK#8

// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   const friendlyUser = users.reduce((nameArr, { name, friends }) => {
//     friends.includes(friendName) ? nameArr.push(name) : nameArr;
//     return nameArr;
//   }, [])
//   return friendlyUser;
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// // TASK#9

// // Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   const sortUsers = users;
//   sortUsers.forEach(user => {
//     const { friends } = user;
//     const sortByLength = (a ,b) => a.friends.length - b.friends.length;
//     sortUsers.sort(sortByLength);
//   });
//   const usersArr = sortUsers.map(user => user.name);
//   return usersArr;
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// TASK#10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   const allSkills = users.reduce((skill, { skills }) => {
//     skill = [...skill,...skills];
//     return skill;
//   }, []);
//   allSkills.sort();
//   console.log('allSkills :', allSkills);
//   const allUniqueSkills = allSkills.filter((skill, idx) => allSkills.indexOf(skill) === idx);
//   return allUniqueSkills;
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// TASK#10 another solution

// const getSortedUniqueSkills = (arr) => {
//   const skills = [];
//   arr.forEach(element => {
//     skills.push(...element.skills);
//   });
//   console.log('skills :', skills);
//   const unique = [];
//   skills.forEach(el => {
//     !unique.includes(el) && unique.push(el);
//   })
// }

// getSortedUniqueSkills(users);


// const getSortedUniqueSkills = (arr) => {
//   const unique = arr
//   .reduce((acc, el) => {
//     acc.push(...el.skills);
//     return acc;
//   }, [])
//   .reduce((acc, el) => {
//     // !acc.includes(el) && acc.push(el);
//     // return acc;
//     return !acc.includes(el) && acc.push(el) && acc || acc;
//   }, [])
//   .sort();
//   console.log('unique :', unique);
// }

// getSortedUniqueSkills(users);

// const summ = users.reduce((acc, el) => el.balance + acc, 0)
// console.log('summ :', summ);

// const updData = {
//   title: null,
//   cost: 2000,
//   discription: '',
//   size: undefined,
//   price: 0,
// };

// const cleanData = (obj) => {
//   return Object.keys(obj).reduce((acc, key) => {
//     if(obj[key] || obj[key] === 0) {
//       acc[key] = obj[key];
//       return acc;
//     }
//     return acc;
//   }, {});  
// };

// console.log('cleanData(updData) :', cleanData(updData));

// // console.log('cleanData :', cleanData);