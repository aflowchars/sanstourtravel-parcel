let slideIndex = 1;

showSlide(slideIndex);

function plusSlide(sl) {
  showSlide((slideIndex += sl));
}

function currentSlide(sl) {
  showSlide((slideIndex = sl));
}

function showSlide(sl) {
  let i = 0;
  let slides = document.getElementsByClassName("tour-photo");
  let icons = document.getElementsByClassName("icon-slider");

  console.log(slides);

  if (sl > slides.length) {
    slideIndex = 1;
  }

  if (sl < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < icons.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < icons.length; i++) {
    icons[i].className = icons[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  icons[slideIndex - 1].className += " active";
  console.log(slideIndex);
}
