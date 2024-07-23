
function calculateVolumeOfSphere(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}


const radius = parseFloat(prompt("Enter the radius of the sphere:"));


if (isNaN(radius) || radius <= 0) {
    console.log("Please enter a valid positive number for the radius.");
} else {
 
    const volume = calculateVolumeOfSphere(radius);
    console.log(`The volume of the sphere with radius ${radius} is ${volume.toFixed(2)}.`);
}
