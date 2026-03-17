const buttons = document.querySelectorAll('.input')
const display = document.querySelector('#display')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clearButton')
const equalButton = document.querySelector('.equal')

let isCalculated = false
let operator
let num1
let num2

numberButtons.forEach(button => button.addEventListener('click', function(e) {
    if(display.value === '0') {
        display.value = e.target.textContent;
    }else {
        if(isCalculated) {
            display.value = e.target.textContent
            isCalculated = false
        }else {
            display.value += e.target.textContent
        }
    }
}))

operatorButtons.forEach(button => button.addEventListener('click', function(e) {
    let currentValue = display.value
    let lastChar = currentValue.slice(-1)
    const operator = ['+', '-', '*', '/']
    if(operator.includes(lastChar)) {
        return
    }
     display.value += e.target.textContent
     isCalculated = false
}))

clearButton.addEventListener('click', function(e) {
    display.value = '0'
})

buttons.forEach(button => button.classList.add('changeColor'))

equalButton.addEventListener('click', () => {
    let currentValue = display.value
    const currentArray = currentValue.split(/([\*\/\+-])/)
    operator = currentArray[1]
    num1 = Number(currentArray[0])
    num2 = Number(currentArray[2])
    let result = operate(operator,num1,num2)
    display.value = result.toString()
    isCalculated = true
})




function operate(operator, num1, num2) {
    if(operator === '+') {
        return sum(num1, num2)
    }else if(operator === '-') {
        return subtract(num1, num2)
    }else if(operator === '*') {
        return multiply(num1, num2)
    }else if(operator === '/') {
        return divide(num1, num2)
    }
}

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