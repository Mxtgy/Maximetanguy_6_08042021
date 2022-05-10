import {
  BODYELEM, SORTBTN, SORTLIST, SORTOPTN, GALERYSECTION, FILTERS,
} from './const.js';

function popularitySort(array) {
  return array.sort((b, a) => a.dataset.likes - b.dataset.likes);
}

function titleSort(array) {
  return array.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
}

function dateSort(array) {
  return array.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
}

function sorting(elem) {
  const nodeListArticle = document.querySelectorAll('article');
  const arrayArticle = Array.prototype.slice.call(nodeListArticle, 0);

  // mettre un switch
  switch (elem) {
    case FILTERS.popularity:
      popularitySort(arrayArticle);
      break;

    case FILTERS.date:
      dateSort(arrayArticle);
      break;

    case FILTERS.title:
      titleSort(arrayArticle);
      break;

    default:
      break;
  }

  arrayArticle.forEach((element) => {
    GALERYSECTION.appendChild(element);
  });
}

function initSort() {
  SORTBTN.addEventListener('click', () => {
    SORTLIST.classList.add('open');
  });

  BODYELEM.addEventListener('click', (e) => {
    const buttonName = SORTBTN.querySelector('span');
    for (let i = 0; i < SORTOPTN.length; i++) {
      if (e.target === SORTOPTN[i]) {
        buttonName.innerText = e.target.innerText;

        //  Lancer la fonction de tri avec l'objet target en paramètre
        sorting(e.target.innerText);
      }
    }

    // On annule
    if (e.target === SORTBTN) return;

    if (SORTLIST.classList.contains('open')) {
      SORTLIST.classList.remove('open');
    }
  });
}

export default initSort;
