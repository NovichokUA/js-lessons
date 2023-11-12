// Перебір власних властивостей

// Оператор in, який використовується в циклі for...in, не розрізняє власні властивості
// об'єкта і його прототипу. Ця особливість заважає, оскільки зазвичай потрібно перебрати
//  тільки власні властивості.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }

// Для вибору саме власних властивостей під час перебору циклом for...in необхідно на кожній
// ітерації додати перевірку на власну властивість методом obj.hasOwnProperty(key).Цей
// метод повертає true, якщо властивість з іменем key належить об'єкту obj, а не його
// прототипу, в іншому разі — false.Розгляньмо приклад:

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
// 	if(dog.hasOwnProperty(key)) {
// 		console.log(key); // "name"
// 	}
// }

// Якщо це власна властивість — виконуємо тіло if
// Якщо це невласна властивість — нічого не робимо

// Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів
//  або значень тільки власних властивостей об'єкта obj, без необхідності додаткових
// перевірок.Через це на практиці використовують саме їх із циклом for...of, замість
// for...in і hasOwnProperty.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for(const key of Object.keys(dog)) {
// 	console.log(key); // "name"
// }

// Об'єкт, який виступає прототипом для іншого об'єкта, також може мати свій прототип.
//     Отже, існують ланцюжки прототипів.

// Давайте реалізуємо це в коді. Ланцюжок прототипів будується з кінця, тобто справа наліво.

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// Створюємо об'єкт objC.
// Потім створюємо об'єкт objB і встановлюємо objC як його прототип.
// Після цього створюємо об'єкт objA і встановлюємо objB як його прототип.

// Максимально наочно буде:

// Вивести об'єкт objA у консоль розробника.
// Розгорнути властивості.
// Подивитися на структуру.

// Ця структура точно повторює ланцюжок прототипів.

// На що вказує властивість [[Prototype]] об'єкта objC.

// Оскільки об’єкти objA, objB і objC пов'язані в ланцюжок прототипів, об'єкт objA може
// отримати доступ до властивостей objB і objC, а об'єкт objB — до властивостей objC.

// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined

// Пошук властивостей відбувається до першого збігу.Інтерпретатор шукає властивість за
// ім'ям в об'єкті:

// Якщо інтерпретатор не знаходить власну властивість, то звертається до властивості
// [[Prototype]], тобто переходить за посиланням до об'єкта-прототипу, а потім — до
// прототипу прототипу за ланцюжком.
// Якщо інтерпретатор доходить до кінця ланцюжка і не знаходить властивості з таким ім'ям,
// то повертається undefined.
const apartment = {
  rooms: 4,
  floor: 2,
  taxFree: false,
};

const condo = Object.create(apartment);
condo.rooms = 3;
console.log(condo);

class Car {}
console.log(Car);
