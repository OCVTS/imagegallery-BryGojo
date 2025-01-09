const galleryImages = document.querySelectorAll('#gallery-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');

galleryImages.forEach(Image => {
    Image.addEventListener('click', () => {
        lightboxImg.src = image.src;
        lightbox.classList.add('visible');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
})