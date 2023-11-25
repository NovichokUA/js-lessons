// Доступ до атрибутів
// DOM-елементам відповідають HTML-теги, які містять текстові атрибути.
// Доступ до атрибутів здійснюється за допомогою стандартних методів.Ці методи працюють зі
// значенням, яке знаходиться в HTML.

<img
  class="image"
  src="<https://picsum.photos/id/15/320/240>"
  alt="Rocks and waterfall"
  width="300"
/>;

//
//
// Метод element.hasAttribute(nameAttribute)
// Метод element.hasAttribute(nameAttribute) приймає один аргумент — рядок nameAttribute,
// який містить ім’я атрибута для перевірки та повертає результат перевірки його наявності
// на елементі element — true чи false.

const image = document.querySelector(".image");
console.log(image.hasAttribute("src")); // true
console.log(image.hasAttribute("href")); // false

//
//
// Метод element.getAttribute(nameAttribute)
// Метод element.getAttribute(nameAttribute) отримує один аргумент — рядок nameAttribute з
// іменем атрибута, і повертає значення цього атрибута для вказаного HTML - елемента
// element.Якщо атрибут не знайдено, метод повертає null.

console.log(image.getAttribute("alt")); // "Rocks and waterfall"

//
//
// Метод element.setAttribute(nameAttribute, value)
// Метод element.setAttribute(nameAttribute, value) приймає два аргументи: рядок
// nameAttribute з іменем атрибута, який потрібно встановити або змінити, та value зі
// значенням, яке цьому атрибуту треба присвоїти.Метод встановлює або змінює значення
// зазначеного атрибута для вказаного HTML - елемента element.

image.setAttribute("alt", "Amazing nature");
console.log(image.getAttribute("alt")); // Amazing nature

//
//
// Метод element.removeAttribute(nameAttribute)
// Метод element.removeAttribute(nameAttribute) приймає один аргумент — рядок nameAttribute
// з іменем атрибута, який потрібно видалити зі вказаного HTML - елемента element — та
// видаляє його.Якщо зазначеного атрибута немає на елементі, метод не викликає жодних
// помилок та не робить нічого.

image.removeAttribute("alt");
console.log(image.hasAttribute("alt")); // false

// Отримати доступ або змінити значення деяких атрибутів елемента можна безпосередньо,
//     звернувшись до них як до властивостей DOM - об'єкта. Це буде менш затратно за кількістю
// коду.
