import { cardSetAttributes, cardAddValues } from '../utils/userCardCreate.js';

/*
Homepage photographer element factory.
*/
function photographerFactory(data) {
  const {
    name, portrait, id, city, country, tagline, price,
  } = data;

  const picture = `assets/photographers/${portrait}`;

  /*
  Function that create the element.
  */
  function getUserCardDOM() {
    const article = document.createElement('article');
    const link = document.createElement('a');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const location = document.createElement('span');
    const tag = document.createElement('span');
    const priceDay = document.createElement('span');
    const elementsDOM = {
      article, link, figure, img, h2, location, tag, priceDay,
    };
    cardSetAttributes(elementsDOM, id, picture, name, city, country, tagline, price);
    cardAddValues(elementsDOM, name, city, country, tagline, price);

    return (article);
  }
  return { getUserCardDOM };
}

export default photographerFactory;
