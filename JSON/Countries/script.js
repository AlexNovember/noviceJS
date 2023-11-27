'use strict';

const countriesElms = document.querySelector('.countries');
const selectElms = document.querySelector('.select');



let count = 1;

fetch('https://restcountries.com/v3.1/all')
    .then(function (response) {
        return response.json()
    })
    .then(function (countries) {

        // const jsonCopy = JSON.parse(JSON.stringify(countries));
        // console.log(jsonCopy);


        selectElms.addEventListener('change', function (event) {
            console.log(selectElms.value);
            const findElms = document.querySelectorAll('.name');


            findElms.forEach(element => {
                const parentElm = element.parentElement.parentElement;

                parentElm.classList.add("hidden");

                if (selectElms.value === element.textContent) {
                    parentElm.classList.remove('hidden');
                    parentElm.classList.add('big');
                }
            });
        });

        countries.forEach(element => {
            selectElms.insertAdjacentHTML('afterbegin', addSelect(element.translations.rus.common))
        });

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

function addSelect(selectValue) {
    return `
    <select class="select" name="name">
	<option value="${selectValue}">${selectValue}</option>
	</select>`
}



