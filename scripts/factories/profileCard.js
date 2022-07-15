import userProfileCreate from '../utils/userProfileCreate.js';
import { ELEM_DOM_PHOTOGRAPHER } from '../utils/const.js';

function profileFactory(data) {
  const {
    name, portrait, city, country, tagline, price,
  } = data;

  const picture = `assets/photographers/${portrait}`;

  userProfileCreate(ELEM_DOM_PHOTOGRAPHER, name, picture, city, country, tagline, price);
}

export default profileFactory;
