# Perú Wok — Trabajo Final Integrador

## 1. Descripción del proyecto

Perú Wok es un sitio web desarrollado como Trabajo Final Integrador, con el propósito de presentar un emprendimiento gastronómico familiar que combina las raíces peruanas y argentinas con influencias de la cocina oriental.

La propuesta busca transmitir la identidad del emprendimiento a través de su historia, su gastronomía y su presentación visual. El sitio permite conocer el proyecto, recorrer el menú de platos y acceder a un formulario de contacto interactivo.

El desarrollo se realizó utilizando HTML5, CSS3 y JavaScript, aplicando los conocimientos adquiridos durante la cursada.

## 2. Integrantes

- **Aime Ayelen Olivares**
- **Melisa Anita Rodríguez**

## 3. Objetivos del proyecto

- Diseñar y desarrollar un sitio web de tres páginas interconectadas.
- Presentar la historia, identidad y propuesta gastronómica de Perú Wok.
- Organizar y mostrar el menú mediante imágenes y descripciones.
- Implementar un formulario de contacto con validaciones realizadas mediante JavaScript.
- Incorporar interactividad mediante un carrusel de imágenes.
- Aplicar recursos de diseño y organización de contenido utilizando HTML5 y CSS3.
- Adaptar la presentación del sitio a diferentes tamaños de pantalla.

## 4. Tecnologías y herramientas utilizadas

- **HTML5:** estructura y organización semántica del contenido.
- **CSS3:** estilos visuales, tipografías, fondos, Flexbox y reglas de adaptación responsive.
- **JavaScript:** lógica del carrusel de imágenes, validaciones del formulario y manipulación del DOM.
- **Visual Studio Code:** entorno de desarrollo utilizado para editar los archivos.
- **Git y GitHub:** control de versiones, colaboración y almacenamiento del código fuente.
- **GitHub Pages:** publicación y acceso al sitio web.

## 5. Estructura del sitio

El proyecto está compuesto por tres páginas principales:

- **Inicio (`index.html`):** presenta la historia del emprendimiento, su identidad familiar y gastronómica, e incorpora un carrusel de imágenes.
- **Menú (`menu.html`):** muestra el catálogo de platos mediante fotografías y descripciones.
- **Contacto (`contacto.html`):** contiene un formulario con campos para nombre, teléfono, correo electrónico y mensaje.

Las páginas comparten una estructura de navegación y una identidad visual común.

## 6. Funcionalidades implementadas

### 6.1. Navegación

- Menú de navegación compartido entre las tres páginas.
- Enlaces para acceder a Inicio, Menú y Contacto.
- Elementos visuales que identifican las opciones de navegación.

### 6.2. Carrusel de imágenes

- Visualización de fotografías de los platos.
- Controles para avanzar y retroceder entre imágenes.
- Implementación de la lógica mediante JavaScript.
- Navegación circular: al llegar a la última imagen, continúa desde la primera, y viceversa.
- Funcionamiento fluido, sin interrupciones durante la navegación.

### 6.3. Formulario de contacto

- Campos para nombre, teléfono, correo electrónico y mensaje.
- Validación de campos obligatorios.
- Control de longitudes mínimas y máximas.
- Validación del formato del correo electrónico y del teléfono.
- Eliminación de espacios externos mediante el método `trim()`.
- Visualización de mensajes de error junto a los campos correspondientes.
- Prevención del envío tradicional y de la recarga de la página mediante `preventDefault()`.
- Generación dinámica de un resumen mediante `createElement()` y manipulación del DOM.
- Limpieza del formulario después de un envío válido.

**Nota:** el formulario realiza validaciones y muestra un resumen de los datos en el navegador. No cuenta con conexión a un servidor ni con un sistema de almacenamiento o envío de mensajes.

### 6.4. Diseño y adaptación

- Diseño visual propio mediante CSS.
- Organización de elementos utilizando Flexbox.
- Incorporación de imágenes, fondos y tipografías personalizadas.
- Adaptación de la presentación a diferentes tamaños de pantalla mediante recursos de CSS.

## 7. Pruebas de funcionamiento

Se realizaron pruebas manuales utilizando Google Chrome y sus herramientas de desarrollador, con el objetivo de comprobar la presentación del sitio y el funcionamiento de sus principales componentes.

### 7.1. Pruebas responsive

Se verificó la adaptación de las páginas en diferentes resoluciones:

- Inicio: visualización en móvil, tablet y escritorio.
- Menú: visualización en tablet y escritorio.
- Contacto: visualización en tablet y escritorio.
- Comprobación de la navegación, distribución de elementos y adaptación del contenido.

Durante las pruebas se identificaron y corrigieron ajustes en la navegación para mejorar su visualización en pantallas pequeñas.

También se observó una superposición parcial de la barra de redes sociales sobre el contenido de Inicio en determinadas resoluciones que no impide la lectura general del contenido.

### 7.2. Revisión de consola

Se utilizó la consola de desarrollador de Google Chrome para comprobar la carga de las páginas.

- [x] Inicio: sin errores visibles durante la carga.
- [x] Menú: sin errores visibles durante la carga.
- [x] Contacto: sin errores visibles durante la carga.

### 7.3. Pruebas del formulario

Se realizaron pruebas con datos vacíos, formatos incorrectos y datos válidos.

- [x] Detección de campos obligatorios vacíos.
- [x] Validación de longitud mínima del nombre.
- [x] Validación del formato del teléfono.
- [x] Validación del formato del correo electrónico.
- [x] Validación de longitud mínima del mensaje.
- [x] Visualización de mensajes de error junto a los campos.
- [x] Prevención de la recarga de la página.
- [x] Generación del resumen con datos válidos.
- [x] Limpieza de los campos después del envío.
- [x] Segundo envío sin duplicación del resumen anterior.


### 7.4. Pruebas del carrusel

- Visualización de las imágenes.
- Funcionamiento de los controles Anterior y Siguiente.
- Navegación circular entre la primera y la última imagen.
- Comprobación del funcionamiento sin interrupciones.

## 8. Evidencias de funcionamiento

Se incorporarán capturas de pantalla obtenidas durante las pruebas para documentar visualmente el comportamiento del sitio.

Los archivos se organizan dentro de la carpeta `pruebas`, según el tipo de verificación realizada:

- pruebas/responsive/: capturas de adaptación visual.
- pruebas/consola/: capturas de revisión de errores.
- pruebas/formulario/: capturas de validaciones y envíos.

Las capturas permiten observar los resultados de las pruebas de adaptación visual, revisión de consola y validación del formulario.

## 9. Organización de archivos

La estructura principal del proyecto es la siguiente:

```text
TP-Integrador/
│
├── fuentes/
├── imagenes/
├── pruebas/
│   ├── responsive/
│   ├── consola/
│   └── formulario/
│
├── contacto.css
├── contacto.html
├── index.html
├── javascript.js
├── menu.html
├── README.md
├── style.css
└── validacion.js
```

Los archivos HTML contienen la estructura de las páginas; las hojas CSS gestionan la presentación visual y los archivos JavaScript concentran las funcionalidades interactivas y las validaciones.

## 10. Acceso al sitio

**Sitio publicado mediante GitHub Pages:**

[Visitar Perú Wok](https://olivares-aime.github.io/TP-Integrador/)

---

*Proyecto desarrollado por Aime Olivares y Melisa Anita Rodríguez como Trabajo Final Integrador.*