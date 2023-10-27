'use strict';


// const buttonEl = document.querySelector('.btn');
// const buttonEl1 = document.querySelector('.btn1');

// let count = 0;
// buttonEl.addEventListener('click', function (e) {
//     count++;
//     console.log(count);
//     buttonEl.removeEventListener('click', this);
// });


// const btnEls = document.querySelectorAll('button');

// btnEls.forEach(element => {

//     element.addEventListener('click', (e) => {
//         const target1 = e.target;
//         const target2 = e.target;
//         if (target.classList.contains('btn')) {
//             console.log(target);
//         } else {
//             console.log(target.parentElement);
//         }
//     });
// });

// const list = document.querySelector('.menu');
// const listener = (e) => {
//     console.log(e.target, e.currentTarget);
// }

// list.addEventListener('click', listener)
// ['fourth', 'fifth'].forEach((text) => {
//     const listItem = document.createElement('li');
//     listItem.append(text);
//     list.append(listItem);
// });

// nfn - стрелочная функция

window.addEventListener('Load', () => {
    console.log('Всё загрузилось');
});

document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Loaded');
});





// buttonEl.onclick = (e) => {
//     // console.log(e.target === buttonEl);
//     console.log(counter());
// }
// buttonEl1.onclick = (e) => {
//     // console.log(e.target === buttonEl1);
//     console.log(counter2());
// }



// function getCount() {
//     let a = 0;
//     return function () {
//         a++;
//         return a;
//     }
// }

// const counter = getCount();
// const counter2 = getCount();