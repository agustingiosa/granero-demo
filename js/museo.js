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