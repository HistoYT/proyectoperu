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

    });
});