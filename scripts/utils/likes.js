import { TARGETTOTALLIKES } from './const.js';

function likesF(likes) {
  const totalLikes = parseInt(TARGETTOTALLIKES.innerHTML, 10);
  TARGETTOTALLIKES.innerHTML = totalLikes + likes;
}

function addLike(e) {
  const currentElem = e.target;
  const likesElem = currentElem.parentElement;
  const likesNumber = likesElem.querySelector('.likesNumb');
  const currentPhotoID = likesNumber.getAttribute('data-id');
  const totalLikes = parseInt(TARGETTOTALLIKES.innerHTML, 10);
  const increaseLikesNumber = parseInt(likesNumber.innerText, 10);
  const storage = localStorage.getItem(currentPhotoID);
  if (storage) {
    likesNumber.innerText = increaseLikesNumber - 1;
    TARGETTOTALLIKES.innerHTML = totalLikes - 1;
    localStorage.removeItem(currentPhotoID);
    return;
  }
  likesNumber.innerText = increaseLikesNumber + 1;
  TARGETTOTALLIKES.innerHTML = totalLikes + 1;
  localStorage.setItem(currentPhotoID, '1');
}

export { likesF, addLike };
