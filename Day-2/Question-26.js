let purchaseAmount = 300;
let discount = 50;
let subTotal = purchaseAmount - discount;
let tax = subTotal * 0.10;
let deliveryFee = 15;
let totalBillAmount = subTotal + tax + deliveryFee;
console.log("Total bill amount: $" + Math.round(totalBillAmount));