import { IMAGE_MEDIA, VIDEO_MEDIA } from '../utils/const.js';
import { slideSetAttributes, slideAddValues } from '../utils/slideCreate.js';

/*
Slider factory.
*/
function modalSliderFactory(type, media, number) {
  const mediaSrc = media.src;
  let mediaType = 'image';

  if (type === 'VIDEO') {
    mediaType = 'video';
  }

  const slideNumber = number;
  const altMedia = media.getAttribute('data-title');

  /*
  We build the slide.
  */
  function getSlideDOM(typeMedia, numb, alt) {
    const div = document.createElement('div');
    let mediaElem;
    if (typeMedia === IMAGE_MEDIA) mediaElem = document.createElement('img');
    if (typeMedia === VIDEO_MEDIA) mediaElem = document.createElement('video');
    slideSetAttributes(div, mediaElem, typeMedia, mediaSrc, numb, alt);
    slideAddValues(div, mediaElem);

    return (div);
  }

  return {
    mediaType, altMedia, slideNumber, getSlideDOM,
  };
}

export default modalSliderFactory;
