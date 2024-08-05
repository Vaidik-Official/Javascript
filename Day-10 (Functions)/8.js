function findFactorial(num) {
    if (num < 0 || !Number.isInteger(num)) {
        return "Input must be a positive integer.";
    }
    
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

const result = findFactorial(5);


console.log("The factorial of 5 is:", result);