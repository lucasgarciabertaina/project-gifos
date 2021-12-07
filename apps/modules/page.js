import darkMode from './darkMode.js';

export function page(htmlPage) {
  switch (htmlPage) {
    case index:
      console.log('hi')
      darkMode('index')
      console.log(document.getElementsByClassName('trending'))
      //eventListeners de search
      break;

    default:
      break;
  }
}