const buttons = document.querySelectorAll('.input')
const display = document.querySelector('#display')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clearButton')
const equalButton = document.querySelector('.equal')
const decimalButton = document.querySelector('.decimal')
const percentButton = document.querySelector('.percent')
const plusOrMinusButton = document.querySelector('.plusOrMinus')
const operatorArray = ['+', '*', '/', '.']

let isCalculated = false
let operator = ''
let num1 = ''
let num2 = ''

numberButtons.forEach(button => button.addEventListener('click', function(e) {
    let inputnNumber = e.target.textContent
    let isNum2 = (operator !== '')
    if(isCalculated && operator === '') {
        num1 = ''
        isCalculated = false
    }


    if(!isNum2) {
        if(num1 === '' || num1 === '0') {
            num1 = inputnNumber
        }else {
            num1 += inputnNumber
        }
        display.value = num1
      }
   

    if(isNum2){
        if(num2 === '' || num2 ==='0') {
            num2 = inputnNumber
        }else {
            num2 += inputnNumber
        }
        display.value = num2 
    }
    



}))

operatorButtons.forEach(button => button.addEventListener('click', function(e) {
    let inputOperator = e.target.textContent
    if(inputOperator === '-') {
        if(num1 === '' && operator === '') {
            num1 = '-'
            display.value = '-'
            return
        }else if(operator !== '' && num2 === '') {
            num2 = '-'
            display.value = '-'
            return
        }
    }

    if(num1 !== '' && num1 !== '-') {
        operator = inputOperator
        return
    }

}))

clearButton.addEventListener('click', function(e) {
    display.value = '0'
    operator = ''
    num1 = ''
    num2 = ''
    isCalculated = false
})

buttons.forEach(button => button.classList.add('changeColor'))

equalButton.addEventListener('click', () => {
    let firstNum = Number(num1)
    let secondNum = Number(num2)
    let result = operate(operator,firstNum,secondNum)
    let finalResult = parseFloat(result.toFixed(6)).toString()
    display.value = parseFloat(result.toFixed(6)).toString()
    operator = ''
    num1 = finalResult
    num2 = ''
    isCalculated = true
})

decimalButton.addEventListener('click', function(e) {
    let dot = e.target.textContent
    let currentValue = display.value
    let lastChar = currentValue.slice(-1)
    let isNum2 = false
    if(num1 !== '' && operator !== '') {
        isNum2 = true
    }
    
    if(isNum2 && num2 === '') {
        currentValue = ''
    }

    if(operatorArray.includes(lastChar)) {
        return
    
    }
    if(isCalculated) {
        return
    }

    if(currentValue.includes('.')) return

    if(!isNum2) {
        if(num1 === '' || num1 === '-') {
            num1 += '0.'
            display.value = num1
            currentValue = display.value
        }else {
            num1 += e.target.textContent
            display.value += dot
            currentValue = display.value
        }
    }

    if(isNum2) {
        if(num2 === '' || num2 === '-') {
            num2 += '0.'
            display.value = num2
            currentValue = display.value
        }else {
            num2 += e.target.textContent
            display.value += dot
            currentValue = display.value
        }
    }
    
})

percentButton.addEventListener('click', function(e) {
    let isNum2 = (operator !== '')
    if(!isNum2) {
        if(num1 === '' || num1 === '-') return
        num1 = parseFloat((Number(num1) / 100).toFixed(6)).toString()
        display.value = num1
    }
    if(isNum2) {
        if(num2 === '' || num2 === '-') return
        num2 = parseFloat((Number(num2) / 100).toFixed(6)).toString()
        display.value = num2
    }
})

plusOrMinusButton.addEventListener('click', function(e) {
    let isNum2 = (operator !== '')
    if(!isNum2) {
        if(num1 === '' || num1 === '0' || num1 === '-') return
        if(num1[0] === '-') {
            num1 = num1.slice(1)
        }else{
            num1 = '-' + num1
        }
        display.value = num1
    }

    if(isNum2) {
        if(num2 === '' || num2 === '0' || num2 === '-') return
        if(num2[0] === '-') {
            num2 = num2.slice(1)
        }else {
            num2 = '-' + num2
        }
        display.value = num2
    }
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
