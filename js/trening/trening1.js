//Напишіть скрипт, який замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

// function caseToggle(string) {
//   let newString = "";
//   for (let i = 0; i < string.length; i++) {
//     newString +=
//       string[i] === string[i].toLowerCase()
//         ? string[i].toUpperCase()
//         : string[i].toLowerCase();
//   }
//   console.log(newString);
// }
// console.log(caseToggle("JavaScript"));
// console.log(caseToggle("Your review was submitted successfully"));
// console.log(caseToggle("Escape"));

// function chengeRegistr(name) {
//   let arrLiter = name.split("");
//   let arrChengeLiter = [];
//   for (const i of arrLiter) {
//     if (i === i.toUpperCase()) {
//       arrChengeLiter.push(i.toLowerCase());
//     } else {
//       arrChengeLiter.push(i.toUpperCase());
//     }
//   }

//   return arrChengeLiter.join("");
// }
// console.log(chengeRegistr("dkjhAS765Dnms"));

// let now = new Date();
// console.log(now);
// console.log(new Date().getTimezoneOffset());

// Напишіть функцію unique(arr), яка повертає масив,
// містить лише унікальні елементи arr.
// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
// ];

// function unique(arr) {
//   const uniqueArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let couter = 0;
//     for (const item of arr) {
//       if (item === arr[i]) {
//         couter += 1;
//       }
//     }
//     if (couter === 1) {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// }
// console.log(
//   unique([
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "CSS",
//     "JS",
//     "Node.js",
//     "JS",
//     "React",
//     "CSS",
//     "React",
//     "HTML",
//     "Node.js",
//   ])
// );
// console.log(unique(["HTML", "CSS", "JS", "React", "JS", "CSS", "JS"]));

// function unique(arr) {
//   let newArr = [];
//   for (const word of words) {
//     if (word === arr) {
//       newArr.push(word);
//     }
//   }
//   return newArr;
// }

// console.log(unique("React"));

// function noSpace(x) {
//   let newString = [];
//   for (const i of x.split(" ")) {
//     if (i !== "") {
//       newString.push(i);
//     }
//   }
//   return newString.join();
// }
// function noSpace(x) {
//   return x.split(" ").join("");
// }
// function noSpace(x) {
//   return x.replaceAll(" ", "");
// }
// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// function fakeBin(x) {
//   let newString = [];
//   for (let i of x.split("")) {
//     i > 5, i < 5 ? newString.push((i = 0)) : newString.push((i = 1));
//   }
//   return newString.join("");
// }
// console.log(fakeBin("45385593107843568"));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserEmails = users.map((user) => user.email);
// console.log(getUserEmails);

// function invert(array) {
//   console.log(array[0]);
//   let newArray = [];
//   for (let i = array[0]; i <= array.length; i++) {
//     if (i > 0) {
//       newArray.push(-i);
//     } else {
//       newArray.push(i ** 2);
//     }
//   }
//   return newArray;
// }

// function invert(array) {
//   return array.map((x) => (x === 0 ? x : -x));
// }

// function invert(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= -1;
//   }
//   return array;
// }
// console.log(invert([1, -2, 3, -4, 5]));

// Дано набір чисел, повернути адитивну оберненість кожного. Кожен позитив стає негативом, а негативи стають позитивом.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// function solution(str) {
//   const i = str.split("").reverse().join("");
//   return i;
// }
// console.log(solution("world"));
// const newStr = (str) => str.split("").reverse().join("");
// console.log(newStr("world"));
// const str = "world";
// console.log([...str]);

// function solution(s) {
//   var o = "";
//   for (var i = s.length - 1; i >= 0; i--) o += s[i];
//   return o;
// }
// function solution(str) {
//   let n = "";
//   for (let i of str) {
//     console.log(i);
//     n = i + n;
//   }
//   return n;
// }
// console.log(solution("world"));

// function rowSumOddNumbers(n) {
//   // TODO
//   return n * n * n;
//   //   return n + (n - 1) * (n ** 2 + n);
// }
// console.log(rowSumOddNumbers(100));
//
//
//
//
//
// //
// function accum(str) {
//   let newStr = [];
//   let splitStr = str.split("");
//   for (let index = 0; index < splitStr.length; index++) {
//     if (index >= 0) {
//       newStr.push(
//         splitStr[index].toUpperCase() +
//           splitStr[index].toLowerCase().repeat(index)
//       );
//     }
//   }

//   return newStr.join("-");
// }
// function accum(s) {
//   return [...s]
//     .map((element, index) => {
//       return element.toUpperCase() + element.toLowerCase().repeat(index);
//     })
//     .join("-");
// }
// function accum(s) {
//   return s
//     .split("")
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join("-");
// }
// console.log(accum("abcd")); // -> "A-Bb-Ccc-Dddd"

