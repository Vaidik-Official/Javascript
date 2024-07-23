
let purchaseAmount = 200;
let tax = purchaseAmount * 0.25;
let tip = purchaseAmount * 0.15;
let serviceCharge = 20;
let totalBillAmount = purchaseAmount + tax + tip + serviceCharge;
console.log("Total bill amount: $" + totalBillAmount.toFixed(0));   