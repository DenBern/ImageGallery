import { spinner, fullSizePhoto } from "../variables/variables.js";
import { error, totalResults } from "../service/unsplashService.js";

export const loadingState = (loading) => {
  if (loading) {
    fullSizePhoto.style.display = 'none';
    spinner.style.display = 'flex';
  }
  if (!loading && !error && totalResults) {
    spinner.style.display = 'none';
    fullSizePhoto.style.display = 'block';
  };
  if (!loading && !error && !totalResults) spinner.style.display = 'none';
  if (error) spinner.style.display = 'none';
};