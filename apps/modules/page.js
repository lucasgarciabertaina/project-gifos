import darkMode from './darkMode.js';
import setHtml from './trending/setHtml.js';

export function page(htmlPage) {
  switch (htmlPage) {
    case index:
      darkMode('index');
      setHtml();
      //eventListeners de search
      break;

    default:
      break;
  }
}