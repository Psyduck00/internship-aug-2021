const hoursSpan = document.querySelector(".hours");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");
const startBtn = document.querySelector(".startBtn");
const lapBtn = document.querySelector(".lapBtn");
const stopBtn = document.querySelector(".stopBtn");
const laps = document.querySelector(".laps");

let hours = 0,
    minutes = 0,
    seconds = 0;

var stopwatch;

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  lapBtn.style.display = "inline-block";
  stopBtn.style.display = "inline-block";

  stopwatch = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    if (hours <= 9) hoursSpan.innerText = "0" + hours + " : ";
    else hoursSpan.innerText = hours + " : ";
    if (minutes <= 9) minutesSpan.innerText = "0" + minutes + " : ";
    else minutesSpan.innerText = minutes + " : ";
    if (seconds <= 9) secondsSpan.innerText = "0" + seconds;
    else secondsSpan.innerText = seconds;
  }, 1000);
});

lapBtn.addEventListener("click", () => {
  const lap = document.createElement("div");
  lap.innerText = hours + " : " + minutes + " : " + seconds;
  laps.appendChild(lap);
});

stopBtn.addEventListener("click", () => {
  lapBtn.style.display = "none";
  stopBtn.style.display = "none";
  startBtn.style.display = "inline-block";

  clearInterval(stopwatch);

  hoursSpan.innerText = "00 : ";
  minutesSpan.innerText = "00 : ";
  secondsSpan.innerText = "00";

  hours = 0;
  minutes = 0;
  seconds = 0;

  laps.innerHTML = "<p>LAPS-</p>";
});