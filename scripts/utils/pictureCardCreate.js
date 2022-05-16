function cardSetAttributes(elementsDOM, id, title, likes, date, linkMedia) {
  elementsDOM.article.setAttribute('data-date', date);
  elementsDOM.article.setAttribute('data-title', title);
  elementsDOM.article.setAttribute('data-likes', likes);
  elementsDOM.link.setAttribute('href', `photographer.html?idphotographer=${id}`);
  elementsDOM.media.setAttribute('src', linkMedia);
  elementsDOM.media.setAttribute('class', 'grabMedia');
  elementsDOM.media.setAttribute('alt', title);
  if (elementsDOM.mediaType === 'video') {
    elementsDOM.media.setAttribute('title', title);
  }
  elementsDOM.media.setAttribute('data-title', title);
  elementsDOM.divlikes.setAttribute('class', 'likes');
  elementsDOM.likesNumb.setAttribute('class', 'likesNumb');
  elementsDOM.likesNumb.setAttribute('data-id', id);
  elementsDOM.iconLikes.setAttribute('src', 'assets/icons/heart-color.svg');
}

function cardAddValues(elementsDOM, title, likes) {
  const namePicture = elementsDOM.h2;
  const likesPicture = elementsDOM.likesNumb;
  namePicture.textContent = title;
  likesPicture.textContent = likes;
  elementsDOM.article.appendChild(elementsDOM.link);
  elementsDOM.link.appendChild(elementsDOM.figure);
  elementsDOM.figure.appendChild(elementsDOM.media);
  elementsDOM.divlikes.append(elementsDOM.likesNumb, elementsDOM.iconLikes);
  elementsDOM.footer.append(elementsDOM.h2, elementsDOM.divlikes);
  elementsDOM.article.appendChild(elementsDOM.footer);
}

export { cardSetAttributes, cardAddValues };
