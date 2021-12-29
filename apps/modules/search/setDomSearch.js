export default async function (apiKey, text) {
  const request = await fetch(`https://api.giphy.com/v1/tags/related/${text}?api_key=${apiKey}`);
  const { data } = await request.json();
  const suggestions = data.filter((suggestion, index) => index < 4);
  return suggestions
}