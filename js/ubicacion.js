// Obtener todos los elementos con la clase "estadoTienda"
let elementosTienda = document.getElementsByClassName("estadoTienda");

// Obtener la fecha actual
let fechaActual = new Date();

// Obtener el día de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)
let diaSemana = fechaActual.getDay();

// Obtener la hora actual
let horaActual = fechaActual.getHours();

// Verificar si la tienda está abierta
// Verificar si la tienda está abierta
if (
    ((diaSemana === 5 && horaActual >= 12) || diaSemana === 6 || diaSemana === 0) &&
    ((diaSemana === 5 && horaActual < 24) || diaSemana === 6 || diaSemana === 0)
) {
    // Tienda abierta
    for (let i = 0; i < elementosTienda.length; i++) {
        elementosTienda[i].textContent = "¡ABIERTO!";
        elementosTienda[i].style.backgroundColor = "#2ecc71";
    }
} else {
    // Tienda cerrada
    for (let i = 0; i < elementosTienda.length; i++) {
        elementosTienda[i].textContent = "Cerrado";
        elementosTienda[i].style.backgroundColor = "#e74c3c";
    }

    // Calcular la próxima apertura
    let fechaApertura = new Date(fechaActual);

    if (diaSemana === 0 || diaSemana === 1 || (diaSemana === 5 && horaActual >= 24) || (diaSemana === 6 && horaActual >= 24)) {
        fechaApertura.setDate(fechaApertura.getDate() + (7 - diaSemana + (diaSemana === 0 ? 5 : 4)) % 7);
    } else {
        fechaApertura.setDate(fechaApertura.getDate() + (7 - diaSemana + 5) % 7);
    }
}

// Calcular el tiempo restante hasta la próxima apertura
let tiempoRestante = fechaApertura - fechaActual;
let diasRestantes = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
let horasRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutosRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
let segundosRestantes = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

// Obtener el elemento con el ID "contadorTienda"
let contadorTienda = document.getElementById("contadorTienda");

// Mostrar el tiempo restante en el elemento "contadorTienda"
contadorTienda.textContent = `Próxima apertura en ${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos`;

// Actualizar el contador cada segundo
let intervalID = setInterval(function () {
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
    contadorTienda.textContent = `Próxima apertura en ${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos`;

    // Limpiar el intervalo si es necesario
    if (tiempoRestante <= 0) {
        clearInterval(intervalID);
    }
}, 1000);
