document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll(".photo");

    photos.forEach((photo) => {
        const originalBackground = photo.getAttribute("data-original");
        const slideshowPhotos = photo.getAttribute("data-photos").split(', ');
        let currentSlide = 0;
        let slideshowInterval;

        photo.addEventListener("mouseover", startSlideshow);
        photo.addEventListener("mouseout", stopSlideshow);

        function showNextSlide() {
            photo.style.backgroundImage = `url('${slideshowPhotos[currentSlide]}')`;
            currentSlide = (currentSlide + 1) % slideshowPhotos.length;
        }

        function startSlideshow() {
            slideshowInterval = setInterval(showNextSlide, 1000);
        }

        function stopSlideshow() {
            clearInterval(slideshowInterval);
            resetBackground();
        }

        function resetBackground() {
            photo.style.backgroundImage = `url('${originalBackground}')`;
        }
    });
});
