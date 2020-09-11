const regex = /^ES\d{2}(\s?\d{4}){5}$/
const pais = /^ES/
const control = /\d{2}/
const iban = 'ES6600190020961234567890'
const ibanSpaces = 'ES66 0019 0020 9612 3456 7890'
console.log(regex.test(ibanSpaces))
console.log(regex.test(iban))
console.log('pais', pais.exec(iban))
console.log('control', control.exec(iban))
console.log('pais', pais.exec(ibanSpaces))
console.log('control', control.exec(ibanSpaces))


//matriculas

const regexCar = /^\d{4}\s?|-?[A-Z]{3}$/i
const num = /^\d{4}/
const letras = /[A-Z]{3}$/i

const matriculas = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA']

matriculas.forEach(item => {
  console.log(regexCar.test(item))
  console.log('numeros', num.exec(item))
  console.log('letras', letras.exec(item))


})