const preview = document.querySelector('.preview-photos');
const keywordSearch = document.querySelector('.keyword');
const fullSizePhoto = document.querySelector('.full-photo');
const keywordDescription = document.querySelector('.description');
const section = document.querySelector('section');
const input = document.getElementById('search');
const searchBtn = document.querySelector('.search');
const clearBtn = document.querySelector('.clear');
const spinner = document.querySelector('.container-spinner');
const wrapperPhotoId = document.querySelector('.wrapper-full-photo');
const errorId = document.querySelector('.error-id');
const btnNextPhotos = document.querySelector('.next-photos');
const btnPrevPhotos = document.querySelector('.prev-photos');
const empty = document.querySelector('.empty-result');

let page = 1;
const setPage = (value) => page = value;
const setPrevPage = () => page --;
const setNextPage = () => page ++;
let keyword = '';
const setKeyword = (value) => keyword = value;

let defaultKeyword = ['travel', 'city', 'beautiful', 'summer', 'night', 'sea', 'ocean', 'heavens', 'sunset', 'space'];
const randomCount = Math.floor(Math.random() * (defaultKeyword.length));

export {
  preview,
  keywordSearch,
  fullSizePhoto,
  keywordDescription,
  section,
  input,
  searchBtn,
  clearBtn,
  spinner,
  wrapperPhotoId,
  errorId,
  btnNextPhotos,
  btnPrevPhotos,
  empty,
  keyword,
  setKeyword,
  defaultKeyword,
  randomCount,
  page,
  setPage,
  setNextPage,
  setPrevPage,
};

