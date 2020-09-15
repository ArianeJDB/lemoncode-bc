const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];
let subtotal = 0
let iva = 0
let total = 0
const button = document.querySelector('button')
button.disabled = true

function renderProducts() {
  const productsContainer = document.querySelector('.products_container')
  const list = document.createElement('ol')
  list.setAttribute('class', 'list')

  for (const product of products) {
    const item = document.createElement('li')
    item.setAttribute('class', 'item')
    const input = document.createElement('input')
    input.setAttribute("type", "number")
    input.setAttribute("value", 0)
    item.innerHTML = `${product.description} - ${product.price}€/ud`
    productsContainer.appendChild(item)
    productsContainer.appendChild(input)

    input.addEventListener('change', event => setSubtotal(event.currentTarget.value, product))
  }
}
renderProducts()


function setSubtotal(value, product) {
  subtotal += value * product.price
  setIva(product)
  enableButton(value)
}

function setIva(product) {
  console.log(product)
  iva = subtotal * product.tax / 100
  getTotal(iva)
}

function getTotal(iva) {
  total = subtotal + iva
}


function renderCalcs() {
  const subtotalEl = document.querySelector('.subtotal')
  const ivaEl = document.querySelector('.iva')
  const totalEl = document.querySelector('.total')
  subtotalEl.innerHTML = subtotal
  ivaEl.innerHTML = iva
  totalEl.innerHTML = total

}

function enableButton(value) {
  if (value) {
    button.disabled = false
  }
}

button.addEventListener('click', renderCalcs)