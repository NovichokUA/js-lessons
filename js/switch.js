// ~ Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// ~ значення '1', то у змінну result запишемо 'зима', якщо має значення
// ~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

function checkSeason(season) {
  let result;
  switch (season) {
    case 1:
      result = "зима";
      break;
    case 2:
      result = "весна";
      break;
    case 3:
      result = "літо";
      break;
    case 4:
      result = "весна";
      break;
    default:
      result = "no such season";
  }
  return result;
}

console.log(checkSeason(3));
