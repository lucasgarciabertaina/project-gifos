export default function(input) {
  const {myGifo} = input;
  const linkTag = document.getElementById("link");
  linkTag.setAttribute("href", myGifo.url)
}