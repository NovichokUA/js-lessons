"use strict";
// const user = {
//   username: "Victor",
//   showName() {
// 		// ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
//     console.log(user.username);
//   },
// };
// user.showName();
// Замість імені об'єкта, ми використовуємо зарезервоване ключове слово this.
// Під час виклику функції у this записується посилання на об'єкт, у контексті
// якого вона була викликана.Таким чином, у тілі функції ми можемо отримати
// доступ до властивостей і методів цього об'єкта.
// const user = {
//   username: "Victor",
//   showName() {
// 		// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     console.log(this.username);
//   },
// };
// user.showName();
// Метод showName — це функція, яка викликається в контексті об'єкта user.
// Під час її виклику в this записується посилання на об'єкт user, і ми можемо
// звертатися до його властивостей і методів.

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);
//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }
//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
// console.log(pizzaPalace.order("Big Mike"));
// Значення this визначається не на момент оголошення функції(за винятком стрілкових
// функцій), а на момент її виклику.Іншими словами, this визначається тим, як саме
// функцію викликали, а не де вона була оголошена.
// console.log(pizzaPalace.order("Four Viennese"));
// function foo() {
//   console.log(this);
// }
// foo();
// У глобальному контексті, якщо функція виконується не в суворому режимі, this
// посилається на об'єкт window. Об'єкт window надає доступ до браузерних властивостей
// і функцій та є глобальним контекстом виконання для скриптів у браузері.
// У суворому режимі значення this у глобальному контексті завжди буде undefined.
// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   },
// };
// user.showThis();
function showThis() {
  console.log("this in showThis: ", this);
}
const user = {
  username: "Poly",
};
user.showContext = showThis;
// Викликаємо в контексті об'єкта
user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}
// Викликаємо в глобальному контексті
showThis(); // "this in showThis: undefined"

const book = {
  updateTitle(newTitle) {
    // ...
  },
};
const update = book.updateTitle;
console.log(update("Lord Of The Rings"));
console.log(update === book.updateTitle);
