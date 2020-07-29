const product = { count: 3, price: 12.55, type: "ropa" }
function getTotal(product) {
    let total;
    if (product.count === 0) {
        total = 0
    } else if (product.count > 0) {
        total = product.count * product.price
 
    } 
    console.log('total', total);
    return total;

}

function getVat(product) {
    let iva;
    if (product.type === "alimentacion") {
        iva = 0.1
    } else if (product.type === "libro") {
        iva = 0.04
    } else {
        iva = 0.21
    }
    console.log('iva', product.price * iva)
    return iva;
}
function getTotalVat(product) {
    if (product.count > 0) {
        return product.count * getVat(product)
    } else {
        return 0;
    }
  }

  function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;
  
    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
  }

getVat(product)
getTotal(product)
getTotalVat(product)
printProductPrice(product)

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

function getWage(empleado) {
    let retencion;
    if(empleado.bruto < 12000) {
        retencion = 0
    } else if (empleado.bruto < 24000) {
        retencion = 8
    } else if (empleado.bruto < 34000) {
        retencion = 16
    } else if (empleado.bruto > 24000) {
        retencion = 30
    }
    if (empleado.hijos > 0) {
        retencion = retencion - 2
    } 

    const neto = empleado.bruto - (empleado.bruto * retencion / 100)

    const netoMensual = neto / empleado.pagas

    console.log(netoMensual)
}

getWage(empleado)