import { fullSizePhoto, keywordDescription } from "../variables/variables.js";

export const renderPhotoById = (photo) => {
  fullSizePhoto.style.backgroundImage = `url(${photo.mediumSize})`;
  fullSizePhoto.setAttribute('href', `${photo.originSize}`);
  if (photo.description) keywordDescription.textContent = `${photo.description}`;
};