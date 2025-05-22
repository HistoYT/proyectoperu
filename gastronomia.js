document.addEventListener("DOMContentLoaded", function() {
    const bgImages = [
        "https://intertropico.com/wp-content/uploads/2023/04/CEVICHE-PERUANO.jpg", 
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-04-aji-de-gallina%2Faji-de-gallina-254",
        "https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg"
    ];
    let currentIndex = 0;
    const gastroSection = document.getElementById("gastronomia");

    setInterval(() => {
        // Quita la clase para reiniciar la animación
        gastroSection.classList.remove('fading-bg');
        // Fuerza recalculo para que la clase se pueda agregar de nuevo
        void gastroSection.offsetWidth;
        
        // Cambia la imagen de fondo
        currentIndex = (currentIndex + 1) % bgImages.length;
        gastroSection.style.backgroundImage = `url("${bgImages[currentIndex]}")`;
        
        // Vuelve a agregar la clase y se produce la animación
        gastroSection.classList.add('fading-bg');
    }, 4000);
});