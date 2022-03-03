function userProfileCreate(elementsDOM, name, picture, city, country, tagline, price) {
  const elemName = elementsDOM.targetName;
  const elemLocation = elementsDOM.targetLocation;
  const elemTagline = elementsDOM.targetTagline;
  const elemFooterprice = elementsDOM.targetFooterprice;
  elementsDOM.targetPicture.setAttribute('src', picture);
  elemName.textContent = name;
  elemLocation.textContent = `${city}, ${country}`;
  elemTagline.textContent = tagline;
  elemFooterprice.textContent = `${price}€ / jour`;
}

export default userProfileCreate;
