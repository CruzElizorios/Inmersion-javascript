let valorAconvertir = document.getElementById("grados");
let escalaTempOrigen = document.getElementById("EscalaTempOrigen");
let escalaTempDest = document.getElementById("EscalaTempDest");
let mostrarValorFinal = document.getElementById("resultado");

let valor;


const intercambiar = () =>{
    let A = escalaTempOrigen.value
    let B = escalaTempDest.value
    escalaTempOrigen.value = B
    escalaTempDest.value = A
}

const mostrarValor = () => {
    let escalaParaConversion = escalaTempOrigen.value + escalaTempDest.value
    console.log(escalaTempOrigen.value)
    console.log(escalaTempDest.value)

    switch (escalaParaConversion) {
        case "CF":
            valor = ((valorAconvertir.value * 1.8) + 32)
            return mostrarValorFinal.value = valor.toFixed(2);
        case "FC":
            valor = ((valorAconvertir.value -32) / 1.8 )
            return mostrarValorFinal.value = valor.toFixed(2);
        case "CK":
            valor = ((valorAconvertir.value*1) + 273)
            return mostrarValorFinal.value = valor;
        case "KC":
            valor = (valorAconvertir.value*1) - 273
            return mostrarValorFinal.value = valor;
        case "KF":
            valor = ((1.8*(valorAconvertir.value - 273)) + 32)
            return mostrarValorFinal.value = valor.toFixed(2);
        case "FK":
            valor = (((valorAconvertir.value - 32) / 1.8) + 273)
            return mostrarValorFinal.value = valor.toFixed(2);
        default:
            return mostrarValorFinal.value = "No se puede convertir"
    }
}