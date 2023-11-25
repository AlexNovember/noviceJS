'use strict';

const countriesElms = document.querySelector('.countries');
const selectElms = document.querySelector('.select');

let count = 1;

fetch('https://restcountries.com/v3.1/all')
    .then(function (response) {
        return response.json()
    })
    .then(function (countries) {
        // Создадим пустую строку, куда будем закидывать теги option для списка
        let selectHTML = '';

        // Циклом обходим объект и записываем в selectHTML 
        countries.forEach(element => {

            selectHTML += `<option value="${element.name.common}">${element.name.common}</option>`;
            // }
        });

        // Выбираем наш выпадающий список и записываем в него обработанные ранее данные
        document.querySelector('.select').insertAdjacentHTML = selectHTML;

        countries.forEach(element => {

            if (element.capital !== undefined) {
                countriesElms.insertAdjacentHTML('beforeend', addCountry(element.translations.rus.common, element.capital[0], element.flags.png, element.region, element.maps.googleMaps, element.area, count++))
            }
            else {
                countriesElms.insertAdjacentHTML('beforeend', addCountry(element.translations.rus.official, 'Нет данных', element.flags.png, element.region, element.maps.googleMaps, element.area, count++))
            }



        });
    });

function addCountry(country, capital, flag, region, maps, area, count) {
    return `
<div class="countries__box">
    <div class="country__box"> 
        <h2 class='name'>${country}</h2>
        <p class='region'>${region}</p>
        <p class='capital'>Столица: ${capital}</p>
        <img class='flag' src="${flag}">
        <a class="maps" href="${maps}">Посмотреть на карте</a>
        <p class='area'>Площадь: ${area}</p>
        <p class='count'>${count}</p>
        </div>
</div>`
}

const select = document.querySelector('.select');

select.addEventListener('change', function (e) {
    console.log(select.value);
});
// const selectValue = select.value;
