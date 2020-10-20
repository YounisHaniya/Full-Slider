window.onload = function () {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  prevBtn.addEventListener("click", function () {
    prevSlide();
  });
  nextBtn.addEventListener("click", function () {
    nextSlide();
  });
};
let slideNumber = 0;
const prevSlide = () => {
  const slides = document.getElementsByClassName("slides");
  const container = document.getElementById("container");
  const currentSlide = container.getElementsByClassName("first");
  currentSlide[0].classList.remove("first");
  if (slideNumber == 0) {
    slideNumber = slides.length - 1;
  } else {
    slideNumber = slideNumber - 1;
  }
  slides[slideNumber].classList.add("first");
};
const nextSlide = () => {
  const slides = document.getElementsByClassName("slides");
  const container = document.getElementById("container");
  const currentSlide = container.getElementsByClassName("first");
  currentSlide[0].classList.remove("first");
  if (slideNumber == slides.length - 1) {
    slideNumber = 0;
  } else {
    slideNumber = slideNumber + 1;
  }
  slides[slideNumber].classList.add("first");
};
