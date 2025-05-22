const peruJourneyAnimation = () => {
    const journeyElements = document.querySelectorAll('.journey-element');

    journeyElements.forEach((element, index) => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, index * 300); // Delay for each element
    });
};

document.addEventListener('DOMContentLoaded', () => {
    peruJourneyAnimation();
});