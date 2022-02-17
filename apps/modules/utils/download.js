export default function (input) {
  const { blob } = input;

  const downTag = document.getElementById("download");
  downTag.setAttribute("download", "myGifo.gif");

  const downloadUrl = window.URL.createObjectURL(blob);
  downTag.setAttribute("href", downloadUrl);
}