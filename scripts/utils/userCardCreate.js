function cardSetAttributes(elementsDOM, id, picture) {
  elementsDOM.link.setAttribute('href', `photographer.html?idphotographer=${id}`);
  elementsDOM.img.setAttribute('src', picture);
  elementsDOM.location.setAttribute('class', 'location');
  elementsDOM.tag.setAttribute('class', 'tagline');
  elementsDOM.priceDay.setAttribute('class', 'price');
}

function cardAddValues(elementsDOM, name, city, country, tagline, price) {
  const namePhotographer = elementsDOM.h2;
  const locationPhotographer = elementsDOM.location;
  const tagPhotographer = elementsDOM.tag;
  const pricePhotographer = elementsDOM.priceDay;
  namePhotographer.textContent = name;
  locationPhotographer.textContent = `${city}, ${country}`;
  tagPhotographer.textContent = tagline;
  pricePhotographer.textContent = `${price}€/jour`;
  elementsDOM.article.appendChild(elementsDOM.link);
  elementsDOM.link.appendChild(elementsDOM.figure);
  elementsDOM.figure.appendChild(elementsDOM.img);
  elementsDOM.link.appendChild(elementsDOM.h2);
  elementsDOM.article.append(elementsDOM.location, elementsDOM.tag, elementsDOM.priceDay);
}

export { cardSetAttributes, cardAddValues };
