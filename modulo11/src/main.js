import { reservas } from './reservas.js'

class Client {
    constructor(reservasObj) {
        this.reservas = reservasObj
        this.standard = 100
        this.suite = 150
        this.extra = 40
        this.iva = 0.21
    }

    setSubtotal() {
        this.reservas.forEach(item => {
            let result;
            if (item.tipoHabitacion === 'standard') {
                result = item.noches * this.standard
            } else  {
                result = item.noches * this.suite
            }
            if(item.pax > 1) {
                result = result + this.extra
            }
            console.log(result)
            this.setTotalWithIva(result)
            return result
        })
    }

    setTotalWithIva(subtotal) {
        const result = subtotal * 0.21
        console.log('total', subtotal + result)
        return subtotal + result
    }
    
}

class Tour extends Client {
    constructor(reservasObj) {
        super(reservasObj)
        this.discount = 0.15
    }

    setSubtotal() {
        this.reservas.forEach(item => {
            let result;
            result = item.noches * this.standard
            if(item.pax > 1) {
                result = result + this.extra
            }
            console.log(result)
            this.setTotalWithIva(result)
            return result
        })
    }

    setTotalWithIva(subtotal) {
        const iva = subtotal * 0.21
        const total = subtotal + iva
        console.log('total', total)
        this.setDiscount(total)
        return total
    }

    setDiscount(total) {
        const discount = total * this.discount
        const result = total - discount
        console.log('con descuento', result)
        return result
    }
    

}
const client = new Client(reservas)
client.setSubtotal()
const tour = new Tour(reservas)
tour.setSubtotal()

