
function calculatePerimeterOfCircle(radius) {
    return 2 * Math.PI * radius;
}

const radius = parseFloat(prompt("Enter the radius of the circle:"));
if (isNaN(radius) || radius <= 0) {
    console.log("Please enter a valid positive number for the radius.");
} else {
  
    const perimeter = calculatePerimeterOfCircle(radius);
    
   console.log(`The perimeter (circumference) of the circle with radius ${radius} is ${perimeter.toFixed(2)}.`);
}
