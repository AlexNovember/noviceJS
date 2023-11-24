'use strict';

const countriesElms = document.querySelector('.countries');
console.log(countriesElms);

fetch('https://restcountries.com/v3.1/all')
    .then(function (response) {
        return response.json()
    })
    .then(function (countries) {
        countries.forEach(element => {
            console.log(element.translations.rus.official);
            if (element.capital !== undefined) {
                const countryBox = document.createElement('div');
                countryBox.classList.add('country__box')
                countriesElms.appendChild(countryBox);
                const countryName = document.createElement('h3');
                countryName.classList.add('country__name');
                countryBox.appendChild(countryName).textContent =
                    `Страна:\n${element.translations.rus.official}`;
                const countryFlag = document.createElement('img');
                countryFlag.classList.add('flag');
                countryBox.appendChild(countryFlag);
                countryFlag.src = element.flags.png;

                let newObj = JSON.parse(JSON.stringify(element.capital[0]));
                const countryCapital = document.createElement('p');
                countryCapital.classList.add('capital');
                countryBox.appendChild(countryCapital).textContent =
                    `Столица: ${newObj}`;


                // console.log(`Столица ${newObj}`);
            }
            else {
                const countryBox = document.createElement('div');
                countryBox.classList.add('country__box')
                countriesElms.appendChild(countryBox);
                const countryName = document.createElement('h3');
                countryName.classList.add('country__name');
                countryBox.appendChild(countryName).textContent =
                    `Страна: ${element.translations.rus.official}`;
                const countryCapital = document.createElement('p');
                countryCapital.classList.add('capital');
                countryBox.appendChild(countryCapital).textContent = 'Нет столицы';

            }

            // console.log(newObj);
            // console.log(element.region);
            // console.log(count++);

            // console.log(JSON.stringify(element.capital[0]));


            // console.log(houses.region);
        });


    });

// function addCountry(countries) {
//     console.log('11');
// }

// function creatPosts(dataInfo) {
//     const contentEl = document.querySelector('.content');
//     dataInfo.forEach((item) => {
//         contentEl.insertAdjacentHTML('beforeend', getCartCat(item.title, item.body))
//     })
// }

function getCartCat(title, body) {
    return `
<div class="post">
    <div class="post__content">
        <h2>${title}</h2>
        <p>${body}</p>
    </div>
</div>`
}