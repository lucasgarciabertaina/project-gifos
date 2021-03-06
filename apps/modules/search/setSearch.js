import getSuggestions from './getSuggestions.js';
import setOptions from './setOptions.js';
import destroyOptions from './destroyOptions.js';
import setSearchIntoDom from './setSearchIntoDom.js';
import capitalize from '../utils/capitalize.js';
const API_KEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";


export default async (searcher) => {
  searcher.addEventListener("keydown", async (letter) => {
    const value = searcher.value + letter.key;
    if (value.length > 1) {
      const searchValues = await getSuggestions(API_KEY, value);
      const gifosTitles = searchValues.map(item => item.name);

      setOptions(gifosTitles);

      const gifoSuggestion0 = document.getElementById("suggestion0");
      const option0 = document.getElementById("option0");
      option0.addEventListener("click", async () => {
        searcher.value = capitalize(gifoSuggestion0.innerHTML);
        await setSearchIntoDom({ value: searcher.value });
      })

      const gifoSuggestion1 = document.getElementById("suggestion1");
      const option1 = document.getElementById("option1");
      option1.addEventListener("click", async () => {
        searcher.value = capitalize(gifoSuggestion1.innerHTML);
        await setSearchIntoDom({ value: searcher.value });
      })

      const gifoSuggestion2 = document.getElementById("suggestion2");
      const option2 = document.getElementById("option2");
      option2.addEventListener("click", async () => {
        searcher.value = capitalize(gifoSuggestion2.innerHTML);
        await setSearchIntoDom({ value: searcher.value });
      })

      const gifoSuggestion3 = document.getElementById("suggestion3");
      const option3 = document.getElementById("option3");
      option3.addEventListener("click", async () => {
        searcher.value = capitalize(gifoSuggestion3.innerHTML);
        await setSearchIntoDom({ value: searcher.value });
      })

      const iconClose = document.getElementById("icon-close");
      iconClose.addEventListener(("click"), () => {
        destroyOptions();
      })
      const iconSearch = document.getElementById("icon-search");
      iconSearch.addEventListener(("click"), async () => {
        await setSearchIntoDom({ value: searcher.value });
      })

      const searcherSticky = document.getElementById("searcher-container-sticky");
      const nav = document.getElementsByTagName("nav")[0];
      const iconSearchSticky = document.getElementById("icon-search-sticky");
      iconSearchSticky.addEventListener(("click"), async () => {
        const searcherMain = document.getElementById("searcher");
        searcherMain.value = capitalize(searcher.value);
        nav.removeChild(searcherSticky);
        window.scrollTo(0, 0);
        await setSearchIntoDom({ value: searcher.value });
      })
    }
  })
}

