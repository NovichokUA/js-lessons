//Напишіть скрипт, який замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

// function caseToggle(string) {
//   let newString = "";
//   for (let i = 0; i < string.length; i++) {
//     newString +=
//       string[i] === string[i].toLowerCase()
//         ? string[i].toUpperCase()
//         : string[i].toLowerCase();
//   }
//   console.log(newString);
// }
// console.log(caseToggle("JavaScript"));
// console.log(caseToggle("Your review was submitted successfully"));
// console.log(caseToggle("Escape"));

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
//   const uniqueArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let couter = 0;
//     for (const item of arr) {
//       if (item === arr[i]) {
//         couter += 1;
//       }
//     }
//     if (couter === 1) {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// }
// console.log(
//   unique([
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "CSS",
//     "JS",
//     "Node.js",
//     "JS",
//     "React",
//     "CSS",
//     "React",
//     "HTML",
//     "Node.js",
//   ])
// );
// console.log(unique(["HTML", "CSS", "JS", "React", "JS", "CSS", "JS"]));

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

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserEmails = users.map((user) => user.email);
// console.log(getUserEmails);

// function invert(array) {
//   console.log(array[0]);
//   let newArray = [];
//   for (let i = array[0]; i <= array.length; i++) {
//     if (i > 0) {
//       newArray.push(-i);
//     } else {
//       newArray.push(i ** 2);
//     }
//   }
//   return newArray;
// }

// function invert(array) {
//   return array.map((x) => (x === 0 ? x : -x));
// }

// function invert(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= -1;
//   }
//   return array;
// }
// console.log(invert([1, -2, 3, -4, 5]));

// Дано набір чисел, повернути адитивну оберненість кожного. Кожен позитив стає негативом, а негативи стають позитивом.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// function solution(str) {
//   const i = str.split("").reverse().join("");
//   return i;
// }
// console.log(solution("world"));
const newStr = (str) => str.split("").reverse().join("");
// console.log(newStr("world"));
// const str = "world";
// console.log([...str]);

// function solution(s) {
//   var o = "";
//   for (var i = s.length - 1; i >= 0; i--) o += s[i];
//   return o;
// }
// function solution(str) {
//   let n = "";
//   for (let i of str) {
//     console.log(i);
//     n = i + n;
//   }
//   return n;
// }
// console.log(solution("world"));

// function rowSumOddNumbers(n) {
//   // TODO
//   return n * n * n;
//   //   return n + (n - 1) * (n ** 2 + n);
// }
// console.log(rowSumOddNumbers(100));
//
//
//
//
//
// //
// function accum(str) {
//   let newStr = [];
//   let splitStr = str.split("");
//   for (let index = 0; index < splitStr.length; index++) {
//     if (index >= 0) {
//       newStr.push(
//         splitStr[index].toUpperCase() +
//           splitStr[index].toLowerCase().repeat(index)
//       );
//     }
//   }

//   return newStr.join("-");
// }
// function accum(s) {
//   return [...s]
//     .map((element, index) => {
//       return element.toUpperCase() + element.toLowerCase().repeat(index);
//     })
//     .join("-");
// }
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
console.log(accum("abcd")); // -> "A-Bb-Ccc-Dddd"
