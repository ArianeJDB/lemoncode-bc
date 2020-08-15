const products = [
    {
        name: "milk",
        quantity: 5,
        price: 23,
        prime: true
    },
    {
        name: "eggs",
        quantity: 2,
        price: 12,
        prime: true
    },
    {
        name: "juice",
        quantity: 1,
        price: 9,
        prime: true
    },
    {
        name: "bread",
        quantity: 1,
        price: 2,
        prime: false
    }
]



function productsListed(products) {
    const list = document.querySelector('.products_list')
   
    list.innerHTML = ''
    let total = 0;
    for (const product of products) {
        const productElement = `
        <li>
            <ul>
                <h3>${product.name}</h3>
                <li class="qty">Cantidad: ${product.quantity}</li>
                <li class=""price>Precio: ${product.price}</li>
                <li class='prime'>Es prime: ${product.prime}</li>
            </ul>
            <button class='delete-btn'>Borrar</button>
        </li>`
    list.innerHTML += productElement
    total += product.quantity * product.price
    }
    setDiscount(total)
    const buttons = document.querySelectorAll('.delete-btn')
    buttons.forEach(button => button.addEventListener('click', deleteProduct))
    setShippingPrice()
    
}
productsListed(products)

function deleteProduct(e) {
    const trigger = e.target
    const productName = trigger.previousElementSibling.querySelector('h3').innerHTML
    products.filter((product, index) => {
        if (product.name === productName) {
            products.splice(index, 1)
            productsListed(products)
        }
    })
}

function filterPrime() {
   const isPrime =  products.filter(product => product.prime)
   productsListed(isPrime)
}

function setShippingPrice() {
    const shippingEl = document.querySelector('.shipping')
    products.filter(product => {
        if(!product.prime) {
            shippingEl.innerHTML = 'Con gastos de envío'
        } else {
            shippingEl.innerHTML = 'Gastos de envío cero'
        }
    })
}
function getTotal(total) {
    const totalEl = document.querySelector('.total')
    totalEl.innerHTML = total
}
function setDiscount(total) {
    if(total > 50) {
        const discount = total * 0.05
        const totalDiscount = total - discount
        getTotal(totalDiscount)
    } else {
        getTotal(total)
    }
}
const primeButton = document.querySelector('.prime-btn')
primeButton.addEventListener('click', filterPrime)