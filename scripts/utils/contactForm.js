import {
  MODALCONTACTOVERLAY, BTNOPENFORM, BTNCLOSEFORM, FORM, FIRSTNAME, LASTNAME, EMAIL, MESSAGE,
} from './const.js';
import modalContactToggle from './toggle-modal.js';
import checkInputFocusOut from './check-input-focusout.js';
import checkOnSubmit from './validate-form.js';

/*
const arrayFocusOut = [FIRSTNAME.input, LASTNAME.input, EMAIL.input, MESSAGE.input];
for (let i = 0; i < arrayFocusOut.length; i++) {
  arrayFocusOut[i].addEventListener('focusout', checkInputFocusOut);
}

/*
Add Event Listener on the submit of the form
*/

/*
FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  checkOnSubmit();
});

MODALCONTACTOVERLAY.addEventListener('click', modalContactToggle);
BTNOPENFORM.addEventListener('click', modalContactToggle);
BTNCLOSEFORM.addEventListener('click', modalContactToggle);
*/

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

  MODALCONTACTOVERLAY.addEventListener('click', modalContactToggle);
  BTNOPENFORM.addEventListener('click', modalContactToggle);
  BTNCLOSEFORM.addEventListener('click', modalContactToggle);
}

export default initContact;
