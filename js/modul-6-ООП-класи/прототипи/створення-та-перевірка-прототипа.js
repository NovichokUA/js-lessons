// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.
// Якщо в коді потрібно перевірити, чи є об'єкт прототипом іншого об'єкта, використовується
// метод isPrototypeOf().

// objA.isPrototypeOf(objB)

// Метод перевіряє, чи є об'єкт objA прототипом для об’єкта objB Якщо так, повертає true,
// в іншому разі повертає false
const customer = {
  username: "Jacob",
};

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: "Mango", [[Prototype]]: animal }

console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.isPrototypeOf(animal)); // false
console.log(customer.isPrototypeOf(dog)); // false
// у першому лозі виводиться об'єкт dog із властивістями name і [[Prototype]]. [[Prototype]] вказує на animal як прототип
// у другому — повертається true, оскільки animal є прототипом для dog
// у третьому — повертається false, оскільки прототип не успадковується у зворотному
// напрямку(від dog до animal)
// у четвертому лозі повертається false, оскільки customer не є прототипом для dog

// Власні і невласні властивості

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// Властивість name належить об'єкту dog, тому називається власною властивістю об'єкта dog.
// Властивість legs не належить об'єкту dog. Це властивість його прототипу animal, тому вона
//  називається невласною властивістю об'єкта dog.
// Для того щоб перевірити, чи є в об'єкті власна властивість, використовується метод obj.hasOwnProperty(key). Цей метод перевіряє наявність власної властивості з ім'ям key і повертає true, якщо є, і false в іншому випадку.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false
