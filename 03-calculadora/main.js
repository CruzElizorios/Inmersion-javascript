function agregar(dato) {
    document.getElementById("pantalla").value += dato
}
function borrar() {
    document.getElementById("pantalla").value = ''
}

function calcular() {
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
}