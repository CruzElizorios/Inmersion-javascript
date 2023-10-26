let IngresoNum = document.getElementById("IngresoNum");
let resultado = document.getElementById("resultado");


function generarNumRandon() {
    let numRandon =  Math.round(Math.random()*10)
    return numRandon
}

const adivinanza = () => {
    console.log("numero ingresado " + IngresoNum.value )
    let numeroAleatorio = generarNumRandon()
    console.log("numero generado aleatorio " + numeroAleatorio)
    if (IngresoNum.value == numeroAleatorio) {
        resultado.value = "Felicides!!! haz adivinado el número secreto: " + numeroAleatorio;
    } else {
        resultado.value =  "No descubierto, el número secreto era: " + numeroAleatorio;
    }

    return resultado.value
}
