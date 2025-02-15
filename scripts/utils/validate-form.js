import {
  FORM, CONFIRMATION_FORM, FIRSTNAME, LASTNAME, EMAIL, MESSAGE,
} from './const.js';
import { checkName, checkEmail, checkMessage } from './form-functions.js';

/*
We check here if there is no error before submitting the form.
Specific functions are called with the inputs values and if all return true
we can send the data and display the success message.
*/
function checkOnSubmit() {
  const checkname = checkName(FIRSTNAME.parent, FIRSTNAME.input.value);
  const checklast = checkName(LASTNAME.parent, LASTNAME.input.value);
  const checkmail = checkEmail(EMAIL.parent, EMAIL.input.value);
  const checkmessage = checkMessage(MESSAGE.parent, MESSAGE.input.value);

  if (checkname && checklast && checkmail && checkmessage) {
    CONFIRMATION_FORM.style.display = 'block';
    CONFIRMATION_FORM.setAttribute('role', 'alert');

    console.log(`Prénom : ${FIRSTNAME.input.value}`);
    console.log(`Nom : ${LASTNAME.input.value}`);
    console.log(`E-mail : ${EMAIL.input.value}`);
    console.log(`Message : ${MESSAGE.input.value}`);

    FORM.remove();

    // FORM.submit();
  }
}

export default checkOnSubmit;
