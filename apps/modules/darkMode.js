import darkDay from "./utils/darkDay.js"
import isDark from "./utils/isDark.js";

export default (page) => {
  const mode = document.getElementById("mode");
  switch (page) {
    case 'index':
    case 'favorite':
      darkDay(!isDark(), page);
      mode.addEventListener(("click"), () => {
        darkDay(isDark(), page);
      });
      break;

    default:
      break;
  }
}

// function darkmode() {
//   let body = document.getElementsByTagName("body");
//   let modo = document.getElementById("dark_default");
//   let camaraDark = document.getElementById("camara");
//   let peliculaDark = document.getElementById("pelicula");
//   let imgClose = document.getElementById("img_close_on");
//   if (
//     sessionStorage.getItem("modo") == null ||
//     sessionStorage.getItem("modo") == "Modo Diurno"
//   ) {
//     body[0].setAttribute("class", "darkmode");
//     modo.value = "Modo Diurno";
//     if (camaraDark != null) {
//       camaraDark.removeAttribute("src");
//       camaraDark.setAttribute("src", "/images/camara-modo-noc.svg");
//       peliculaDark.removeAttribute("src");
//       peliculaDark.setAttribute("src", "/images/pelicula-modo-noc.svg");
//     }
//     sessionStorage.setItem("modo", "Modo Nocturno");
//   } else if (sessionStorage.getItem("modo") == "Modo Nocturno") {
//     body[0].removeAttribute("class", "darkmode");
//     modo.value = "Modo Nocturno";
//     if (camaraDark != null) {
//       camaraDark.removeAttribute("src");
//       camaraDark.setAttribute("src", "/images/camara.svg");
//       peliculaDark.removeAttribute("src");
//       peliculaDark.setAttribute("src", "/images/pelicula.svg");
//     }
//     sessionStorage.removeItem("modo");
//     sessionStorage.setItem("modo", "Modo Diurno");
//   }
// }

// export {darkmode};