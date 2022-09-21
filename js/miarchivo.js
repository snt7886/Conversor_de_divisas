let resultado = 0



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
const real = new Monedas ("Real", 5.20231)

const divisas = [pesoArg, euro, real]



function cambio (cantidad){
    if (monedaACambiar===1){
        resultado = cantidad*divisas[0].precio
    } else if (monedaACambiar===2){
        resultado = cantidad*divisas[1].precio
    } else if (monedaACambiar===3){
        resultado = cantidad*divisas[2].precio
    }
}

let monedaACambiar = parseInt(prompt("¿Con que deseas cambiar tus Dólares? 1_Pesos argentinos, 2_Euros o 3_Reales brasileños"))

while (monedaACambiar!==1&&monedaACambiar!==2&&monedaACambiar!==3){
    monedaACambiar = parseInt(prompt("Porfavor, ingrese una moneda existente: 1_Pesos argentinos, 2_Euros o 3_Reales brasileños"))
}

let cantidadUsuario = parseInt(prompt("¿Cuanto quiere cambiar?"))

cambio(cantidadUsuario)

alert ("Tu saldo es de "+resultado)


let usuarioMoneda = prompt("¿Que moneda deseas? Euro, Real o Peso argentino")
function buscarMoneda(parametro){
    const found = divisas.find(element => element.nombre === parametro)
    return found
}
const monedaEncontrada = buscarMoneda(usuarioMoneda)

alert ("Tu moneda es "+monedaEncontrada.nombre)

localStorage.setItem("clave", "Hola")

let item = localStorage.getItem("clave")

console.log(item)
