// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// console.log(sum(2, 5));

// console.log(toReversed.createReversedArray(12, 85, 37, 4).split(","));

function createReversedArray() {
  // let i = arguments[0];
  // let c = [];
  // for (i of arguments) {
  //   c.push(i);
  // }
  // const b = c.toReversed();
  // return b;
  const newArray = Array.from(arguments).toReversed();
  return newArray;
}

console.log(createReversedArray(412, 371, 94, 63, 176));

// const i = [12, 85, 37];
// const c = i.toReversed();
// console.log(c);
function foo(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
const numbers = [1, 2, 3, 4, 5];
console.log(foo(numbers));
// console.log(numbers);
// console.log(foo(numbers));
