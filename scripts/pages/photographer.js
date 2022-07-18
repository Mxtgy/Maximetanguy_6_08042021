import profileFactory from '../factories/profileCard.js';
import pictureFactory from '../factories/pictureCard.js';
import { launchLightbox } from '../utils/lightbox.js';
import { addLike } from '../utils/likes.js';
import { GALERY_SECTION } from '../utils/const.js';

/*
This function return the photographers data and the medias.
*/
async function getPhotographers() {
  const response = await fetch('./data/photographers.json');

  const photographers = await response.json();

  return { photographers: photographers.photographers, media: photographers.media };
}

/*
This function displays the photographers data and medias thanks to the
parameters found in the URL.
Also we filter the medias by popularity.
*/
async function displayData(photographers) {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const IDPhotographer = parseInt(params.idphotographer, 10);
  const photographersDATA = photographers.photographers;
  const mediaDATA = photographers.media;

  photographersDATA.forEach((photographer) => {
    if (IDPhotographer === photographer.id) {
      profileFactory(photographer);

      const medias = mediaDATA.filter((elem) => {
        if (IDPhotographer === elem.photographerId) {
          return elem;
        }
      });

      medias.sort((b, a) => a.likes - b.likes);
      medias.forEach((media) => {
        const pictureModel = pictureFactory(media);
        const pictureCardDOM = pictureModel.getPictureCardDOM(pictureModel.type);
        GALERY_SECTION.appendChild(pictureCardDOM);
      });
    }
  });
}

/*
We add the listeners on the medias to launch lightbox and on the likes.
*/
async function addListener() {
  const listenPictures = document.querySelectorAll('article a');
  const listenLikes = document.querySelectorAll('.likes img');

  for (let i = 0; i < listenPictures.length; i++) {
    listenPictures[i].addEventListener('click', (e) => {
      e.preventDefault();
      launchLightbox(e);
    });

    listenLikes[i].addEventListener('click', (e) => {
      addLike(e);
    });

    listenLikes[i].addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        addLike(e);
      }
    });
  }
}

/*
Initialisation.
*/
async function initPhotographer() {
  // We start getting the data
  const photographers = await getPhotographers();
  displayData(photographers);
  addListener();
}

export default initPhotographer;
