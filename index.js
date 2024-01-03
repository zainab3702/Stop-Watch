// Variables for Button

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for Time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for Leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for setInterval and timerStatus

let timerInterval = null;
let timerStatus = "Stopped";


// Stop Watch Function

function stopWatch(){
    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        
        if(minutes / 60 === 1){
        minutes = 0;
        hours++;
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    } 

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}
// window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener('click', function(){
    if(timerStatus === "Stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "Started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "Stopped"
    }
});

resetBtn.addEventListener('click',function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
});