export default (gifoOptions) => {
  const searcherContainer = document.getElementById("searcher-container")
    .removeAttribute("class")
    .setAttribute("class", "search-section__search--active");
  document.getElementById("search")
    .removeAttribute("class")
    .setAttribute("class", "search--active");
  document.getElementById("divisor")
    .removeAttribute("class")
    .setAttribute("search-section__divisor--active");
  document.getElementById("icon-search")
    .removeAttribute("class")
    .setAttribute("search-section__icon-search--active");
  document.getElementById("icon-close")
    .removeAttribute("class")
    .setAttribute("class", "search-section__icon-close--active");
  // const searcher = document.getElementById("searcher");

  for (const suggestion of gifoOptions) {
    const iconSearch = document.createElement("span").setAttribute("class", "option__icon-search")
    const gifoSuggestion = document.createElement("h4").setAttribute("class", "option__sugerence");
    const option = document.createElement("div")
      .setAttribute("class", "option")
      .appendChild(iconSearch)
      .appendChild(gifoSuggestion)
    option.innerHTML = suggestion;
    searcherContainer.appendChild(option);
  }
}

{/* <div class="option">
            <span class="option__icon-search"></span>
            <h4 class="option__sugerence">Sugerencia 1</h4>
          </div> */}