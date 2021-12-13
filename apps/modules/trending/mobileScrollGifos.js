import setGifos from './setGifos.js';
import createGifo from '../utils/createGifo.js';

export default function mobileScrollGifos(position, condition, gifosAdd, trendingGifos) {
  const gifosContainer = document.getElementById("trending-gifos");
  const trendingPosition = trending.getBoundingClientRect();
  position += trendingPosition.right;
  if (position >= condition) {
    gifosAdd += 3;
    condition += condition * 2;
    const gifos = setGifos(trendingGifos, gifosAdd);
    createGifo(gifos, gifosContainer);
  }
  return { position, condition, gifosAdd }
}