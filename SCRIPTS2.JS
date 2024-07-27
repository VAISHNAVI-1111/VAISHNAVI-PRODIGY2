let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    displayTime(elapsedTime);
  }, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayTime(elapsedTime);
  document.getElementById('laps').innerHTML = '';
}

function lapTimer() {
  let li = document.createElement('li');
  li.innerText = formatTime(elapsedTime);
  document.getElementById('laps').appendChild(li);
}

function displayTime(time) {
  let minutes = Math.floor(time / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = (time % 1000);
  document.getElementById('display').innerText = 
    ${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds, 3)};
}

function padTime(value, width = 2) {
  return value.toString().padStart(width, '0');
}

function formatTime(time) {
  let date = new Date(time);
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();
  return ${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds, 3)};
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
document.getElementById('lapButton').addEventListener('click', lapTimer);