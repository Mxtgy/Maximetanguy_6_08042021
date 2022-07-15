import { LIKES_ACCESS, TARGET_TOTAL_LIKES } from './const.js';

function likesF(likes) {
  const totalLikes = parseInt(TARGET_TOTAL_LIKES.innerHTML, 10);
  TARGET_TOTAL_LIKES.innerHTML = totalLikes + likes;
  LIKES_ACCESS.setAttribute('aria-label', `${TARGET_TOTAL_LIKES.innerHTML} likes`);
}

function addLike(e) {
  const currentElem = e.target;
  const likesElem = currentElem.parentElement;
  const likesNumber = likesElem.querySelector('.likesNumb');
  const currentPhotoID = likesNumber.getAttribute('data-id');
  const totalLikes = parseInt(TARGET_TOTAL_LIKES.innerHTML, 10);
  const increaseLikesNumber = parseInt(likesNumber.innerText, 10);
  const storage = localStorage.getItem(currentPhotoID);
  if (storage) {
    likesNumber.innerText = increaseLikesNumber - 1;
    TARGET_TOTAL_LIKES.innerHTML = totalLikes - 1;
    LIKES_ACCESS.setAttribute('aria-label', `${TARGET_TOTAL_LIKES.innerHTML} likes`);
    localStorage.removeItem(currentPhotoID);
    return;
  }
  likesNumber.innerText = increaseLikesNumber + 1;
  TARGET_TOTAL_LIKES.innerHTML = totalLikes + 1;
  LIKES_ACCESS.setAttribute('aria-label', `${TARGET_TOTAL_LIKES.innerHTML} likes`);
  localStorage.setItem(currentPhotoID, '1');
}

export { likesF, addLike };
