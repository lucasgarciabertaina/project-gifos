const API_KEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";
export default async function (gifId) {
  const request = await fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`);
  const { data } = await request.json();
  return data
}