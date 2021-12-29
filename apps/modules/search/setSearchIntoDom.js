import search from "./search.js"

export default async function setSearchIntoDom(input) {
  const { value } = input;
  const gifos = await search(value);
  const finderContainer = document.getElementById("find");
  finderContainer.innerHTML = ''; // Clear the elements
  finderContainer.innerHTML = `
  <span class="find__line"></span>
  <h2 class="find__title">${value}</h2>
  <section class="find__gifos"></section>
  <button class="find__see-more">Ver Más</button> 
  `;
  finderContainer.setAttribute("class", "find");

}
