'use strict';

let item = 'кофе';
let count = 3;
let price = 150;
let message = `В вашем заказе: ${count} единицы товара "${item}" на общую сумму: ${count * price} рублей.`;

function currency(strings, ...values) {
    let result = strings[0];
    values.forEach((value, i) => {
        result += `${value} руб.` + strings[i + 1];
    }); return result;
}

let messageTagged = currency`Каждая единица "${item}" стоит ${price}.`;
console.log(messageTagged);

// const data = JSON.parse(dataInfo);
// console.log(data);

// const contentElm = document.querySelector('.content');

// data.forEach(data => {
//     const imgElm = document.createElement('img');
//     const textElm = document.createElement('h1');
//     const rankElm = document.createElement('p');
//     imgElm.classList.add('pic');
//     contentElm.appendChild(imgElm);
//     rankElm.classList.add('rank');
//     contentElm.appendChild(textElm);
//     textElm.classList.add('text');
//     contentElm.appendChild(rankElm);
//     textElm.textContent = data.cards[1].value;
//     rankElm.textContent = data.cards[1].suit;
//     rankElm.style.color = "gteen";
//     imgElm.src = data.cards[1].images.png;
// });







// fetch('https://api.thecatapi.com/v1/images/search')

//     .then(response => response.json()) // Декодируем ответ в формате json

//     .then(data => data = data[0].url)


//     .then(data => imgElm.src = data);


// const imgElm = document.createElement('img');

// contentElm.append(imgElm);
// const imgWidth = data[0].width;
// imgElm.setAttribute('style', `width:${imgWidth}px`);
// contentElm.querySelector.innerHTML = (data[0].url);



// fetch('https://www.anapioficeandfire.com/api/houses')
//     .then(function (response) {
//         // выполнится, когда от API придет ответ

//         // запустим асинхронную операцию парсинга JSON из ответа сервера
//         return response.json() // вернем из обработчика промис, к которому добавим then
//     })
//     .then(function (houses) {
//         // выполнится, когда JSON распарсится
//         houses.forEach(houses => {
//             console.log(houses.name);
//             console.log(houses.region);
//         });

//         return fetch(houses[0].overlord) // запросим данные о сюзерене этого дома
//     })
//     .then(function (response) {
//         // выполнится, когда от API придет ответ
//         return response.json()
//     })
//     .then(function (overlord) {
//         console.log(overlord.name)
//     })



