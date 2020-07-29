
const sumElement = document.querySelector('.sum')
const substractElement = document.querySelector('.substract')
const multiplyElement = document.querySelector('.multiply')
const divideElement = document.querySelector('.divide')
const resultElement = document.querySelector('.result')

function getValueA() {
    return parseInt(document.querySelector('.a').value)
}
function getValueB() {
    return parseInt(document.querySelector('.b').value)
}
function sum() {
    const a = getValueA()
    const b = getValueB()

    if (!a|| !b) {
        resultElement.innerHTML = 'Error'
    } else {
        resultElement.innerHTML = a + b;
    }
}

function substract() {
    const a = getValueA()
    const b = getValueB()

    if (!a || !b) {
        resultElement.innerHTML = 'Error'
    } else {
        resultElement.innerHTML = a - b;
    }

}

function multiply() {
    const a = getValueA()
    const b = getValueB()

    if (!a || !b) {
        resultElement.innerHTML = 'Error'
    } else {
        resultElement.innerHTML = a * b;
    }
}

function divide() {
    const a = getValueA()
    const b = getValueB()
    if (!a || !b) {
        resultElement.innerHTML = 'Error'
    } else {
        resultElement.innerHTML = a / b;
    }
}

sumElement.addEventListener('click', sum)
substractElement.addEventListener('click', substract)
multiplyElement.addEventListener('click', multiply)
divideElement.addEventListener('click', divide)
