// Метод insertAdjacentHTML()
// Метод insertAdjacentHTML() — це сучасний метод для додавання рядка з HTML - тегами перед,
// після або всередину елемента.Він вирішує проблему innerHTML з повторною серіалізацією
// вмісту елемента під час додавання розмітки до вже існуючої.

element.insertAdjacentHTML(position, string);

// Аргумент position — це рядок, який визначає позицію щодо елемента element.Він приймає
// одне з чотирьох значень.
// Аргумент position — це рядок, який визначає позицію щодо елемента element.Він приймає
// одне з чотирьох значень.
//
// в папці img лежить схема
("beforebegin"); //— перед element
("afterbegin"); //— всередині element, перед усіма дітьми
("beforeend"); //— всередині element, після усіх дітей
("afterend"); //— після element

// Значення "beforebegin" і "afterend" працюють тільки тоді, коли element вже знаходиться в
// DOM - дереві.Обмеження зумовлене тим, що неможливо дізнатися, куди вставляти розмітку,
//     доти, доки елемент не буде перебувати в DOM - дереві.
<ul class="list">
  <li class="list-item">HTML</li>
  <li class="list-item">CSS</li>
  <li class="list-item">JavaScript</li>
</ul>;

const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
