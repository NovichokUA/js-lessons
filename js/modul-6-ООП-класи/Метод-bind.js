// Метод bind() і втрата контексту
// Методи call і apply викликають функцію «на місці», тобто одразу.
// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст,
// і ця нова функція може бути викликана пізніше з будь - якими аргументами.
// Сигнатура методу bind() виглядає так:
// const boundFoo = foo.bind(thisArg, arg1, arg2, ...)
// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції при її виклику
// Давай спробуємо зберегти посилання на метод об'єкта у змінну і викликати його в
// глобальному контексті.
// "use strict";
// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };
//
// customer.sayHello(); // "Hello, Jacob!"
// const greet = customer.sayHello;
// greet(); // TypeError: Cannot read properties of undefined (reading 'firstName')
//
// Зберегли посилання на метод sayHello у змінну greet
// При виклику greet() контекст втрачено, функція викликається в глобальному контексті,
//     тому значення this буде undefined
//
// При спробі звернутися до властивості this.username під час виклику функції greet(),
//     виникає помилка, оскільки undefined — це навіть не об'єкт
// Це можна виправити, прив'язавши контекст за допомогою методу bind.
// "use strict";
//
// const customer = {
//   username: "Jacob",
//   sayHello(name) {
//     console.log(`Hello ${name}, ${this.username}!`);
//   },
// };

// customer.sayHello(); // "Hello, Jacob!"
// const greet = customer.sayHello.bind(customer);

// console.log(greet("sad")); // "Hello, Jacob!"
// console.log(greet === customer.sayHello);
// // Коли ми використовуємо bind(), ми створюємо нову функцію greet.Ця нова функція завжди
// // матиме правильний контекст і може використовувати властивість username об'єкта customer.

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// const showBooks = library.logBookCount.bind({ books: 724 });
// showBooks();
// "use strict";

const library = {
  books: 1923,
  logBookCount() {
    console.log(this.books);
  },
};

function showBooks(callback) {
  callback();
}

showBooks(library.logBookCount);
