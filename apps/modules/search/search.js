import setGifos from '../utils/setGifos.js';
const API_KEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";

export default async function (text) {
  const request = await fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${API_KEY}&limit=20`);
  const { data } = await request.json();
  return setGifos({ gifos: data });
}