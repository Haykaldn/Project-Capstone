document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.recomen-item');
    const totalItems = items.length;
    const containerInner = document.querySelector('.recomen-container-inner');

    function updateCarousel() {
        const offset = -currentIndex * 100;
        containerInner.style.transform = `translateX(${offset}%)`;
    }

    window.moveSlide = function(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalItems - 1;
        } else if (currentIndex >= totalItems) {
            currentIndex = 0;
        }

        updateCarousel();
    };

    // Optional: Auto-rotate every 5 seconds
    setInterval(() => moveSlide(1), 10000);
});