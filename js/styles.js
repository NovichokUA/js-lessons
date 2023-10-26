// const username = "Poly";
// const message = "Welcom " + username + "!";
// console.log(typeof message);
// console.log("false" + null);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid*orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(message);
// console.log(message.length);

// let username = "Poly";
// console.log(username.length);
// username = "Valerii";
// const message = `Username ${username} is ${username.length} characters long`;
// console.log(message);
// console.log(message[message.length - 1]);

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = String(courseTopic.length - 1);
// console.log(courseTopic);
// console.log(courseTopic.length);
// console.log(courseTopic[0]);
// console.log(courseTopic[courseTopic.length - 1]);
// console.log(typeof lastElement);

// const age = 16;
// // const isAdult = String(18 >= age);
// let isAdult = age <= 18;
// console.log(typeof age);
// console.log(typeof isAdult);
// isAdult = String(isAdult);
// console.log(typeof isAdult)

// const age = 16;
// let isAdult = age <= 18;
// isAdult = `"${isAdult}"`;
// console.log(isAdult);

// const correctPassword = "mangodab3st";
// const userPassword = "mangodab3st";
// const isValid = correctPassword === userPassword;
// console.log(isValid);

// const value = "d24.5px";
// const numerical = Number.parseFloat(value);
// console.log(numerical);

// console.log(0.4 + 0.6);

// console.log(Number((8.762195).toFixed(4)));  //  “8.7622”

// function doStuff() {
//   // Тіло функції
//   console.log(5**2);
// }
// doStuff();

// multiply(2, 3, 5);
// multiply(4, 8, 12);
// multiply(17, 6, 25);

// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// function add(a, b, c) {
//     const summ = a + b + c;
//     return summ;
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// const result = add(15, 27, 10);
// console.log(result);

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;
// console.log(result);

// function makeMessage(username) {
//     const srt = `Hello ${username}`;
//     return srt;
// }
// const result = makeMessage("Jacob");

// console.log(result)

// function foo(text) {
// 	// Локальна змінна
// 	const value = `${text}`;
// 	// Можна звернутися до локальної змінної
// 	console.log(value); // "I'm a local variable"
// }

// foo("I'm a local variable");
//   console.log(foo);

//

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const multiplication = orderedQuantity*pricePerItem;
//   return multiplication
// }
// const result = calculateTotalPrice(5, 100);
// console.log(result)

// TASK#1

// function makeTransaction(quantity, pricePerDroid) {
// 	const totalPrice = quantity * pricePerDroid;
// 	const makeMessage = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// 	return makeMessage;
// }

// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));

// TASK#2

// function getShippingMessage(country, price, deliveryFee) {
// 	const totalPrice = price + deliveryFee;
// 	const notification = `Shipping to ${country} will cost ${totalPrice} credits`;
// 	return notification;
// }
// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));

// TASK#3

// function getElementWidth(content, padding, border) {
// 	const contenT = Number.parseInt(content);
// 	const paddinG = Number.parseInt(padding);
// 	const bordeR = Number.parseFloat(border);
// 	const sumAllElem = contenT + (2 * paddinG) + (2 * bordeR);
// 	return sumAllElem;
// }
// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px"));
// console.log(getElementWidth("200px", "0px", "0px"));

// const first = 50;
// const second = "T";

// console.log(first + second);

// function checkAge(age) {
//     let result;
//     if (age >= 18) {
//         result = "You are an adult"
//         }
//     return result;
// }

// const comparison = checkAge(3);
// console.log(comparison);

// function checkStorage(available, ordered) {
//     let result;
//     if (available < ordered) {
//         result = "Not enough goods in stock!";
//     } else {
//         result = "Order is processed, our manager will contact you";
//     }
//     return result;
// }

// const check = checkStorage(100, 50);
// console.log(check);

// function checkStorage(available, ordered) {
//     let check;
//     if (ordered === 0) {
//         check = "There are no products in the order!";
//     } else if (available < ordered) {
//         check = "Your order is too large, there are not enough items in stock!";
//     }
//     else {
//         check = "The order is accepted, our manager will contact you";
//     }
//     return check;
// }

// const result = checkStorage(100, 50);
// console.log(result);

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     const check = password === correctPassword ? "Access granted" : "Access denied, wrong password!";
//     return check;
// }

// console.log(checkPassword("angul4r1sl1f3"));

// const fruit = 'apple';

// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected');
//     break;
//   case 'banana':
//     console.log('Banana selected');
//     break;
//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:
//     console.log('The fruit is unknown');
// }

// function getSubscriptionPrice(type) {

//     switch (type) {
//         case "starter":
//             console.log(0);
//             type = 0;
//             break;
//         case "professional":
//             console.log(20);
//             type = 20;
//             break;
//         case "organization":
//             console.log(50);
//             type = 50;
//             break;
//         default:
//             type = "Invalid subscription type!";
//             console.log("Invalid subscription type!");
//     }
//     return type;
// }

