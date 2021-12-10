import darkMode from './darkMode.js';
import setTrendingGifos from './trending/setTrendingGifos.js';

export function page(htmlPage) {
  switch (htmlPage) {
    case index:
      darkMode('index');
      setTrendingGifos();
      //eventListeners de search
      break;

    default:
      break;
  }
}