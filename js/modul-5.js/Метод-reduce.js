// Метод reduce(callback, initialValue) використовується для послідовної
// обробки кожного елемента масиву із збереженням
// проміжного результату.
// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);
// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає все, що завгодно (об’єкт, масив, рядок, число тощо)
// Може замінити функціонал будь - якого іншого перебираючого методу
// масиву та навіть їх комбінацію
// Метод reduce() очікує 2 параметри:
// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;
// 2 - й параметр(не обов’язковий) — initialValue початкове значення акумулятора.

//     Колбек - функція з параметра редьюса очікує в свою чергу чотири параметри.
//  Ці параметри, так само як і в колбеках інших перебираючих методів масиву, можна
//  не оголошувати, якщо вони вам не потрібні, але не можна порушувати їх послідовність:
// 1 - й параметр(previousValue) — це акумулятор, тобто проміжний результат.
//     Значення, яке поверне колбек - функція на поточній ітерації, буде
//     значенням цього параметра на наступній ітерації;
// 2-й параметр — поточний елемент масиву;
// 3-й параметр — індекс поточної ітерації;
// 4-й параметр — посилання на вихідний масив.
// Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// console.log(total); // 12
// Розгляньмо детальніше роботу редьюса у прикладі вище:
// Початкове значення акумулятора 0
// перша ітерація колбек-функції 0 + 2 поверне 2
// друга ітерація колбек-функції 2 + 7 поверне 9
// третя ітерація колбек-функції 9 + 3 поверне 12
// Результатом коду вище буде 12.
// Тобто метод reduce() використовується, коли необхідно взяти «багато»
//  і привести до «одного». У повсякденних завданнях його застосування
//  зводиться до роботи з числами.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return (total += player.playtime / player.gamesPlayed);
}, 0);
console.log(totalAveragePlaytimePerGame);

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((playtime, number) => {
//   return (playtime += number);
// }, 0);
// console.log(totalPlayTime);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// const i = (Object.values = users.map((user) => user.balance));
// const b = i.reduce((total, balance) => {
//   return (total += balance);
// }, 0);
// console.log(b);
// console.log(i);
// const calculateTotalBalance = users.reduce((total, user) => {
//   return (total += user.balance);
// }, 0);
// console.log(calculateTotalBalance);

const calculateTotalBalance = (users) =>
  users.reduce((total, user) => {
    return (total += user.balance);
  }, 0);
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
console.log(calculateTotalBalance(users));
