import saveData from "./saveData.js";

export default function recording(input) {
  const { video, recorder, buttonFinally, stream } = input;
  recorder.startRecording();
  const container = document.getElementById("create-gifo");
  if (document.getElementById("upload-gifo")) {
    container.removeChild(document.getElementById("repeat"));
    container.removeChild(document.getElementById("upload-gifo"));
    container.appendChild(buttonFinally);
  }
  const view = `
    <p id="timer" class="create-gifo__timer"></p>
    <p id="repeat" class="create-gifo__repeat">REPETIR CAPTURA</p>
    <button id="upload-gifo" class="create-gifo___button">SUBIR GIFO</button>'
  `
  const secondaryDocument = new DOMParser().parseFromString(view, 'text/html');
  const timerContainer = secondaryDocument.getElementById("timer");
  container.appendChild(timerContainer);

  let seg = 0;
  let min = 0;
  let hour = 0;
  let interval = setInterval(() => {
    seg++
    for (let i = 0; i < seg; i++) {
      if (seg % 60 === 0 && seg != 0) {
        min++;
        seg = 0
      }
      if (min % 60 === 0 && min != 0) {
        hour++;
        min = 0;
        seg = 0;
      }
    }
    if (seg.toString().length === 1) {
      seg = `0${seg}`
    }
    if (min.toString().length === 1) {
      min = `0${min}`
    }
    if (hour.toString().length === 1) {
      hour = `0${hour}`
    }
    timerContainer.innerHTML = `${hour}:${min}:${seg}`;
  }, 1000);
  buttonFinally.addEventListener('click', async () => {
    window.clearInterval(interval);
    container.removeChild(timerContainer);

    const repeat = secondaryDocument.getElementById("repeat");
    container.appendChild(repeat);

    const buttonUpload = secondaryDocument.getElementById("upload-gifo");
    container.appendChild(buttonUpload);

    await recorder.stopRecording();
    const blob = await recorder.getBlob();

    container.removeChild(buttonFinally);
    buttonUpload.addEventListener(("click"), async () => {
      container.removeChild(buttonUpload);
      container.removeChild(repeat);
      video.pause();
      video.setAttribute("class", "player player--active");
      await saveData({ recorder, stream, blob })
    });
    repeat.addEventListener(("click"), () => {
      recording({ recorder, buttonFinally, stream });
    })
  })
}