import userProfileCreate from '../utils/userProfileCreate.js';
import { ELEMDOMPHOTOGRAPHER } from '../utils/const.js';

function profileFactory(data) {
  const {
    name, portrait, city, country, tagline, price,
  } = data;

  const picture = `assets/photographers/${portrait}`;

  userProfileCreate(ELEMDOMPHOTOGRAPHER, name, picture, city, country, tagline, price);
}

export default profileFactory;
