const API_KEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";

export default async function uploadGifo(file) {
  const request = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${API_KEY}&file=${file}`, { method: 'POST', });
  console.log(request);
  const { data } = await request.json();
  return data
}