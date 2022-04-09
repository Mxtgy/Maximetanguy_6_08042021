import { checkName, checkEmail, checkMessage } from './form-functions.js';

/*
This function checks the data of some input on focus out by calling specifics functions.
*/
function checkInputFocusOut() {
  const valueElem = this.value;
  const idElem = this.id;
  const elemParent = document.querySelector(`.formData.${idElem}`);
  switch (idElem) {
    case 'first':
    case 'last':
      checkName(elemParent, valueElem);
      break;
    case 'email':
      checkEmail(elemParent, valueElem);
      break;
    case 'message':
      checkMessage(elemParent, valueElem);
      break;
    default:
      break;
  }
}
export default checkInputFocusOut;
