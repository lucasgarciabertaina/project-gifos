import darkMode from './darkMode.js';
import setTrendingGifos from './trending/setTrendingGifosHtml.js';
import setSearch from "../modules/search/setSearch.js";
export function page(htmlPage) {
  switch (htmlPage) {
    case index:
      setSearch();
      darkMode('index');
      setTrendingGifos();
      //eventListeners de search
      break;

  }
}