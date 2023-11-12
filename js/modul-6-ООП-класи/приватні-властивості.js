// Приватні властивості
// це парадигма ООП, яка передбачає приховування деталей внутрішньої реалізації класу від
//  зовнішнього коду.Інкапсуляція реалізується приватними властивостями та методами, доступ
//  до яких можна отримати тільки всередині класу.

// Інший розробник, який користується цим класом, має отримувати доступ тільки до публічного
// інтерфейсу — набору публічних властивостей і методів класу.

//     Припустимо, що пошта користувача повинна бути недоступною для прямої зміни ззовні,
//     тобто приватною.Додаючи до імені властивості на початку символ #, ми робимо її
// приватною.Оголошення приватної властивості до ініціалізації в конструкторі є обов'язковим.

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість

// Для того щоб отримати або змінити значення приватної властивості використовуються
//  публічні методи.

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

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
class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}
const newCar = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(newCar.getBrand());
console.log(newCar);
console.log(newCar.changeBrand("Honda"));
console.log(newCar.getBrand());
console.log(newCar);
