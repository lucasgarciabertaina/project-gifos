import getTrendingApi from "./get.js";
import setGifos from './setGifos.js'
import createGifo from '../utils/createGifo.js'
import mobileScrollGifos from './mobileScrollGifos.js'
import desktopNewGifos from "./desktopNewGifos.js";
const API_KEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";

export default async function setHtml() {
  const trendingGifos = await getTrendingApi(API_KEY);
  let gifos = setGifos(trendingGifos, 0);
  const gifosContainer = document.getElementById("trending-gifos");
  createGifo(gifos, gifosContainer);

  let position = 0;
  let condition = 10000;
  let gifosAdd = 3;
  gifosContainer.addEventListener("scroll", () => {
    const scrollFunction = mobileScrollGifos(position, condition, gifosAdd, trendingGifos);
    position = scrollFunction.position;
    condition = scrollFunction.condition;
    gifosAdd = scrollFunction.gifosAdd;
  })

  const arrowLeft = document.getElementById("arrow-left");

  gifosAdd = 3;
  arrowLeft.addEventListener("click", () => {
    desktopNewGifos(gifosAdd, gifosContainer);
  })

  const arrowRight = document.getElementById("arrow-right");

  arrowRight.addEventListener("click", () => {
    desktopNewGifos(gifosAdd, gifosContainer);
  })
}
