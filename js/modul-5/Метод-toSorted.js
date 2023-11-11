// Метод toSorted() сортує елементи масиву. array.toSorted();

// Сортує вихідний масив.
// Повертає новий масив.
// За замовчуванням сортує за зростанням

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();
// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Оскільки за замовчуванням перед сортуванням метод toSorted() приводить усі елементи масиву до рядків, то фактично елементи сортуються як рядки,
//тобто на основі їхніх значень у таблиці Unicode.Стандартне сортування чисел виглядає незвично, коли ми думаємо про числа, але зрозуміло,
//якщо знати, що числа були перетворені на рядки.

// const scores = [27, 2, 41, 4, 7, 3, 75];
// console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

// При такому сортуванні рядки порівнюються за символами зліва направо, тобто спочатку порівнюються рядки 2 і 27. Перший символ 2 у них
// однаковий, але рядок 2 містить лише 1 символ, тому він менший, ніж рядок 27, і йде першим.// Потім порівнюються рядки 27 і 3. Перший
// символ у рядку 3 більший за перший символ 2 у рядку 27, тому 3 йде після 27.

// Масив рядків сортується за алфавітом.
// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
// Водночас порядковий номер великих літер менший, ніж у малих.
// const letters = ["b", "B", "a", "A", "c", "C"];
// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

// Свій порядок сортування чисел
// Для зазначення свого порядку сортування методу toSorted(compareFunction) потрібно передати колбек-функцію з двома параметрами.
// Це функція порівняння (compare function), порядок сортування залежить від її результату. Метод toSorted() буде викликати її для двох довільних елементів.
// array.toSorted((a, b) => {
//   // Callback function body
// });
// a — перший елемент для порівняння.
// b — другий елемент для порівняння.
// Сортування за зростанням
// Якщо виклик compareFunction(a, b) повертає будь-яке негативне значення, тобто a менше b, сортування поставить a перед b.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Сортування за спаданням
// Якщо виклик compareFunction(a, b) повертає будь-яке позитивне значення, тобто b більше a, сортування поставить b перед a.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню
//  до всіх інших елементів.Зверни увагу, що при сортуванні масиву чисел і передачі в метод toSorted() колбек - функції,
// числа вже не будуть приводитися до рядків, тобто їх сортування буде очікуваним і звичним.

// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().
// firstString.localeCompare(secondString)
// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).
// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0
// Повертає негативне значення, якщо firstString повинен бути перед secondString
// Повертає позитивне значення, якщо firstString повинен бути після secondString
// Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється
// Метод localeCompare() зручно використовувати для сортування рядків, оскільки метод toSorted() очікує такі самі значення від колбек-функції.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder);

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];
// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstAutor, secondAouter) =>
//   firstAutor.author.localeCompare(secondAouter.author)
// );
// const sortedByReversedAuthorName = books.toSorted((firstAutor, secondAouter) =>
//   secondAouter.author.localeCompare(firstAutor.author)
// );
// const sortedByAscendingRating = books.toSorted(
//   (firstAutor, secondAouter) => firstAutor.rating - secondAouter.rating
// );
// const sortedByDescentingRating = books.toSorted(
//   (firstAutor, secondAouter) => secondAouter.rating - firstAutor.rating
// );
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);
// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books.filter((book) => book.rating >= MIN_BOOK_RATING);
//   .flatMap((namess) => namess.author)
//   .toSorted((a, b) => a.localeCompare(b));
const namesAuthur = names.map((namess) => namess.author);
const namesAuthurChenge = namesAuthur.toSorted((a, b) => a.localeCompare(b));

console.log(names);
console.log(namesAuthur);
console.log(namesAuthurChenge);
