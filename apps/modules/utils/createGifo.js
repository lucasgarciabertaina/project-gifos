export default function createGifo(gifos, trendingContainer) {
  for (const gifo of gifos) {
    const container = document.createElement("div");
    container.setAttribute("class", "trending__gifo");

    const gifoTag = document.createElement("img");
    const { url } = gifo;
    gifoTag.setAttribute("src", url);
    gifoTag.setAttribute("class", "gifo");
    container.appendChild(gifoTag)

    const iconsTag = document.createElement("div");
    iconsTag.setAttribute("class", "gifo__icons");
    container.appendChild(iconsTag)

    // const { user } = gifo;
    // const userTag = docuemnt.createElement("p");
    // userTag.innerText = user;
    // userTag.setAttribute("class", "gifo__user")
    // container.appendChild(userTag)

    // const { title } = gifo;
    // const titleTag = docuemnt.createElement("h4");
    // titleTag.innerText = title;
    // titleTag.setAttribute("class", "gifo__title");
    // container.appendChild(titleTag)

    trendingContainer.appendChild(container)
  }
}
    // const favTag = docuemnt.createElement("span");
    // favTag.setAttribute("class", "gifo__icon gifo__icon--fav");
    // iconsTag.appendChild(favTag)

    // const downlTag = document.createElement("span");
    // downlTag.setAttribute("class", "gifo__icon gifo__icon--download");
    // iconsTag.appendChild(downlTag)

    // const maxTag = document.createElement("span");
    // maxTag.setAttribute("class", "gifo__icon gifo__icon--max");
    // iconsTag.appendChild(maxTag)