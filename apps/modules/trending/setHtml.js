import createGifo from "../utils/createGifo.js";
import getTrendingApi from "./get.js";
import setGifos from "./setGifos.js";
const APIKEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";


export default async function setHtml() {
  const trending = document.getElementById("trending-container");
  const arrowLeft = document.createElement('span');
  arrowLeft.setAttribute("class", "trending__arrow trending__arrow--left");
  trending.appendChild(arrowLeft);
  //const trendingGifos = await getTrendingApi(APIKEY);
  // const gifos = await setGifos(trendingGifos);
  // createGifo(gifos, trendingGifos)

}
