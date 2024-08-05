function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const area = calculateArea(2);


console.log("The area of the circle is:", area.toFixed(2));