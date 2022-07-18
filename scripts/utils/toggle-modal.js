import checkFocus from './accessibility-focus.js';
import { MODAL_CONTACT, BTN_OPEN_FORM } from './const.js';

/*
Display or hide the modal.
*/
export default function modalContactToggle(e) {
  MODAL_CONTACT.classList.toggle('open');

  if (MODAL_CONTACT.getAttribute('aria-hidden') === 'true') {
    MODAL_CONTACT.setAttribute('aria-hidden', 'false');
  } else {
    MODAL_CONTACT.setAttribute('aria-hidden', 'true');
  }

  if (MODAL_CONTACT.classList.contains('open') && e.key === 'Enter') {
    checkFocus(MODAL_CONTACT);
  } else if (e.key === 'Enter' || e.key === 'Escape') {
    setTimeout(() => {
      BTN_OPEN_FORM.focus();
    }, 1);
  }
}
