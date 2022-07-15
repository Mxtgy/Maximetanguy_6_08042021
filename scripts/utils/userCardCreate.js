function cardSetAttributes(elementsDOM, id, picture, name, city, country, tagline, price) {
  elementsDOM.h2.setAttribute('tabindex', '0');
  elementsDOM.link.setAttribute('href', `photographer.html?idphotographer=${id}`);
  elementsDOM.img.setAttribute('src', picture);
  elementsDOM.img.setAttribute('alt', name);
  elementsDOM.img.setAttribute('tabindex', '0');
  elementsDOM.location.setAttribute('class', 'location');
  elementsDOM.location.setAttribute('aria-label', `${city}, ${country}`);
  elementsDOM.location.setAttribute('tabindex', '0');
  elementsDOM.tag.setAttribute('class', 'tagline');
  elementsDOM.tag.setAttribute('tabindex', '0');
  elementsDOM.tag.setAttribute('aria-label', tagline);
  elementsDOM.priceDay.setAttribute('class', 'price');
  elementsDOM.priceDay.setAttribute('tabindex', '0');
  elementsDOM.priceDay.setAttribute('aria-label', `${price}€ par jour`);
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
