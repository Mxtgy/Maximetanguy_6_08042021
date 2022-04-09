import photographerFactory from '../factories/photographer.js';
import { photographersSection } from '../utils/const.js';

async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  const response = await fetch('./data/photographers.json');

  const photographers = await response.json();

  return { photographers: photographers.photographers };
}

async function displayData(photographers) {
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
