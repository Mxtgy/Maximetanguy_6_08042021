// MODAL DOM ELEMENTS

export const BODYELEM = document.querySelector('body');
export const MODALCONTACT = document.querySelector('.modal-contact-with-overlay');
export const MODALCONTACTOVERLAY = document.querySelector('.modal-contact-overlay');
export const BTNOPENFORM = document.querySelector('.contact_button');
export const BTNCLOSEFORM = document.querySelector('.js-modal-contact-close');
export const SORTBTN = document.querySelector('.sortbtn');
export const SORTLIST = document.querySelector('.sort-content');
export const SORTOPTN = document.querySelectorAll('.sort-content li');

export const SLIDER = {
  slider_with_overlay: document.querySelector('.modal-slider-with-overlay'),
  slider_content: document.querySelector('.modal-slider-content'),
  slider_close: document.querySelector('.js-modal-slider-close'),
  slider_prev: document.querySelector('.js-prev'),
  slider_next: document.querySelector('.js-next'),
  slider_caption: document.querySelector('.slider-title-container span'),
};

export const photographersSection = document.querySelector('.photographer_section');
export const GALERYSECTION = document.querySelector('.galery');

export const ELEMDOMPHOTOGRAPHER = {
  targetName: document.querySelector('#js-photograph-name'),
  targetPicture: document.querySelector('#js-photograph-picture'),
  targetLocation: document.querySelector('#js-photograph-location'),
  targetTagline: document.querySelector('#js-photograph-tagline'),
  targetFooterprice: document.querySelector('#js-photograph-price'),
  targetNameModal: document.querySelector('#js-photographer-name-modal'),
};

export const FORM = document.querySelector('form');
export const CONFIRMATIONFORM = document.querySelector('.js-form-confirmation');

// REGEX
export const REGEX = {
  regexMail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
// INPUTS
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

// FILTRES
export const FILTERS = {
  popularity: 'Popularité',
  date: 'Date',
  title: 'Titre',
};

// TYPES MEDIA

export const IMAGE_MEDIA = 'image';
export const VIDEO_MEDIA = 'video';
