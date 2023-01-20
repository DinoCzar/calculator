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
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    }
}

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