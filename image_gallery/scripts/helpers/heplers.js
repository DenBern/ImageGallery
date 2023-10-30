import { searchBtn, clearBtn, preview} from "../variables/variables.js";

export const changeBtnSearch = () => {
  if (searchBtn.style.display !== 'none') {
    searchBtn.style.display = 'none';
    clearBtn.style.display = 'block';
  } else {
    clearBtn.style.display = 'none';
    searchBtn.style.display = 'block';
  };
};

export const clearPreviewPhotos = () => {
  preview.innerHTML = '';
};