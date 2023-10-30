import {
  getPhotoById,
  photoById,
  error,
  setError,
  setLoadingData,
  loadingData
} from "../service/unsplashService.js";
import { loadingState } from "../states/loadingState.js";
import { errorState } from "../states/errorState.js";
import { renderPhotoById } from "../renderComponents/renderPhotoById.js";

export const setPhotoById = async (id) => {
  setError(false);
  errorState(error);
  setLoadingData(true);
  loadingState(loadingData);

  await getPhotoById(id);

  if (error) {
    setLoadingData(false);
    loadingState(loadingData);
    errorState(error);
  } else {
    loadingState(loadingData);
    errorState(error);
    renderPhotoById(photoById);
  };
};