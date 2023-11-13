// Конструктор дочірнього класу
// У конструкторі дочірнього класу необхідно викликати спеціальну функцію super(args) — це
// псевдонім конструктора батьківського класу.
// В іншому випадку при спробі звернутися до this у конструкторі дочірнього класу виникне
// помилка.
// Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для
// ініціалізації властивостей.

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email); // Виклик конструктора батьківського класу User
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({
//   email: "mango@mail.com",
//   posts: [],
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"

//
//
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, access }) {
    super(email);
    this.access = access;
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});
mango.basic = Admin.role.BASIC;
console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"
console.log(Admin.role);
