'use strict';

const countriesElms = document.querySelector('.countries');
// console.log(countriesElms);

fetch('https://restcountries.com/v3.1/all')
    .then(function (response) {
        return response.json()
    })
    .then(function (countries) {
        countries.forEach(element => {
            console.log(element.maps.googleMaps);
            if (element.capital !== undefined) {
                countriesElms.insertAdjacentHTML('beforeend', addCountry(element.translations.rus.common, element.capital[0], element.flags.png, element.region, element.maps.googleMaps))
            }
            else {

                countriesElms.insertAdjacentHTML('beforeend', addCountry(element.translations.rus.official, 'Нет данных', element.flags.png, element.region, element.maps.googleMaps))
            }
        });
    });

function addCountry(country, capital, flag, region, maps) {
    return `
<div class="country__box">    
        <h2 class='country__name'>${country}</h2>
        <p class='capital'>Столица: ${capital}</p>
        <img class='flag' src="${flag}">
        <p class='region'>${region}</p>
        <a class="maps" href="${maps}">Посмотреть на карте</a>
</div>`
}