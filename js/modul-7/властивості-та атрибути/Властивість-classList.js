// Властивість classList
// Для того щоб із JavaScript коду прочитати, додати, видалити або перевірити наявність
// CSS - класу в елемента, у властивості classList зберігається об'єкт із методами для
// роботи з CSS - класами елемента.
<a class="link is-active" href="<https://goit.global>">
  GoIT
</a>;

//     Властивість classList — це спеціальний тип об’єкта, який подібний до масиву.Зверни
// увагу, що він схожий, але не є нативним JavaScript - масивом, який ми вивчали раніше.Він
// зберігає в собі весь перелік класів DOM - елемента, властивість length і властивість
// value.
// властивість value містить точне значення атрибута class
// властивість length — кількість класів в елемента
// Але самі по собі value та length майже не використовуються, тому що для операцій з
// класами(додавання, видалення тощо) є спеціальні методи.
const link = document.querySelector(".link");
console.log(link.classList);
// ["link", "is-active", length: 2, value: "link is-active"]

// Метод classList.contains(className)
// Метод classList.contains(className) очікує аргументом рядок з іменем класу та повертає
// true або false, залежно від наявності класу className в елемента.
// Зверни увагу, що className передаємо як рядок без крапки (без селектора класу).

// const hasActiveClass = link.classList.contains("is-active"); // true
const hasActiveClass = link.classList.contains("title"); // false

// Метод classList.add(className)
// Метод classList.add(className) очікує аргументом рядок з іменем класу та додає клас
// className до списку класів елемента.

link.classList.add("special");
console.log(link.classList);
// ["link", "is-active", "special", length: 3, value: "link is-active special"]
// Можна додавати більше одного класу, вказавши кілька аргументів через кому.

// Метод classList.remove(className)
// Метод classList.remove(className) очікує аргументом рядок з іменем класу та видаляє
// клас className зі списку класів елемента.

link.classList.remove("is-active");
console.log(link.classList);
// ["link", "special", length: 2, value: "link special"]

// Якщо спробувати видалити клас, якого не існує на елементі, то це не викличе помилку.
// Просто нічого не видалиться.

// Метод classList.toggle(className)
// Метод classList.toggle(className) працює як перемикач:
// якщо клас className відсутній, то додає його в кінець списку класів
// і навпаки, якщо клас className присутній — видаляє його

link.classList.toggle("is-active");
console.log(link.classList);
// ["link", "special", "is-active", length: 3, value: "link special is-active"]

// Метод classList.replace(oldClassName, newClassName)
// Метод classList.replace(oldClassName, newClassName) очікує 2 аргументи рядка
//     (перший — стара назва класу, другий — нова назва класу) та замінює існуючий клас
// oldClassName на вказаний newClassName.

link.classList.replace("special", "regular");
console.log(link.classList);
// ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

// Якщо спробувати поміняти клас, якого не існує на елементі, то це не викличе помилку.
// Просто нічого не поміняється.
