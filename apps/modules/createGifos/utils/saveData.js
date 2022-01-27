export default function saveData(input) {
  const { stream, recorder } = input;
  console.log(stream);
  console.log(recorder);
  const blob = recorder.getBlob();
  console.log(blob)
  const form = new FormData();
  form.append('file', blob, 'myGif.gif');
  console.log(form);
}