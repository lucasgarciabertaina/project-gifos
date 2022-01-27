import recording from "./recording.js";

export default function (input) {
  const { video, stream, buttonStart } = input;

  const container = document.getElementById("create-gifo");
  container.removeChild(buttonStart);

  const secondaryDocument = new DOMParser().parseFromString('<button id="recording" class="create-gifo___button">FINALIZAR</button>', 'text/html');
  const buttonFinally = secondaryDocument.getElementById("recording");
  container.appendChild(buttonFinally);

  const recorder = RecordRTC(stream, {
    type: 'gif',
    frameRate: 1,
    quality: 10,
    width: 360,
    hidden: 240,
    onGifRecordingStarted: function () {
      console.log('started')
    },
  })

  video.srcObject = stream;
  video.play()
  recorder.startRecording();
  recording({ video, recorder, buttonFinally, stream });
}