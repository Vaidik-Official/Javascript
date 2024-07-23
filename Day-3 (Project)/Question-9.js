
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


const celsius = parseFloat(prompt("Enter the temperature in Celsius:"));

if (isNaN(celsius)) {
    console.log("Please enter a valid number for the temperature.");
} else {

    const fahrenheit = convertCelsiusToFahrenheit(celsius);
    
    console.log(`The temperature in Fahrenheit is ${fahrenheit.toFixed(2)}.`);
}
