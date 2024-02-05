'use strict';



const cardImg = document.querySelectorAll('.news-card__image');

const demoKey = '9neMJZddidZEsm8H2cOxYE1ozufzuigeci0BWCzT';

const url = 'https://api.nasa.gov/planetary/apod?api_key=' + demoKey + '&count=10';


async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}



// initialData.forEach(item => {
//     item.reviews.forEach(review => {
//         const reviewDiv = document.createElement('div');
//         reviewDiv.classList.add('rewiew');
//         reviewDiv.textContent = review.text;
//         reviewsContainer.appendChild(reviewDiv);
//     });
// });


try {
    const data = await getData(url);
    const newsCard = document.querySelectorAll('.news-card');

    data.forEach(item => {
        item.forEach(elm => {
            elm.src = element.url;
        })
    });


    console.log(data);
} catch (error) {
    console.log('no connect')
}


