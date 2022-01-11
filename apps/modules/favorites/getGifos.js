import createGifo from '../gifo/createGifo.js';

export default function () {
  const favorites = localStorage.getItem("Favorites");
  const favoritesContainer = document.getElementById("favorites-gifos")
  if (JSON.parse(favorites).length === 0) {
    favoritesContainer.style.flexDirection = "column";
    favoritesContainer.innerHTML = `
    <span class="favorites__logo--without-content"></span>
    <p class="favorites_paragraph">"¡Guarda tu primer GIFO en Favoritos 
    para que se muestre aquí!"</p>
    `
  } else {
    const gifoTitles = JSON.parse(favorites);
    const gifos = gifoTitles.map(title => {
      return JSON.parse(localStorage.getItem(title))
    });
    createGifo(gifos, favoritesContainer, "gifo-container");
  }
}