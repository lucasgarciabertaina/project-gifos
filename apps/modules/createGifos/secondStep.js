import setTimer from "./timer.js";
import uploadGifo from "./uploadGifo.js";

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
    buttonGifos.innerHTML = "FINALIZAR";
    let recorder = RecordRTC(stream, {
      type: 'gif',
      frameRate: 1,
      quality: 10,
      width: 360,
      hidden: 240,
    })
    video.srcObject = stream;
    video.play()
    recorder.startRecording();
    const container = document.getElementById("create-gifo");
    const timer = document.createElement("p");
    timer.setAttribute("class", "create-gifo__timer");
    container.appendChild(timer);
    buttonGifos.addEventListener(("click"), async () => {
      await recorder.stopRecording();
      const form = new FormData();
      form.append('file', recorder.getBlob(), 'myGif.gif');
      console.log(form.get("file"))
    })
  })
}

