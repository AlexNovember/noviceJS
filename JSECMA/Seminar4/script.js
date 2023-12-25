'use strict';


// 1. Создайте функцию delayedMessage(message, delay), которая принимает аргументы message (строка) и delay (число). Функция должна выводить заданное сообщение в консоль через указанную задержку. 
// 2. Вызовите функцию delayedMessage() три раза с разными сообщениями и задержками. Например: a. delayedMessage("Сообщение 1", 2000) b. delayedMessage("Сообщение 2", 1000) c. delayedMessage("Сообщение 3", 3000) 3. После вызова всех функций delayedMessage(), добавьте сообщение вида "Конец программы" с помощью console.log().
// Ожидаемый результат Сообщение 2 Сообщение 1 Сообщение 3 Конец программы


// function delayedMessage(message, delay) {
//     setTimeout(() => console.log(message), delay);
// }

// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);
// setTimeout(() => console.log('Конец программы'), 4000);


// // Напишите программу, которая загружает данные с сервера с использованием объекта XMLHttpRequest и отображает полученную информацию в консоли.
// // 1. Создайте функцию loadData(url), которая принимает аргумент url (строка) - адрес сервера для загрузки данных.
// // 2. Внутри функции loadData() создайте объект XMLHttpRequest с помощью new XMLHttpRequest().
// // 3. Зарегистрируйте обработчик события onreadystatechange, который будет вызываться при изменении состояния запроса. Проверьте, если readyState равен
// // 4 (успешно выполнен запрос) и status равен 200 (успешный статус ответа сервера), то выведите полученные данные в консоль с помощью console.log(xhr.responseText).

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/octocat');
// xhr.send();
// xhr.onload = function () {
//     if (xhr.status != 200) {
//         console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     }
//     else {
//         console.log(`user: ${xhr.response}`);
//     }
// };
// xhr.onprogress = function (event) {
//     console.log(`Get from server: ${event.loaded} bytes`);
// };

// xhr.onerror = function () {
//     console.log("Request error");
// };
// xhr.abort();

const siteApiUrl = 'https://www.boredapi.com/api/activity';

const btn = document.querySelector('.btn');
// btn.addEventListener('click', function (e) {
//     fetch(siteApiUrl)
//         .then((response) => (response.json()))
//         .then((json) => {
//             const data = json;
//             // console.log(data);
//             getActivity(data);
//         })
//         .catch((error) => console.log('Недоступен'));
// });


function getActivity(data) {
    console.log(data.activity);
    console.log(data.type);
}

async function getActive(siteApiUrl) {
    const response = await fetch(siteApiUrl);
    const data = await response.json();
    console.log(response.url, response.status);
    return data;
}

btn.addEventListener('click', async () => {
    try {
        const data = await getActive(siteApiUrl);
        console.log(data);
        getActivity(data)
    } catch (error) {
        console.log('eRROR');
    }
});



const demoKey = '9neMJZddidZEsm8H2cOxYE1ozufzuigeci0BWCzT';

const url = 'https://api.nasa.gov/planetary/apod?api_key=' + demoKey + '&count=10';


async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

try {
    const data = await getData(url);
    const body = document.querySelector('body');
    data.forEach(element => {
        body.insertAdjacentHTML('beforeend', `<figure>
<img src="${element.url}" alt="pic">
<figcaption>${element.explanation}</figcaption>
</figure>
`)

    });


    console.log(data);
} catch (error) {
    console.log('no connect')
}


