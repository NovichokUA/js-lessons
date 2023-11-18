// Властивість textContent
// Властивість textContent повертає весь текстовий контент усередині елементів(власних і
// вкладених елементів).

// <p class="text">Username: <span class=”sub-text”>Mango</span></p>

// Для отримання текстового контенту елемента, як завжди, отримуємо посилання на елемент і
// звертаємося до властивості через крапку.

// const el = document.querySelector(".text")
// const nested = document.querySelector(".sub-text")

// console.log(el.textContent); // "Username: Mango"
// console.log(nested.textContent); // "Mango"

// Властивість textContent можна як читати, так і змінювати.Неважливо, що буде передано в
// textContent, дані завжди будуть записані як текст.
