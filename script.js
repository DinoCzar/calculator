let display = document.querySelector('#display');
let displayContent = document.createElement('div');
displayContent.setAttribute('id', 'displayContent');
display.appendChild(displayContent);

let clear = document.querySelector('#clear');
let equals = document.querySelector('#equals');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

let previousOperator = '';
let previousValue = 0;
let currentValue = '';

numbers.forEach((number) => number.addEventListener('click', function(e) {
    handleNumber(e.target.textContent)
    displayContent.textContent = currentValue;
}));

operators.forEach((currentOperator) => currentOperator.addEventListener('click', function(e) {
    operation(e.target.textContent);
    displayContent.textContent = previousValue;
}));

function handleNumber(number) {
    currentValue += number;
};

function operation(currentOperator) {

    if (previousOperator === '') {
        previousOperator = '+';
    };
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (previousOperator === '+') {
        previousValue += currentValue;
    } else if (previousOperator === '-') {
        previousValue -= currentValue;
    } else if (previousOperator === 'x') {
        previousValue *= currentValue;
    } else if (previousOperator === '/') {
        previousValue /= currentValue;
    }

    currentValue = '';
    previousOperator = currentOperator;
};

equals.addEventListener('click', function() {
    currentValue = Number(currentValue);
    result = calculate(previousValue, previousOperator, currentValue);
    console.log(result)
    previousValue = result;
    displayContent.textContent = previousValue;
    currentValue = '';
    previousOperator = '';
});

clear.addEventListener('click', function() {
    previousValue = '';
    currentValue = '';
    operator = '';
    displayContent.textContent = currentValue;
});

function calculate(firstNumber, operator, secondNumber) {
    if (operator === '+') {
        return firstNumber + secondNumber;
    } else if (operator === '-') {
        return firstNumber - secondNumber;
    } else if (operator === 'x') {
        return firstNumber * secondNumber;
    } else if (operator === '/') {
        return firstNumber / secondNumber;
    }
};