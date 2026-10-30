

let indice = 0;

const imagenes = document.querySelectorAll(".contenedor-imagen .imagen");

const nombresPlatos = [
    "Lomo Saltado",
    "Arroz Chaufa",
    "Ají de gallina",
    " Ceviche",
    "Jalea mixta",
    "Pollo Broster",
];

function cambiarImagen(direccion) {


    // comprobamos que existan imagenes 
    if (imagenes.length=== 0) {
        console.error ("no se encontraron imagenes");
        return;
    }

    // Ocultar la imagen actual
    imagenes[indice].classList.remove("activa");

    // Cambiar el índice
    indice = (indice + direccion + imagenes.length)
    % imagenes.length;

    // Mostrar la nueva imagen
    imagenes[indice].classList.add("activa");

    // actualizar el nombre del plato 
    document.getElementById("nombrePlato").textContent= nombresPlatos[indice];

}
