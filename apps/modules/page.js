import darkMode from './darkMode.js';
import setTrendingGifos from './trending/setTrendingGifosHtml.js';
import setSearch from "../modules/search/setSearch.js";
import isDesktop from "../modules/utils/isDesktop.js";
import searcherSticky from "./search/searcherSticky.js";
import getFavoritesGifos from "./favorites/getGifos.js";
import getMyGifos from "./myGifos/getGifos.js";
import createGifo from './createGifos/createGifo.js';

export function page(htmlPage) {
  switch (htmlPage) {
    case "index":
      if (isDesktop()) {
        searcherSticky(htmlPage);
      }
      setSearch(searcher);
      setTrendingGifos();
      darkMode(htmlPage);
      break;
    case "favorite":
      getFavoritesGifos();
      setTrendingGifos();
      darkMode(htmlPage);
      break;
    case "create-gifos":
      darkMode(htmlPage);
      createGifo();
      break;
    case "my-gifos":
      getMyGifos();
      setTrendingGifos();
      darkMode(htmlPage);
  }
}