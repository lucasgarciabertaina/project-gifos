export default function isDesktop() {
  const body = document.getElementsByTagName('body')[0];
  return body.getBoundingClientRect().width < 1200 ? false : true; 
}