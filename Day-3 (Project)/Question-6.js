
function calculateAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
const number1 = parseFloat(prompt("Enter the first number:"));
const number2 = parseFloat(prompt("Enter the second number:"));
const number3 = parseFloat(prompt("Enter the third number:"));

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    console.log("Please enter valid numbers for all three inputs.");
} else {
      const average = calculateAverage(number1, number2, number3);
    console.log(`The average of the three numbers ${number1}, ${number2}, and ${number3} is ${average.toFixed(2)}.`);
}
