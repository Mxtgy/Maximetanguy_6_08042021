function userProfileCreate(elementsDOM, name, picture, city, country, tagline, price) {
  const elemName = elementsDOM.targetName;
  const elemLocation = elementsDOM.targetLocation;
  const elemTagline = elementsDOM.targetTagline;
  const elemFooterprice = elementsDOM.targetFooterprice;
  const elemModalname = elementsDOM.targetNameModal;
  elementsDOM.targetPicture.setAttribute('src', picture);
  elemName.textContent = name;
  elemLocation.textContent = `${city}, ${country}`;
  elemTagline.textContent = tagline;
  elemFooterprice.textContent = `${price}€ / jour`;
  elemModalname.textContent = name;
}

export default userProfileCreate;
