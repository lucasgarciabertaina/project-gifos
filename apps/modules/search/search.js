import search from './get.js';
const API_KEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";

export default () => {
  const searcher = document.getElementById("searcher");
  searcher.addEventListener("keydown", async (letter) => {
    console.log(letter);
    console.log(searcher.value);
    if (searcher.value.length > 2) {
      console.log(await search(API_KEY, searcher.value))
    }
  })
}