// console.log(getSubscriptionPrice("random"));

// if(1) {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }

// function isNumberInRange(start, end, number) {

//         number = Boolean(number >= start && number <= end);

//     return number;
// }

// console.log(isNumberInRange(10, 30, 5));

// function isNumberInRange(start, end, number) {
//     if (number >= start && number <= end) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isNumberInRange(10, 30, 70));
// console.log(null || 1)
// console.log(Boolean(0))

// function checkAccess(subType) {
//     if (subType === "pro" || subType === "vip") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkAccess("starter"));

// function toggleModalVisibility(isVisible) {
//     if (isVisible) {
//         isVisible = true;
//         return !true;
//     } else {
//         return !false;
//     }
// }

// console.log(toggleModalVisibility(false))

// function getSubstring(string, length) {
//     if (length > 0) {partOfSent = string.slice(0, length);
//         return partOfSent;
//     } else {
//         return `""`;
//     }
// }
// console.log(getSubstring("Hello world", 0));

// function normalizeInput(input, to) {
//     if (to === "lower") {
//         chengeInput = input.toLowerCase();
//     } else {
//         chengeInput = input.toUpperCase();
//     }
//     return chengeInput;
// }

// function normalizeInput(input, to) {
//     to === "lower" ? chengeInput = input.toLowerCase() : chengeInput = input.toUpperCase();
//     return chengeInput
// }
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));

// function checkForName(fullName, firstName) {

//     fullName = fullName.toLowerCase();
//     firstName = firstName.toLowerCase();
//     compare = fullName.includes(firstName);
//     return compare;
// }

// console.log(checkForName("Jason Neis", "Jason"));

// function checkFileExtension(fileName, ext) {
//   ext = ext.toLowerCase();
//   fileName = fileName.toLowerCase();
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }
// console.log(checkFileExtension("app.js", ".html"));

// const message = "Welcome to Bahamas!";
// const index = message.indexOf("me");
// console.log(index);

// function getFileName(file) {
//     index = file.indexOf(".")
//     if (index >= 0) {
//         srt = file.slice(0, index);
//         return srt;
//     } else {
//         srt = file.slice(0);
//         return srt
//     }
// }
// console.log(getFileName("index.html"))

// function createFileName(name, ext) {
//     changeCreateFileName = `${name.trim()}.${ext}`;
//     return changeCreateFileName;
// }

// console.log(createFileName("report ", "csv"))

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// function calculateTotal(number) {
//     let rundom = 0;
//     let summ = 0;
//     while (rundom <= number) {
//         summ += rundom;
//         rundom += 1;
//     }
//     return summ
// }
// console.log(calculateTotal(3))

// function calculateTotal(number) {
//     let rundom = 0;
//     let summ = 0;
//     while (rundom <= number) {
//         summ = summ + rundom;
//         rundom += 1;

//     }
//     return summ
// }
// console.log(calculateTotal(3))

// function calculateTotal(number) {
//     let summ = 0;
//     for (rundom = 0; rundom <= number; rundom ++) {
//         summ += rundom;
//     }
//     return summ;
// }
// console.log(calculateTotal(18));

// function calculateEvenTotal(number) {
//   let summ = 0;
//   for (rundom = 0; rundom <= number; rundom = rundom + 2) {
//     summ += rundom;
//   }
//   return summ;
// }
// console.log(calculateEvenTotal(27));

// const start = 16;
// const end = 25;
// let number = 0;
// for (let number = start; number >= start && number <= end; number += 1) {
//   checkNumber = number / 5;
//   if (Number.isInteger(checkNumber)) {
//     console.log(number);
//     break;
//   }
// }

//  ДВА РІШЕННЯ НА ПОВЕРНЕННЯ ЦІЛОГО ЧИСЛА

// const start = 16;
// const end = 25;
// let number;
// for (let i = start; i <= end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// const start = 6;
// const end = 15;
// let number;
// for (let i = start; i <= end; i += 1) {
//   if (Number.isInteger(i / 5)) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

//  РІШЕННЯ ЗАДАЧІ ДВОМА СПОСОБАМИ
// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break
// використовуй оператор break

// function findNumber(start, end, divisor) {
//   let ii;
//   for (let i = start; i <= end; i += 1) {
//     if (i % divisor === 0) {
//       ii = i;
//       break;
//     }
//   }
//   return ii;
// }
// console.log(findNumber(16, 35, 7));

// function findNumber(start, end, divisor) {
//   for (i = start; i <= end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

//  ДЗ №1 МОДУЛЬ №2
// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalPrice = quantity * pricePerDroid;
//   console.log(totalPrice);
//   if (totalPrice > customerCredits) {
//     return `Insufficient funds!`;
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
// }
// console.log(makeTransaction(5, 3000, 23000));
// console.log(makeTransaction(3, 1000, 15000));
// console.log(makeTransaction(10, 5000, 8000));
// console.log(makeTransaction(8, 2000, 10000));
// console.log(makeTransaction(10, 500, 5000));

