function getEvenNumbers(start, end) {
  let i = [];
  for (let evenNumber = start; evenNumber <= end; evenNumber++) {
    if (evenNumber % 2 === 0) {
      i.push(evenNumber);
    }
  }
  return i;
}
console.log(getEvenNumbers(3, 11));
const fruits = ["Яблуко", "Груша", "Апельсин"];
const shoppingCart = fruits;
shoppingCart.push("Банан");
console.log(fruits.length);
