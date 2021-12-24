export default function expandGifo(gifoData) {
  const body = document.getElementsByTagName("body")[0];
  //body.setAttribute("class", "gifo-expand");

  const burgerIcon = document.getElementById("burger-icon");
  burgerIcon.setAttribute("class", "header__burger-icon--gifo-expand header__burger-icon");

  gifoData.container.setAttribute("class", "gifo--expand");
  gifoData.gifo.setAttribute("class", "gifo--expand__gifo");

  gifoData.gifoIcons.setAttribute("class", "gifo__icons--expand");
  gifoData.iconFav.setAttribute("class", "gifo__icon--expand gifo__icon--fav");
  gifoData.iconDownload.setAttribute("class", "gifo__icon--expand gifo__icon--download");
  gifoData.iconMax.setAttribute("class", "gifo__icon--expand gifo__icon--max-expand");
  gifoData.user.setAttribute("class", "gifo__user--expand");
  gifoData.title.setAttribute("class", "gifo__title--expand");
}