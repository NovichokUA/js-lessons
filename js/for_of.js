function calculateTotalPrice(order) {
  let sum = 0;
  for (let i of order) {
    sum += i;
  }
  return sum;
}
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
