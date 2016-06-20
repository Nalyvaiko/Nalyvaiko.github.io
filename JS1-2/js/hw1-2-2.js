function checkEmptyString(str) {
  if (str === '' || str === null || +str === 0 || str === undefined) {
    return true;
  } else {
    return false;
  }
}

var NAMES_NUMBER = 5;
var flag = true;
var empt = true;
var namesArr = [];

for (var i = 1; i <= NAMES_NUMBER; i++) {
  var name = prompt('Имя №' + i);

  if (checkEmptyString(name)) {
    alert('Пустая строка!!! Введите имя.');
    i--;
  } else {
    namesArr[i - 1] = name;
  }

}

var userName;
while (checkEmptyString(userName)) {
  var userName = prompt('Введите имя пользователя');
}

for (var i = 0; i < NAMES_NUMBER; i++) {
  if (userName === namesArr[i]) {
    alert(userName + ', вы успешно вошли.');
    flag = false;
    break;
  }
}

if (flag) alert('Имя не найдено!');
