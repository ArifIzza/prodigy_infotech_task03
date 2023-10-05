let countdown;
let timerDisplay = document.getElementById('countdown');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let timeLeft = 0; // Start the timer from zero seconds
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        countdown = setInterval(() => {
            timeLeft++;
            displayTime();
        }, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(countdown);
    }
}

function resetTimer() {
    stopTimer();
    timeLeft = 0;
    displayTime();
}

function displayTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timerDisplay.textContent = display;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Display initial time
displayTime();
