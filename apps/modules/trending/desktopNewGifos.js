import setGifos from './setGifos.js';
import createGifo from '../gifo/createGifo.js';

export default function (gifosAdd, trendingGifos) {
  const gifosContainer = document.getElementById("trending-gifos");
  const gifosToDelete = gifosContainer.childNodes;
  gifosContainer.removeChild(gifosToDelete[0])
  gifosContainer.removeChild(gifosToDelete[0])
  gifosContainer.removeChild(gifosToDelete[0])
  let gifos = setGifos(trendingGifos, gifosAdd);
  createGifo({ gifos, gifosContainer, containerClass: "trending__gifo" });
}