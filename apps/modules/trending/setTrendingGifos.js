import getTrendingApi from "./get.js";
import setGifos from './setGifos.js'
import createGifo from '../utils/createGifo.js'
const APIKEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";



export default async function setHtml() {
  const trendingGifos = await getTrendingApi(APIKEY);
  const gifos = setGifos(trendingGifos);
  const trending = document.getElementById("trending-container");
  const arrowLeft = document.createElement('span');
  arrowLeft.setAttribute("class", "trending__arrow trending__arrow--left");
  trending.appendChild(arrowLeft);
  createGifo(gifos, trending);
  const arrowRight = document.createElement('span');
  arrowRight.setAttribute("class", "trending__arrow trending__arrow--right");
  trending.appendChild(arrowRight);
  let position = 0
  trending.addEventListener("scroll", () => {
    const trendingPosition = trending.getBoundingClientRect();
    console.log(trending.style.width)
    position += trendingPosition.right;
    if (position === trending.style.width / 2) {
      console.log('ahora')
    }
  })
}
