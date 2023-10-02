const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
    slide.classList.add('active');
    }
});
}

function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}

function prevSlide() {
currentIndex = (currentIndex - 1 + slides.length) % slides.length;
showSlide(currentIndex);
}

// Add event listeners for next and previous buttons
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Show the first slide initially
showSlide(currentIndex);