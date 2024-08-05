  function double(num) {
    return num * 2;
}
function square(num) {
    return num * num;
}
function doubleSquare(num) {
    const doubled = double(num);
    return square(doubled);
}
const result = doubleSquare(3);
console.log("The result of doubleSquare(3) is:", result);