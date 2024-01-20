const express = require('express');
const path = require('path');
const filePath = path.join(__dirname, 'count.json');
const fs = require('fs');
const app = express();

app.use(express.static('static'));

app.use((req, res, next) => {
    console.log('Поступил запрос', req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    const countTimer = count();
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });
    res.write('<h1>Корневая страница</h1>')
    res.write(`Просмотров ${countTimer}`);
    res.write('<br>');
    res.write('<br>');
    res.write('\n<a href="/about">About</a>');

    const jsonData = JSON.parse(fs.readFileSync(filePath));
    jsonData.name = req.url;
    jsonData.count = countTimer;
    const counterJSON = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync(filePath, counterJSON);
});

app.get('/about', (req, res) => {
    const countTimer = count2();
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });
    res.write('<h1>About</h1>')
    res.write(`Просмотров ${countTimer}`);
    res.write('<br>');
    res.write('<br>');
    res.write('\n<a href="/">Home</a>');

    const jsonData = JSON.parse(fs.readFileSync(filePath));
    jsonData.name2 = req.url;
    jsonData.count2 = countTimer;
    const counterJSON = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync(filePath, counterJSON);
});

const port = 3000;

app.listen(port, () => {
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

