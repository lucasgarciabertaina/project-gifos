export default function () {
  const favorites = localStorage.getItem("Favorites");
  if (!favorites) { return; }
  const gifos = JSON.parse(favorites).map(favoriteTitle => {
    return JSON.parse(localStorage.getItem(favoriteTitle));
  });
  return gifos
}