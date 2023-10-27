'use strict';
//функция самовызывающаяся


function createCounter() {
    let a = 0;

    return function () {
        a++;
        return a;
    }
}

const counter = createCounter();
const counter2 = createCounter();




// --------------------------------


// const makePizza = function (title, eatPizza, rest) {
//     console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`);
//     setTimeout(eatPizza, 4000);
//     setTimeout(rest, 3000);
// }

// const readBook = function () {
//     console.log('Читаю книгу «Колдун и кристалл»…');
// }

// const rest = function () {
//     console.log('Отдыхаю');
// }

// const eatPizza = function () {
//     console.log('Ура! Пицца готова, пора подкрепиться.');
// }

// makePizza('Пеперонни', eatPizza, rest);
// readBook();
// rest();



// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");
// console.log(newString);

// const random = (number) => Math.floor(Math.random() * number);

// const rN = 15;

// function getRandom(params) {
//     return Math.floor(Math.random() * params);
// }
// function a(getRandom) {
//     return getRandom + 10;
// }

// getRandom(rN);

// console.log(getRandom(rN));
// console.log(a(getRandom(rN)));