import userProfileCreate from '../utils/userProfileCreate.js';

function profileFactory(data) {
  const {
    name, portrait, city, country, tagline, price,
  } = data;

  const picture = `assets/photographers/${portrait}`;

  const elementsDOM = {
    targetName: document.querySelector('#js-photograph-name'),
    targetPicture: document.querySelector('#js-photograph-picture'),
    targetLocation: document.querySelector('#js-photograph-location'),
    targetTagline: document.querySelector('#js-photograph-tagline'),
    targetFooterprice: document.querySelector('#js-photograph-price'),
  };

  userProfileCreate(elementsDOM, name, picture, city, country, tagline, price);
}

export default profileFactory;
