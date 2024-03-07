//your JS code here. If required.
function timer() {
  const time = new Date();
  console.log(time);
  const dateStr = time.toLocaleString();
  document.getElementById("timer").textContent = dateStr;
}
setInterval(timer, 1000);

timer();
