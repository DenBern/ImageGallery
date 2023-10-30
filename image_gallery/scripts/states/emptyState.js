import {
  fullSizePhoto,
  empty,
  keywordDescription,
  btnNextPhotos,
  btnPrevPhotos,
} from "../variables/variables.js";

export const emptyState = (emptyState) => {
  if (emptyState) {
    empty.style.display = 'flex';
    fullSizePhoto.style.display = 'none';
    btnNextPhotos.setAttribute('disabled', '');
    btnPrevPhotos.setAttribute('disabled', '');
    keywordDescription.textContent = '';
  } else {
    fullSizePhoto.style.display = 'none';
    empty.style.display = 'none';
  }
};