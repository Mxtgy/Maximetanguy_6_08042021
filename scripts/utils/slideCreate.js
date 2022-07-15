function slideSetAttributes(div, media, type, mediaSrc, slideNumber, altMedia) {
  div.setAttribute('class', 'mySlides');
  media.setAttribute('class', 'mediaSlider');
  media.setAttribute('data-slide-number', slideNumber);
  media.setAttribute('data-title', altMedia);
  media.setAttribute('tabindex', '0');
  media.setAttribute('aria-label', altMedia);
  media.setAttribute('src', mediaSrc);
  if (type === 'video') {
    media.setAttribute('controls', true);
    media.setAttribute('title', altMedia);
  }
  if (type === 'image') {
    media.setAttribute('alt', altMedia);
  }
}

function slideAddValues(div, media) {
  div.appendChild(media);
}

export { slideSetAttributes, slideAddValues };
