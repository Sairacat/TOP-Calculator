const buttons = document.querySelectorAll('.input')
const display = document.querySelector('#display')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clearButton')
const equalButton = document.querySelector('.equal')
const decimalButton = document.querySelector('.decimal')
const percentButton = document.querySelector('.percent')
const operatorArray = ['+', '-', '*', '/', '.']

let isCalculated = false
let operator = ''
let num1 = ''
let num2 = ''

numberButtons.forEach(button => button.addEventListener('click', function(e) {
    let inputnNumber = e.target.textContent
    let isNum2 = false
    if(operator !== '' && num1 !== '') {
      isNum2 = true  
    }

    if(!isNum2) {
      if(num1 === '') {
        if(display.value === '0') {
          display.value = e.target.textContent
          num1 += inputnNumber
        }else {
          if(isCalculated) {
            display.value = e.target.textContent
            num1 += inputnNumber
            isCalculated = false
          }     
        }
      }else {
          display.value += e.target.textContent
          num1 += inputnNumber
        }
      }
   

    if(isNum2){
        if(num2 === '') {
          display.value = e.target.textContent
          num2 += inputnNumber
       }else {
          display.value += e.target.textContent
          num2 += inputnNumber
       }
        
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
    display.value = parseFloat(result.toFixed(6)).toString()
    operator = ''
    num1 = ''
    num2 = ''
    isCalculated = true
})

decimalButton.addEventListener('click', function(e) {
    let currentValue = display.value
    let lastChar = currentValue.slice(-1)
    let isNum2 = false
    if(num1 !== '' && operator !== '') {
        isNum2 = true
    }
    if(operatorArray.includes(lastChar)) {
        return
    }
    if(isCalculated) {
        return
    }
    if(currentValue.includes('.')) return
    if(operator !== '' && num2 === '') return

    if(!isNum2) {
        num1 += e.target.textContent
        display.value += e.target.textContent
        currentValue = display.value
    }

    if(isNum2) {
        num2 += e.target.textContent
        display.value += e.target.textContent
        currentValue = display.value
    }
    
})

percentButton.addEventListener('click', function(e) {
    let currentValue = display.value
    let lastChar = currentValue.slice(-1)
    const currentArray = currentValue.split(/([\*\/\+-])/)
    if(operatorArray.includes(lastChar)) {
        return
    }
    if(currentArray.length === 3) {
        return
    }
    num1 = Number(currentValue)
    let result = num1 / 100
    display.value = parseFloat(result.toFixed(6)).toString()
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
