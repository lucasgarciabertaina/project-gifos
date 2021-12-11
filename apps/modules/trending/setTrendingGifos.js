import getTrendingApi from "./get.js";
import setGifos from './setGifos.js'
import createGifo from '../utils/createGifo.js'
import mobileScrollGifos from './mobileScrollGifos.js'
const API_KEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";

export default async function setHtml() {
  const trendingGifos = await getTrendingApi(API_KEY);
  let gifos = setGifos(trendingGifos, 0);
  const trending = document.getElementById("trending-container");
  const arrowLeft = document.createElement('span');
  arrowLeft.setAttribute("class", "trending__arrow trending__arrow--left");
  trending.appendChild(arrowLeft);
  createGifo(gifos, trending);
  const arrowRight = document.createElement('span');
  arrowRight.setAttribute("class", "trending__arrow trending__arrow--right");
  trending.appendChild(arrowRight);

  let initialPosition = 0;
  let initialCondition = 10000;
  let initialGiFosAdd = 3;
  trending.addEventListener("scroll", () => {
    const scrollFunction = mobileScrollGifos(initialPosition, initialCondition, initialGiFosAdd);
    initialPosition = scrollFunction.position;
    initialCondition = scrollFunction.condition;
    initialGiFosAdd = scrollFunction.gifosAdd;
    console.log({ initialPosition, initialCondition, initialGiFosAdd })
  })

  // arrowLeft.addEventListener("click", () => {

  // })
  // arrowRight.addEventListener("click", () => {

  // })
}
