document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carrusel-imagenes img');
    const prevBtn = document.querySelector('.carrusel-btn.prev');
    const nextBtn = document.querySelector('.carrusel-btn.next');
    const titulo = document.getElementById('carrusel-titulo');
    // Títulos según el orden de las imágenes
    const titulos = [
        "Machu Picchu",
        "Lago Titicaca",
        "Montaña de 7 Colores",
        "Líneas de Nazca",
        "Cusco"
    ];
    let current = 0;
    let last = 0;

    function showImage(idx, direction = "right") {
        images.forEach((img, i) => {
            img.classList.remove('active', 'slide-in-right', 'slide-in-left');
            if (i === idx) {
                img.classList.add('active');
                img.classList.add(direction === "right" ? 'slide-in-right' : 'slide-in-left');
            }
        });
        // Animación de título
        titulo.classList.add('fade');
        setTimeout(() => {
            titulo.textContent = titulos[idx];
            titulo.classList.remove('fade');
        }, 200);
    }

    prevBtn.addEventListener('click', () => {
        last = current;
        current = (current - 1 + images.length) % images.length;
        showImage(current, "left");
    });

    nextBtn.addEventListener('click', () => {
        last = current;
        current = (current + 1) % images.length;
        showImage(current, "right");
    });

    showImage(current);
});