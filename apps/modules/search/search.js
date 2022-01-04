import setGifos from '../gifo/setGifos.js';
const API_KEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";

export default async function (text, value) {
  const request = await fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${API_KEY}&limit=12&offset=${value}`);
  const { data } = await request.json();
  return setGifos({ gifos: data });
}