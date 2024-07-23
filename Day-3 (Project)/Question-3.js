
function calculateAreaOfTriangle(base, height) {
    return 0.5 * base * height;
}


const base = parseFloat(prompt("Enter the base of the triangle:"));
const height = parseFloat(prompt("Enter the height of the triangle:"));


if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
    console.log("Please enter valid positive numbers for both base and height.");
} else {

    const area = calculateAreaOfTriangle(base, height);
    console.log(`The area of the triangle with base ${base} and height ${height} is ${area.toFixed(2)}.`);
}
