document.getElementById('formulario').addEventListener('submit', (event) =>{
    event.preventDefault()
    //validar campo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Introducí tu nombre'
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    //validar correo
    let entradaEmail = document.getElementById('email')
    let errorEmail = document.getElementById('emailError')
    let patronesEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación básico

    if (!patronesEmail.test(entradaEmail.value)) {
        errorEmail.textContent = 'Introducí un mail válido'
        errorEmail.classList.add('error-message')
    } else {
        errorEmail.textContent = ''
        errorEmail.classList.remove('error-message')
    }

    //validar contrasena
    let entradaContrasena = document.getElementById('password')
    let errorContrasena = document.getElementById('passwordError')

    if (entradaContrasena.value.length < 8) {
        errorContrasena.textContent = 'La contraseña debe tener al menos 8 caracteres'
        errorContrasena.classList.add('error-message')
    } else {
        errorContrasena.textContent = ''
        errorContrasena.classList.remove('error-message')
    }

    // si todos los campos son validos
    if (!errorNombre.textContent && !errorEmail && !errorContrasena) {
        //informacion enviada al backend
        alert('Respuesta enviada con exito')
        document.getElementById('formulario').reset();
    } 
})