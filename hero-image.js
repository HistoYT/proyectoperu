document.addEventListener("DOMContentLoaded", function() {
    const hero = document.getElementById('hero-image');
    if (!hero) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hero.classList.add('visible');
            } else {
                hero.classList.remove('visible');
            }
        });
    }, { threshold: 0.15 });

    observer.observe(hero);
});

window.addEventListener("DOMContentLoaded", function() {
    const hero = document.getElementById('hero-image');
    if (!hero) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hero.classList.add('visible');
            } else {
                hero.classList.remove('visible');
            }
        });
    }, { threshold: 0.15 });

    observer.observe(hero);

    // Al hacer clic en el botón, ir a la sección "itinerarios" con desplazamiento suave
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', () => {
        const itinerariosSection = document.getElementById('itinerarios');
        if (itinerariosSection) {
            itinerariosSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});