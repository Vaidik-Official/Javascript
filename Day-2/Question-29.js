let purchaseAmount = 500;
let voucher = 50;
let subTotal = purchaseAmount - voucher;
let tax = subTotal * 0.12;
let tip = subTotal * 0.18;
let serviceCharge = 25;
let totalBillAmount = subTotal + tax + tip + serviceCharge;
console.log("Total bill amount: $" + totalBillAmount.toFixed(1));