import profileFactory from '../factories/profileCard.js';

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
        return elem;
      });
      console.log(medias);
      /*
      mediaDATA.forEach((media) => {
        if (IDPhotographer === media.photographerId) {
          // Pousser une carte à chaque fois.
          console.log(media);
        }
      });
      */
    }
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();

// addeventlistener sur le système de like.
