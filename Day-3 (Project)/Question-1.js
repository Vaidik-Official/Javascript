
function calculateAreaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const radius = parseFloat(prompt("Enter the radius of the circle:"));

if (isNaN(radius) || radius <= 0) {
    console.log("Please enter a valid positive number for the radius.");
} else {

    const area = calculateAreaOfCircle(radius);
    
    console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}.`);
}
