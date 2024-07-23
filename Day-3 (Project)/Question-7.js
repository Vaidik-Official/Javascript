
function calculateTotalSalary(basicSalary, allowances) {
    return basicSalary + allowances;
}


const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const allowances = parseFloat(prompt("Enter the allowances:"));


if (isNaN(basicSalary) || basicSalary < 0 || isNaN(allowances) || allowances < 0) {
    console.log("Please enter valid non-negative numbers for both basic salary and allowances.");
} else {

    const totalSalary = calculateTotalSalary(basicSalary, allowances);
    console.log(`The total salary of the employee is ${totalSalary.toFixed(2)}.`);
}
