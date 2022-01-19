export default function (n) {
  let seg = 0;
  let min = 0;
  let hour = 0;
  for (let i = 0; i < n; i++) {
    seg++
    if (seg % 60 === 0 && seg != 0) {
      min++;
      seg = 0
    }
    if (min % 60 === 0 && min != 0) {
      hour++;
      min = 0;
      seg = 0;
    }
  }
  if (seg.toString().length === 1) {
    seg = `0${seg}`
  }
  if (min.toString().length === 1) {
    min = `0${min}`
  }
  if (hour.toString().length === 1) {
    hour = `0${hour}`
  }
  return `${hour}:${min}:${seg}`
}