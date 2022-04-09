import profileFactory from '../factories/profileCard.js';
import pictureFactory from '../factories/pictureCard.js';
import { GALERYSECTION } from '../utils/const.js';

async function getPhotographers() {
  const response = await fetch('./data/photographers.json');

  const photographers = await response.json();

  return { photographers: photographers.photographers, media: photographers.media };
}

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
        GALERYSECTION.appendChild(pictureCardDOM);
      });
    }
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
