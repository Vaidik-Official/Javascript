let purchaseAmount = 250;
let discount = 30;
let subTotal = purchaseAmount - discount;
let tax = subTotal * 0.08;
let serviceFee = 20;
let totalBillAmount = subTotal + tax + serviceFee;
console.log("Total bill amount: $" + totalBillAmount.toFixed(1));