const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees =((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minutesDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours;
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (secondsDegrees === 90) secondHand.style.transition = 'all 0s';
  else secondHand.style.transition = 'all 0.05s';

  if (minutesDegrees === 90) minsHand.style.transition = 'all 0s';
  else minsHand.style.transition = 'all 0.1s';

}

setInterval(setDate, 1000);
