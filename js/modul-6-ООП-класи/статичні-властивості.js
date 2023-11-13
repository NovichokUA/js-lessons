// Крім публічних і приватних властивостей майбутнього екземпляра, у класі можна оголосити
//  його власні властивості.Властивості, що доступні тільки класові, але не його
// екземплярам — це статичні властивості.Вони корисні для зберігання інформації, що
// стосується класу.
// Статичні властивості оголошуються в тілі класу.Перед ім'ям властивості додається ключове
//  слово static.Статичні властивості можна використовувати як у методах класу, так і поза
// класом.

// class MyClass {
// 	static myProp = "value";
// }

// console.log(MyClass.myProp); // "value"

// У екземпляра немає доступу до статичних властивостей класу.

// class MyClass {
// 	static myProp = "value";
// }

// const inst = new MyClass();
// console.log(inst.myProp); // undefined

// Додамо класу користувача приватну властивість role — його роль, що визначає набір прав,
//наприклад: адміністратор, редактор, звичайний користувач тощо.Можливі ролі
//користувачів будемо зберігати як статичну властивість roles — об'єкт із
// властивостями.

// class User {
//   static roles = {
//     admin: "admin",
//     editor: "editor",
//     basic: "basic",
//   };

//   #email;
//   #role;

//   constructor({ email, role = User.roles.basic }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.roles.admin,
// });

// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"

class Car {
  #price;
  static maxPrice = 50000;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice <= Car.maxPrice ? newPrice : this.#price;
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
