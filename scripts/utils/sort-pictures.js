import {
  BODY_ELEM, SORT_BTN, SORT_LIST, SORT_OPTN, GALERY_SECTION, FILTERS,
} from './const.js';

/*
Popularity sort.
*/
function popularitySort(array) {
  return array.sort((b, a) => a.dataset.likes - b.dataset.likes);
}

/*
Title sort.
*/
function titleSort(array) {
  return array.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
}

/*
Date sort.
*/
function dateSort(array) {
  return array.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
}

/*
Function calling one of the three filters functions.
*/
function sorting(elem) {
  const nodeListArticle = document.querySelectorAll('article');
  const arrayArticle = Array.prototype.slice.call(nodeListArticle, 0);

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
    GALERY_SECTION.appendChild(element);
  });
}

/*
Function that add all the listeners opening/closing the list and calling the sort.
*/
function initSort() {
  SORT_BTN.addEventListener('click', () => {
    SORT_BTN.setAttribute('aria-expanded', 'true');
    SORT_LIST.classList.add('open');
  });

  SORT_BTN.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      SORT_BTN.click();
      SORT_LIST.focus();
    }
  });

  BODY_ELEM.addEventListener('click', (e) => {
    const buttonName = SORT_BTN.querySelector('span');

    for (let i = 0; i < SORT_OPTN.length; i++) {
      if (e.target === SORT_OPTN[i]) {
        buttonName.innerText = e.target.innerText;
        SORT_BTN.setAttribute('aria-label', `Filtre actuel : ${e.target.innerText}. Utilisé le menu déroulant pour trier.`);

        //  Lancer la fonction de tri avec l'objet target en paramètre.
        sorting(e.target.innerText);
      }
    }

    // On annule.
    if (e.target === SORT_BTN) return;

    if (SORT_LIST.classList.contains('open')) {
      SORT_BTN.setAttribute('aria-expanded', 'false');
      SORT_LIST.classList.remove('open');
    }
  });

  for (let l = 0; l < SORT_OPTN.length; l++) {
    SORT_OPTN[l].addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        SORT_OPTN[l].click();
        SORT_BTN.querySelector('span').focus();
      }

      if (l === 0 && SORT_LIST.classList.contains('open') && e.shiftKey && e.key === 'Tab') {
        SORT_LIST.classList.remove('open');
      }

      if (l === SORT_OPTN.length - 1 && SORT_LIST.classList.contains('open') && !e.shiftKey && e.key === 'Tab') {
        SORT_LIST.classList.remove('open');
      }
    });
  }
}

export default initSort;
