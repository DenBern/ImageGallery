import {
  fullSizePhoto,
  errorId, btnNextPhotos,
  btnPrevPhotos,
  keywordDescription,
} from "../variables/variables.js";

export const errorState = (err) => {
  if (err) {
    fullSizePhoto.style.display = 'none';
    errorId.style.display = 'flex';
    btnNextPhotos.setAttribute('disabled', '');
    btnPrevPhotos.setAttribute('disabled', '');
    keywordDescription.textContent = '';
  } else {
    errorId.style.display = 'none';
    fullSizePhoto.style.display = 'flex';
  }
};