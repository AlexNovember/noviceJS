'use strict';



const cardImg = document.querySelectorAll('.news-card__image');

const demoKey = '9neMJZddidZEsm8H2cOxYE1ozufzuigeci0BWCzT';

const url = 'https://api.nasa.gov/planetary/apod?api_key=' + demoKey + '&count=10';


async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

try {
    const data = await getData(url);
    const newsCard = document.querySelectorAll('.news-card');
    data.forEach(element => {
        cardImg.forEach(element => {
            element.src = n;
            console.log(element.src);
            // `)
        })
        let n = element.url;
        console.log(n);


    });


    console.log(data);
} catch (error) {
    console.log('no connect')
}


