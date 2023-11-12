// Приватні методи
// Ти вже знаєш, як працюють публічні методи.Подивимось на це на прикладі класу User з
// приватною властивістю #email та публічною властивістю name.

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

// // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

// // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"

// Іноді потрібно не просто отримувати або змінювати адресу електронної пошти, але й
// проводити певні дії, які мають бути приховані від "зовнішнього світу".
// Скажімо, кожен раз, коли електронна пошта змінюється, потрібно валідувати її формат.
// Це можна зробити за допомогою приватних методів.Додаючи до назви методу на початку
// символ #, ми робимо його приватним.

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

//   // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }

//   // Приватний метод для валідації електронної пошти
//   #validateEmail(email) {
//     return email.includes('@');
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// // Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail('test'); // Помилка

// У цьому прикладі приватний метод #validateEmail забезпечує додаткову логіку для валідації
//  електронної пошти.
// Цей метод не доступний ззовні класу, тому користувачі(або інші розробники) не можуть
// його викликати напряму.Вони можуть лише використовувати публічний метод changeEmail, який
// у свою чергу використовує приватний метод для валідації.
// Таким чином, ми інкапсулюємо внутрішню логіку й забезпечуємо безпеку та стабільність
// роботи класу.
