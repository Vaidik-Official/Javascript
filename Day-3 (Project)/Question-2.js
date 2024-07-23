
function calculateAreaOfRectangle(width, height) {
    return width * height;
}

const width = parseFloat(prompt("Enter the width of the rectangle:"));
const height = parseFloat(prompt("Enter the height of the rectangle:"));

if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
    console.log("Please enter valid positive numbers for both width and height.");
} else {
 
    const area = calculateAreaOfRectangle(width, height);
       console.log(`The area of the rectangle with width ${width} and height ${height} is ${area.toFixed(2)}.`);
}
