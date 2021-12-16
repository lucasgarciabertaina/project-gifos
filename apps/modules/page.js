import darkMode from './darkMode.js';
import setTrendingGifos from './trending/setTrendingGifos.js';
import search from "../modules/search/search.js"
export function page(htmlPage) {
  switch (htmlPage) {
    case index:
      search();
      darkMode('index');
      setTrendingGifos();
      //eventListeners de search
      break;

  }
}