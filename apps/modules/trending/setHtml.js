import getTrendingApi from "./get.js";
import setGifos from './setGifos.js'
import createGifo from '../utils/createGifo.js'
const APIKEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";



export default async function setHtml() {
  const trendingData = await getTrendingApi(APIKEY);
  const gifos = setGifos(trendingData);
  console.log(gifos)
  // const trending = document.getElementById("trending-container");
  // const arrowLeft = document.createElement('span');
  // arrowLeft.setAttribute("class", "trending__arrow trending__arrow--left");
  // trending.appendChild(arrowLeft);
  // createGifo(gifos, trending)
  // const arrowRight = document.createElement('span');
  // arrowRight.setAttribute("class", "trending__arrow trending__arrow--right");
  // trending.appendChild(arrowRight);
  // const gifos = await setGifos(trendingGifos);
  // createGifo(gifos, trendingGifos)

}
