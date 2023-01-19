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
    } else {
        return alert('Please enter a valid operation');
    }
}

const display = document.querySelector('#display');
const displayContent = document.createElement('div');
displayContent.setAttribute('id', 'displayContent');
display.appendChild(displayContent);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => button.addEventListener('click', () => calculate(button)));

function calculate(button) {
    var operator = '+';
    var secondNumber = 4;
    displayContent.textContent = (displayContent.textContent += button.textContent);
    if (button.textContent === '+') {
        var firstNumber = Number(displayContent.textContent.slice(0,-1));
        operator = button.textContent;
    }

    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);


    const equals = document.querySelector('#equals');
    equals.addEventListener('click', () => {
    displayContent.textContent = operation(firstNumber, operator, secondNumber);
})
}



