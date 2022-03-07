import { cityRender } from "/scripts/iceland/cities/renderCities.js";
import { landmarkRender } from "/scripts/iceland/landmarks/renderLandmarks.js";
import { peopleRender } from "/scripts/iceland/people/renderPeople.js";
import { slideshowRender } from "/scripts/iceland/slideshow/slideshowRender.js";

cityRender();
landmarkRender();
peopleRender();
slideshowRender();

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
