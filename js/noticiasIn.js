// Cogemos los datos del localStorage
let datos = localStorage.getItem('datos');

// Y dependiendo del id que tenga el "main" pondrá una noticia u otra
datos = JSON.parse(datos.split(";")[parseInt(document.querySelector('main').id)]);

// Escribo el "html" personalizado
let html = `
    <section class="noticia">
        <h2>${datos.titulo}</h2>
        <h4>${datos.descripcion}</h4>
        <h6>${datos.categoria}</h6>
        <p>${datos.contenido}</p>
    </section>
    `;


// Insertar el contenido HTML generado en el "main"
document.querySelector('main').innerHTML = html