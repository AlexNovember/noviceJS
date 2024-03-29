// reviewSymbol создать
// ratingSymbol
// tagsSymbol

const reviewSymbol = Symbol("review");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");


// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
    book[metadataType] = data;
}


// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
    return book[metadataType];
}

// Создание объекта книги и добавление метаданных
let book = {
    title: "1984",
    author: "George Orwell"
};


addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");


// Вывод метаданных для книги
console.log(getMetadata(book, reviewSymbol)); // ["Отличная книга о дистопии!"]
console.log(getMetadata(book, ratingSymbol)); // [5]
console.log(getMetadata(book, tagsSymbol)); // ["dystopia"]



// Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// Создайте объект library, который содержит массив книг и имеет свойство-символ Symbol.iterator.
// Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
// Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.
// Массив книг: 

const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
];

const library = {
    books: [...books],
    [Symbol.iterator]: function () {
        let countBooks = 0;
        return {
            next: (() => {
                if (countBooks >= this.books.length) {
                    return { done: true }
                } else {
                    return {
                        value: this.books[countBooks++],
                        done: false
                    }
                }
            })
        }
    },
}
for (const book of library) {
    console.log(book.author, book.title)
}





// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
// Дан код html:
// <div>Element 1</div>
// <div data-active="true">Element 2</div>
// <div>Element 3</div>
// <div data-active="true">Element 4</div>

// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active.
// Выведите результат на консоль.

const arrayDivEl = Array.from(document.querySelectorAll('div'));
const resArr = arrayDivEl.filter(div => div.hasAttribute('data-active'))
console.log(resArr);


// Текст задания:
// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// Map будет использоваться для хранения соответствия между уроком и преподавателем.
// Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.
// 1. Map: урок => преподаватель
let lessons = new Map();
// "Математика", "Смирнов"
// "История", "Иванова"


// 2. Map: студент => Set уроков


// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки Ивана: тут вывод уроков ивана`); // Математика, История


