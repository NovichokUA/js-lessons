// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// const i = numbers;
// console.log(numbers);
// console.log(i);
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]
// console.log(i === numbers);

// Чиста функція
// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const changeEven = (numbers, value) => {
  let newArray = [];
  numbers.forEach((i) => {
    if (i % 2 === 0) {
      newArray.push(i + value);
    } else {
      newArray.push(i);
    }
  });
  return newArray;
};

// теж саме тільки через звичайну функцію

// function changeEven(numbers, value) {
//   let newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// const numbers = [1, 2, 3, 4, 5];
// const changeNumbers = changeEven(numbers, 10);

const numbers = [1, 2, 3, 4, 5];
const changeNumbers = changeEven(numbers, 10);
console.log(numbers);
console.log(changeNumbers);
console.log(numbers === changeNumbers);
