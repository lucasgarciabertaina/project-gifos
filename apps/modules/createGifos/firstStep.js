export default async function () {
  const button = document.getElementById("first-step");
  const title = document.getElementById("create-gifo-title");
  const paragraph = document.getElementById("create-gifo-paragraph");
  const step1 = document.getElementById("step1");
  let stream;
  title.innerHTML = "¿Nos das acceso <br> a tu cámara?";
  paragraph.innerHTML = "El acceso a tu camara será válido sólo <br> por el tiempo en el que estés creando el GIFO.";
  button.style.display = "none";
  step1.setAttribute("class", "steps__step--active")
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { height: { max: 480 } },
      audio: false,
    });
    return stream;
  } catch (err) {
    alert("Debes aceptar la cámara para crear el GIFO!")
    title.innerHTML = "Aquí podrás <br> crear tus propios <span class='create-gifo__title--secondary'>GIFOS</span>";
    paragraph.innerHTML = "¡Crea tu GIFO en sólo 3 pasos!<br>(sólo necesitas una cámara para grabar un video)";
    button.style.display = "block";
    step1.setAttribute("class", "steps__step")
    return false
  }
}