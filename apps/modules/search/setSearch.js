import getSuggestions from './getSuggestions.js';
import setOptions from './setOptions.js';
import destroyOptions from './destroyOptions.js';
import setSearchIntoDom from './setSearchIntoDom.js';
const API_KEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";


export default async () => {
  const searcher = document.getElementById("searcher");

  searcher.addEventListener("keydown", async (letter) => {
    const value = searcher.value + letter.key;
    if (value.length > 1) {
      const searchValues = await getSuggestions(API_KEY, value);
      const gifosTitles = searchValues.map(item => item.name);

      setOptions(gifosTitles);

      const gifoSuggestion0 = document.getElementById("suggestion0");
      const option0 = document.getElementById("option0");
      option0.addEventListener("click", async () => {
        searcher.value = gifoSuggestion0.innerHTML;
        await setSearchIntoDom({ value: searcher.value });
      })

      const gifoSuggestion1 = document.getElementById("suggestion1");
      const option1 = document.getElementById("option1");
      option1.addEventListener("click", async () => {
        searcher.value = gifoSuggestion1.innerHTML;
        await setSearchIntoDom({ value: searcher.value });
      })

      const gifoSuggestion2 = document.getElementById("suggestion2");
      const option2 = document.getElementById("option2");
      option2.addEventListener("click", async () => {
        searcher.value = gifoSuggestion2.innerHTML;
        await setSearchIntoDom({ value: searcher.value });
      })

      const gifoSuggestion3 = document.getElementById("suggestion3");
      const option3 = document.getElementById("option3");
      option3.addEventListener("click", async () => {
        searcher.value = gifoSuggestion3.innerHTML;
        await setSearchIntoDom({ value: searcher.value });
      })

      const iconClose = document.getElementById("icon-close");
      iconClose.addEventListener(("click"), () => {
        destroyOptions();
        searcher.value = "";
      })

      const iconSearch = document.getElementById("icon-search");
      iconSearch.addEventListener(("click"), async () => {
        await setSearchIntoDom({ value: searcher.value });
      })
    }
  })
}

