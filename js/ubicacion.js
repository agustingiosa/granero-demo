// Obtener todos los elementos con la clase "estadoTienda"
let elementosTienda = document.getElementsByClassName("estadoTienda");

// Obtener la fecha actual
let fechaActual = new Date();

// Obtener el día de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)
let diaSemana = fechaActual.getDay();

// Obtener la hora actual
let horaActual = fechaActual.getHours();

// Función para mostrar el estado de la tienda y el tiempo restante
function actualizarEstadoTienda() {
  // Verificar si la tienda está abierta
  if (
    ((diaSemana >= 1 && diaSemana <= 4) || (diaSemana >= 5 && horaActual >= 12)) && horaActual < 24
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

    if (horaActual < 12) {
      fechaApertura.setHours(12, 0, 0, 0);
    } else {
      fechaApertura.setDate(fechaApertura.getDate() + (diaSemana < 5 ? 5 : 7 - diaSemana + 5) % 7);
      fechaApertura.setHours(18, 0, 0, 0);
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
    contadorTienda.textContent = `CERRADO - Delivery disponible en ${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos`;

    // Actualizar el estado de la tienda cada segundo
    setInterval(actualizarEstadoTienda, 1000);
  }
}

// Inicializar la actualización del estado de la tienda
actualizarEstadoTienda();
