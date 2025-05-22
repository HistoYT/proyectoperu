window.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    // Animación de entrada al cargar
    setTimeout(() => {
        header.classList.add('header-visible');
    }, 100);

    let lastScroll = window.scrollY;

    window.addEventListener('scroll', function() {
        // Cambia color al hacer scroll
        if(window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Animación de salida/entrada según dirección del scroll
        if(window.scrollY > lastScroll && window.scrollY > 100) {
            // Bajando: ocultar header
            header.classList.remove('header-visible');
            header.classList.add('header-hidden');
        } else {
            // Subiendo: mostrar header
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
        lastScroll = window.scrollY;
    });
});