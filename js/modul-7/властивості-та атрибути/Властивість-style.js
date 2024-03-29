// Властивість style використовується для читання та зміни інлайнових стилів з DOM-елементів.
// Вона повертає об'єкт, який є екземпляром інтерфейсу CSSStyleDeclaration, і містить
// список лише всіх інлайнових властивостей елемента, а не увесь CSS.
// Під час запису властивості вони записуються в camelCase нотації, замість дефісів, які
// зазвичай використовуються в CSS, тобто background - color перетворюється на
// backgroundColor.

const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object

// На практиці стилізація елементів зазвичай виконується шляхом додавання CSS-класів.
// Властивість style використовується для додавання будь - яких динамічних стилів,
// наприклад, якщо посилання на фонове зображення невідомо заздалегідь і приходить з
// бекенда.
