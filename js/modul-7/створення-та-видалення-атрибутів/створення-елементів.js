// Створення елементів
// DOM API(Document Object Model Application Programming Interface) має широкий функціонал.
// За його допомогою можна:
// вибирати або змінювати вже існуючі елементи
// видаляти елементи
// створювати нові елементи й додавати їх у документ
// Розглянемо, як створити новий елемент:

document.createElement(tagName);

// створює елемент з ім'ям tagName і повертає посилання на його об’єкт як результат свого
// виконання.
// tagName — це рядок, що вказує тип елемента, який створюється.
// Елемент створюється в пам'яті, у DOM його ще немає.

const heading1 = document.createElement("h1");

// Після створення елемента heading отримуємо посилання на його об’єкт у пам'яті. З цього
// моменту можна звертатися до властивостей цього об’єкта і змінювати їх ще до того, як
// вставимо цей елемент у DOM.

const heading = document.createElement("h1");
headding.classList.add("title");
heading.textContent = "This is a heading";
console.log(heading); // <h1 class="title">This is a heading</h1>

const image = document.createElement("img");
image.src = "<https://picsum.photos/id/11/320/240>";
image.alt = "Nature";
console.log(image); // <img src="<https://picsum.photos/id/11/320/240>" alt="Nature" />

//
// 
// Додавання елементів
// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого 
// елемента в DOM - дереві.Припустимо, що додаємо до певного елемента elem, для цього 
// існують такі методи.

    elem.append(el1, el2, ...) // — додає один або декілька елементів після всіх дітей елемента
// elem.
     elem.prepend(el1, el2, ...) // — додає один або декілька елементів перед усіма дітьми 
// елемента elem.
 elem.after(el1, el2, ...) // — додає один або декілька елементів після елемента elem.
elem.before(el1, el2, ...);// — додає один або декілька елементів перед елементом elem.

// У всіх цих методах el — це елементи або рядки, у будь - якому поєднанні та кількості.
// Рядки додаються, як текстові вузли.
// Зверни увагу! Якщо елемент для додавання вже знаходиться в DOM, то він видаляється зі
// свого старого місця й додається у нове.Отже, є правило: один і той самий елемент не може
// бути одночасно у двох місцях.

//
// 
// Видалення елементів
// Для того щоб видалити елемент, використовується метод element.remove().

    <p p class="text" > Random text content</p >;

// Він викликається на елементі element, який необхідно видалити.

const text = document.querySelector(".text")
text.remove();

//
// 
// Властивість innerHTML
// Існує ще один спосіб створити DOM-елементи і помістити їх у DOM-дерево.
// Для цього треба використати рядки з тегами і дозволити браузеру зробити всю важку роботу.
//  У такого підходу є свої плюси та мінуси.
// Читання
// Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка.
// Значення, що повертається, — це завжди валідний HTML - код.

// Зміна
// Властивість innerHTML доступна і для читання, і для запису.Якщо записати в неї рядок з
// HTML - тегами, то браузер під час парсингу рядка перетворить його у валідні елементи і 
// додасть у DOM - дерево.
const title = document.querySelector(".article .title");
title.innerHTML = 'New and <span class="accent">improved</span> title';
// 
// 
// 
// Однотипна (шаблонна) розмітка створюється із масиву даних.
// Прийом полягає в перебиранні цього масиву та створенні одного рядка з HTML - тегами,
//     який потім записуємо в innerHTML елемента.Якщо ти будеш це робити за допомогою 
//     методу map(), не забудь, що він повертає масив.Отже, перед тим як додавати розмітку 
//     в DOM, цей масив треба привести до рядка за допомогою методу join()
<section>
  <h2>Popular technologies</h2>
  <ul class="list"></ul>
</section>
// 
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");
const markup = technologies.map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");
// Check the console, you'll see a single string with HTML tags
console.log(markup);
// Adding all the markup in one operation
list.innerHTML = markup;
//
//
// 
// Нове значення для element.innerHTML повністю видалить і повторно створить усіх нащадків 
// елемента element.Якщо елемент спочатку не був порожній, то виникнуть додаткові витрати 
// на повторне створення вже існуючої розмітки, а це погано.
<article class="article">
  <h2>Article title</h2>
</article>

const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;
// Replace += with = operator. See the difference? 
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;
// 
// Використовуй властивість element.innerHTML для додавання тільки у разі, 
// — коли елемент element порожній або
// — якщо потрібно повністю замінити вміст element