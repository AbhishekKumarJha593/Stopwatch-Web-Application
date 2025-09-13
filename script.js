let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;
const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");
function formatTime(h, m, s) {
  return (
    (h < 10 ? "0" : "") + h + ":" +
    (m < 10 ? "0" : "") + m + ":" +
    (s < 10 ? "0" : "") + s
  );
}
function updateDisplay() {
  display.textContent = formatTime(hours, minutes, seconds);
}
startStopBtn.addEventListener("click", function () {
  if (!isRunning) {
    timer = setInterval(function () {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
    startStopBtn.textContent = "Pause";
    startStopBtn.style.background = "#ff9800";
  } else {
    clearInterval(timer);
    isRunning = false;
    startStopBtn.textContent = "Start";
    startStopBtn.style.background = "#4caf50";
  }
});
resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  isRunning = false;
  seconds = 0; minutes = 0; hours = 0;
  updateDisplay();
  startStopBtn.textContent = "Start";
  startStopBtn.style.background = "#4caf50";
  lapsContainer.innerHTML = "";
});
lapBtn.addEventListener("click", function () {
  if (isRunning) {
    const lapTime = formatTime(hours, minutes, seconds);
    const li = document.createElement("li");
    li.textContent = "Lap: " + lapTime;
    lapsContainer.appendChild(li);
  }
});
