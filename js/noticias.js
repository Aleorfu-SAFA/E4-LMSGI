let datos = sessionStorage.getItem('datos');
datos = datos.split(";");

let html = '';

datos.forEach(function (valor) {

    const json = JSON.parse(valor);

    html = html + `
<section class="noticia">
    <img class="imagen" src="${json.imagen}">
    <h2><a href="${json.enlace}">${json.titulo}</a></h2>
    <h4>${json.descripcion}</h4>
    <h6>${json.categoria}</h6>
    <p>${json.contenido}</p>
</section>
`;

})

// Insertar el contenido HTML generado en el DOM
document.querySelector('main').innerHTML = html;
