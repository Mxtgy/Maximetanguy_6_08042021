import {
  MODAL_CONTACT_OVERLAY, BTN_OPEN_FORM, BTN_CLOSE_FORM, FORM, FIRSTNAME, LASTNAME, EMAIL, MESSAGE,
  MODAL_CONTACT,
} from './const.js';
import modalContactToggle from './toggle-modal.js';
import checkInputFocusOut from './check-input-focusout.js';
import checkOnSubmit from './validate-form.js';

function initContact() {
  const arrayFocusOut = [FIRSTNAME.input, LASTNAME.input, EMAIL.input, MESSAGE.input];
  for (let i = 0; i < arrayFocusOut.length; i++) {
    arrayFocusOut[i].addEventListener('focusout', checkInputFocusOut);
  }

  /*
  Add Event Listener on the submit of the form
  */

  FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    checkOnSubmit();
  });

  MODAL_CONTACT_OVERLAY.addEventListener('click', modalContactToggle);
  BTN_OPEN_FORM.addEventListener('click', modalContactToggle);

  /*
  Event Listener to open the form with enter key
  */
  BTN_OPEN_FORM.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      modalContactToggle(e);
    }
  });

  BTN_CLOSE_FORM.addEventListener('click', modalContactToggle);

  /*
  Event Listener to close the form with enter key
  */
  BTN_CLOSE_FORM.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      modalContactToggle(e);
    }
  });

  MODAL_CONTACT.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalContactToggle(e);
    }
  });
}

export default initContact;
