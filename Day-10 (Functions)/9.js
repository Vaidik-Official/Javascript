function printMultiplicationTable(number) {

    if (isNaN(number) || number <= 0) {
        console.log("Please enter a positive number.");
        return;
    }
    

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${number} = ${i * number}`);
    }
}


printMultiplicationTable(3);