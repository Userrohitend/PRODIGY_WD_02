
let timer;
let running = false;
let time = 0; // Time in seconds
let lapCount = 0;
let laps = [];

const timeDisplay = document.getElementById('time-display');
const startStopButton = document.getElementById('start-stop');
const lapButton = document.getElementById('lap');
const resetButton = document.getElementById('reset');
const lapList = document.getElementById('lap-list');

// Function to format time (convert seconds to HH:MM:SS format)
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Function to start or stop the stopwatch
function toggleStartStop() {
    if (running) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Stop';
    }
    running = !running;
}

// Function to update the time every second
function updateTime() {
    time++;
    timeDisplay.textContent = formatTime(time);
}

// Function to reset the stopwatch
function resetTime() {
    clearInterval(timer);
    running = false;
    time = 0;
    lapCount = 0;
    laps = [];
    timeDisplay.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    lapList.innerHTML = ''; // Clear lap list
}

// Function to record a lap
function recordLap() {
    if (running) {
        lapCount++;
        const lapTime = formatTime(time);
        laps.push(lapTime);

        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
}
