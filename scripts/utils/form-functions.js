import { REGEX } from './const.js';

/*
This function display error.
*/
function displayError(elem) {
  const parentElem = elem;
  const errorElem = parentElem.querySelector('span');

  errorElem.style.display = 'block';
  errorElem.setAttribute('role', 'alert');
  parentElem.dataset.visible = true;
}

/*
This function hide/remove the error.
*/
function removeError(elem) {
  const parentElem = elem;
  const errorElem = parentElem.querySelector('span');

  errorElem.style.display = 'none';
  errorElem.removeAttribute('role');
  parentElem.dataset.visible = false;
}

/*
We remove the error if there is one, then we check if the value entered is undefined or
shorter than 2 character. If so, an error will be displayed, else return true.
*/
function checkName(elem, string) {
  removeError(elem);

  if (string === '' || string.length < 2) {
    displayError(elem);

    return false;
  }

  return true;
}

/*
We remove the error if there is one, then we test the value with the regex.
If the test doesn't return true then an error will be displayed.
Else return true.
*/
function checkEmail(elem, string) {
  removeError(elem);
  const { regexMail } = REGEX;

  if (!regexMail.test(string)) {
    displayError(elem);

    return false;
  }

  return true;
}

/*
We remove the error if there is one, then we test the value.
If the test doesn't return true then an error will be displayed.
Else return true.
*/
function checkMessage(elem, string) {
  removeError(elem);

  if (string === '' || string.length < 2) {
    displayError(elem);

    return false;
  }

  return true;
}

export { checkName, checkEmail, checkMessage };
