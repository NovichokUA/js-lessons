// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }
// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }
// function registerGuest(name, center) {
//   console.log(`Registering ${name}!`);
//   center(name);
// }
// registerGuest("Mango", greet); // "Registering Mango!"
// // "Welcome Mango!"
// registerGuest("Mango", notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  callback(pizzaName);
  return callback(pizzaName);
}
console.log(makeMessage("Royal Grand", makePizza));
