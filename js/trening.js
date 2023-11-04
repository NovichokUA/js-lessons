// const sampleStr = 'Alan said, "Peter is learning JavaScript".';
// const myStr = 'I am a "double quoted string inside "double quotes".';
// console.log(myStr);

// const password = "true";
// const myKey = password;

// const obj = {
//   [myKey]: false,
// };

// console.log(obj);

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";
// const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;
// console.log(wordBlanks);

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ];

// const subarray = arr[3];
// const nestedSubarray = arr[3][0];
// const element = arr[3][0][1];
// console.log(subarray);
// console.log(nestedSubarray);
// console.log(element);

// const myArray = [
//   ["John", 23],
//   ["cat", 2],
// ];
// const removedFromMyArray = myArray.pop();
// console.log(removedFromMyArray);

// function smash(words) {
//   let sent = "";
//   for (const i of words) {
//     sent += i + " ";
//   }
//   return sent.trim();
// }
// console.log(smash(["hello", "world", "this", "is", "great"]));

// function positiveSum(arr) {
//   let sumPositive = 0;
//   for (const i of arr) {
//     if (i > 0) {
//       sumPositive += i;
//     }
//   }
//   return sumPositive;
// }
// console.log(positiveSum([-1, -4, -7, -12]));

// function findAverage(array) {
//   let averageNamber = 0;
//   let sumAllNamber = 0;
//   for (const i of array) {
//     sumAllNamber += i;
//     averageNamber = sumAllNamber / array.length;
//   }
//   return averageNamber;
// }
// console.log(findAverage([]));

// function hero(bullets, dragons) {
//   let i = bullets / 2 >= dragons ? true : false;
//   return i;
// function hero(bullets, dragons) {
//   return bullets >= dragons * 2;
// }
// }
// console.log(hero(10, 6));

// function newArray(n) {
//   let i = [];
//   for (; n >= 1; n--) {
//     i.push(n);
//   }
//   return i;
// }
// console.log(newArray(7));

// function squareSum(numbers) {
//   let sumSguare = 0;
//   for (const i of numbers) {
//     sumSguare += Math.pow(i, 2);
//   }
//   return sumSguare;
// }
// console.log(squareSum([1000, 1]));

// function lovefunc(flower1, flower2) {
//   // moment of truth
//   return (love = (flower1 - flower2) % 2 !== 0 ? true : false);
// }
// console.log(lovefunc(0, 1));

// function bmi(weight, height) {
//   const indexBody = weight / height ** 2;
//   if (indexBody <= 18.5) {
//     return "Underweight";
//   } else if (indexBody > 18.5 && indexBody <= 25) {
//     return "Normal";
//   } else if (indexBody > 25 && indexBody <= 30) {
//     return "Overweight";
//   }
//   return "Obese";
// }
// console.log(bmi(105, 1.77));

// const bmi = (w, h, bmi = w / h / h) =>
//   bmi <= 18.5
//     ? "Underweight"
//     : bmi <= 25
//     ? "Normal"
//     : bmi <= 30
//     ? "Overweight"
//     : "Obese";
// console.log(bmi(80, 2.8));

// function stringToArray(string) {
//   return string.split(" ");
// }
// console.log(stringToArray("I love arrays they are my favorite"));

// function abbrevName(name) {
//   return (name.split(" ")[0][0] + "." + name.split(" ")[1][0]).toUpperCase();
// }
// console.log(abbrevName("sam Harris"));

// const a = {};
// const b = {};
// const c = {
//   e: 21,
//   d: 34,
// };
// c[a] = "hello";
// c[b] = 33;
// console.log(c);

// Тренінг------------------

// Що виведе наступний код?
// Додаємо нове значення в "копію"
// що у fruits?
let fruits = ["Яблука", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
console.log(fruits.length);

//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа
function min(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    return a < b ? a : b;
  }
  return false;
}
console.log(min("j", 3));

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку
// "Nunc sed turpis a felis in nunc fringilla"

//Напишіть функції для роботи з масивом
//add(name) додає курс до кінця колекції
//removeCourse(name) видаляє курс із колекції
//updateCourse(oldName, newName) змінює ім'я на нове
const newArray = {
  courses: [],
  add(name) {
    this.courses.push(name);
  },
  removeCourse(name) {
    for (const course of this.courses) {
      let index = this.courses.indexOf(name);
      if (index !== -1) {
        this.courses.splice(index, 1);
      }
    }
  },
  updateCourse(oldName, newName) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i] === oldName) {
        this.courses[i] = newName;
      }
    }
  },
};
newArray.add("task1");
newArray.add("task2");
newArray.add("task3");
console.log(newArray.courses);
newArray.removeCourse("task2");
newArray.add("task4");
console.log(newArray.courses);
newArray.updateCourse("task3", "Hello");
console.log(newArray.courses);
newArray.updateCourse("task4", "World");
console.log(newArray.courses);
newArray.updateCourse("task1", "Done");
console.log(newArray.courses);
//Напишіть скрипт, який замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

//Напишіть функцію unique(arr), яка повертає масив,
//містить лише унікальні елементи arr.
//const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
// "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];
