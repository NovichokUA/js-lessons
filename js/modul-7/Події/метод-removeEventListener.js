// Метод removeEventListener()
// Метод removeEventListener() видаляє слухача події з елемента.
// Аргументи аналогічні методу addEventListener():

// element.removeEventListener(event, handler, options)

// Для того щоб мати можливість видаляти слухача події з елемента через
// removeEventListener, важливо використовувати ту саму функцію - обробник,
//     яка була призначена в addEventListener.З цієї причини рекомендовано
//     для обробників подій використовувати іменовані функції, які можна легко
//     передавати як аргументи.

const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("The button was pressed and now the next image will appear");
};

button.addEventListener("click", handleClick);
