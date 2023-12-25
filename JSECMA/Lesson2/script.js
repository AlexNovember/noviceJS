'use strict';

// XHR GET запрос // Для создания запроса сначала нужно создать объект XMLHttpRequest, конструктор вызывается без аргументов. 
const xhr = new XMLHttpRequest(); // Открываем запрос. Первый аргумент это метод (GET, POST ...),второй адрес, куда нужно отправить запрос. У данного метода есть еще аргументы, которые мы рассмотрим позже. 
xhr.open('GET', 'https://api.github.com/users/octocat');
// Отправляем запрос на сервер. Метод send() может принимать один аргумент-это тело запроса, если оно есть. Для методов POST мы бы передавали тут тело запроса, наш запрос GET не имеет тела запроса. 
xhr.send();
// После отправки запроса нам нужно использовать методы слушатели, которые будут асинхронно выполнены при наступлении соответствующего события. Это методы onload, onerror и onprogress-мы сами определяем их функции. // onload-будет вызван, когда сервер вернет ответ. Это может быть положительный ответ сервера с кодом 200 (все хорошо), так и ошибка, например страница не найдена, тогда код будет 404. Мы должны обрабатывать такие ситуации сами. 
xhr.onload = function () {
    if (xhr.status != 200) {
        // если статус не 200, то произошла ошибка 
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    }
    else {
        console.log(`user: ${xhr.response}`); // response-это ответ сервера 
    }
};
// onprogress-функция будет вызываться пока запрос находится в процессе, и позволяет отслеживать ход процесса отправки запроса и получения ответа от сервера. Бывает полезна при отладке сложных запросов. 
xhr.onprogress = function (event) {
    console.log(`Get from server: ${event.loaded} bytes`);
};
// onerror-функция будет вызываться если в запросе пошло что-то не так. НАпример нет соединения с сервером или ошибка в адресе запроса. 
xhr.onerror = function () {
    console.log("Request error");
};

// Создан объект xhr и был выполнен запрос, но дальше он нам не нужен, прервем его. 
xhr.abort();




// XHR POST запрос 
// Создадим объект FormData. 
const formData = new FormData();
// Добавим в него два наших поля.

formData.append("name", "Slava");
formData.append("surname", "Belkin");
// Для создания запроса сначала нужно создать объект XMLHttpRequest, конструктор вызывается без аргументов. 
const xhr = new XMLHttpRequest();
// Открываем запрос. Первый аргумент это метод (GET, POST ...), второй адрес, куда нужно отправить запрос. У данного метода есть еще аргументы, которые мы рассмотрим позже. В данном случае мы создаем POST запрос на тестовый сервер https://httpbin.org/post. 
xhr.open('POST', 'https://httpbin.org/post');
// Отправляем запрос на сервер. Метод send() может принимать один аргумент-это тело запроса, если оно есть. Отправляем POST запрос, поэтому передаем в качестве аргумента объект FormData. 
xhr.send(formData);
// После отправки запроса нам нужно использовать методы слушатели, которые будут асинхронно выполнены при наступлении соответствующего события. Это методы onload, onerror и onprogress-мы сами определяем их функции. // onload-будет вызван, когда сервер вернет ответ. Это может быть положительный ответ сервера с кодом 200 (все хорошо), так и ошибка, например страница не найдена, тогда код будет 404. Мы должны обрабатывать такие ситуации сами. 
xhr.onload = function () {
    if (xhr.status != 200) {
        // если статус не 200, то произошла ошибка 
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        console.log(`user: ${xhr.response}`);
        // response-это ответ сервера } }; // onprogress-функция будет вызываться пока запрос находится в процессе, и позволяет отслеживать ход процесса отправки запроса и получения ответа от сервера. Бывает полезна при отладке сложных запросов. 
        xhr.onprogress = function (event) {
            console.log(`Get from server: ${event.loaded} bytes`);
        }; // onerror-функция будет вызываться если в запросе пошло что-то не так. НАпример нет соединения с сервером или ошибка в адресе запроса. 
        xhr.onerror = function () {
            console.log("Request error");
        }
    }
}




// Объект-> JSON. 
const student = { name: 'Slava', surname: 'Belkin', age: 20, practice: { place: 'IKTG', hours: 47, } };
console.log(JSON.stringify(student, null, 4));
console.log(JSON.parse('{"name": "Slava", "surname": "Belkin", "age": 20, practice: {"place": "IKGT", "hours": 47'))

console.log(JSON.parse('["Belkin", "Ivanov", "Petrov"]'));

const getUser = async (url) => {
    // Делаем запрос, и ждем его результат (указание await), который будет сохранен в константу response. 
    const response = await fetch(url); // Выполняем еще один асинхронный метод, преобразования в текст, также ждем результат, который сохраняется в константу пользователь. 
    const user = await response.text();

    console.log(user);
}

getUser('https://api.github.com/users/octocat');


const timerId = setInterval(() => {
    if (counter > amount) {
        // После того как наш счетчик достигнет нужного количества итераций, мы должны очистить таймер, чтобы итерации больше не выполнялись. clearInterval(timerId); 
        console.log('End long calculations');
    } // Добавим вывод нашего счетчика через каждые 10000 итераций, чтобы видеть что наш код работает. 
    if (counter % 10000 === 0) {
        console.log('working: ', counter);
    }
    const newDate = new Date(counter);
    counter++;
}, 0); 