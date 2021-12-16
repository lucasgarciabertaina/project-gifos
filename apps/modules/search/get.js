export default async function getTrendingApi(apiKey, text) {
  const request = await fetch(`https://aapi.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${text}&limit=5`);
  const { data } = await request.json();
  return data
}