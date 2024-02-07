document.addEventListener('DOMContentLoaded', function () {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  const loader = document.querySelector('.loader');

  setTimeout(() => {
    loader.style.animation = ''; // Detener la animación después de 2 segundos
    loaderWrapper.style.display = 'none';
  }, 2000); // 2000 milisegundos = 2 segundos
});
