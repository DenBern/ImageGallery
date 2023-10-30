import {
  searchBtn,
  clearBtn,
  input,
  keyword,
  setKeyword,
  setPage,
  btnNextPhotos,
  btnPrevPhotos,
} from "../variables/variables.js";
import { changeBtnSearch } from "../helpers/heplers.js";
import { setPreviewPhotos } from "../setData/setPreviewPhotos.js";
import { page } from "../variables/variables.js";
import { nextPage } from "../pagination/nextPage.js";
import { prevPage } from "../pagination/prevPage.js";

export const eventListeners = () => {
  input.addEventListener('input', (e) => {
    setKeyword(e.target.value);
    if (!e.target.value && searchBtn.style.display === 'none') {
      changeBtnSearch();
    };
    if (e.target.value !== '') {
      searchBtn.removeAttribute('disabled', '');
    };
  });

  searchBtn.addEventListener('click', () => {
    setPage(1);
    if (!keyword) return;
    setPreviewPhotos(keyword, page);
    changeBtnSearch();
  });

  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (keyword === '') return;
      setPage(1);
      setKeyword(input.value);
      setPreviewPhotos(keyword, page);
      changeBtnSearch();
    };
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    setKeyword(input.value);
    changeBtnSearch();
  });

  btnNextPhotos.addEventListener('click', () => {
    nextPage();
  });

  btnPrevPhotos.addEventListener('click', () => {
    prevPage();
  });
};