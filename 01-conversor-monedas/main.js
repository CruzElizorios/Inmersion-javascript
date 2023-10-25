let valorAconvertir = document.getElementById("cantidad");
let monedaOrigen = document.getElementById("monedaOrigen");
let monedaDestino = document.getElementById("monedaDestino");
let mostrarValorFinal = document.getElementById("resultado");

let cotizacionUsdArs = 1000;
let cotizacionEurArs = 1150;
let cotizacionUSDEUR = 0.93645;
let valor;

const intercambiar = () =>{
    let A = monedaOrigen.value
    let B = monedaDestino.value
    monedaOrigen.value = B
    monedaDestino.value = A
}

const mostrarValor = () => {
    let monedasParaConversion = monedaOrigen.value + monedaDestino.value
    console.log(monedaOrigen.value)
    console.log(monedaDestino.value)

    switch (monedasParaConversion) {
        case "USDARS":
            valor = valorAconvertir.value * cotizacionUsdArs
            return mostrarValorFinal.value = "$ " + valor.toFixed(2);
        case "ARSUSD":
            valor = valorAconvertir.value / cotizacionUsdArs
            return mostrarValorFinal.value = "$ " + valor.toFixed(4);
        case "EURARS":
            valor = valorAconvertir.value * cotizacionEurArs
            return mostrarValorFinal.value = "$ " + valor.toFixed(2);
        case "ARSEUR":
            valor = valorAconvertir.value / cotizacionEurArs
            return mostrarValorFinal.value = "$ " + valor.toFixed(4);
        case "USDEUR":
            valor = valorAconvertir.value * cotizacionUSDEUR
            return mostrarValorFinal.value = "$ " + valor.toFixed(2);
        case "EURUSD":
            valor = valorAconvertir.value / cotizacionUSDEUR
            return mostrarValorFinal.value = "$ " + valor.toFixed(2);
        default:
            return mostrarValorFinal.value = "No se puede convertir"
    }
    // console.log(monedaOrigen.value)
    // let valor = valorAconvertir.value * cotizacionUsdArs
    // mostrarValorFinal.value = valor
    // console.log(mostrarValorFinal.value)
}

