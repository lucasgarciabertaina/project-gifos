import setSearch from "./setSearch.js";

export default function (bodyId) {
  const body = document.getElementById(bodyId);
  const header = document.querySelector("header");
  header.setAttribute("class", "header-sticky");

  const nav = document.getElementsByTagName("nav")[0];
  const searchContainer = document.getElementById("searcher-container");
  const searcherSize = searchContainer.getBoundingClientRect();

  const searchStickyString = `<div id="searcher-container-sticky" class="search-section__search--sticky">
  <div id="search-sticky" class="search">
    <span class="search-section__icon-search" id="icon-search-sticky"></span>
    <input
      class="search-section__finder"
      id="finder-sticky"
      type="text"
      placeholder="Busca GIFOS y más"
      value=""
    />
    <span class="search-section__icon-close"></span>
  </div>
</div>`


  window.addEventListener(("scroll"), () => {
    const position = body.getBoundingClientRect().y;
    if (position <= -(searcherSize.top + searcherSize.height) && !document.getElementById("searcher-container-sticky")) {
      let searchStickyNode = new DOMParser().parseFromString(searchStickyString, "text/html");
      const listElementsContainer = document.querySelector("#elements-container")
      nav.insertBefore(searchStickyNode.documentElement.childNodes[1].childNodes[0], listElementsContainer);
      const finderSticky = document.getElementById("finder-sticky");
      setSearch(finderSticky);
    }
    if (position > -(searcherSize.top + searcherSize.height) && document.getElementById("searcher-container-sticky")) {
      const searchSticky = document.getElementById("searcher-container-sticky");
      nav.removeChild(searchSticky);
    }
  })
}