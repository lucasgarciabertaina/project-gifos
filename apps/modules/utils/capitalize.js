export default function (word) {
  return word.split('').map((letter, index) => {
    if (index === 0) { return letter.toUpperCase() } else { return letter.toLowerCase() }
  }).join('');
}