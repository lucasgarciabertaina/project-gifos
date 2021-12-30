import search from "./search.js"
import createGifo from '../utils/createGifo.js'

export default async function setSearchIntoDom(input) {
  const { value } = input;
  let quantity = 0;
  let gifos = await search(value, quantity);
  quantity += 12;
  const finderContainer = document.getElementById("find");
  finderContainer.setAttribute("class", "find");
  finderContainer.innerHTML = ''; // Clear the elements
  finderContainer.innerHTML = `
  <span class="find__line"></span>
  <h2 class="find__title">${value}</h2>
  <section id="find-gifos" class="find__gifos"></section>
  <button id="see-more" class="find__see-more">VER MAS</button> 
  `;
  const container = document.getElementById("find-gifos");
  await createGifo(gifos, container, "find__gifo");
  const seeMore = document.getElementById("see-more");
  seeMore.addEventListener(('click'), async () => {
    let gifos = await search(value, quantity);
    await createGifo(gifos, container, "find__gifo");
    quantity += 12;
  })

}
