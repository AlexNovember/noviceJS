'use strict';

// console.log(document);
// console.dir(document);

// const tags = document.querySelectorAll('p:nth-child(2n)');
// const tags2 = document.querySelector('.box:first-child');
// const child = tags2.children;
// const tags = document.querySelector('.box');
// const tags3 = tags.querySelector('p:first-child');
// console.log(tags3);
// const childNodes = tags2.childNodes;
// const count = tags.length;
// console.log(child);
// console.log(childNodes);

// for (let i = 0; i < tags.length; i++) {
//     console.log(tags[i]);

// }

// for (const tag of tags) {
//     console.log(tag);
// }

const hello = document.querySelector('.test');
let word = hello.innerText; // то что видно на странице
console.log(word);
word = hello.textContent; // весь текст
console.log(word);
word = hello.innerHTML; // весь тэг
console.log(word);
hello.textContent = 'sdfsdf';
hello.innerHTML = '<h1>AAAAAAAAAAAAAAAA</h1>' //ожно вставлять HTML
console.log(word);