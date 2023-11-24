'use strict';

const countriesElms = document.querySelector('.countries');

let count = 1;

fetch('https://restcountries.com/v3.1/all')
    .then(function (response) {
        return response.json()
    })
    .then(function (countries) {
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