'use strict';

// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”


// const btnEls = document.querySelector('.btn');
// // console.log(btnEls);

// // window.addEventListener('load', () => {
// //     console.log('страница загрузилась');
// // });
// document.addEventListener('DOMContentLoaded', (e) => {
//     console.log('страница загрузилась(DOM)');
// });
// btnEls.onclick = (e) => {
//     console.log('событие onclick');
// }
// btnEls.addEventListener('click', (e) => {
//     console.log('событие addEventListener');
// });


// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// const btnElms = document.querySelectorAll('.btn-2');

// btnElms.forEach((element) => {
//     element.addEventListener('click', (e) => {
//         console.log(e.target.textContent);
//     });
// });

// const countBtn = document.createElement('button');
// countBtn.textContent = '4';
// document.body.append(countBtn);
// let count = 0;

// countBtn.addEventListener('click', (e) => {
//     count++;
//     console.log(`Нажали ${count} раз`);
// });

// const textBtn = document.createElement('button');
// textBtn.textContent = '5';
// document.body.append(textBtn);

// let c = true;

// textBtn.addEventListener('click', (e) => {
//     if (c) {
//         textBtn.textContent = `Вы нажали на эту кнопку`;
//     } else {
//         textBtn.textContent = `5`;
//     }
//     c = !c;

// });



// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”


// const firstBtn = document.createElement('button');
// document.body.append(firstBtn);
// firstBtn.textContent = 'Create';

// firstBtn.addEventListener('click', (e) => {
//     const h1 = document.createElement('h1');
//     h1.textContent = 'Новый заголовок';
//     document.body.append(h1);
// });

// const secondfBtn = document.createElement('button');
// document.body.append(secondfBtn);
// secondfBtn.textContent = 'Delete';

// secondfBtn.addEventListener('click', (e) => {
//     const h1 = document.querySelector('h1');
//     if (h1 !== null) {
//         h1.remove();
//     } else {
//         e.stopPropagation();
//         // e.preventDefault();
//         // console.log('null');
//     }
// });

// const thirdBtn = document.createElement('button');
// thirdBtn.textContent = 'Enter';
// document.body.append(thirdBtn);

// thirdBtn.addEventListener('mouseenter', (e) => {
//     console.log('вы навели на данную кнопку');
// });

// thirdBtn.addEventListener('mouseleave', (e) => {
//     console.log('Наведения на кнопку больше нет');
// });



// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const menu = document.querySelector('.menu');


// const addBtn = document.createElement('button');
// addBtn.textContent = 'Add button';
// document.body.prepend(addBtn);

// addBtn.addEventListener('click', (e) => {
//     const li = document.createElement('li');
//     li.textContent =
//         `новый элемент списка ${menu.children.length + 1}`;
//     menu.append(li);
// });

// const deleteBtn = document.createElement('button');
// deleteBtn.textContent = 'Delete button';
// addBtn.after(deleteBtn);


// deleteBtn.addEventListener('click', (e) => {
//     const li = menu.firstElementChild;
//     (li !== null) ? li.remove() : e.stopPropagation();
//     // if (li !== null) {
//     //     li.remove();
//     // } else {
//     //     e.stopPropagation();
//     //     // e.preventDefault();

//     // }
// });





// const clickBtn = document.createElement('button');
// clickBtn.textContent = 'Click button';
// deleteBtn.after(clickBtn);

// clickBtn.addEventListener('click', (e) => {
//     clickBtn.classList.add('click');
// });



// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const divEl = document.querySelector('.content');

// const btn = document.createElement('button');
// btn.textContent = 'Отправить';
// divEl.append(btn);

// btn.addEventListener('click', (e) => {
//     btn.textContent = 'Текст отправлен';
// });



