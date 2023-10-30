import { setPreviewPhotos } from "./setData/setPreviewPhotos.js";
import { defaultKeyword, keyword, page, randomCount, setKeyword} from "./variables/variables.js";
import { eventListeners } from "./eventListeners/eventListeners.js";

setKeyword(defaultKeyword[randomCount]);
setPreviewPhotos(keyword, page);
eventListeners();