import createGifo from '../gifo/createGifo.js';

export default function () {
  const favorites = localStorage.getItem("Favorites");
  const favoritesContainer = document.getElementById("favorites-gifos");
  if (favorites === null) {
    favoritesContainer.style.flexDirection = "column";
    favoritesContainer.innerHTML = `
    <span class="favorites-my-gifos__logo-without-content favorites-my-gifos__logo-without-content--favorites"></span>
    <p class="favorites-my-gifos_paragraph">"¡Guarda tu primer GIFO en Favoritos 
    para que se muestre aquí!"</p>
    `
  } else {
    const gifoTitles = JSON.parse(favorites);
    let counter = 12;
    let gifos = gifoTitles
      .filter((value, index) => {
        return index < counter
      })
      .map(title => { return JSON.parse(localStorage.getItem(title)) });
    createGifo(gifos, favoritesContainer, "gifo-container");
    if (gifoTitles.length > 12) {
      const container = document.getElementById("favorites");

      const seeMore = document.createElement("button");
      seeMore.setAttribute("class", "favorites-my-gifos_see-more");
      seeMore.innerHTML = "VER MÁS";
      container.appendChild(seeMore);
      let previousValue = counter;

      seeMore.addEventListener("click", () => {
        counter += 12
        gifos = gifoTitles
          .filter((value, index) => {
            return previousValue < index && index < counter
          })
          .map(title => { return JSON.parse(localStorage.getItem(title)) });
        previousValue = counter;
        createGifo(gifos, favoritesContainer, "gifo-container");
        if (gifoTitles.length <= counter) {
          container.removeChild(seeMore)
        }
      })
    }
  }
}