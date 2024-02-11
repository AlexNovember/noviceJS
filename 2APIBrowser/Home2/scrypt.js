let slideIndex = 1;
showSlide(slideIndex);

document.getElementById('prevButton').addEventListener('click', function () {
    plusSlide(-1);
});

document.getElementById('nextButton').addEventListener('click', function () {
    plusSlide(1);
});

const dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        currentSlide(i + 1);
    });
}

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}