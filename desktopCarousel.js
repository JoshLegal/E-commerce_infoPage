////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const popSlide = document.querySelectorAll('.popup-slide');
const indicators = document.querySelectorAll('.indicator');
let currentPos = 0;

function showSlides(index) {
    popSlide.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            indicators[i].classList.add('active');
        }
    });
}

function goToSlides(index) {
    currentPos = index;
    showSlides(currentPos);
}

// Add event listeners for indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlides(index);
    });
});

// Add event listeners for next and previous buttons (if not already added)
const popNextButton = document.querySelector('#popUpNextButton');
const popPrevButton = document.querySelector('#popUpPrevButton');

popNextButton.addEventListener('click', () => {
    currentPos = (currentPos + 1) % popSlide.length;
    showSlides(currentPos);
});

popPrevButton.addEventListener('click', () => {
    currentPos = (currentPos - 1 + popSlide.length) % popSlide.length;
    showSlides(currentPos);
});

// Show the first slide initially
showSlides(currentPos);