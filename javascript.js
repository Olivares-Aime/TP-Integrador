let indice = 0;

const imagenes = document.querySelectorAll(".imagen");

function cambiarImagen(direccion) {

    // Ocultar la imagen actual
    imagenes[indice].classList.remove("activa");

    // Cambiar el índice
    indice = indice + direccion;

    // Si llegamos al final, volver a la primera
    if (indice >= imagenes.length) {
        indice = 0;
    }

    // Si retrocedemos desde la primera, ir a la última
    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    // Mostrar la nueva imagen
    imagenes[indice].classList.add("activa");
}