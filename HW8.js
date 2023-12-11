// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). Напишіть метод getInfo(), 
//який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
//Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 

// Наприклад так:

// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.

const car = {
    type: "Tesla",
    model: "x",
    color: "white",
    year: 2022,
    getInfo: function() {
        let info = "";
        for (let key in car) {
                if (typeof car[key] !== 'function' && key !== 'getInfo') {
                info += `${key}: ${car[key]}, `;
            }
        }
        return info;
    }
};

car.owner = "Irina M.";
console.log(car.getInfo());

//------------------------------------------------------------
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

var salon = {
    services: services,

    price: function() {
        let total = 0;
        
        for (let service in this.services) {
            total += parseInt(this.services[service]);
        }
        return total;
    },

    minPrice: function() {
        let min = 0;

        for (let service in this.services) {
            let price = parseInt(this.services[service]);
            if (price < min) {
                min = price;
            }
        }

        return min;
    },

    maxPrice: function() {
        let max = 0;

        for (let service in this.services) {
            let price = parseInt(this.services[service]);
            if (price > max) {
                max = price;
            }
        }
        return max;
    }
};

console.log("Общая стоимость услуг:", salon.price(), "грн");
console.log("Минимальная стоимость услуги:", salon.minPrice(), "грн");
console.log("Максимальная стоимость услуги:", salon.maxPrice(), "грн");