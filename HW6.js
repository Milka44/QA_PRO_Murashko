//ДЗ1.Трикутник
/*function drawTriangle(height, symbol) {
    for (var i = 1; i <= height; i++) {
      var line = '';
      for (var j = 1; j <= i; j++) {
        line += symbol;
      }
      console.log(line);
    }
  }
  
  drawTriangle(5, '*');*/


/*
function drawTriangle(height, symbol) {
    for (var i = 1; i <= height; i++) {
      // Используем метод repeat для повторения символа нужное количество раз
      console.log(symbol.repeat(i));
    }
  }
  drawTriangle(5, '*') */

  //ДЗ2.Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.

/*var startSum = 0;
  
for (let i = 1; i <= 100; i++)
{
    if (i % 3 !== 0) 
    {startSum += i}
    }
    console.log(startSum)*/

    /* ДЗ 3.Написати функцію pow(x,y) яка буде приймати 2 цисла, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.

Наприклад pow(2,3) функція поверне значення 8. 

Умови виконання ДЗ

Не використовувати ** */


var x = 2;
var y = 3;

function pow(x, y) {
    return Math.pow(x, y);
  
}
  let base = x;
  let exponent = y;
  let result = pow(base, exponent);

  console.log(result)