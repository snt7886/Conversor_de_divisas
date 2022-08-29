let CambioTotal = 0
let MonedaACambiar = parseInt(prompt("¿Qué moneda deseas cambiar? 1_Pesos Argentino, 2_Dólar, 3_Euro o 4_Real Brasileño"))
let MonedaEleccion = true
let Cantidad
let MonedaCambio
let Monto
while (MonedaEleccion===true){
    if (MonedaACambiar===1){
        MonedaCambio = parseInt(prompt("Elija un cambio: 1_Dólar, 2_Euro o 3_Real Brasileño"))
    } else if (MonedaACambiar===2){
        MonedaCambio = parseInt(prompt("Elija un cambio: 1_Peso Argentino, 2_Euro o 3_Real Brasileño"))
    } else if (MonedaACambiar===3){
        MonedaCambio = parseInt(prompt("Elija un cambio: 1_Peso Argentino, 2_Dólar o 3_Real Brasileño"))
    } else if (MonedaACambiar===4){
        MonedaCambio = parseInt(prompt("Elija un cambio: 1_Peso Argentino, 2_Dólar o 3_Euro"))
    }  else {
        MonedaACambiar = parseInt(prompt("Porfavor, elija una moneda existente: 1_Peso Argentino, 2_Dólar, 3_Euro o 4_Real Brasileño"))
        continue
    }

    Cantidad = parseInt(prompt("¿Cuanto quiere cambiar?"))
    function cambio (CambioTotal, Cantidad){
        if (MonedaACambiar===1 && MonedaCambio===1){
            CambioTotal = Cantidad*0.00692
            //Peso a Dólar Oficial
        } else if (MonedaACambiar===1 && MonedaCambio===2){
            CambioTotal = Cantidad*0.00693
            //Peso a Euro Oficial
        } else if (MonedaACambiar===1 && MonedaCambio===3){
            CambioTotal = Cantidad*0.036
            //Peso a Real Brasileño
        } else if (MonedaACambiar===2 && MonedaCambio===1){
            CambioTotal = Cantidad*144.50867
            //Dólar a Peso Argentino BCRA
        } else if (MonedaACambiar===2 && MonedaCambio===2){
            CambioTotal = Cantidad*1.00145
            //Dólar a Euro
        } else if (MonedaACambiar===2 && MonedaCambio===3){
            CambioTotal = Cantidad*5.20231
            //Dólar a Real Brasileño
        } else if (MonedaACambiar===3 && MonedaCambio===1){
            CambioTotal = Cantidad*144.30014
            //Euro a Peso Argentino BCRA
        } else if (MonedaACambiar===3 && MonedaCambio===2){
            CambioTotal = Cantidad*0.99855
            //Euro a Dólar
        } else if (MonedaACambiar===3 && MonedaCambio===3){
            CambioTotal = Cantidad*5.19481
            //Euro a Real Brasileño
        } else if (MonedaACambiar===4 && MonedaCambio===1){
            CambioTotal = Cantidad*27.77778
            //Real a Peso Argentino
        } else if (MonedaACambiar===4 && MonedaCambio===2){
            CambioTotal = Cantidad*0.19222
            //Real a Dólar
        } else if (MonedaACambiar===4 && MonedaCambio===3){
            CambioTotal = Cantidad*0.1925
            //Real a Euro
        } else {
           alert ("Porfavor, ingrese una moneda existente") 
        }

        return CambioTotal
    }
    Monto = cambio (CambioTotal, Cantidad)
    alert ("Tu saldo es de "+Monto)
    break
}
