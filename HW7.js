/*function myisNan(value) {
    if (typeof value === 'number' && value !== value) {
      return false;
    } else {
      return true;
    }
  }
  
  console.log(myisNan('123e5'));*/
 // ---------------------------------------------------------------------------------------

/*  function pad(inputString, padSymb, addToEnd, resultLength) {
    if (resultLength <= inputString.length) {
        console.log("Длина текста менее или равна исходной!");
        return inputString;
    }

    let paddingLength = resultLength - inputString.length;
    let padding = padSymb.repeat(paddingLength);

    if (addToEnd) {
        return inputString + padding;
    } else {
        return padding + inputString;
    }
}

let result = pad('qwerty', '+', true, 5);
console.log(result);*/

// ---------------------------------------------------------------------------------------
/*Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно.
 Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
 Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

Умови виконання ДЗ

Функція виводить інформацію
Кількість згенерованих чисел: кількість чисел
Парних чисел: кількість парних чисел
Не парних чисел: кількість не парних чисел
Відсоток парних до не парних: */


function checkProbabilityTheory(count, min, max) {
  let randomNumbers = [];

  for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}

function countEvenOddNumbers(randomNumbers) {
  let evenCount = 0;
  let oddCount = 0;

  for (let number of randomNumbers) {
      if (number % 2 === 0) {
          evenCount++;
      } else {
          oddCount++;
      }
  }

  return { evenCount, oddCount };
}

let generatedNumbers = checkProbabilityTheory(8, 100, 1000);
console.log("Сгенерированные числа:", generatedNumbers);

let { evenCount, oddCount } = countEvenOddNumbers(generatedNumbers);
console.log("Количество сгенерированных чисел:", generatedNumbers.length);
console.log("Количество четных чисел:", evenCount);
console.log("Количество нечетных чисел:", oddCount);


let ratioEvenOdd = evenCount / generatedNumbers.length;
console.log("Соотношение четных и нечетных чисел:", ratioEvenOdd);