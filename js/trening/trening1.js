//Напишіть скрипт, який замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

// function chengeRegistr(name) {
//   let arrLiter = name.split("");
//   let arrChengeLiter = [];
//   for (const i of arrLiter) {
//     if (i === i.toUpperCase()) {
//       arrChengeLiter.push(i.toLowerCase());
//     } else {
//       arrChengeLiter.push(i.toUpperCase());
//     }
//   }

//   return arrChengeLiter.join("");
// }
// console.log(chengeRegistr("dkjhAS765Dnms"));

// let now = new Date();
// console.log(now);
// console.log(new Date().getTimezoneOffset());

// Напишіть функцію unique(arr), яка повертає масив,
// містить лише унікальні елементи arr.
// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
// ];

// function unique(arr) {
//   let newArr = [];
//   for (const word of words) {
//     if (word === arr) {
//       newArr.push(word);
//     }
//   }
//   return newArr;
// }

// console.log(unique("React"));

// function noSpace(x) {
//   let newString = [];
//   for (const i of x.split(" ")) {
//     if (i !== "") {
//       newString.push(i);
//     }
//   }
//   return newString.join();
// }
// function noSpace(x) {
//   return x.split(" ").join("");
// }
// function noSpace(x) {
//   return x.replaceAll(" ", "");
// }
// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// function fakeBin(x) {
//   let newString = [];
//   for (let i of x.split("")) {
//     i > 5, i < 5 ? newString.push((i = 0)) : newString.push((i = 1));
//   }
//   return newString.join("");
// }
// console.log(fakeBin("45385593107843568"));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserEmails = users.map((user) => user.email);
console.log(getUserEmails);
