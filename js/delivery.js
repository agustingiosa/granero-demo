function mostrarContenido(opcion) {
    // Oculta todos los contenidos
    var contenidos = document.querySelectorAll('.contenidoMostrado');
    contenidos.forEach(function (contenido) {
        contenido.classList.remove('activo');
    });

    // Muestra el contenido específico de la opción seleccionada
    var contenidoSeleccionado = document.getElementById('contenido' + opcion);
    contenidoSeleccionado.classList.add('activo');
}
