export default async function (apiKey, text) {
  const request = await fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${apiKey}&limit=20`);
  const { data } = await request.json();
  console.log(data);
  return data
}