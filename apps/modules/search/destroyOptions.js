export default function destroyOption() {
  const searcherContainer = document.getElementById("searcher-container");
  searcherContainer.removeAttribute("class");
  searcherContainer.setAttribute("class", "search-section__search");

  const search = document.getElementById("search");
  search.removeAttribute("class");
  search.setAttribute("class", "search");

  const divisor = document.getElementById("divisor");
  divisor.removeAttribute("class");
  divisor.setAttribute("class", "search-section__divisor");

  let iconSearch = document.getElementById("icon-search");
  iconSearch.removeAttribute("class");
  iconSearch.setAttribute("class", "search-section__icon-search");

  const iconClose = document.getElementById("icon-close");
  iconClose.removeAttribute("class")
  iconClose.setAttribute("class", "search-section__icon-close");

  const option0 = document.getElementById("option0");
  searcherContainer.removeChild(option0);
  const option1 = document.getElementById("option1");
  searcherContainer.removeChild(option1);
  const option2 = document.getElementById("option2");
  searcherContainer.removeChild(option2);
  const option3 = document.getElementById("option3");
  searcherContainer.removeChild(option3);
}