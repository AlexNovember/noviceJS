'use strict';

fetch('http://dataservice.accuweather.com/locations/v1/countries/RU')
    .then(response => response.json()) // Декодируем ответ в формате json
    .then(data => console.log(data)); // Выводим ответ в консоль