import isDark from "../utils/isDark.js";

export default function expandGifo(gifoData) {
  const body = document.getElementsByTagName("body")[0];
  isDark() ? body.setAttribute("class", "dark gifo-expand") : body.setAttribute("class", "gifo-expand");
  window.scrollTo(0, 0);

  const checkbox = document.getElementById("header-checkbox");
  checkbox.style.display = "none";

  const burgerIcon = document.getElementById("burger-icon");
  burgerIcon.setAttribute("class", "header__burger-icon--gifo-expand");

  const containerClass = gifoData.containerTag.getAttribute("class");
  gifoData.containerTag.setAttribute("class", "gifo--expand");

  gifoData.gifoTag.setAttribute("class", "gifo--expand__gifo");

  gifoData.gifoIconsTag.setAttribute("class", "gifo__icons--expand");
  gifoData.iconFav.setAttribute("class", "gifo__icon--expand gifo__icon-fav");
  gifoData.iconDownload.setAttribute("class", "gifo__icon--expand gifo__icon-download");
  gifoData.iconMax.setAttribute("class", "gifo__icon--expand gifo__icon-max--expand");
  gifoData.userTag.setAttribute("class", "gifo__user--expand");
  gifoData.titleTag.setAttribute("class", "gifo__title--expand");

  burgerIcon.addEventListener(("click"), () => {
    const body = document.getElementsByTagName("body")[0];
    body.removeAttribute("class");
    if (isDark()) {
      body.setAttribute("class", "dark");
    }
    checkbox.disabled = false;
    burgerIcon.setAttribute("class", "header__burger-icon");

    gifoData.containerTag.setAttribute("class", containerClass);
    gifoData.gifoTag.setAttribute("class", "gifo");

    gifoData.gifoIconsTag.setAttribute("class", "gifo__icons");
    gifoData.iconFav.setAttribute("class", "gifo__icon gifo__icon-download");
    gifoData.iconDownload.setAttribute("class", "gifo__icon gifo__icon-download");
    gifoData.iconMax.setAttribute("class", "gifo__icon gifo__icon-max");
    gifoData.userTag.setAttribute("class", "gifo__user");
    gifoData.titleTag.setAttribute("class", "gifo__title");

    checkbox.style.display = "block";
    console.log(gifoData.trendingPosition)
    window.scrollTo(0, gifoData.trendingPosition.top + gifoData.trendingPosition.y);
  })
}