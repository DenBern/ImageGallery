import { setPreviewPhotos } from "../setData/setPreviewPhotos.js";
import {
  keyword,
  defaultKeyword,
  btnNextPhotos,
  btnPrevPhotos,
  page,
  setNextPage,
  randomCount
} from "../variables/variables.js";
import { error, totalPages } from "../service/unsplashService.js";

export const nextPage = () => {
  setNextPage();
  if (!keyword) return;
  if (page < totalPages && page > 1 && !error) {
    btnPrevPhotos.removeAttribute('disabled', '');
    setPreviewPhotos(keyword ?? defaultKeyword[randomCount], page);
  };
  if (page === totalPages) {
    btnNextPhotos.setAttribute('disabled', '');
    btnPrevPhotos.removeAttribute('disabled', '');
    setPreviewPhotos(keyword ?? defaultKeyword[randomCount], page);
  } else {
    return
  };
};