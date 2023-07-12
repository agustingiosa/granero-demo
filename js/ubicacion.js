// Obtener todos los elementos con la clase "estadoTienda"
let elementosTienda = document.getElementsByClassName("estadoTienda");

// Obtener la fecha actual
let fechaActual = new Date();

// Obtener el día de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)
let diaSemana = fechaActual.getDay();

// Obtener la hora actual
let horaActual = fechaActual.getHours();

// Verificar si es viernes, sábado o domingo y está dentro del horario de apertura
if ((diaSemana === 5 || diaSemana === 6 || diaSemana === 0) && horaActual >= 11 && horaActual < 24) {
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
  fechaApertura.setDate(fechaApertura.getDate() + (5 + 7 - diaSemana) % 7);
  fechaApertura.setHours(11, 30, 0, 0);
  let tiempoRestante = fechaApertura - fechaActual;

  // Calcular el número de días, horas, minutos y segundos restantes
  let diasRestantes = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  let horasRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutosRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  let segundosRestantes = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  // Obtener el elemento con el ID "contadorTienda"
  let contadorTienda = document.getElementById("contadorTienda");

  // Mostrar el tiempo restante en el elemento "contadorTienda"
  contadorTienda.textContent = `CERRADO - Abriremos en ${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos`;

  // Actualizar el contador cada segundo
  setInterval(function() {
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
