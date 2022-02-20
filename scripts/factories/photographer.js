function photographerFactory(data) {
  const {
    name, portrait, id, city, country, tagline, price,
  } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement('article');
    const link = document.createElement('a');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const location = document.createElement('span');
    const tag = document.createElement('span');
    const priceDay = document.createElement('span');
    link.setAttribute('href', `photographer.html?${id}`);
    img.setAttribute('src', picture);
    location.setAttribute('class', 'location');
    tag.setAttribute('class', 'tagline');
    priceDay.setAttribute('class', 'price');
    h2.textContent = name;
    location.textContent = `${city}, ${country}`;
    tag.textContent = tagline;
    priceDay.textContent = `${price}€/jour`;
    article.appendChild(link);
    link.appendChild(figure);
    figure.appendChild(img);
    link.appendChild(h2);
    article.append(location, tag, priceDay);
    return (article);
  }
  return { name, picture, getUserCardDOM };
}

export default photographerFactory;
