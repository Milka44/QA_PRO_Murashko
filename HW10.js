//Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містити літери А (великої або малої)
// const regex = /^(?:(?!A).){6,}$/;

// var str = 'hj**dghj1sdcf'
// console.log(regex.test("Aa1*/121aa")); 
// console.log(regex.test("*12345656**")); 
// console.log(regex.test(str)); 
//------------------------------------------------------------------------------------------------
// const regex = /[a-zA-Z\d\.]+@(gmail\.com|yahoo\.com)/;

// var arr = [
//     {
//         userName: "Test",
//         lastName: "Test",
//         email: "1te2st1.test1@gmail.com"
//     },
//     {
//         userName: "Dmitro",
//         lastName: "Porohov",
//         email: " . .porohov@yahoo.com"
//     },
//     {
//         userName: "Andrii",
//         lastName: "",
//         email: "andrii@mail.ru" // Нам такі не підходять
//     },
// ];

// const validEmails = arr
//     .filter(user => regex.test(user.email))
//     .map(user => user.email);

// console.log('Валідні email:');
// console.log(validEmails);
