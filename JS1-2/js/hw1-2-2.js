var NAMES_NUMBER = 5;
var FLAG = true;
var namesArr = [];

for (var i = 1; i < NAMES_NUMBER; i++) {
  namesArr[i] = prompt('Имя №' + (i + 1));
}

var userName = prompt('Введите имя пользователя');

for (var i = 0; i < NAMES_NUMBER; i++) {
  if (userName === namesArr[i]) {
    alert(userName + ', вы успешно вошли.');
    FLAG = false;
    break;
  }
}

if (FLAG) alert('Имя не найдено!');
