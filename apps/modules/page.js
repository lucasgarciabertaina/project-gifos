import darkMode from './darkMode.js';
import setTrendingGifos from './trending/setTrendingGifos.js';
import search from "../modules/search/search.js"
export function page(htmlPage) {
  switch (htmlPage) {
    case index:
      darkMode('index');
      setTrendingGifos();
      search();
      //eventListeners de search
      break;

    default:
      break;
  }
}