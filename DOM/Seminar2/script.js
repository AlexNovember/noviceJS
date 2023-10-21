'use strict';

// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const divEl = document.querySelector('.block');
// const divElChild = document.createElement('div');
// divElChild.className = "item";
// divElChild.textContent = 'Элемент внутри';
// divEl.appendChild(divElChild);
// divElChild.setAttribute('style', 'color: blue; border: 1px solid black; backgrond-color: #f8f8f8; padding: 16px');
// divElChild.setAttribute('class', 'item item_1');

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const textEl = document.querySelector('.text');
// const aa = textEl.parentElement;
// console.log(textEl);
// console.log(textEl.previousElementSibling);
// console.log(textEl.parentElement);
// console.log();
// console.log(textEl.parentElement.parentElement.firstElementChild.getAttribute('src'));
// console.log(textEl.parentElement.parentElement);

// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

// const h2El = document.querySelector('h2');
// console.log(h2El);

// console.log(findParent(h2El));

// console.log(parentsCount(h2El));

// function parentsCount(el) {
//     if (!el) return 0;
//     for (let i = 0; el.parentElement; i++) {
//         el = el.parentElement;
//     }
//     return el;
// }

// function findParent(el) {
//     while (el !== null) {
//         el = el.parentElement;
//         console.log(el);
//     };
// }

//рекурсия
// const h2El = document.querySelector(".subtitle");
// function getParent(el) {
//     if (el.parentElement) {
//         console.log(el.parentElement);
//         getParent(el.parentElement);
//     }
// }
// getParent(h2El);


// console.log(h2El);
// console.log(h2El.parentElement);
// console.log(h2El.parentElement.parentElement);
// console.log(h2El.parentElement.parentElement.parentElement);


// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const formEl = document.querySelector('form');
const btn = document.querySelector('.btn');
const inputForm = document.querySelector('input');
inputForm.focus();

document.addEventListener('submit', () => {
    let errorText = document.querySelector('h2');
    inputForm.style.border = '1px solid black';
    if (errorText) {
        errorText.remove();

    } if (!inputForm.value || inputForm.value.trim() === '') {
        const errorText = document.createElement('h2');
        errorText.textContent = 'Вы не заполнили поле ввода';
        // errorText.style.color = 'red';
        errorText.setAttribute('style', 'color: red');
        formEl.append(errorText);
        inputForm.style.border = '1px solid red';

    } else {
        const errorText = document.createElement('h2');
        errorText.textContent = 'Даные успешно отправлены';
        errorText.setAttribute('style', 'color: green');
        formEl.append(errorText);
        console.log(inputForm.value);
        inputForm.value = '';
    }
});


// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const textEl = document.createElement("p");
// textEl.textContent = "вы не заполнили поле ввода";
// form.onsubmit = function getInput(e) {
//     e.preventDefault();
//     const val = document.querySelector("input").value;


//     if (val.trim() === "") {
//         form.append(textEl);
//         input.style.borderColor = "red";
//     } else {
//         if (textEl) {
//             textEl.remove();
//             input.style.borderColor = "black";
//         }
//     }
// };

// const btn = document.querySelector('.btn');
// const h2 = document.createElement('h2');
// h2.textContent = "вы не заполнили поле ввода";
// btn.addEventListener('click', () => {
//     const inputName = document.querySelector('input').value;
//     if (inputName == '') {
//         btn.previousElementSibling
//             .insertAdjacentElement("afterend", h2)
//             .previousElementSibling
//             .classList.add("red");
//     }
// })

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const content = document.querySelector('.content');
// const button = document.createElement('button');
// content.append(button);
// button.textContent = 'Отправить';

// button.addEventListener('mousedown', () => {
//     button.textContent = 'Текст отправлен';
//// });

// button.addEventListener('mouseup', () => {
//     button.textContent = 'Отправить';
//// });






// const fruits = [1, 2, 3, 4];
// const array = [...fruits]
// console.log(array); // [1, 2, 3, 4]

// // ... – rest
// const [first, second, ...rest] = fruits;
// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4]

// function buyPizza(price, delivery, ...rest) {
//     console.log(price); // 500
//     console.log(rest);
//     // Array(4) [ 3, 10, 6, 20 ]
//     return rest.map((quantity) => {
//         return price * quantity + delivery;
//     });
// }

// // console.log(buyPizza(500, 3, 10, 6, 20));;
// const arrayCost = buyPizza(500, 200, 3, 10, 6, 20);
// console.log(arrayCost);
// // console.log(quantity);

