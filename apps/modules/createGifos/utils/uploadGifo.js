const API_KEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";

export default async function uploadGifo(file) {
  const request = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`, { method: 'POST', body: file });
  const { data } = await request.json();
  return data.id
}