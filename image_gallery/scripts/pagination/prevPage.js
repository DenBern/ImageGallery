import { setPreviewPhotos } from "../setData/setPreviewPhotos.js";
import {
  keyword,
  defaultKeyword,
  btnNextPhotos,
  btnPrevPhotos,
  page,
  setPrevPage,
  randomCount
} from "../variables/variables.js";
import { totalPages } from "../service/unsplashService.js";

export const prevPage = () => {
  setPrevPage();
  if (!keyword) return;
  if (page === 1) {
    setPreviewPhotos(keyword ?? defaultKeyword[randomCount], page);
    btnPrevPhotos.setAttribute('disabled', '');
  };
  if (page <= totalPages && page > 1) {
    btnPrevPhotos.removeAttribute('disabled', '');
    setPreviewPhotos(keyword ?? defaultKeyword[randomCount], page);
  };
  if (page >= 1 && page < totalPages) {
    btnNextPhotos.removeAttribute('disabled', '');
  } else {
    return
  };
};