export default function (body) {
  const header = document.querySelector("header");
  header.setAttribute("class", "header-sticky");

  const nav = document.querySelector("nav");
  const searchContainer = document.getElementById("searcher-container");
  const searcherSize = searchContainer.getBoundingClientRect();
  console.log(nav.innerHTML);

  const searchStickyString = `<div id="searcher-container-sticky" class="search-section__search">
  <div id="search-sticky" class="search">
    <span class="search-section__icon-search"></span>
    <input
      class="search-section__finder"
      id="searcher"
      type="text"
      placeholder="Busca GIFOS y más"
      value=""
    />
    <span class="search-section__icon-close"></span>
  </div>
</div>`
  const searchStickyNode = new DOMParser().parseFromString(searchStickyString, "text/xml");
  console.log(searchStickyNode);

  window.addEventListener(("scroll"), () => {
    const position = body.getBoundingClientRect().y;
    if (position <= -(searcherSize.top + searcherSize.height)) {
      const listElementsContainer = document.querySelector("#elements-container")
      nav.insertBefore(listElementsContainer, searchStickyNode);
    }
  })
}