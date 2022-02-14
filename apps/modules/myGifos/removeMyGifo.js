export default function (gifoData) {
  const myGifos = localStorage.getItem("myGifos");
  const restGifos = JSON.parse(myGifos).filter(id => id === gifoData.id)
  restGifos.length === 0 ? localStorage.removeItem("myGifos") : localStorage.setItem("myGifos", JSON.stringify(restGifos));
  localStorage.removeItem(gifoData.id);
  const gifoContainer = document.getElementById("my-gifos-gifos");
  gifoContainer.remove(gifoData.gifoTag);
}