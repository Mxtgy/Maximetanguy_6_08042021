import {
  BODY_ELEM, SORT_BTN, SORT_LIST, SORT_OPTN, GALERY_SECTION, FILTERS,
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
    GALERY_SECTION.appendChild(element);
  });
}

function initSort() {
  SORT_BTN.addEventListener('click', () => {
    SORT_BTN.setAttribute('aria-expanded', 'true');
    SORT_LIST.classList.add('open');
  });

  BODY_ELEM.addEventListener('click', (e) => {
    const buttonName = SORT_BTN.querySelector('span');
    for (let i = 0; i < SORT_OPTN.length; i++) {
      if (e.target === SORT_OPTN[i]) {
        buttonName.innerText = e.target.innerText;

        //  Lancer la fonction de tri avec l'objet target en paramètre
        sorting(e.target.innerText);
      }
    }

    // On annule
    if (e.target === SORT_BTN) return;

    if (SORT_LIST.classList.contains('open')) {
      SORT_BTN.setAttribute('aria-expanded', 'false');
      SORT_LIST.classList.remove('open');
    }
  });
  SORT_OPTN[2].addEventListener('keydown', (e) => {
    if (SORT_LIST.classList.contains('open') && !e.shiftKey && e.key === 'Tab') {
      SORT_LIST.classList.remove('open');
    } else if (SORT_LIST.classList.contains('open') && e.key === 'Enter') {
      SORT_LIST.classList.remove('open');
      console.log(e.target.innerText);
      sorting(e.target.innerText);
    }
  });
  SORT_OPTN[0].addEventListener('keydown', (e) => {
    if (SORT_LIST.classList.contains('open') && e.shiftKey && e.key === 'Tab') {
      SORT_LIST.classList.remove('open');
    } else if (SORT_LIST.classList.contains('open') && e.key === 'Enter') {
      SORT_LIST.classList.remove('open');
      sorting(e.target.innerText);
    }
  });
}

export default initSort;
