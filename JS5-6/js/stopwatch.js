var mscounter = 0
var timerId;
var start = false;

var ONE_SEC = 1000;
var ONE_MIN = 60000;
var ONE_HOUR = 3600000;

var hours, minutes, seconds, miliseconds;

startstopbutton.addEventListener("click", startstop);
resetbutton.addEventListener("click", reset);


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

  if (duration < 100) {
    if (duration < 10) {
      miliseconds = "00" + duration;
    } else {
      miliseconds = "0" + duration;
    }
  } else {
    miliseconds = duration;
  }

  return hours + ":" + minutes + ":" + seconds + "." + miliseconds;
}

function startstop() {

  if (!start) {
    timerId = setInterval(function() {
      mscounter++;
      disp.value = msToTime(mscounter);
    }, 1);

    start = true;

  } else {
    clearInterval(timerId);
    start = false;
  }
}


function reset() {
  start = false;
  clearInterval(timerId);
  disp.value = "00:00:00.000";
}

function dosplit() {

}
