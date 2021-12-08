export default async function getTrendingApi(apiKey) {
  const request = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=3`);
  const { data } = await request.json();
  return data
}