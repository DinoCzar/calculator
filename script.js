const display = document.querySelector('#display');
const displayContent = document.createElement('div');
displayContent.setAttribute('id', 'displayContent');
display.appendChild(displayContent);

let clear = document.querySelector('#clear');
let equals = document.querySelector('#equals');

let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

let previousOperator = '';
let previousValue = '';
let currentValue = '';

numbers.forEach((number) => number.addEventListener('click', function(e) {
    handleNumber(e.target.textContent)
    displayContent.textContent = currentValue;
}));

operators.forEach((op) => op.addEventListener('click', function(e) {
    handleOperator(e.target.textContent);
    displayContent.textContent = previousValue;
}))

function handleNumber(num) {
    currentValue += num;
}

function handleOperator(op) {
    if (previousValue === '') {
        previousValue = 0;
    } else {
        Number(previousValue);
    };

    if (previousOperator === '') {
        previousOperator = '+';
    };

    currentValue = Number(currentValue);

console.log('previous value: ' + previousValue)
console.log('current value: ' + currentValue)

    if (previousOperator === '+') {
        previousValue += currentValue;
    } else if (previousOperator === '-') {
        previousValue -= currentValue;
    } else if (previousOperator === 'x') {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    currentValue = '';
console.log('previous value: ' + previousValue)
console.log('current value: ' + currentValue)
console.log('previous operator: ' + previousOperator)

    previousOperator = op;

    console.log('previous operator: ' + previousOperator)


}

clear.addEventListener('click', function() {
    previousValue = '';
    currentValue = '';
    operator = '';
    displayContent.textContent = currentValue;
});

equals.addEventListener('click', function() {
    calculate()
    displayContent.textContent = previousValue;
})

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === 'x') {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}




/*

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

const operation = function (firstNumber, operator, secondNumber) {
    if ((operator === '/') && (secondNumber === 0)) {
        return 'Not so fast';
    } else if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    }
};

const display = document.querySelector('#display');
const displayContent = document.createElement('div');
displayContent.setAttribute('id', 'displayContent');
display.appendChild(displayContent);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', () => calculate(button)));

function calculate(button) {

    displayContent.textContent = (displayContent.textContent += button.textContent);
    displayValue = displayContent.textContent;

    if (button.textContent === '=') {

        if(displayValue.includes('+')) {
            var operator = '+';
        } else if (displayValue.includes('-')) {
            var operator = '-';
        } else if (displayValue.includes('*')) {
            var operator = '*';
        } else if (displayValue.includes('/')) {
            var operator = '/';
        };

        var firstNumber = Number(displayValue.substring(0, (displayValue.indexOf(operator))));
        var secondNumber = Number(displayValue.substring(displayValue.indexOf(operator) + 1).slice(0,-1));
        displayContent.textContent = operation(firstNumber, operator, secondNumber);
    };

    if (button.textContent === 'C') {
        displayContent.textContent = '';
    };
};

*/