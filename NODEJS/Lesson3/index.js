const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static('Lesson3'));

app.use((req, res, next) => {
    console.log('Поступил запрос', req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});