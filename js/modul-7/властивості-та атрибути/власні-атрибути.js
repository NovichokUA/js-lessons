// Власні атрибути
// Специфікацією HTML визначено вичерпний перелік атрибутів, які ми можемо додавати на ті
// чи інші теги(DOM - елементи) для того, щоб розмітка лишалась валідною, але інколи цього
// переліку недостатньо.Бувають випадки, коли нам потрібно зберегти певну інформацію на
// тезі, наприклад, вказати тип дії кнопки, щоб потім у певний момент часу мати можливість
// отримати до неї доступ.І тут на допомогу приходять власні data - атрибути.
// Власні атрибути дозволяють додати до тегу довільний атрибут і отримати його значення в
// JavaScript.

// 
// 
<button type="button" data-action="save">Save text</button>
<button type="button" data-action="close">Close editor</button>
//
//
// Отримання значень
// Для отримання значення data - атрибута використовується властивість dataset, після якої
// через крапку пишеться ім'я атрибута без data-. Тобто data- відкидається, а інша частина
// імені записується як ім'я властивості об'єкта.
// Для отримання значення data - атрибута використовується властивість dataset, після якої
//  через крапку пишеться ім'я атрибута без data-. Тобто data- відкидається, а інша частина 
//  імені записується як ім'я властивості об'єкта.

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"


// 
// Зміна значень
// Змінити значення існуючого data - атрибута або додати новий можна так само, як і будь - якої 
// іншої властивості об'єкта в JavaScript. Щоб це зробити, треба отримати доступ до 
// DOM - елемента, а потім змінити / задати значення властивості в об'єкті dataset.
// Змінюємо значення data-action для кнопки saveBtn
saveBtn.dataset.action = "update";
// Додаємо новий data-атрибут data-role
saveBtn.dataset.role = "admin";
// Перевіримо нові значення
console.log(saveBtn.dataset.action); // "update"
console.log(saveBtn.dataset.role); // "admin"

// Тепер data-action атрибут для saveBtn має значення "update" замість "save".
//
//
// 
// Видалення атрибута
// Для видалення data-атрибута використовується оператор delete:
// Видаляємо data-атрибут data-action
delete saveBtn.dataset.action;
// Перевіримо видалення
console.log(saveBtn.dataset.action); // undefined

// data - атрибути часто використовуються з кебаб - кейсом(kebab -case), де слова розділяються
// дефісами.
// Коли потрібно отримати доступ до цих data - атрибутів через властивість dataset, атрибути
//  в кебаб - кейсі перетворюються в кемел - кейс(camelCase).Тобто дефіси видаляються, і
//  наступна літера після кожного дефіса стає великою.Наприклад, data - user - role стає
//  userRole у JavaScript:

const userBlock= document.querySelector('div[data-user-role="admin"]');

// Додаємо новий data-атрибут data-user-status
element.dataset.userStatus = "online";

console.log(element.dataset.userRole); // "admin"
console.log(element.dataset.userStatus); // "online"
