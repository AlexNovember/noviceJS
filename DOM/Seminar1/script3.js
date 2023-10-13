// const parent = document.querySelector('#block');
// const firstChild = parent.children[0];
// console.log(firstChild);

// const link = document.querySelector('.www');
// console.log(link);

// const text = document.querySelector('#block p:first-child');
// console.log(text);

// const text2 = document.getElementById('block').children[0];
// console.log(text2);

// const text3 = document.querySelector('.www');
// console.log(text3);

// const text4 = document.getElementsByClassName('www')[0];
// console.log(text4);

// const link = document.querySelector(".link");

// link.setAttribute("href", "https://developer.mozilla.org/ru/ ");
// link.textContent = "link text js";

// const image = document.querySelector(".photo");
// image.setAttribute("src", "https://alexdev.ru/wp-content/uploads/2015/06/JS-logo.png");

// const content = document.querySelector('.content');
//     const buttonAdd = document.querySelector('.add');
//     const buttonRemove = document.querySelector('.remove');

//     buttonAdd.addEventListener('click', () => {
//         const paragraph = document.createElement('p');
//         content.appendChild(paragraph);
//         paragraph.textContent = 'Новый текстовый элемент';
//     });
//     buttonRemove.addEventListener('click', () => {
//         const paragraph = content.querySelector('p');
//         paragraph.remove();
//     });

// const contentDiv = document.querySelector(".content");

// const addButton = document.createElement("button");
// addButton.textContent = "Добавить параграф";
// addButton.onclick = () => {
//     const paragraph = document.createElement("p");
//     paragraph.textContent = "Я параграф";
//     contentDiv.append(paragraph);
// }

// const removeButton = document.createElement("button");
// removeButton.textContent = "Удалить параграф";
// removeButton.onclick = () => {
//     contentDiv.removeChild(contentDiv.children[2]);
// }

// contentDiv.append(addButton);
// contentDiv.append(removeButton);

// const button = document.querySelector('button');
// let counter = 0;
// button.addEventListener('click', () => {
//   console.log(`на кнопку нажали ${++counter} раз`);
// });



// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
// Создать вторую кнопку, при клике на которую должен появляться параграф с произвольным текстом.
// При нажатии на вторую кнопку еще раз, текст должен пропадать.

const content = document.querySelector('.content');
const button = document.createElement('button');
const buttonPar = document.createElement('button2');
button.textContent = 'Отправить';

button.addEventListener('click', () => {
    button.textContent = 'Текст отправлен';
    const paragraph = document.createElement('p');
});

buttonPar.addEventListener('mousedown', () => {
    let paragraph = content.querySelector('p');
    if (paragraph) {
        paragraph.remove();
    } else {
        paragraph = document.createElement('p');
        content.appendChild(paragraph);
        paragraph.textContent = 'Новый текстовый элемент';
    }
});


// const divContent = document.querySelector(".content");
// const someParagraph = document.createElement("p");
// someParagraph.textContent = "Some text in paragraph";

// const button = document.createElement('button');
// button.textContent = "Send";
// button.addEventListener = () => {
//     button.textContent = "Text sent!";
//     button.textContent = "Send";
// }

// const anotherButton = document.createElement("button");
// anotherButton.state = "not-clicked";
// anotherButton.textContent = "Show text";
// anotherButton.onclick = () => {
//     if (anotherButton.state === "not-clicked") {
//         anotherButton.state = "clicked";
//         anotherButton.textContent = "Hide text";
//         divContent.append(someParagraph);
//         return;
//     }
//     anotherButton.state = "not-clicked";
//     anotherButton.textContent = "Show text";
//     divContent.removeChild(someParagraph);
// }

// divContent.append(button);
// divContent.append(anotherButton);