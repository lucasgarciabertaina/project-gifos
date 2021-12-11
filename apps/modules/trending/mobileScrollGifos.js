import setGifos from './setGifos.js';
import createGifo from './createGifo.js';

export default function mobileScrollGifos(position, condition, gifosAdd) {
  const trending = document.getElementById("trending-container");
  const trendingPosition = trending.getBoundingClientRect();
  position += trendingPosition.right;
  if (position >= condition) {
    gifosAdd += 3;
    condition += condition * 2;
    gifos = setGifos(trendingGifos, gifosAdd);
    createGifo(gifos, trending);
  }
  return { position, condition, gifosAdd }
}