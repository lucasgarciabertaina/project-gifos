import expand from "./expand.js";
import isDesktop from "../utils/isDesktop.js";
import favorite from './favorite.js';

export default async function createGifo(gifos, gifosContainer, containerClass) {
  for (const gifo of gifos) {
    const gifoContainer = document.createElement("div");
    gifoContainer.setAttribute("class", containerClass);

    const gifoTag = document.createElement("img");
    const { url } = gifo;
    gifoTag.setAttribute("src", url);
    gifoTag.setAttribute("class", "gifo");
    gifoContainer.appendChild(gifoTag);

    const gifoHoverContainer = document.createElement("div");
    gifoHoverContainer.setAttribute("class", "gifo__hover-container");
    gifoContainer.appendChild(gifoHoverContainer);

    const iconsTag = document.createElement("div");
    iconsTag.setAttribute("class", "gifo__icons");
    gifoHoverContainer.appendChild(iconsTag);

    const favTag = document.createElement("span");
    favTag.setAttribute("class", "gifo__icon gifo__icon-fav");
    iconsTag.appendChild(favTag);

    const downTag = document.createElement("a");
    downTag.setAttribute("class", "gifo__icon gifo__icon-download");
    downTag.setAttribute("download", "gifo.gif");

    const response = await fetch(url + ".gif");
    const file = await response.blob();
    const downloadUrl = window.URL.createObjectURL(file);
    downTag.setAttribute("href", downloadUrl);
    iconsTag.appendChild(downTag);

    const maxTag = document.createElement("span");
    maxTag.setAttribute("class", "gifo__icon gifo__icon-max");
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
    gifosContainer.appendChild(gifoContainer);

    const gifoData = {
      ...gifo,
      containerTag: gifoContainer,
      gifoTag: gifoTag,
      gifoIconsTag: iconsTag,
      iconFav: favTag,
      iconDownload: downTag,
      iconMax: maxTag,
      userTag: userTag,
      titleTag: titleTag,
      trendingPosition: gifosContainer.getBoundingClientRect(),
    }
    maxTag.addEventListener(("click"), () => expand(gifoData));

    gifoContainer.addEventListener(("click"), () => {
      if (!isDesktop()) {
        expand(gifoData)
      }
    });

    favTag.addEventListener(("click"), () => (favorite(gifoData)));
  }
}