// function getCount(str) {
//   let i = 0;
//   const arrayLiter = ["a", "e", "i", "o", "u"];
//   for (const b of str.toLowerCase().split("")) {
//     for (const liter of arrayLiter) {
//       if (b === liter) {
//         i += 1;
//       }
//     }
//   }
//   return i;
// }
// console.log(getCount("esdfoaAAAnljnOE"));

// function countPositivesSumNegatives(input) {
//   // your code here

//   let totalPositives = 0;
//   let sumNegatives = 0;
//   for (const i of input) {
//     i > 0 ? (totalPositives += 1) : (sumNegatives += i);
//   }
//   let newArray = [totalPositives, sumNegatives];
//   if (input.length === 0 || input == null) {
//     return (newArray = []);
//   }
//   return newArray;
// }
// function countPositivesSumNegatives(input) {
//   return input && input.length
//     ? [
//         input.filter((p) => p > 0).length,
//         input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
//       ]
//     : [];
// }
// console.log(countPositivesSumNegatives([1, 3, 6, -8, -5]));

// const object = {
//   message: "Hello, World",
//   getMessage() {
//     const message = "Hello, Earth";
//     return this.message;
//   },
// };
// console.log(object.getMessage());

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = document.querySelector(".list");
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const lastListItem = list.lastElementChild;
// console.log(lastListItem);

// const listItems = list.children;
// console.log(listItems);

// const person = { name: "Mango" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }
// const i = sayHi.bind(sayHi);
// console.log(i());
// console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 18));

// / Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley,
// об'єкт Sharlene Bush, об'єкт Carey Barr
// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUsersWithEyeColor = (users, eyeColor) =>
//   users.filter((user) => user.eyeColor === eyeColor);
// console.log(getUsersWithEyeColor(users, "blue"));

// // Отримати масив імен користувачів за статтю (поле gender)
// // console.log(getUsersWithGender(users, 'male'));
// // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// const getUsersWithGender = (users, gender) =>
//   users.reduce((acc, user) => {
//     if (user.gender === gender) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
// console.log(getUsersWithGender(users, "male"));

// //Зібрати в allTopics масив всіх предметів всіх курсів
// //Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const uniqueTopics = (courses) =>
//   courses
//     .flatMap((cours) => cours.topics)
//     .filter((topic, index, topics) => topics.indexOf(topic) === index);
// console.log(uniqueTopics(courses));

// const uniqueTopics = (courses) =>
//   courses
//     .flatMap((cours) => cours.topics)
//     .filter((topic, index, topics) => topics.indexOf(topic) === index);

// console.log(uniqueTopics(courses));

// Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email
// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }
// }
// const client = new Client("user", "user@.gmail.com");
// console.log(client);

// Напиши класс Notes который управляет коллекцией заметок в
//свойстве items.
//Заметка это объект со свойствами id, text і priority
//Добавь классу статический метод Priopity,
//в котором будет храниться объект с приоритетами.
//Добавь методы addNote(note), removeNote(id)
//updatePriority(text, newPriority)

class Notes {
  static Priority() {
    return {
      HIGHT: "hight",
      LOW: "low",
    };
  }
  constructor(note, id) {
    this.items = [];
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(id) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
  updatePriority(id, newPriority) {
    const indexId = this.items.findIndex((item) => item.id === id);
    if (indexId !== -1) {
      this.items[indexId].priority = newPriority;
    }
  }
}
const note1 = new Notes();
note1.addNote({ text: "Note1", id: 1, priority: Notes.Priority().LOW });
note1.addNote({ text: "Note2", id: 2, priority: Notes.Priority().LOW });
note1.addNote({ text: "Note3", id: 3, priority: Notes.Priority().LOW });
note1.updatePriority((id = 1), Notes.Priority().HIGHT);
note1.removeNote(2);
console.log(note1.items);
// Створити клас Worker, у якого є властивості name, age, salary.
// У класу Worker є метод getSalary.
// Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
// і який успадковує клас Worker, додаючи метод getHierarchyLevel

// Создай класс для калькулятора, который имеет следующие методы:
// метод number, который принимает начальное значение для последующих операций
// метод getResult, который возвращает финальный результат всем операций, проведенных с числом
// методы add, substruct, divide, multiply
// объект класса принимает число и может проводить с ним
// последовательные операции в виде цепочки

// This is a JavaScript program that defines a class Worker and a subclass TopLevelWorker

// Define the class Worker
// class Worker {
//   // Initialize the properties name, age, and salary
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   // Define the method getSalary that returns the salary of the worker
//   getSalary() {
//     return this.salary;
//   }
// }

// // Define the class TopLevelWorker that inherits from the class Worker
// class TopLevelWorker extends Worker {
//   // Initialize the property hierarchyLevel
//   constructor(name, age, salary, hierarchyLevel) {
//     // Call the constructor of the parent class
//     super(name, age, salary);
//     this.hierarchyLevel = hierarchyLevel;
//   }

//   // Define the method getHierarchyLevel that returns the hierarchy level of the worker
//   getHierarchyLevel() {
//     return this.hierarchyLevel;
//   }
// }
