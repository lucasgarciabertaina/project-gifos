export default function createGifo(gifos, trendingContainer) {
  for (const gifo of gifos) {
    const container = document.createElement("div");
    container.setAttribute("class", "trending__gifo");

    const gifoTag = document.createElement("img");
    const { url } = gifo;
    gifoTag.setAttribute("src", url);
    gifoTag.setAttribute("class", "gifo");
    container.appendChild(gifoTag);

    const gifoHoverContainer = document.createElement("div");
    gifoHoverContainer.setAttribute("class", "gifo__hover-container");
    container.appendChild(gifoHoverContainer);

    const iconsTag = document.createElement("div");
    iconsTag.setAttribute("class", "gifo__icons");
    gifoHoverContainer.appendChild(iconsTag);

    const favTag = document.createElement("span");
    favTag.setAttribute("class", "gifo__icon gifo__icon--fav");
    iconsTag.appendChild(favTag);

    const downTag = document.createElement("span");
    downTag.setAttribute("class", "gifo__icon gifo__icon--download");
    iconsTag.appendChild(downTag);

    const maxTag = document.createElement("span");
    maxTag.setAttribute("class", "gifo__icon gifo__icon--max");
    iconsTag.appendChild(maxTag);

    const { user } = gifo;
    const userTag = document.createElement("p");
    userTag.innerText = user;
    userTag.setAttribute("class", "gifo__user")
    gifoHoverContainer.appendChild(userTag);

    const { title } = gifo;
    const titleTag = document.createElement("h4");
    titleTag.innerText = title;
    titleTag.setAttribute("class", "gifo__title");
    gifoHoverContainer.appendChild(titleTag);


    trendingContainer.appendChild(container);
  }
}
