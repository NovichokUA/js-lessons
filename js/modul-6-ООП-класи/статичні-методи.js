// Статичні методи
// У класі можна оголосити не тільки методи майбутнього екземпляра, а й статичні методи.
//  Статичні методи — це методи, доступні тільки класу.Вони можуть бути публічні та приватні.
// Синтаксис оголошення статичних методів майже аналогічний статичним властивостям.Єдина
// відмінність — значенням буде метод.

// 	class MyClass {
// 		static myMethod() {
// 			console.log("A static method");
// 	}
// }

// MyClass.myMethod(); // "A static method"

// Додамо у клас User:
// статичну властивість takenEmails для зберігання зайнятих пошт користувачів
// статичний метод isEmailTaken, який перевіряє, чи доступна пошта

// Під час ініціалізації екземпляра в конструкторі класу будемо додавати пошту в список
// зайнятих.

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true

// Особливість статичних методів
// Під час їх виклику ключове слово this посилається на сам клас.Це означає, що статичний
// метод може отримати доступ до статичних властивостей класу, але не до властивостей
// екземпляра.Це логічно, адже статичні методи викликає сам клас, а не його екземпляри.

class Car {
  static #maxPrice = 50000;
  static checkPrice(price) {
    return price > Car.#maxPrice
      ? "Error! Price exceeds the maximum"
      : "Success! Price is within acceptable limits";
  }

  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
