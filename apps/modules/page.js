import darkMode from './darkMode.js';
import setTrendingGifos from './trending/setTrendingGifosHtml.js';
import setSearch from "../modules/search/setSearch.js";
import isDesktop from "../modules/utils/isDesktop.js";
import searcherSticky from "./search/searcherSticky.js";
import getGifos from "./favorites/getGifos.js";

export function page(htmlPage) {
  switch (htmlPage) {
    case "index":
      if (isDesktop()) {
        searcherSticky(htmlPage);
      }
      setSearch(searcher);
      darkMode('index');
      setTrendingGifos();
      break;
    case "favorite":
      darkMode('favorite');
      getGifos();
      setTrendingGifos();
  }
}