/*мои рассуждения: Пытаюсь сгруппировать значения под вывод сообщений:
якщо age = 1,21,31,41,51,61,71,81,91,101,121... Тут завжди буде залишок 1 при  діленні на 10,  в повідомленні буде "рік",
тут виключення: 11,111 років
якщо age = 2-4,22-24,32-34... (тут ділення на 2) - роки
тут виключення: 12-14,111-114... - років
 інші : 5-20,25-30, 35-40,45-50, 55-60 ... 11,111-120 -  років,
 */

/*------
 Це код, який я зробила сама і він працює в консолі, але виключення такі як 11,111 не читає як число: 
 (Чат GPT пропонує наступне: let ageString = prompt('Скільки вам років?', '18'); let age = parseInt(ageString);
Але ми ж ніби це ще не вчили...):

var age = prompt('Скільки вам років?','18');
if (age < 0) {
 alert("Мабуть, ви ще не народились:) Введіть позитивне число");
} 
else if (age > 114) {
   alert("Стільки не живуть!:)");
}
else if (
     (age === 1) ||
 (age % 10 === 1 && age !== 11 && age !== 111))
  {
 alert("Вам " + age + " рік");
} 
else if (
   (age === 2) || (age === 3) || (age === 4) ||
   (age % 10 === 2 && age !== 12 && age !== 112) ||
   (age % 10 === 3 && age !== 13 && age !== 113) ||
   (age % 10 === 4 && age !== 14 && age !== 114))
{
alert("Вам " + age + " роки");
}
else {
alert("Вам " + age + " років");
}*/

/*---- а цей код для коммандной строки я победила только с помощью чата GPT, сложности были тут в строке: 
  prompt.get(['age'], function (err, result)
  {var age = parseInt(result.age); поки я не використала parseInt в мене не працювали виключення там де 11,111,12,112...*/

  var prompt = require('prompt');

  prompt.start();
  
    prompt.get(['age'], function (err, result)
    {var age = parseInt(result.age);
     
     if (age < 0) {
     console.log('Command-line input received:');
     console.log("Мабуть, ви ще не народились:) Введіть позитивне число");
  } 
  else if (age > 114) {
     console.log('Command-line input received:');
     console.log("Стільки не живуть!:)");
  }
  else if 
  ((age === 1) || (age % 10 === 1 && age !== 11 && age !== 111))
    {
     console.log('Command-line input received:');
     console.log("Вам " + result.age + " рік");
  } 
  else if (
       (age === 2) || (age === 3) || (age === 4) ||
     (age % 10 === 2 && age !== 12 && age !== 112) ||
     (age % 10 === 3 && age !== 13 && age !== 113) ||
     (age % 10 === 4 && age !== 14 && age !== 114))
  {
     console.log('Command-line input received:');
     console.log("Вам " + result.age + " роки");
  }
  else {
      console.log('Command-line input received:');
      console.log("Вам " + result.age + " років");
       }
     }) 
     