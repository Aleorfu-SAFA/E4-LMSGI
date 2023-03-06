let datos = sessionStorage.getItem('datos');
datos = JSON.parse(datos.split(";")[parseInt(document.querySelector('main').id)]);

let html = `
    <section class="noticia">
        <h2>${datos.titulo}</h2>
        <h4>${datos.descripcion}</h4>
        <h6>${datos.categoria}</h6>
        <p>${datos.contenido}</p>
    </section>
    `;


// Insertar el contenido HTML generado en el DOM
document.querySelector('main').innerHTML = html