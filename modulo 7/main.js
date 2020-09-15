const regex = /^(ES)(\d{2})[\s?\d{4}]+$/
const iban = 'ES6600190020961234567890'
const ibanSpaces = 'ES66 0019 0020 9612 3456 7890'
console.log(regex.test(ibanSpaces))
console.log(regex.test(iban))
console.log('sin espacios', regex.exec(iban))
console.log('con espacios', regex.exec(ibanSpaces))


//matriculas

const regexCar = /^(\d{4})\s?|-?([A-Z]{3})$/i

const matriculas = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA']

matriculas.forEach(item => {
  console.log('car', regexCar.test(item))
  console.log('car', regexCar.exec(item))


})