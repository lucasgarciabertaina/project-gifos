import recorder from "./utils/recorder.js";

export default async function (stream) {
  const videoContainer = document.getElementById("video-container");

  const container = document.getElementById("create-gifo");
  const firstStep = document.getElementById("first-step");
  container.removeChild(firstStep);

  const secondaryDocument = new DOMParser().parseFromString('<button id="second-step" class="create-gifo___button">GRABAR</button>', 'text/html');
  const buttonStart = secondaryDocument.getElementById("second-step");
  container.appendChild(buttonStart);

  const step1 = document.getElementById("step1");
  step1.setAttribute("class", "steps__step");

  const step2 = document.getElementById("step2");
  step2.setAttribute("class", "steps__step--active");

  videoContainer.setAttribute("class", "create-gifo__video-container");
  videoContainer.innerHTML = `
  <video id="player" class="player"></video>
  <div id="success-container" class="none" >
  <div id="logos-success" class="none">
    <a id="download" class="logos-success__logo logos-success__logo-download"/></a>
    <a id="link" class="logos-success__logo logos-success__logo-link" target="_blank"/></a>
  </div>
  <span id="image-upload" class="none" ></span>
  <p id="text-upload" class="none">Estamos subiendo tu GIFO</p>
  </div>
  `
  const video = document.getElementById("player");

  buttonStart.addEventListener(("click"), () => {
    recorder({ video, stream, buttonStart });
  })
}
