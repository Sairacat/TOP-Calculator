const buttons = document.querySelectorAll('.input')
const display = document.querySelector('.display')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clearButton')

numberButtons.forEach(button => button.addEventListener('click', function(e) {
    if(display.textContent === '0') {
        display.textContent = '';
        display.textContent = e.target.textContent;
    }else {
        display.textContent += e.target.textContent
    }
}))

operatorButtons.forEach(button => button.addEventListener('click', function(e) {
     display.textContent += e.target.textContent
}))

clearButton.addEventListener('click', function(e) {
    display.textContent = '0'
})
display.textContent = '0'



buttons.forEach(button => button.classList.add('changeColor'))






function sum(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}