import { fullSizePhoto, keywordDescription, preview } from "../variables/variables.js";

export const renderPreviewPhotos = (photo, index) => {
  if (!index) {
    fullSizePhoto.style.backgroundImage = `url(${photo.mediumSize})`;
    fullSizePhoto.setAttribute('href', `${photo.originSize}`);
    keywordDescription.textContent = `${photo.description ?? 'Not found'}`;
  }
  const photoThumbnail  = document.createElement('div');
  photoThumbnail.classList.add('photo');
  photoThumbnail.setAttribute('id', `${photo.imgId}`);
  photoThumbnail.style.background = `url(${photo.thumbnail}) no-repeat center / cover`;
  preview.appendChild(photoThumbnail);
};