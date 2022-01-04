export default function (gifoData) {
  const isFav = localStorage.getItem("Favorites");
  if (isFav) {
    const favorites = JSON.parse(isFav);
    favorites.push(gifoData.titleGifo);
    localStorage.setItem("Favorites", JSON.stringify(favorites));
    localStorage.setItem(gifoData.titleGifo, gifoData);
  } else {
    const createFav = [];
    createFav.push(gifoData.titleGifo);
    localStorage.setItem("Favorites", JSON.stringify(createFav));
    localStorage.setItem(gifoData.titleGifo, gifoData);
  }
}