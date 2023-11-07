import { barcelona, roma, paris, londres } from './ciudades.js';

let links = document.querySelectorAll('a')
let tituloH1= document.getElementById('titulo')
let subtituloH2= document.getElementById('subtitulo')
let parrafoDOM = document.getElementById('parrafo')

links.forEach( function(enlace) {
    enlace.addEventListener("click", function(){
        //quitar la clase active de cada link
        links.forEach( function(enlace){
            enlace.classList.remove('active')
        });
        //agregar la clase active al link que se le hizo clixk
        this.classList.add('active')
        let contenido = traerInfo(this.textContent)

        tituloH1.innerHTML = contenido.titulo,
        subtituloH2.innerHTML = contenido.subtitulo,
        parrafoDOM.innerHTML = contenido.parrafo;
    })
});

function traerInfo(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    };
    return contenido[enlace]
}
