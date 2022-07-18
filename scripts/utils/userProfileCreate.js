/*
We built the profile card.
*/
function userProfileCreate(elementsDOM, name, picture, city, country, tagline, price) {
  const elemName = elementsDOM.targetName;
  const elemLocation = elementsDOM.targetLocation;
  const elemTagline = elementsDOM.targetTagline;
  const elemFooterprice = elementsDOM.targetFooterprice;
  const elemModalname = elementsDOM.targetNameModal;

  elementsDOM.targetPicture.setAttribute('src', picture);
  elementsDOM.targetPicture.setAttribute('alt', name);
  elementsDOM.targetPicture.setAttribute('tabindex', '0');
  elemFooterprice.setAttribute('aria-label', `${price}€ par jour`);

  elemName.textContent = name;
  elemLocation.textContent = `${city}, ${country}`;
  elemTagline.textContent = tagline;
  elemFooterprice.textContent = `${price}€ / jour`;
  elemModalname.textContent = name;
}

export default userProfileCreate;
