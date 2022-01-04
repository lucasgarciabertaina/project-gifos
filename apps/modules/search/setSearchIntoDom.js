import search from "./search.js"
import createGifo from '../gifo/createGifo.js';

export default async function setSearchIntoDom(input) {
  const { value } = input;
  let quantity = 0;
  const finderContainer = document.getElementById("find");
  finderContainer.setAttribute("class", "find");
  let gifos = await search(value, quantity);
  if (gifos.length === 12) {
    quantity += 12;
    finderContainer.innerHTML = `
  <span id="find-line" class="find__line"></span>
  <h2 class="find__title">${value}</h2>
  <section id="find-gifos" class="gifos"></section>
  <button id="see-more" class="find__see-more">VER MAS</button> 
  `;
    const container = document.getElementById("find-gifos");
    await createGifo(gifos, container, "gifo-container");
    const seeMore = document.getElementById("see-more");
    seeMore.addEventListener(('click'), async () => {
      let gifos = await search(value, quantity);
      await createGifo(gifos, container, "gifo-container");
      quantity += 12;
    })
  } else {
    finderContainer.innerHTML = `
    <span class="find__line"></span>
    <h2 class="find__title">${value}</h2>
    <img src="/images/icon-busqueda-sin-resultado.svg" class="find__search-fail-logo"/>
    <p class="find__search-fail-text">Intenta con otra búsqueda.</p>
    `
  }
}
