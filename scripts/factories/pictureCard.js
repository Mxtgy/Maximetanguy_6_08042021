import { cardSetAttributes, cardAddValues } from '../utils/pictureCardCreate.js';
import { IMAGE_MEDIA, VIDEO_MEDIA } from '../utils/const.js';

function pictureFactory(data) {
  const {
    id, photographerId, title, likes, date,
  } = data;

  let type = 'image';
  let mediaVar = data.image;

  if (data.video) {
    type = 'video';
    mediaVar = data.video;
  }

  const linkMedia = `assets/pictures/${photographerId}/${mediaVar}`;

  function getPictureCardDOM(mediaType) {
    const article = document.createElement('article');
    const link = document.createElement('a');
    const figure = document.createElement('figure');
    let media;
    if (mediaType === IMAGE_MEDIA) media = document.createElement('img');
    if (mediaType === VIDEO_MEDIA) media = document.createElement('video');
    const footer = document.createElement('footer');
    const h2 = document.createElement('h2');
    const divlikes = document.createElement('div');
    const likesNumb = document.createElement('span');
    const iconLikes = document.createElement('img');

    const elementsDOM = {
      article, link, figure, media, mediaType, footer, h2, divlikes, likesNumb, iconLikes,
    };

    cardSetAttributes(elementsDOM, id, title, likes, date, linkMedia);
    cardAddValues(elementsDOM, title, likes);

    return (article);
  }
  return { type, getPictureCardDOM };
}

export default pictureFactory;
