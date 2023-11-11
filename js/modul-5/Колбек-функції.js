// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }
// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }
// function registerGuest(name, center) {
//   console.log(`Registering ${name}!`);
//   center(name);
// }
// registerGuest("Mango", greet); // "Registering Mango!"
// // "Welcome Mango!"
// registerGuest("Mango", notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   callback(pizzaName);
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {});

// const numbers = [5, 10, 15, 20, 25];
// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }
// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (element) {
//     totalPrice += element;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291]));

// function filterArray(numbers, value) {
//   let newArray = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const first = () => {
//   // Как будто бы запрос к API
//   setTimeout(() => {
//     console.log(1);
//   }, 500);
// };

// const second = () => {
//   console.log(2);
// };

// first();
second();

const doHomework = (subject, callback) => {
  alert(`Starting my ${subject} homework.`);
  callback();
};

doHomework("math", () => {
  alert("Finished my homework");
});

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};
console.log(calculateTotalPrice([12, 85, 37, 4]));

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};
console.log(filterArray([1, 2, 3, 4, 5], 3));

function callback() {
  console.log("HELLO WORLD");
}
function saySomething(onSomething) {
  onSomething();
}
saySomething(callback);
