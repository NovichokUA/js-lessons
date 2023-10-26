function createArrayOfNumbers(min, max) {
  let i = [];
  for (c = min; c <= max; c++) {
    c % 1 === 0;
    i.push(c);
    console.log(i);
  }
  return i;
}
console.log(createArrayOfNumbers(1, 5.999999999999999));

// function createArrayOfNumbers(min, max) {
//   for (c = min; c <= max; c++) {
//     i = c;
//     console.log(c);
//   }
//   return i;
// }
// console.log(createArrayOfNumbers(1, 3));
