let datos = sessionStorage.getItem('datos');
datos = datos.split(";");

let html = '';

datos.forEach(function (valor) {

    const json = JSON.parse(valor);
    let enlace;

    if (valor === datos[0]) {

        enlace = "noticia1.html"

    } else if (valor === datos[1]) {

        enlace = "noticia2.html"

    } else if (valor === datos[2]) {

        enlace = "noticia3.html"

    } else if (valor === datos[3]) {

        enlace = "noticia4.html"

    } else if (valor === datos[4]) {

        enlace = "noticia5.html"

    } else {

        enlace = "index.html"

    }

    html = html + `
<section class="noticia">
    <h2><a href="${enlace}">${json.titulo}</a></h2>
    <h4>${json.descripcion}</h4>
    <h6>${json.categoria}</h6>
    <p>${json.contenido}</p>
</section>
`;

})

// Insertar el contenido HTML generado en el DOM
document.querySelector('main').innerHTML = html;
