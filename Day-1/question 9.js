// This is the Function to calculate the area of a Circle

function calculateArea(radius) {
    const pi = 3.14159;
    let area = pi * radius * radius;
    return area;
}

// Example:
let radius = 5;
let area = calculateArea(radius);
console.log("The area of the circle with radius", radius, "is:", area);
