export default function setGifos(input) {
  const { gifos } = input;
  return gifos.map(gifo => {
    return {
      url: gifo.images.original.url,
      title: gifo.title,
      user: gifo.username != "" ? gifo.username : "User",
    };
  });
}