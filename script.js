const timerEl = document.getElementById("timer");
const startBtnEl = document.getElementById("start");
const stopBtnEl = document.getElementById("stop");
const resetBtnEl = document.getElementById("reset");

let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  // console.log("Start");
  // We need to create an interval where every 1 second we update the timer.

  interval = setInterval(() => {
    // console.log("timer");
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time is up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  // console.log("Stop");
  clearInterval(interval);
}

function resetTimer() {
  // console.log("Reset");
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startBtnEl.addEventListener("click", () => {
  startTimer();
});

stopBtnEl.addEventListener("click", () => {
  stopTimer();
});

resetBtnEl.addEventListener("click", () => {
  resetTimer();
});
