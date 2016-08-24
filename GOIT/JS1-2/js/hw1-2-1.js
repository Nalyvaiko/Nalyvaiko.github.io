// Check if num is a numeric
function checkIsNumeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

// Check if num is an integer
function checkInteger(num) {
  return (num ^ 0) === num;
}

function getPow(x, n) {
  var negative = false;
  var result   = x;

  if (n < 0) {
    n *= -1;
    negative = true;
  }

  if (n != 0) {
    for (var i = 1; i < n; i++) {
      result *= x;
    }

    if (negative) {
      result = 1 / result;
      n *= -1;
    }
  } else {
    result = 1;
  }

  return console.log('result ' + x + ' pow ' + n + ':', result);
}

var x = +prompt('Введите число.', 0);
var n = +prompt('Введите степень.', 0);

if (! (checkIsNumeric(x) && checkIsNumeric(n)) ) {
  alert('Вы не ввели числа!');
} else if ( checkInteger(x) && checkInteger(n) ) {
  getPow(x, n);
} else {
  alert('Введите целые числа!');
}
