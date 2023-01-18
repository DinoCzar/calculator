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
        return alert('Please enter a valid operation');
    }
}

const display = document.querySelector('#display');
const displayContent = document.createElement('div');
displayContent.setAttribute('id', 'displayContent');
display.appendChild(displayContent);

const left = document.querySelector('#left');
const right = document.querySelector('#right');

const zero = document.createElement('button');
zero.setAttribute('id', 'numbers');
zero.textContent = '0';
zero.addEventListener('click', () => {
displayContent.textContent = 0;
});
left.appendChild(zero);

const clear = document.createElement('button');
clear.setAttribute('id', 'numbers');
clear.textContent = 'C';
clear.addEventListener('click', () => {
displayContent.textContent = '';
});
left.appendChild(clear);

const equals = document.createElement('button');
equals.setAttribute('id', 'numbers');
equals.textContent = '=';
equals.addEventListener('click', () => {
displayContent.textContent = 'equal';
});
left.appendChild(equals);

const addition = document.createElement('button');
addition.setAttribute('id', 'numbers');
addition.textContent = '+';
addition.addEventListener('click', () => {
displayContent.textContent = '+';
});
right.appendChild(addition);

const subtraction = document.createElement('button');
subtraction.setAttribute('id', 'numbers');
subtraction.textContent = '-';
subtraction.addEventListener('click', () => {
displayContent.textContent = '-';
});
right.appendChild(subtraction);

const multiplication = document.createElement('button');
multiplication.setAttribute('id', 'numbers');
multiplication.textContent = 'x';
multiplication.addEventListener('click', () => {
displayContent.textContent = 'x';
});
right.appendChild(multiplication);

const division = document.createElement('button');
division.setAttribute('id', 'numbers');
division.textContent = '/';
division.addEventListener('click', () => {
displayContent.textContent = '/';
});
right.appendChild(division);

for (let i = 1; i < 10; i++) {
    const left = document.querySelector('#left');
    const numbers = document.createElement('button');
    numbers.setAttribute('id', 'numbers');
    numbers.textContent = [i];
    numbers.addEventListener('click', () => {
    displayContent.textContent += i;
    });
    left.appendChild(numbers);
}

