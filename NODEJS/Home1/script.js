'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.write(`Просмотров Главная страница ${count()}`);
        res.write('<h1>Главная</h1>');
        res.write('<a href="/">Главная</a>');
        res.write('<br>')
        res.write('<a href="/about">About</a>');
        res.end();

    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.write(`Просмотров About ${count2()}`);
        res.write('<h1>About</h1>');
        res.write('<a href="/">Главная</a>');
        res.write('<br>')
        res.write('<a href="/about">About</a>');
        res.end();

    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.write(`Переходов 404 ${count3()}`);
        res.end('<h1>Страница не найдена</h1>');

    }


});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});


function getCounter() {
    let counter = 1;
    return function () {
        return counter++;
    }
}

let count = getCounter();
let count2 = getCounter();
let count3 = getCounter();
