let secondHand = document.querySelector('.second-hand');
let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date(); //取得日期和時間
  const hour = now.getHours(); //取得時
  const minutes = now.getMinutes(); //取得分
  const seconds = now.getSeconds(); //取得秒
  
  let secondsDeg = (seconds/60)*360;
  let minutesDeg = (minutes/60)*360;
  let hourDeg = (hour/12)*360;
  
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);