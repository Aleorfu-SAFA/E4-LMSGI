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
    if (datos === null || datos === "") {

        // Se añaden los datos de forma normal
        sessionStorage.setItem('datos',  JSON.stringify(Object.fromEntries(new FormData(formulario))));

    } else {

        sessionStorage.setItem('datos',  JSON.stringify(Object.fromEntries(new FormData(formulario))) + ";" + datos);

    }

    creaXML()

}

// Funcion vaciar datos
function vaciar() {

    sessionStorage.setItem('datos', "");

}

function creaXML(){
    var xml = `<?xml version="1.0" standalone="yes" ?>`;
    xml = xml +
        `<rss version="2.0">
    <channel>
    <title>Noticias E4</title>
    <link>https://webg4.000webhostapp.com/index.html</link>
    <description>Sindicación de noticias elaboradas por E4</description>`
    for(var i=0; i<5; i++){
        datosLocal = JSON.parse(datos.split(";")[i])
        xml = xml + `<item>
        <title>${datosLocal.titulo}</title>
        <link>${"noticia"+i+".html"}</link>
        <description>${datosLocal.descripcion}</description>
        </item>`
    }
    xml = xml +
        `</channel>
    </rss>`

    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "../noticias.xml", true);
    xhttp.setRequestHeader("Content-Type", "text/xml");
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // Aquí puedes realizar acciones si la petición se completa con éxito
            console.log("XML Actualizado.");
        }
    };

    xhttp.send(xml);

}
