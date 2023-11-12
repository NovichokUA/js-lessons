// Методи класу
// Для роботи з властивостями майбутнього екземпляра використовуються методи класу.

// Методи класу — це функції, які будуть доступні екземпляру в його прототипі.Вони
// оголошуються в довільному порядку після конструктора.На відміну від синтаксису методів
//  об'єкта (вони розділяються комою), методи класу не розділені жодними спеціальними
// символами.

// Розгляньмо приклад використання методів у класі User.
// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
// 		// ...
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
// 		// ...
//   }
// }

// Для доступу до властивостей у методах використовується ключове слово this, оскільки
// методи будуть викликані в контексті об'єкта-екземпляра.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// Після створення екземпляра можна використовувати оголошені методи класу, які будуть
// звертатися до властивостей об'єкта, що їх викликав.

// const mango = new User({
// 	name: "Mango",
// 	email: "mango@mail.com"
// });

// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail("new@mail.com");

// console.log(mango.getEmail()); // "new@mail.com"

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    return (this.price = newPrice);
  }
}
const i = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(i.getPrice());
console.log(i.changePrice(40000));
console.log(i);
