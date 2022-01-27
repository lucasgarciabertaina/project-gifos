import saveData from "./saveData.js";

export default function recording(input) {
  const { video, recorder, buttonFinally, stream } = input;

  const container = document.getElementById("create-gifo");
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

    await recorder.stopRecording(() => {
      console.log("Stop recording");
    });

    container.removeChild(buttonFinally);
    buttonUpload.addEventListener(("click"), async () => {
      saveData({ recorder, stream })
    })
  })
}