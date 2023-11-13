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
