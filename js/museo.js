document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".fondoRuta .enlaces-fijos a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth" // Aplicar un desplazamiento suave
            });
        }
    }
});

let lastScrollTop = 0;
let totalScroll = 0;

// Función para manejar el evento de desplazamiento
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Si el usuario se desplaza hacia abajo, incrementa el contador.
    // Si el usuario se desplaza hacia arriba, decrementa el contador.
    if (scrollTop > lastScrollTop) {
        totalScroll += scrollTop - lastScrollTop;
    } else {
        totalScroll -= lastScrollTop - scrollTop;
    }

    // Asegurarse de que el contador nunca sea negativo.
    if (totalScroll < 0) {
        totalScroll = 0;
    }

    lastScrollTop = scrollTop;
    updateCount();
}

// Función para actualizar el contador
function updateCount() {
    const scrollCount = document.getElementById('scroll-count');
    scrollCount.textContent = totalScroll;
}

// Agregamos el evento de desplazamiento al objeto global 'window'
window.addEventListener('scroll', handleScroll);

// Llamamos a la función de actualización inicialmente
updateCount();


const botMapa = document.querySelector('.botMapa');
const lineaDeTiempo = document.querySelector('.lineaDeTiempo');

botMapa.addEventListener('click', function() {
    if (lineaDeTiempo.style.display === 'block') {
        lineaDeTiempo.style.display = 'none'
    } else {
        lineaDeTiempo.style.display = 'block'
    }
});


