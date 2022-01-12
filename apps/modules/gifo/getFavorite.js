export default function () {
  const favorites = localStorage.getItem("Favorites");
  if (favorites === null) { return; }
  const gifos = JSON.parse(favorites).map(favoriteTitle => {
    return JSON.parse(localStorage.getItem(favoriteTitle));
  });
  return gifos
}