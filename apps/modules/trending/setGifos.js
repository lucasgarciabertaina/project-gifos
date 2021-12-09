export default function setGifos(gifoData) {
  const gifos = [];
  for (const gifo of gifoData) {
    const url = gifo.images.original.url;
    const title = gifo.title;
    var user;
    gifo.username != "" ? user = gifo.username : user = "User";
    gifos.push({ url: url, title: title, user: user })
  }
  return gifos
}