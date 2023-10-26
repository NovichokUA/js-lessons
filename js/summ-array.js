function calculateTotalPrice(order) {
  let sum = 0;
  for (let i = 0; i <= order.length - 1; i++) {
    sum += order[i];
  }
  return sum;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
