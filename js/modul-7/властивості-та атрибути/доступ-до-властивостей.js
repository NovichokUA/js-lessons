// Під час побудови DOM - дерева деякі стандартні HTML - атрибути стають властивостями елементів,
// тобто властивостями DOM - об’єктів.

// Розберемо приклад:     Якщо в HTML є тег посилання,

// <a class="link" href="<https://goit.global>">GoIT</a>;

// то у JavaScript коді можна прочитати значення його атрибута href, отримавши посилання на
// елемент, тобто об'єкт, використовуючи querySelector, і звернутися до його властивості
// href

// const link = document.querySelector(".link");
// console.log(link.href); // "<https://goit.global>"

// Значення атрибутів можна змінювати, перевизначивши їм нове значення прямо з JavaScript
// коду, і під час виконання скрипта значення в HTML, тобто в DOM - дереві, зміниться.

const link = document.querySelector(".link");
console.log(link.href); // "<https://goit.global>"
link.href = "[<https://neo.goit.global>](<https://neo.goit.global/>)";
console.log(link.href); // "[<https://neo.goit.global>](<https://neo.goit.global/>)"
