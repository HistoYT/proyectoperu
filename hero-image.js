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