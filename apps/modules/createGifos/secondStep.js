import setTimer from "./timer.js"

export default async function (stream) {
  const videoContainer = document.getElementById("video-container");
  const buttonGifos = document.getElementById("button-steps");
  const step1 = document.getElementById("step1");
  step1.setAttribute("class", "steps__step");
  const step2 = document.getElementById("step2");
  step2.setAttribute("class", "steps__step--active");
  buttonGifos.style.display = "block";
  buttonGifos.innerHTML = "GRABAR";
  videoContainer.setAttribute("class", "create-gifo__video-container");
  videoContainer.innerHTML = `<video id="player" class="player"></video>`
  const video = document.getElementById("player");
  buttonGifos.addEventListener(("click"), () => {
    video.srcObject = stream;
    video.play()
    const container = document.getElementById("create-gifo");
    const timer = document.createElement("p");
    timer.setAttribute("class", "create-gifo__timer");
    container.appendChild(timer);

    for (let i = 0; i < 7200; i++) {
      setTimeout(
        (function () {
          let _i = i;
          (function () { timer.innerHTML = setTimer(_i) })();
        })(), 1000);
    }
  })
}

