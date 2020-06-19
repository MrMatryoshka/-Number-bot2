function getRandomInt(max,min) {
    return Math.floor(Math.random() * (max - min) + min);
}


var start = (function() {
  debugger
  var numberRad = getRandomInt(1000,1);
console.log(numberRad)
var count = 10;
debugger

  while(true)  {
  var numberBot = prompt('Угадайте число в диапозоне от 1 до 1000  за 10 попыток ', '' );
    if (count == 0) {
        alert(' закончились попытки ')
     }
  if (numberBot === null) {
    alert('не хотите не играйте ');
    return false
    }
    else  if (numberBot > numberRad) {
   alert('Число больше заданного !')
  }

  else if (numberBot < numberRad ) {
  alert('Число меньше заданного !')

  }
  else if(numberBot == numberRad) {
       alert('Поздравляю вы угадали');
         alert('Сыграем еще ? обновите страницу');
         break
  }
    else if (numberBot != '') {
   alert('Введите число')
    }
    count--;

  }
})();




 // responseToQuestion ();
