import uploadGifo from "./uploadGifo.js";
import getGifo from "../getGifo.js";
import chargeDisplay from "./chargeDisplay.js"
import finishChargeDisplay from "./finishChargeDisplay.js";

export default async function saveData(input) {
  chargeDisplay();
  const { blob } = input;
  const form = new FormData();
  form.append('file', blob, 'myGif.gif');

  const id = await uploadGifo(form);
  const myGifoObject = await getGifo(id);

  const myGifo = {
    url: myGifoObject.images.original.url,
    title: myGifoObject.title,
    user: myGifoObject.username != "" ? myGifoObject.username : "User",
    id
  };

  let myGifos;
  if (!localStorage.getItem('myGifos')) {
    myGifos = [];
  } else {
    myGifos = JSON.parse(localStorage.getItem('myGifos'));
  }
  myGifos.push(myGifo.id);
  localStorage.setItem(myGifo.id, JSON.stringify(myGifo));
  localStorage.setItem("myGifos", JSON.stringify(myGifos));
  finishChargeDisplay({ blob, myGifo });
}