// Obtener todos los elementos con la clase "estadoTienda"
let elementosTienda = document.getElementsByClassName("estadoTienda");

// Obtener la fecha actual
let fechaActual = new Date();

// Obtener el día de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)
let diaSemana = fechaActual.getDay();

// Obtener la hora actual
let horaActual = fechaActual.getHours();

// Verificar si es miercoles, jueves, viernes, sábado o domingo y está dentro del horario de apertura
if ((diaSemana === 5 || diaSemana === 6 || diaSemana === 0) && horaActual >= 12 && horaActual < 15 || (diaSemana === 5 || diaSemana === 6 || diaSemana === 0) && horaActual >= 20 && horaActual < 23 || (diaSemana === 4 || diaSemana === 3 || diaSemana === 2 || diaSemana === 1) && horaActual >= 18 && horaActual < 23) {
    // Recorrer todos los elementos y actualizar su contenido y estilo
    for (let i = 0; i < elementosTienda.length; i++) {
        elementosTienda[i].textContent = "¡ABIERTO!";
        elementosTienda[i].style.backgroundColor = "#2ecc71";
    }
} else {
    // Recorrer todos los elementos y actualizar su contenido y estilo
    for (let i = 0; i < elementosTienda.length; i++) {
        elementosTienda[i].textContent = "CERRADO";
        elementosTienda[i].style.backgroundColor = "#e74c3c";
    }

    // Calcular el tiempo restante hasta la próxima apertura
    let fechaApertura = new Date(fechaActual);

    //if ((diaSemana === 1 || diaSemana === 2) && horaActual < 18) {
    // Si hoy es lunes o martes y la hora actual es antes de las 18:30,
    // calcular la próxima apertura para el próximo miércoles
    //fechaApertura.setDate(fechaApertura.getDate() + (3 + 7 - diaSemana) % 7);
    //fechaApertura.setHours(18, 0, 0, 0);
    if ((diaSemana === 1 || diaSemana === 2 || diaSemana === 3 || diaSemana === 4) && horaActual < 20) {

        // calcular la próxima apertura para hoy a las 18:30
        fechaApertura.setHours(20, 0, 0, 0);
    } else if ((diaSemana === 5 || diaSemana === 6 || diaSemana === 0) && horaActual < 12) {
        // Si hoy es viernes, sábado o domingo y la hora actual es antes de las 11:30,
        // calcular la próxima apertura para hoy a las 11:30
        fechaApertura.setHours(12, 0, 0, 0);
    } else {
        // En los demás casos, calcular la próxima apertura para el próximo viernes, miércoles o jueves, según sea necesario
        if (diaSemana === 1 || diaSemana === 2) {
            // Si hoy es lunes o martes, calcular la próxima apertura para el próximo miércoles
            fechaApertura.setDate(fechaApertura.getDate() + (3 + 7 - diaSemana) % 7);
        } else if (diaSemana === 5 || diaSemana === 6 || diaSemana === 0) {
            // Si hoy es viernes, sábado o domingo, calcular la próxima apertura para el próximo miércoles
            fechaApertura.setDate(fechaApertura.getDate() + (3 + 7 - diaSemana) % 7);
        } else if (diaSemana === 3 || diaSemana === 4) {
            // Si hoy es miércoles o jueves, calcular la próxima apertura para el próximo viernes
            fechaApertura.setDate(fechaApertura.getDate() + (5 + 7 - diaSemana) % 7);
        }

        fechaApertura.setHours(18, 30, 0, 0);
    }

    let tiempoRestante = fechaApertura - fechaActual;
    let diasRestantes = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    let horasRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutosRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    let segundosRestantes = Math.floor((tiempoRestante % (1000 * 60)) / 1000);




    // Obtener el elemento con el ID "contadorTienda"
    let contadorTienda = document.getElementById("contadorTienda");

    // Mostrar el tiempo restante en el elemento "contadorTienda"
    contadorTienda.textContent = `CERRADO - Abriremos en ${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos`;

    // Actualizar el contador cada segundo
    setInterval(function () {
        // Obtener la fecha actual en cada iteración
        let fechaActual = new Date();

        // Calcular el tiempo restante nuevamente
        let tiempoRestante = fechaApertura - fechaActual;

        // Calcular el número de días, horas, minutos y segundos restantes nuevamente
        let diasRestantes = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        let horasRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutosRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        let segundosRestantes = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        // Actualizar el contenido del elemento "contadorTienda"
        contadorTienda.textContent = `CERRADO - Abriremos en ${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos`;
    }, 1000);
}