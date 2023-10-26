// function checkStorage(storage, item) {
//   let i = 0;
//   let lowerItem = item.toLowerCase();
//   if (storage.includes(lowerItem)) {
//     const i = `${lowerItem} is available to order!`;
//     return i;
//   } else {
//     const i = "Sorry! We are out of stock!";
//     return i;
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));

function getCommonElements(array1, array2) {
  const newArray = [];
  for (let i of array1) {
    for (let c of array2) {
      if (i === c) {
        newArray.push(i);
        console.log(newArray);
      }
    }
  }
  return newArray;
}
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
