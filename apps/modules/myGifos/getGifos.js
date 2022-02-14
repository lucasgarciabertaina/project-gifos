import createGifo from '../gifo/createGifo.js';
import getGifo from '../createGifos/getGifo.js'
import setGifo from '../gifo/setGifos.js';

export default async function () {
  const myGifos = localStorage.getItem("myGifos");
  const myGifosContainer = document.getElementById("my-gifos-gifos");
  if (myGifos === null) {
    myGifosContainer.style.flexDirection = "column";
    myGifosContainer.innerHTML = `
    <span class="favorites-my-gifos__logo-without-content favorites-my-gifos__logo-without-content--my-gifos"></span>
    <p class="favorites-my-gifos_paragraph">"¡Anímate a crear tu primer GIFO!"</p>
    `
  } else {
    const gifoTitles = JSON.parse(myGifos);
    let counter = 12;
    let gifos;
    if (gifoTitles.length > 1) {
      gifos = gifoTitles.map((title) => {
        const data = localStorage.getItem(title);
        return JSON.parse(data);
      })
    } else {
      gifos = [];
      const data = await getGifo(gifoTitles[0]);
      gifos.push(data)
      gifos = setGifo({ gifos })
    }
    createGifo({ gifos, gifosContainer: myGifosContainer, containerClass: "gifo-container", isMyGifo: true });
    // if (gifoTitles.length > 12) {
    //   const container = document.getElementById("my-gifos");

    //   const seeMore = document.createElement("button");
    //   seeMore.setAttribute("class", "favorites-my-gifos_see-more");
    //   seeMore.innerHTML = "VER MÁS";
    //   container.appendChild(seeMore);
    //   let previousValue = counter;

    //   seeMore.addEventListener("click", () => {
    //     counter += 12
    //     gifos = gifoTitles
    //       .filter((value, index) => {
    //         return previousValue < index && index < counter
    //       })
    //       .map(title => { return JSON.parse(localStorage.getItem(title)) });
    //     previousValue = counter;
    //     createGifo(gifos, myGifosContainer, "gifo-container");
    //     if (gifoTitles.length <= counter) {
    //       container.removeChild(seeMore)
    //     }
    //   })
    // }
  }
}