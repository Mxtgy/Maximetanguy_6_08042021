// GENERAL DOM ELEMENTS
export const BODY_ELEM = document.querySelector('body');
export const PHOTOGRAPHERS_SECTION = document.querySelector('.photographer_section');
export const GALERY_SECTION = document.querySelector('.galery');

export const ELEM_DOM_PHOTOGRAPHER = {
  targetName: document.querySelector('#js-photograph-name'),
  targetPicture: document.querySelector('#js-photograph-picture'),
  targetLocation: document.querySelector('#js-photograph-location'),
  targetTagline: document.querySelector('#js-photograph-tagline'),
  targetFooterprice: document.querySelector('#js-photograph-price'),
  targetNameModal: document.querySelector('#js-photographer-name-modal'),
};

// MODALE CONTACT
export const MODAL_CONTACT = document.querySelector('.modal-contact-with-overlay');
export const MODAL_CONTACT_OVERLAY = document.querySelector('.modal-contact-overlay');
export const BTN_OPEN_FORM = document.querySelector('.contact_button');
export const BTN_CLOSE_FORM = document.querySelector('.js-modal-contact-close');

// FORMULAIRE
export const FORM = document.querySelector('form');
export const CONFIRMATION_FORM = document.querySelector('.js-form-confirmation');

// INPUTS FORMULAIRE
export const FIRSTNAME = {
  parent: document.querySelector('.formData.first'),
  input: document.querySelector('#first'),
};

export const LASTNAME = {
  parent: document.querySelector('.formData.last'),
  input: document.querySelector('#last'),
};

export const EMAIL = {
  parent: document.querySelector('.formData.email'),
  input: document.querySelector('#email'),
};

export const MESSAGE = {
  parent: document.querySelector('.formData.message'),
  input: document.querySelector('#message'),
};

// SORT ELEM
export const SORT_BTN = document.querySelector('.sortbtn');
export const SORT_LIST = document.querySelector('.sort-content');
export const SORT_OPTN = document.querySelectorAll('.sort-content li');

// FILTRES PICTURES
export const FILTERS = {
  popularity: 'Popularité',
  date: 'Date',
  title: 'Titre',
};

// LIKES ELEM
export const LIKES_ACCESS = document.querySelector('#js-total-likes');
export const TARGET_TOTAL_LIKES = document.querySelector('#js-total-likes span');

// SLIDER
export const SLIDER = {
  slider_with_overlay: document.querySelector('.modal-slider-with-overlay'),
  slider_content: document.querySelector('.modal-slider-content'),
  slider_close: document.querySelector('.js-modal-slider-close'),
  slider_prev: document.querySelector('.js-prev'),
  slider_next: document.querySelector('.js-next'),
  slider_caption: document.querySelector('.slider-title-container span'),
};

// REGEX
export const REGEX = {
  regexMail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

// TYPES MEDIA
export const IMAGE_MEDIA = 'image';
export const VIDEO_MEDIA = 'video';
