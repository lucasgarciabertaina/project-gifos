import search from './get.js';
import setOptions from './setOptions.js';
const API_KEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";


export default async () => {
  const searcher = document.getElementById("searcher");

  searcher.addEventListener("keydown", async (letter) => {
    const value = searcher.value + letter.key;
    if (value.length > 1) {
      const searchValues = await search(API_KEY, value);
      const gifosTitles = searchValues.map(item => item.title);
      setOptions(gifosTitles);
    }
  })
}

