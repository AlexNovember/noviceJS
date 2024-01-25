const express = require('express');
const path = require('path');
const filePath = path.join(__dirname, 'count.json');
const fs = require('fs');
const app = express();

app.use((req, res, next) => {
    console.log('Поступил запрос', req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    const jsonData = JSON.parse(fs.readFileSync(filePath));

    res.send(`<h1>Корневая страница</h1>
    <p>Просмотров ${jsonData.count + 1}</p>
    <a href="/about">About</a>`);

    addJSON("name", "count", req.url);
});

app.get('/about', (req, res) => {
    const jsonData = JSON.parse(fs.readFileSync(filePath));

    res.send(`<h1>About</h1>
        <p>Просмотров ${jsonData.count2 + 1}</p>
        <a href="/">About</a>`);

    addJSON("name2", "count2", req.url);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

function addJSON(key, key2, url) {
    const jsonData = JSON.parse(fs.readFileSync(filePath));
    jsonData[key] = url;
    jsonData[key2]++;
    const counterJSON = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync(filePath, counterJSON);
}