import isDark from "../utils/isDark.js";

export default function expandGifo(gifoData) {
  const body = document.getElementsByTagName("body")[0];
  isDark() ? body.setAttribute("class", "dark gifo-expand") : body.setAttribute("class", "gifo-expand");
  window.scrollTo(0, 0);

  const checkbox = document.getElementById("header-checkbox");
  checkbox.style.display = "none";

  const burgerIcon = document.getElementById("burger-icon");
  burgerIcon.setAttribute("class", "header__burger-icon--gifo-expand");

  const containerClass = gifoData.container.getAttribute("class");
  gifoData.container.setAttribute("class", "gifo--expand");

  gifoData.gifo.setAttribute("class", "gifo--expand__gifo");

  gifoData.gifoIcons.setAttribute("class", "gifo__icons--expand");
  gifoData.iconFav.setAttribute("class", "gifo__icon--expand gifo__icon--fav");
  gifoData.iconDownload.setAttribute("class", "gifo__icon--expand gifo__icon--download");
  gifoData.iconMax.setAttribute("class", "gifo__icon--expand gifo__icon--max-expand");
  gifoData.user.setAttribute("class", "gifo__user--expand");
  gifoData.title.setAttribute("class", "gifo__title--expand");

  burgerIcon.addEventListener(("click"), () => {
    const body = document.getElementsByTagName("body")[0];
    if (isDark()) {
      console.log("hola");
      body.setAttribute("class", "dark")
    } else {
      console.log("chau");
      body.removeAttribute("class")
    }
    checkbox.disabled = false;
    window.scrollTo(0, gifoData.trendingPosition.y);
    body.removeAttribute("class");
    burgerIcon.setAttribute("class", "header__burger-icon");

    gifoData.container.setAttribute("class", containerClass);
    gifoData.gifo.setAttribute("class", "gifo");

    gifoData.gifoIcons.setAttribute("class", "gifo__icons");
    gifoData.iconFav.setAttribute("class", "gifo__icon gifo__icon--download");
    gifoData.iconDownload.setAttribute("class", "gifo__icon gifo__icon--download");
    gifoData.iconMax.setAttribute("class", "gifo__icon gifo__icon--max");
    gifoData.user.setAttribute("class", "gifo__user");
    gifoData.title.setAttribute("class", "gifo__title");

    checkbox.style.display = "block";
  })
}