// Конструктор класу
// Спосіб створення класу залежить від твоєї задачі.У нашому прикладі клас User представляє
// користувача, тому ми додамо до нього поля для імені та пошти.
// Для ініціалізації екземпляра класу використовується метод constructor.
// Якщо його не визначити в явному вигляді, то буде створений конструктор за
// замовчуванням — порожня функція, яка не змінює екземпляр класу.

// class User {
//   // Синтаксис оголошення методу класу
//   constructor() {
// 		// ...
//   }
// }

// Виклик класу з оператором new призводить до створення нового об'єкта й автоматичного
// виклику методу constructor.

// class User {
//   constructor() {
// 		console.log("constructor call")
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}

// Аргументи, які передаються при виклику new User(), стають значеннями параметрів для
// методу constructor.

// class User {
//   constructor(name, email) {
// 		console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}

// Зверни увагу, що метод constructor викликається в контексті створюваного екземпляра.

// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// Таким чином, this усередині конструктора посилається на новостворений об'єкт.
// Це дозволяє надавати кожному об'єкту властивості з однаковими іменами, але різними
// значеннями.
// Властивості name та email називаються публічними властивостями, оскільки вони є власними
//  властивостями об'єкта-екземпляра.

class User {
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
const newCar = new Car("Audi", "Q3", 36000);
console.log(newCar);
