import { SLIDER } from './const.js';
import modalSliderFactory from '../factories/slider.js';
import checkFocus from './accessibility-focus.js';

let slideIndex = 1;
let elemCliked;

function toggleSlider() {
  SLIDER.slider_with_overlay.classList.toggle('open');
  if (SLIDER.slider_with_overlay.getAttribute('aria-hidden') === 'true') {
    SLIDER.slider_with_overlay.setAttribute('aria-hidden', 'false');
  } else {
    SLIDER.slider_with_overlay.setAttribute('aria-hidden', 'true');
  }
  /*
  Ajout des contrôles flèches slider
  */
  if (SLIDER.slider_with_overlay.classList.contains('open')) {
    SLIDER.slider_with_overlay.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowRight') {
        changeSlide(1);
      } else if (e.key === 'ArrowLeft') {
        changeSlide(-1);
      }
    });
  }
}

function closeSlider() {
  toggleSlider();
  const slidesRemoval = SLIDER.slider_content.querySelectorAll('.mySlides');
  for (let j = 0; j < slidesRemoval.length; j++) {
    slidesRemoval[j].remove();
    SLIDER.slider_caption.innerHTML = '';
  }
  elemCliked.focus();
}

function launchLightbox(e) {
  toggleSlider();
  checkFocus(SLIDER.slider_with_overlay);
  elemCliked = e.target;
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
  const mediaSlide = slides[slideIndex - 1].querySelector('.mediaSlider');
  mediaSlide.focus();
  SLIDER.slider_caption.innerHTML = mediaSlide.getAttribute('data-title');
}

/*
Next/previous controls
*/
function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function initLightbox() {
  SLIDER.slider_close.addEventListener('click', () => {
    closeSlider();
  });

  /*
  Addeventlistener enter close modal
  */
  SLIDER.slider_close.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      closeSlider();
    }
  });
  SLIDER.slider_with_overlay.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSlider();
    }
  });

  SLIDER.slider_prev.addEventListener('click', () => {
    changeSlide(-1);
  });
  SLIDER.slider_next.addEventListener('click', () => {
    changeSlide(1);
  });

  /*
  Addeventlistener enter key change slide
  */
  SLIDER.slider_prev.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      changeSlide(-1);
    }
  });
  SLIDER.slider_next.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      changeSlide(1);
    }
  });
}

export { initLightbox, launchLightbox };
