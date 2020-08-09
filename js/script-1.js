const age = 10;
const totalPrice = 200.74;
const userName = "John";
const message = "Привет";
const isOpen = true;
const shouldConfirm = false;

console.log("Вік -", age);

const shouldMoney = confirm("U want easy money?");
console.log(shouldMoney);

let quantity = prompt("введите сумму");
quantity = Number(quantity);
console.log("Сумма -", quantity);
console.log(typeof quantity);
