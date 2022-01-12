export default function darkDay(condition, page) {
  const body = document.getElementById(page);
  console.log(body);
  const mode = document.getElementById("mode");
  if (condition) {
    sessionStorage.setItem("modo", "Modo Diurno");
    body.removeAttribute("class", "dark");
    mode.innerHTML = "MODO OSCURO";
  } else {
    sessionStorage.setItem("modo", "Modo Oscuro");
    body.setAttribute("class", "dark");
    mode.innerHTML = "MODO DIURNO";
  }
}