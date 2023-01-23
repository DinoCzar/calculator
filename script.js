let display = document.querySelector('#display');
let displayContent = document.createElement('div');
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

operators.forEach((currentOperator) => currentOperator.addEventListener('click', function(e) {
    operation(e.target.textContent);
    displayContent.textContent = previousValue;
}));

function handleNumber(number) {
    currentValue += number;
};

function operation(currentOperator) {
    if (previousValue === '') {
        previousValue = 0;
    } else {
        Number(previousValue);
    };

    if (previousOperator === '') {
        previousOperator = '+';
    };

    currentValue = Number(currentValue);

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
    previousOperator = currentOperator;
};

equals.addEventListener('click', function() {
    if (previousValue === '') {
        previousValue = 0;
    } else {
        Number(previousValue);
    };

    if (previousOperator === '') {
        previousOperator = '+';
    };

    currentValue = Number(currentValue);

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
    displayContent.textContent = previousValue;
});

clear.addEventListener('click', function() {
    previousValue = '';
    currentValue = '';
    operator = '';
    displayContent.textContent = currentValue;
});