//Напишіть скрипт, який замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

function chengeRegistr(name) {
  let arrLiter = name.split("");
  let arrChengeLiter = [];
  for (const i of arrLiter) {
    if (i === i.toUpperCase()) {
      arrChengeLiter.push(i.toLowerCase());
    } else {
      arrChengeLiter.push(i.toUpperCase());
    }
  }

  return arrChengeLiter.join("");
}
console.log(chengeRegistr("dkjhAS765Dnms"));

// let now = new Date();
// console.log(now);
// console.log(new Date().getTimezoneOffset());

// Напишіть функцію unique(arr), яка повертає масив,
// містить лише унікальні елементи arr.
const words = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "JS",
  "CSS",
  "JS",
  "Node.js",
  "JS",
  "React",
  "CSS",
  "React",
  "HTML",
  "Node.js",
];

function unique(arr) {
  let newArr = [];
  for (const word of words) {
    if (word === arr) {
      newArr.push(word);
    }
  }
  return newArr;
}

console.log(unique("React"));
