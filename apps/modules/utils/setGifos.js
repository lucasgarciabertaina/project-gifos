export default function setGifos(gifoData) {
  const gifos = [];
  for (const gifo of gifoData) {
    const url = gifo.images.original.url;
    const title = gifo.title;
    const user = user.user;
    user.user.username ? user = user.username : user = 'User';
    gifos.push({ url: url, title: title, user: user })
  }
  return gifos
}