'use strict';

// const buttons = document.querySelectorAll('button'); // получаем NodeList с кнопками

// /**
// * Функция счетчика
// */
// function count() {
//     let counter = 0;
//     return function () {
//         return counter += 1;
//     };
// }

// for (let button of buttons) {
//     const counter = count(); // создаем отдельный инстанс функции счетчика для каждой кнопки
//     button.addEventListener('click', function () {
//         console.log(counter()); // прибавляем +1 к счетчику внутри counter
//     });
// }

// const button = document.querySelector('button');
// let counter = 0;
// let counter2 = 0;
// button.addEventListener('click', () => {
//     counter++;
//     counter2++;
//     console.log(counter);
//     // counter = Math.abs((counter++) % 10);

//     function getEl(counter2) {


//         console.log(counter2 = Math.abs(counter2 % 100));

//         if (counter2 <= 1 || counter2 >= 5 && counter2 <= 20) {
//             console.log(`на кнопку нажали ${counter} раз`);
//         } if (counter2 === 10) {
//             counter2 = 0;
//         } else if (
//             counter2 = counter2 % 10, counter2 > 1 || counter2 <= 4) {
//             console.log(`на кнопку нажали ${counter} раза`);
//         }

//     }
// });

// function t(num, one, two, five) {
//     const lastTwoDigits = Math.abs(num % 100);
//     if (lastTwoDigits >= 5 && lastTwoDigits <= 20) {
//         return five;
//     }
//     const lastDigit = lastTwoDigits % 10;
//     if (lastDigit === 1) {
//         return one;n
//     }
//     if (lastDigit < 5) {
//         return two;
//     }
//     return five;
// }
// console.log(
//     `нажади ${counter} ${t(
//         counter,
//         "велосипед",
//         "велосипеда",
//         "велосипедов"
//     )}`
// );


let parent = document.querySelector('#parent');
let child = document.querySelector('#child');

let contains = parent.contains(child);
console.log(contains);