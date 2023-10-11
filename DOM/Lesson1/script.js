
// const heading = document.querySelector('body');
// const heading2 = document.getElementById('heading')
// const heading3 = document.querySelector('#heading')
// const listElements = document.getElementsByClassName('list');
// const listElements2 = document.querySelectorAll('.list');
// const text = document.querySelector('.text');
// const text2 = document.querySelectorAll('.text');

// const headingEl = document.createElement('h3');
// headingEl.textContent = 'Капуста';
// console.log(headingEl);

// heading.textContent = 'Pffffff';
// console.log(heading);


// console.log(heading);
// console.log(text);
// for (let i = 0; i < text2.length; i++) {
//     console.log(text2[i]);
// }

// text2.forEach(element => {
//     console.log(element);
// });
// console.log(text2);
// console.log(heading2);
// console.log(heading3);
// console.log(listElements);
// console.log(listElements2);


// const sectionElement = document.querySelector('section');
// const paragraphElement = document.createElement('p');
// paragraphElement.textContent = 'Новый текст параграфа';
// sectionElement.appendChild(paragraphElement);
// console.log(sectionElement);

// const sectionElement = document.querySelector('section');
// const sectionElementClone = sectionElement.cloneNode(true);
// const link = sectionElementClone.querySelector('#myLink');
// link.id = 'myLinkClone';
// document.body.appendChild(sectionElementClone);
// console.log(sectionElement);

const button = document.querySelector('.btn');
const divv = document.querySelector('div');
const img = document.querySelector('img')

const par = document.createElement('p');
par.textContent = 'lorgfffffffffffffffffffffdfg';


button.onclick = function () {
    button.textContent = 'Hello';
    divv.appendChild(par);
    img.src = 'https://news.store.rambler.ru/img/4a263a13193df0747b65be11377133ff?img-format=auto&img-1-resize=height:730,fit:max';

}

console.log(img);

