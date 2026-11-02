
// 1. Buscamos el formulario en el HTML
const formulario = document.getElementById("formularioContacto");

// 2. Comprobamos que exista
if (formulario) {

    // 3. Escuchamos el intento de envío
    formulario.addEventListener("submit", function (event) {

        // Evitamos que la página se recargue
        event.preventDefault();

        // Suponemos que todos los campos son válidos
        let formularioValido = true;

       
        // VALIDACIÓN DEL NOMBRE
        

        const nombre = document.getElementById("nombre").value.trim();
        const errorNombre = document.getElementById("errorNombre");

        errorNombre.textContent = "";

        if (nombre === "") {
            errorNombre.textContent = "El nombre es obligatorio.";
            formularioValido = false;

        } else if (nombre.length < 2) {
            errorNombre.textContent = "El nombre debe tener al menos 2 caracteres.";
            formularioValido = false;

        } else if (nombre.length > 50) {
            errorNombre.textContent = "El nombre no puede superar los 50 caracteres.";
            formularioValido = false;
        }

       
        // VALIDACIÓN DEL TELÉFONO
        

        const telefono = document.getElementById("telefono").value.trim();
        const errorTelefono = document.getElementById("errorTelefono");

        errorTelefono.textContent = "";

        const telefonoLimpio = telefono.replace(/[\s()-]/g, "");

        if (telefono === "") {
            errorTelefono.textContent = "El teléfono es obligatorio.";
            formularioValido = false;

        } else if (!/^\+?[0-9]{8,15}$/.test(telefonoLimpio)) {
            errorTelefono.textContent = "Ingresá un teléfono válido, con entre 8 y 15 dígitos.";
            formularioValido = false;
        }

        
        // VALIDACIÓN DEL CORREO ELECTRÓNICO
  

        const email = document.getElementById("email").value.trim();
        const errorEmail = document.getElementById("errorEmail");

        errorEmail.textContent = "";

        const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            errorEmail.textContent = "El correo electrónico es obligatorio.";
            formularioValido = false;

        } else if (email.length > 100) {
            errorEmail.textContent = "El correo no puede superar los 100 caracteres.";
            formularioValido = false;

        } else if (!formatoEmail.test(email)) {
            errorEmail.textContent = "Ingresá un correo electrónico válido.";
            formularioValido = false;
        }

       
        // VALIDACIÓN DEL MENSAJE
     

        const mensaje = document.getElementById("mensaje").value.trim();
        const errorMensaje = document.getElementById("errorMensaje");

        errorMensaje.textContent = "";

        if (mensaje === "") {
            errorMensaje.textContent = "El mensaje es obligatorio.";
            formularioValido = false;

        } else if (mensaje.length < 10) {
            errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
            formularioValido = false;

        } else if (mensaje.length > 500) {
            errorMensaje.textContent = "El mensaje no puede superar los 500 caracteres.";
            formularioValido = false;
        }

        
        // RESULTADO DE LAS VALIDACIONES
       
        if (formularioValido) {

            // Buscamos el espacio destinado al resumen
            const resumen = document.getElementById("resumenEnvio");

            // Limpiamos cualquier resumen anterior
            resumen.textContent = "";

            // Creamos el título
            const titulo = document.createElement("h2");
            titulo.textContent = "¡Mensaje enviado correctamente!";

            // Creamos los párrafos con los datos ingresados
            const parrafoNombre = document.createElement("p");
            parrafoNombre.textContent = "Nombre: " + nombre;

            const parrafoTelefono = document.createElement("p");
            parrafoTelefono.textContent = "Teléfono: " + telefono;

            const parrafoEmail = document.createElement("p");
            parrafoEmail.textContent = "Correo electrónico: " + email;

            const parrafoMensaje = document.createElement("p");
            parrafoMensaje.textContent = "Mensaje: " + mensaje;

            // Agregamos los elementos al contenedor
            resumen.appendChild(titulo);
            resumen.appendChild(parrafoNombre);
            resumen.appendChild(parrafoTelefono);
            resumen.appendChild(parrafoEmail);
            resumen.appendChild(parrafoMensaje);

            // Dejamos el formulario listo para otro envío
            formulario.reset();


            resumen.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        } else {

            console.log("El formulario contiene errores.");

        }
    });

}
