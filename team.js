document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: false,
        dist: -40,
        padding: 170,
        numVisible: 7
    });

    const prev = document.getElementById('carousel-prev');
    const next = document.getElementById('carousel-next');
    const instance = M.Carousel.getInstance(elems[0]);

    function setOpacityTo100() {
        const items = elems[0].querySelectorAll('.carousel-item');
        items.forEach(item => {
            item.style.transition = 'opacity 0.3s ease'; // Add smooth transition
            item.style.opacity = '1'; // Set opacity to 100%
        });
    }
    
    prev.addEventListener('click', () => {
        instance.prev();
        setTimeout(setOpacityTo100, 1400); // Slight delay to allow carousel DOM update
    });

    next.addEventListener('click', () => {
        instance.next();
        setTimeout(setOpacityTo100, 1400);
    });

    setOpacityTo100();
    });