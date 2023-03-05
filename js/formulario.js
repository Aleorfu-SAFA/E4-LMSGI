// Formulario
const formulario = document.getElementById('formulario');

// Boton submit
const botonSubmit = document.getElementById('guardar');
botonSubmit.addEventListener('click', publicar);

// Boton Vaciar
const botonVaciar = document.getElementById('vaciar');
botonVaciar.addEventListener('click', vaciar);

// Datos
const datos = sessionStorage.getItem('datos');

// Función guardar datos
function publicar() {

    // Si no hay datos
    if (datos === "") {

        // Se añaden los datos de forma normal
        sessionStorage.setItem('datos',  JSON.stringify(Object.fromEntries(new FormData(formulario))));

    } else {

        sessionStorage.setItem('datos',  JSON.stringify(Object.fromEntries(new FormData(formulario))) + ";" + datos);

    }

}

// Funcion vaciar datos
function vaciar() {

    sessionStorage.setItem('datos', "");

}