// ДЗ №2 МОДУЛЬ №2
// function formatMessage(message, maxLength) {
//   let i = message.trim().length;
//   if (i <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, i) + "...";
//   }
// }
// console.log(formatMessage(" Curabitur ligula sapien ", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));

// ДЗ №3 МОДУЛЬ №2
// function checkForSpam(message) {
//   const i = "spam";
//   const s = "sale";
//   let changeMessage = message.toLowerCase();
//   if (changeMessage.includes(i) || changeMessage.includes(s)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

// // ДЗ №4 МОДУЛЬ №2
// function getShippingCost(country) {
//   switch (country) {
//     case "China":
//       cost = 100;
//       delivery = `Shipping to ${country} will cost ${cost} credits`;
//       break;
//     case "Chile":
//       cost = 250;
//       delivery = `Shipping to ${country} will cost ${cost} credits`;
//       break;
//     case "Australia":
//       cost = 170;
//       delivery = `Shipping to ${country} will cost ${cost} credits`;
//       break;
//     case "Jamaica":
//       cost = 120;
//       delivery = `Shipping to ${country} will cost ${cost} credits`;
//       break;
//     default:
//       delivery = "Sorry, there is no delivery to your country";
//   }
//   return delivery;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// let size = 53452352;
// let type = "GB";
// switch (type) {
//   case "GB":
//     size /= 1024;
//   case "MB":
//     size /= 1024;
//   case "KB":
//     size /= 1024;
//   case "TB":
//     size /= 1024;
// }
// console.log(size);

// function getLastElementMeta(array) {
//   let i = [array.length - 1, array[array.length - 1]];
//   return i;
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// for (let i = 6; i > 3; i--) {}
// console.log(i);

// function getExtremeElements(array) {
//   let i = [array[0], array[array.length - 1]];
//   return i;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if (emptyArray) {
//   console.log("if is in progress");
// } else {
//   console.log("else is not performed");
// }

// if (nonEmptyArray) {
//   console.log("if is in progress");
// } else {
//   console.log("else is not performed");
// }

// const array = [false];
// console.log(Boolean(array));

// const string = "Hello, World!";
// console.log(string.split(","));
// console.log(string.split(""));
// console.log(string.split(" "));
// console.log(string.split("  "));

// function transformString(string) {
//   const words = string.split("_");
//   console.log(words);
//   return words.join("-");
// }

// console.log(transformString("user_age")); // "user-age"
// console.log(transformString("price_per_droid")); // "price-per-droid"

// function getLength(array) {
//   return array.join("").length;
// }

// getLength(["Mango", "hurries", "to", "the", "train"]);
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));

// const name = "Mango Poly";
// const letters = name.split(" ");
// console.log(letters);

// function calculateEngravingPrice(message, pricePerWord) {
//   const costEngraving = message.split(" ").length * pricePerWord;
//   return costEngraving;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));

// const planets = [
//   "Earth",
//   "Mars",
//   "Venus",
//   "Jupiter",
//   "Saturn",
//   "Earth",
//   "Mars",
//   "Venus",
//   "Jupiter",
//   "Saturn",
// ];
// const result = planets.slice(-3);
// console.log(result);

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function getSlice(array, value) {
//   const checkGetSlice =
//     array.indexOf(value) !== -1
//       ? array.slice(0, array.indexOf(value) + 1)
//       : array.slice(0, 0);
//   return checkGetSlice;
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));

// function getShippingCost(country) {
//   switch (country) {
//     case "China":
//       cost = 100;
//       delivery = `Shipping to ${country} will cost ${cost} credits`;
//       break;
//     case "Chile":
//       cost = 250;
//       delivery = `Shipping to ${country} will cost ${cost} credits`;
//       break;
//     case "Australia":
//       cost = 170;
//       delivery = `Shipping to ${country} will cost ${cost} credits`;
//       break;
//     case "Jamaica":
//       cost = 120;
//       delivery = `Shipping to ${country} will cost ${cost} credits`;
//       break;
//     default:
//       delivery = "Sorry, there is no delivery to your country";
//   }
//   return delivery;
// }

//~Напишіть цикл, який виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max

// const min = 10;
// const max = 50;
// let sum = 0;
// for (let i = max; i >= min; i--) {
//   console.log(i);
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//~При завантаженні сторінки користувачеві пропонується
//в prompt ввести число. Введення додається до значення
//змінної total.
//Операція введення числа триває до того часу,
//поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//~а не довільний набір символів, не потрібно.

//~Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера
//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"
// "use strict";

// const login = prompt("Введіть логін");
// console.log(login);
// if (login === "admin") {
//   const password = prompt("Введіть пароль");
//   if (!password) {
//     console.log("скасовано");
//   } else if (password === "Я головний") {
//     console.log("Добрий день");
//   } else {
//     console.log("не вірний пароль");
//   }
// } else {
//   console.log("Я вас не знаю");
// }
