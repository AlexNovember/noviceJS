
const fs = require('fs');
const path = require('path');


fs.readFile('./test.json', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const dataFile = JSON.parse(data);
        dataFile.age -= 10;
        console.log(dataFile.age);
    }
});

// const arr = {
//     name: 'Ivan',
//     age: 28
// }



// fs.writeFile('./test.json', JSON.stringify(arr), (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('file saved');
//     }
// });

// fs.appendFile('./test.txt', '\nHello2', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('file saved');
//     }
// });