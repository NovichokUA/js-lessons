// Методи дочірнього класу
// Дочірній клас може використовувати методи та властивості батьківського класу.Крім цього,
//     у дочірньому класі можна оголошувати методи, які будуть доступні тільки його
// екземплярам.
// // Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
// 	email: "mango@mail.com",
// 	posts: []
// });

// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost("post-1");
// editor.addPost("post-2");
// console.log(editor.posts); // ['post-1', 'post-2']

// У прикладі бачимо, що ContentEditor успадковує клас User.
// User — це базовий клас, який має приватну властивість #email.
// ContentEditor розширює клас User і має власну властивість posts.Клас ContentEditor
// також має метод addPost, який дозволяє додавати нові повідомлення до posts.
// Метод addPost — це метод дочірнього класу ContentEditor.Він буде доступний тільки
// екземплярам ContentEditor.

// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес
// користувачів.Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список.Метод повинен
//  додавати значення параметра email в масив, що зберігається у властивості
// blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.
// Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у
//  властивості blacklistedEmails, і повертати true або false.

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
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email) ? true : false;
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
mango.blacklist("poly1@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
