import getFavorite from "./getFavorite.js";

export default function (gifoTitle) {
  const favorites = getFavorite();
  if (!favorites) {
    return false
  }
  const isFavorite = favorites.filter(favorite => favorite.title === gifoTitle);
  if (isFavorite.length === 1) {
    return true;
  } return false;
}
