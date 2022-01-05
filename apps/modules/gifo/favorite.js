export default function (gifoData) {
  const data = {
    url: gifoData.url,
    title: gifoData.title,
    user: gifoData.user,
  }
  const existFav = localStorage.getItem("Favorites");
  if (existFav) {
    const condition = localStorage.getItem(data.title)
    if (condition) {
      const removeGifo = JSON.parse(existFav).filter(gifoTitle => gifoTitle != data.title)
      localStorage.setItem("Favorites", JSON.stringify(removeGifo));
      localStorage.removeItem(data.title);
      gifoData.iconFav.setAttribute("class", "gifo__icon gifo__icon-fav");
    } else {
      const favorites = JSON.parse(existFav);
      favorites.push(data.title);
      localStorage.setItem("Favorites", JSON.stringify(favorites));
      localStorage.setItem(data.title, JSON.stringify(data));
      gifoData.iconFav.setAttribute("class", "gifo__icon gifo__icon-fav--active");
    }
  } else {
    const createFav = [];
    createFav.push(data.title);
    localStorage.setItem("Favorites", JSON.stringify(createFav));
    localStorage.setItem(data.title, JSON.stringify(data));
    gifoData.iconFav.setAttribute("class", "gifo__icon gifo__icon-fav--active");
  }
  return gifoData;
}