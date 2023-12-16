//ДЗ 1.Var 1-----

function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 105];
myBlend(arr);

// console.log(arr); 

//ДЗ 1 var 2 ------
// function myBlend(array) {
//     let currentIndex = array.length;
//     let randomIndex;
  
//     while (currentIndex > 0) {
  
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
//       return array;
//   }

//   let arr =  [0, 2, 3, 4, 5, 6, 7, 8, 9, 105];
//   myBlend(arr);
//   console.log(arr);

//--------------------------------------------------------------------------------
//Написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді companyName
// та надавати інформацію про цю subCompany.

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків v1',
                            sells: 'Рішення для продажу квитків v1',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(company, companyName) {
    // Перевіряємо, чи ім'я поточної компанії збігається з тим що шукаємо
    if (company.name === companyName && (company.type === 'subCompany' || company.type === 'subSubCompany' 
    || company.type === 'Головна компанія')) {
    
        return company;
    }

    // Якщо поточний об'єкт має властивість clients, рекурсивно шукаємо серед них
    if (company.clients && Array.isArray(company.clients)) {
        for (const client of company.clients) {
            const result = findValueByKey(client, companyName);
            if (result) {
                return result;
            }
        }
    }

    // Якщо поточний об'єкт має властивість partners, рекурсивно шукаємо серед них
    if (company.partners && Array.isArray(company.partners)) {
        for (const partner of company.partners) {
            const result = findValueByKey(partner, companyName);
            if (result) {
                return result;
            }
        }
    }
    return 'Не знайдено';
}

const findcompanyName = 'Клієнт 1.2.4';
const result = findValueByKey(company, findcompanyName);
console.log(result);
