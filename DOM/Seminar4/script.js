'use strict';

// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const check = document.querySelector('input')
// const form = document.querySelector('form');
// const error = document.querySelector('.error');

// form.addEventListener('submit', function (e) {
//     if (!check.checked) {
//         error.textContent = 'Необходимо согласиться с условиями';
//         error.setAttribute('style', 'color: red');
//         setTimeout(() => {
//             error.setAttribute('style', 'color: green');
//         }, "3 second");
//         e.preventDefault();

//     }
// });


// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”


// const form = document.querySelector('form');
// const check1 = document.querySelector('.tea').textContent;
// const check2 = document.querySelector('.coffee').textContent;

// form.addEventListener('submit', function (event) {
//     for (const data of form) {

//         if (check1.checked) {
//             console.log(element.data.firstElementChild);
//             // console.log(check1)
//         }
//     }
//     event.preventDefault();
// });

// const form = document.querySelector('.form');
// const strTea = form.querySelector('.tea');
// const strCoffee = form.querySelector('.coffee');
// const btn = form.querySelector('.btn');
// const error = form.querySelector('.error');
// const inputTea = form.querySelector('.inTea');
// const inputCoffee = form.querySelector('.inCoffee');

// btn.addEventListener('click', errorToProduct)

// function errorToProduct(event) {
//     event.preventDefault();
//     if (inputTea.checked) {
//         abc(error, strTea);
//     }
//     else if (inputCoffee.checked) {
//         abc(error, strCoffee);
//     }
//     else {
//         error.textContent = 'ничего не выбрано. выбирите напиток';
//     }
// }

// function addError(str) {
//     return `${str} закончился`
// }
// function abc(error, str) {
//     error.textContent = addError(str.textContent);
// }


// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

const formEl = document.querySelector('form');
const inputForm = document.querySelector('input');
inputForm.focus();

document.addEventListener('submit', (e) => {
    let errorText = document.querySelector('p');
    inputForm.style.border = '1px solid black';
    if (errorText) {
        errorText.remove();

    } if (inputForm.value === 'пароль') {
        inputForm.style.border = '2px solid green';
        inputForm.placeholder = 'Пароль правильный';
        inputForm.value = '';
    } else {
        const errorText = document.createElement('p');
        errorText.textContent = 'пароль неверный';
        errorText.setAttribute('style', 'color: red');
        formEl.append(errorText);
        inputForm.style.border = '2px solid red';
        console.log(inputForm.value);
        e.preventDefault();
    }
});





// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

// const textArea = document.querySelector('.textarea');
// const textOut = document.querySelector('.text');

textArea.addEventListener('keyup', function (e) {
    e.preventDefault();
    textOut.textContent = this.value;
});

// Event.stopPropagation();
// Event.stopImmediatePropagation();


{/* <form action="#" class="form">
    <input type="text" name="text" id="myText" class="input_text" />
    <h1 class="title">Заголовок</h1>
</form>


const inputEl = document.querySelector(".input_text");
const titleEl = document.querySelector(".title");

document.addEventListener("input", () => {
    if (inputEl.value === "") {
        titleEl.textContent = "Заголовок";
    } else {
        titleEl.textContent = inputEl.value;
    }
});


<form action="#" class="form">
      <input type="text" name="text" id="myText" class="input_text" />
      <h1 class="title">Заголовок</h1>
    </form>

    <script>
      const inputEl = document.querySelector(".input_text");
      const titleEl = document.querySelector(".title");
      
      document.addEventListener("input", () => {
        if (inputEl.value === "") {
          titleEl.textContent = "Заголовок";
        } else {
          titleEl.textContent = inputEl.value;
        }
      });
    */}