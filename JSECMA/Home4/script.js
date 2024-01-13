'use strict';

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.


const url = 'https://jsonplaceholder.typicode.com/users';
const users = document.querySelector('.users');

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
}

try {
    const data = await getData(url);
    data.sort(byField('name')); //сортируем по имени
    data.forEach(element => {
        users.insertAdjacentHTML('beforeend',
            `<div class="user">
            <p class='user-name'>${element.name}</p>
            <div class="close"></div>
            </div>
            `)
    });
} catch (error) {
    console.log('no connect')
}

users.addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) {
        event.target.parentNode.remove();
    }
});

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

// Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

// const dogUrl = 'https://dog.ceo/api/breeds/image/random';
// const dogs = document.querySelector('.dog');

// async function getDogData(dogUrl) {
//     const res = await fetch(dogUrl);
//     const data = await res.json();
//     console.log(data);
//     return data;
// }

// let controller = new AbortController();
// let count = 0;

// setInterval(async function () {
//     try {
//         if (count < 10) {
//             const data = await getDogData(dogUrl);
//             dogs.src = data.message;
//             // dogs.setAttribute('loading', 'lazy');
//             count++;
//         }
//         else {
//             controller.abort();
//         }
//     }
//     catch (error) {
//         console.error('no connect')
//     }
// }, 3000)