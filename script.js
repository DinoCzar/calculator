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

for (let i = 0; i < 10; i++) {
    const left = document.querySelector('#left');
    const numbers = document.createElement('button');
    numbers.setAttribute('id', 'numbers');
    numbers.textContent = [i];
    numbers.addEventListener('click', () => {
        console.log(i);
    });
    left.appendChild(numbers);
}

const left = document.querySelector('#left');
const right = document.querySelector('#right');

const equals = document.createElement('button');
equals.setAttribute('id', 'numbers');
equals.textContent = '=';
left.appendChild(equals);

const clear = document.createElement('button');
clear.setAttribute('id', 'numbers');
clear.textContent = 'C';
left.appendChild(clear);

const addition = document.createElement('button');
addition.setAttribute('id', 'numbers');
addition.textContent = '+';
right.appendChild(addition);

const subtraction = document.createElement('button');
subtraction.setAttribute('id', 'numbers');
subtraction.textContent = '-';
right.appendChild(subtraction);

const multiplication = document.createElement('button');
multiplication.setAttribute('id', 'numbers');
multiplication.textContent = '+';
right.appendChild(multiplication);

const division = document.createElement('button');
division.setAttribute('id', 'numbers');
division.textContent = '+';
right.appendChild(division);





console.log(operator(10, '+', 10));