var mscounter = 0;
var timerId;
var start = false;
var time;
var splitcount = 0;
var startcount = 0;
var startTime;
var stopTime;

var ONE_SEC = 100;
var ONE_MIN = 6000;
var ONE_HOUR = 360000;

var hours, minutes, seconds, miliseconds;

startstopbutton.addEventListener("click", startstop);
resetbutton.addEventListener("click", reset);
splitbutton.addEventListener("click", dosplit);

var disp = document.getElementById('disp');
var split = document.getElementById('split');


function msToTime(duration) {

  if (duration < ONE_HOUR) {
    hours = "0";
  } else {
    hours = Math.floor(duration / ONE_HOUR);
    duration = duration % ONE_HOUR;
  }

  if (duration < ONE_MIN) {
    minutes = "0";
  } else {
    minutes = Math.floor(duration / ONE_MIN);
    duration = duration % ONE_MIN;
  }

  if (duration < ONE_SEC) {
    seconds = "0";
  } else {
    seconds = Math.floor(duration / ONE_SEC);
    duration = duration % ONE_SEC;
  }

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  miliseconds = duration * 10;
  if (miliseconds < 100) {
    if (miliseconds < 10) {
      miliseconds = "00" + miliseconds;
    } else {
      miliseconds = "0" + miliseconds;
    }
  }

  return hours + ":" + minutes + ":" + seconds + "." + miliseconds;
}

var ONE_SEC1 = 1000;
var ONE_MIN1 = 60000;
var ONE_HOUR1 = 3600000;

function msToTime1(duration) {

  if (duration < ONE_HOUR1) {
    hours = "0";
  } else {
    hours = Math.floor(duration / ONE_HOUR1);
    duration = duration % ONE_HOUR1;
  }

  if (duration < ONE_MIN1) {
    minutes = "0";
  } else {
    minutes = Math.floor(duration / ONE_MIN1);
    duration = duration % ONE_MIN1;
  }

  if (duration < ONE_SEC1) {
    seconds = "0";
  } else {
    seconds = Math.floor(duration / ONE_SEC1);
    duration = duration % ONE_SEC1;
  }

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  miliseconds = duration;
  if (miliseconds < 100) {
    if (miliseconds < 10) {
      miliseconds = "00" + miliseconds;
    } else {
      miliseconds = "0" + miliseconds;
    }
  }

  return hours + ":" + minutes + ":" + seconds + "." + miliseconds;
}

function startstop() {
  startcount++;
  if (!start) {

    start = true;
    startTime = new Date();

    startstopbutton.value = 'Stop';
    timerId = window.setInterval(function() {
        mscounter++;
        time = msToTime(mscounter);
        disp.value = time;
    }, 10);

  } else {
    splitcount++;
    start = false;
    startstopbutton.value = 'Start';
    stopTime = new Date();
    var dif = stopTime.getTime() - startTime.getTime();
    time = msToTime1(dif);
    split.innerHTML = split.innerHTML+ (splitcount + ' Stop: ' + time) + "<br>"
    clearInterval(timerId);
  }

}

function reset() {
  start = false;
  mscounter = 0;
  splitcount = 0;
  startcount = 0;
  clearInterval(timerId);
  startstopbutton.value = 'Start';
  disp.value = "00:00:00.000";
  split.innerHTML = '';
}

function dosplit() {
  if ((startcount != 0) && (startcount % 2 != 0)) {
    splitcount++;

    var timer;

    stopTime = new Date();
    var dif = stopTime.getTime() - startTime.getTime();
    timer = msToTime1(dif);

    if (startcount > 1) {
      split.innerHTML = split.innerHTML+ (splitcount + ' Split: ' + timer) + "<br>" ;
    } else {
      split.innerHTML = split.innerHTML+ (splitcount + ' Split: ' + timer) + "<br>" ;
    }
  }
}
