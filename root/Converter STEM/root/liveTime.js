function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedTime = `${hours}:${minutes}.${seconds}`;

  document.getElementById('time').textContent = formattedTime;
}

setInterval(updateTime, 1000);
updateTime();