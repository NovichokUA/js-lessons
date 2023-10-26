// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// console.log(sum(2, 5));

// console.log(toReversed.createReversedArray(12, 85, 37, 4).split(","));

function createReversedArray() {
  let i = arguments[0];
  let c = [];
  for (i of arguments) {
    c.push(i);
  }
  const b = c.toReversed();
  return b;
}

console.log(createReversedArray(412, 371, 94, 63, 176));

// const i = [12, 85, 37];
// const c = i.toReversed();
// console.log(c);
