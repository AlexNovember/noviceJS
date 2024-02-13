// Задача 1. Дан массив товаров:

// productsData = [
//     {
//         id: 1,
//         name: "Ноутбук",
//         category: "Электроника",
//     },
//     {
//         id: 2,
//         name: "Смартфон",
//         category: "Электроника",
//     },
//     {
//         id: 3,
//         name: "Кофемашина",
//         category: "Бытовая техника",
//     },
//     {
//         id: 4,
//         name: "Фотокамера",
//         category: "Электроника",
//     },
//     {
//         id: 5,
//         name: "Микроволновая печь",
//         category: "Бытовая техника",
//     },
//     {
//         id: 6,
//         name: "Книга",
//         category: "Книги",
//     },
//     {
//         id: 7,
//         name: "Футболка",
//         category: "Одежда",
//     },
//     {
//         id: 8,
//         name: "Шапка",
//         category: "Одежда",
//     },
//     {
//         id: 9,
//         name: "Стул",
//         category: "Мебель",
//     },
//     {
//         id: 10,
//         name: "Стол",
//         category: "Мебель",
//     },
// ];

// Вы разрабатываете интернет-магазин и хотите добавить
// функциональность динамической фильтрации товаров по
// категориям. У вас есть форма с выпадающим списком (select), в
// котором пользователь может выбрать категорию товаров,
//     значения необходимо сформировать исходя их имеющихся товаров.
//     При выборе категории товаров, необходимо динамически обновлять
// список отображаемых товаров на странице, чтобы пользователь
// видел только товары из выбранной категории.
// 1. Создайте интерфейс веб-страницы, который включает в себя
// следующие элементы:
//     a. Выпадающий список (select) с категориями товаров.
//     b. Список товаров, который будет отображать товары в
// соответствии с выбранной категорией.
//     c. Каждый товар в списке должен содержать название и
// категорию.
//
//     При выборе категории товаров в выпадающем списке, форма
// должна следить за изменениями.
//     Динамически обновляйте список товаров на странице, чтобы
// отображать только товары из выбранной категории.
//     Стилизуйте элементы интерфейса с помощью CSS для улучшения
// внешнего вида.

// const selectEl = document.querySelector("select");
// const ulEl = document.querySelector(".list-product");

// selectEl.addEventListener("change", function (event) {
//     const category = event.target.value;
//     ulEl.innerHTML = productsData
//         .filter(product => product.category === category)
//         .map(product => `<li><p>${product.name}</p><p>${product.category}</p></li>`)
//         .join("");

// })

const getNumPage = counter();
let isFetching = false;
const photoContentEl = document.getElementById("photo-container");
const client_id = `` //Здесь ваш ключ

try {
    const fotoData = await getImagesFetch(getNumPage());
    render(fotoData);
} catch (err) {
    alert(err)
}

window.addEventListener("scroll", async function () {
    if (isFetching) {
        return;
    }
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    if (document.documentElement.scrollTop > scrollHeight * 0.70) {
        try {
            const fotoData = await getImagesFetch(getNumPage());
            render(fotoData);
        } catch (err) {
            alert(err)
        }
    }
})

function render(fotoData) {
    const html = showPicture(fotoData);
    photoContentEl.insertAdjacentHTML("beforebegin", html)
}

// function getImagesFetch(numPage) {
//     isFetching = true;
//     return fetch(`https://api.unsplash.com/photos/?client_id=${client_id}&page=${numPage}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Сервер встал")
//             }
//             return response.json()
//         })
//         .then(fotoList => {
//             return fotoList
//         })
//         .finally(() => isFetching = false)
// }
async function getImagesFetch(numPage) {
    isFetching = true;
    try {
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=${client_id}&page=${numPage}`)
        if (!response.ok) {
            throw new Error("Сервер встал")
        }
        return await response.json();
    } catch (err) {
        throw err
    } finally {
        isFetching = false;
    }
}

function showPicture(array) {
    let imgString = "";
    for (const arrayElement of array) {
        imgString += `<div class="photo">
            <img src="${arrayElement.urls.small}">
        </div>
        `
    }
    return imgString;
}

function counter() {
    let count = 1
    return function () {
        return count++
    }
}
