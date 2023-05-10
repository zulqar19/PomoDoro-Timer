let breaks = document.getElementById('breaks');
let timer = document.getElementById('timer');
let pomoDoro = document.getElementById('pomo-doro');
let shortBreak = document.getElementById('short-break');
let longBreak = document.getElementById('long-break');
let time = 10 // 25 minutes in seconds
let shortBreakTime = 3 // 5 minutes in seconds
let longBreakTime = 5 // 15 minutes in seconds
let count = 0;
let maxCount = 7;
let interval;

function handleStart() {
    // console.log("clicked");
    interval = setInterval(function () {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        console.log(seconds);
        timer.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

       if (time == 0 && count == 0){
        clearInterval(interval);
        pomoDoro.classList.remove('active');
        longBreak.classList.remove('active');
        shortBreak.classList.add('active');
        count++;
        breaks.innerHTML = "Time for a short Break";
        time = shortBreakTime;
       }
       else if (time == 0 && count == 1){
        clearInterval(interval);
        shortBreak.classList.remove('active');
        pomoDoro.classList.add('active');
        count++;
        breaks.innerHTML = "PomoDoro Time"
        time = 10 ;
       }
       else if (time == 0 && count == 2){
        clearInterval(interval);
        pomoDoro.classList.remove('active');
        shortBreak.classList.add('active');
        count++;
        breaks.innerHTML = "Time for a short Break"
        time = shortBreakTime;
       }
       else if (time == 0 && count == 3){
        clearInterval(interval);
        shortBreak.classList.remove('active');
        pomoDoro.classList.add('active');
        count++;
        breaks.innerHTML = "PomoDoro Time"
        time = 10;
       }
        else if (time == 0 && count == 4){
        clearInterval(interval);
        pomoDoro.classList.remove('active');
        shortBreak.classList.add('active');
        count++;
        breaks.innerHTML = "Time for a short Break"
        time = shortBreakTime;
       }
        else if (time == 0 && count == 5){
        clearInterval(interval);
        shortBreak.classList.remove('active');
        pomoDoro.classList.add('active');
        count++;
        breaks.innerHTML = "PomoDoro Time"
        time = 10;
       }
        else if (time == 0 && count == 6){
        clearInterval(interval);
        pomoDoro.classList.remove('active');
        shortBreak.classList.remove('active');
        longBreak.classList.add('active');
        count ++;
        breaks.innerHTML = "Time for a long Break"
        time = longBreakTime;
       }
       else if(time == 0 && count == maxCount){
        clearInterval(interval);
        pomoDoro.classList.add('active');
        shortBreak.classList.remove('active');
        longBreak.classList.remove('active');
        count = 0;
        breaks.innerHTML = "Pomodoro Time"
        time = 10;
       }
       else{
        time--;
       }
    }, 1000);
}

function handleRestart() {
    console.log("clicked");
    clearInterval(interval);
    timer.innerHTML = "00:00";
    breaks.innerHTML = "Pomodoro time"
    shortBreak.classList.remove('active');
    longBreak.classList.remove('active')
    pomoDoro.classList.add('active')
    time = 10;
    count = 0;
}