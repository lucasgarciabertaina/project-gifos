export default function setOptions(gifoOptions) {
  if (document.getElementById("suggestion0")) {
    const suggestion0 = document.getElementById("suggestion0");
    suggestion0.innerHTML = gifoOptions[0];

    const suggestion1 = document.getElementById("suggestion1");
    suggestion1.innerHTML = gifoOptions[1];

    const suggestion2 = document.getElementById("suggestion2");
    suggestion2.innerHTML = gifoOptions[2];

    const suggestion3 = document.getElementById("suggestion3");
    suggestion3.innerHTML = gifoOptions[3];
  } else {
    const searcherContainer = document.getElementById("searcher-container");
    searcherContainer.removeAttribute("class");
    searcherContainer.setAttribute("class", "search-section__search--active");

    const search = document.getElementById("search");
    search.removeAttribute("class");
    search.setAttribute("class", "search--active");

    const divisor = document.getElementById("divisor");
    divisor.removeAttribute("class");
    divisor.setAttribute("class", "search-section__divisor--active");

    let iconSearch = document.getElementById("icon-search");
    iconSearch.removeAttribute("class");
    iconSearch.setAttribute("class", "search-section__icon-search--active");

    const iconClose = document.getElementById("icon-close");
    iconClose.removeAttribute("class")
    iconClose.setAttribute("class", "search-section__icon-close--active");

    let index = 0;
    for (const suggestion of gifoOptions) {
      const iconSearchSuggestion = document.createElement("span");
      iconSearchSuggestion.setAttribute("class", "option__icon-search");

      const gifoSuggestion = document.createElement("h4");
      gifoSuggestion.setAttribute("class", "option__sugerence");
      gifoSuggestion.setAttribute("id", "suggestion" + index.toString());

      const option = document.createElement("div");
      option.setAttribute("class", "option");
      option.setAttribute("id", "option" + index.toString());
      option.appendChild(iconSearchSuggestion);
      option.appendChild(gifoSuggestion);

      gifoSuggestion.innerHTML = suggestion;
      searcherContainer.appendChild(option);
      index++;
    }
  }
}