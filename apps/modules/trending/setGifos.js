export default function setGifos(gifoData, index) {
  const gifos = [];
  for (let i = Number(index); i < (index + 3); i++) {
    const gifoObject = gifoData[i];
    const url = gifoObject.images.original.url;
    const title = gifoObject.title;
    let user;
    gifoObject.username != "" ? user = gifoObject.username : user = "User";
    gifos.push({ url: url, title: title, user: user })
  }
  return gifos
}