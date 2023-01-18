const add = function (a, b) {
    return a + b;
};

const subtract = function (a ,b) {
    return a - b;
};

const multiply = function (a , b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const operator = function (firstNumber, operator, secondNumber) {
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    } else {
        return alert("Please enter a valid operation");
    }
}

console.log(operator(10, '+', 10));