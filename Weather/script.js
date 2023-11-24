'use strict';

const divEl = document.createElement('div');

fetch('https://catfact.ninja/fact')

    .then(response => response.json()) // Декодируем ответ в формате json

    .then(data => document.body.innerHTML = (data.fact));

setTimeout(function () {
    location.reload();
}, 3000);