
import downloadGifo from "../../utils/download.js"
import linkGifo from "../../utils/link.js"

export default function (input) {
  const { blob, myGifo } = input;
  const imageUpload = document.getElementById("image-upload");
  imageUpload.setAttribute("class", "success-container__video-image success-container__video-image--check");

  const textCheck = document.getElementById("text-upload");
  textCheck.innerHTML = "GIFO subido con éxito";

  const logosContainer = document.getElementById("logos-success");
  logosContainer.setAttribute("class", "logos-success");

  const download = document.getElementById("download");
  download.addEventListener("click", () => {
    downloadGifo({ blob })
  });

  const link = document.getElementById("link");
  link.addEventListener("click", () => {
    linkGifo({ myGifo })
  });
}