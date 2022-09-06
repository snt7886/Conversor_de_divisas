let cambioTotal = 0
let monedaACambiar = parseInt(prompt("¿Con que deseas cambiar tus Dólares? 1_Pesos argentinos, 2_Euros o 3_Reales brasileños"))
let monedaEleccion = true
let cantidad
let monto

//Objeto
class Monedas {
    constructor (nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }
    cambiarPrecio (nuevoPrecio) {
        this.precio = nuevoPrecio
    }
}
const pesoArg = new Monedas ("Peso argentino", 144.50867)
const euro = new Monedas ("Euro", 1.00145)
const real = new Monedas ("Real brasileño", 5.20231)


while (monedaEleccion===true){
    cantidad = parseInt(prompt("¿Cuanto quiere cambiar?"))
    function cambio (cambioTotal, cantidad){
        if (monedaACambiar===1){
            cambioTotal = cantidad*pesoArg.precio
            //Dólar a Peso Argentino BCRA
        } else if (monedaACambiar===2){
            cambioTotal = cantidad*euro.precio
            //Dólar a Euro
        } else if (monedaACambiar===3){
            cambioTotal = cantidad*real.precio
            //Dólar a Real Brasileño
        }else {
           alert ("Porfavor, ingrese una moneda existente")          
        }
        return cambioTotal
    }
    monto = cambio (cambioTotal, cantidad)
    alert ("Tu saldo es de "+monto)
    break
}
let proximamente = prompt("¿Qué divisa le gustaria que agreguemos?")
let divisas = []
let i = 1
while (i<=2) {
    divisas.push (proximamente)
    i++
    console.log (divisas)
}
