import { emptyState } from "../states/emptyState.js";
import { errorState } from "../states/errorState.js";
import { loadingState } from "../states/loadingState.js";
import { renderPreviewPhotos } from "../renderComponents/renderPreviewPhotos.js";
import { setPhotoById } from "./setPhotoById.js";
import { clearPreviewPhotos } from "../helpers/heplers.js";
import {
  previewPhotos,
  getPreviewPhotos,
  error,
  totalResults,
  totalPages,
  loadingData,
  setError,
  setEmptyState,
  setLoadingData
} from "../service/unsplashService.js";
import {
  input,
  searchBtn,
  keywordSearch,
  btnNextPhotos,
  btnPrevPhotos,
} from "../variables/variables.js";

export let allPhotos = [];

export const setPreviewPhotos = async (keyword, page) => {
  if (keyword === '') return;
  if (input.value === '') {
    searchBtn.setAttribute('disabled', '');
  };
  if (page === 1) {
    btnPrevPhotos.setAttribute('disabled', '');
  };
  setError(false);
  setEmptyState(false);
  errorState(error);
  emptyState(totalResults);
  setLoadingData(true);
  loadingState(loadingData);

  await getPreviewPhotos(keyword.toLowerCase(), page);

  loadingState(false);
  clearPreviewPhotos();
  keywordSearch.textContent = `${(keyword ?? defaultKeyword[randomCount]).toLowerCase()}`;
  if (error) errorState(error);
  if (!totalResults && !error) emptyState(true);
  if (totalResults && !error) {
    if (page !== totalPages) btnNextPhotos.removeAttribute('disabled', '');
    if(page === 1) btnPrevPhotos.setAttribute('disabled', '');
    errorState(error);
    emptyState(!totalResults);
    clearPreviewPhotos();
    previewPhotos.forEach((photo, index) => {
      renderPreviewPhotos(photo, index);
    });
    loadingState(loadingData);
  }
  allPhotos = document.querySelectorAll('.photo');
  allPhotos.forEach(photo => {
    photo.addEventListener('click', (e) => {
      setPhotoById(e.target.id);
    });
  });
};


