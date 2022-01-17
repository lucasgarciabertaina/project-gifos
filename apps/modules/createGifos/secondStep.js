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
  video.srcObject = stream;
  video.play();
}