import photographerFactory from '../factories/photographer.js';
import { PHOTOGRAPHERS_SECTION } from '../utils/const.js';

/*
This function return the photographers data.
*/
async function getPhotographers() {
  const response = await fetch('./data/photographers.json');

  const photographers = await response.json();

  return { photographers: photographers.photographers };
}

/*
This function will launch the factory and add the element in the DOM.
*/
async function displayData(photographers) {
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    PHOTOGRAPHERS_SECTION.appendChild(userCardDOM);
  });
}

/*
Initialisation.
*/
async function init() {
  // We start getting the data
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

export default init;
