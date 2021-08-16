function updateTime () {
  let display = document.querySelector('.display');
  let now = new Date();
  let hour = timeCorrection(now.getHours());
  let min = timeCorrection(now.getMinutes());
  let sec = timeCorrection(now.getSeconds());

  const time = hour + ':' + min + ':' +  sec;
  display.textContent = time;
}

function timeCorrection (number) {
  if (number < 10) {
    number = '0' + number;
  }
  return number;
}

updateTime();
setInterval(updateTime, 1000);

console.log(time);