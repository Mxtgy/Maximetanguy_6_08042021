import { SLIDER } from './const.js';
import modalSliderFactory from '../factories/slider.js';

let slideIndex = 1;

function toggleSlider() {
  SLIDER.slider_with_overlay.classList.toggle('open');
}

function closeSlider() {
  toggleSlider();
  const slidesRemoval = SLIDER.slider_content.querySelectorAll('.mySlides');
  for (let j = 0; j < slidesRemoval.length; j++) {
    slidesRemoval[j].remove();
    SLIDER.slider_caption.innerHTML = '';
  }
}

function launchLightbox(e) {
  toggleSlider();
  const elemCliked = e.target;
  const mediaElemClicked = elemCliked.querySelector('.grabMedia');

  const allMedia = document.querySelectorAll('.grabMedia');
  for (let i = 0; i < allMedia.length; i++) {
    const media = allMedia[i];
    const type = media.tagName;
    const newModal = modalSliderFactory(type, media, i);
    const slideDom = newModal.getSlideDOM(newModal.mediaType, newModal.slideNumber, newModal.altMedia);
    SLIDER.slider_prev.insertAdjacentElement('beforebegin', slideDom);
    if (mediaElemClicked.src === slideDom.querySelector('.mediaSlider').src) {
      slideDom.classList.add('active');
      SLIDER.slider_caption.innerHTML = mediaElemClicked.getAttribute('data-title');
    }
  }

  const firstSlide = SLIDER.slider_content.querySelector('.active .mediaSlider');
  const numberFirstSlide = firstSlide.getAttribute('data-slide-number');
  slideIndex = parseInt(numberFirstSlide, 10) + 1;
}

function showSlides(n) {
  const slides = document.getElementsByClassName('mySlides');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[slideIndex - 1].classList.add('active');
  SLIDER.slider_caption.innerHTML = slides[slideIndex - 1].querySelector('.mediaSlider').getAttribute('data-title');
}

// Next/previous controls
function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function initLightbox() {
  SLIDER.slider_close.addEventListener('click', () => {
    closeSlider();
  });

  SLIDER.slider_prev.addEventListener('click', () => {
    changeSlide(-1);
  });
  SLIDER.slider_next.addEventListener('click', () => {
    changeSlide(1);
  });
}

export { initLightbox, launchLightbox };
