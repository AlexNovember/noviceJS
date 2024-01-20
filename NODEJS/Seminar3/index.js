const fs = require('fs');
const path = require('path');

// const person = {
//     name: "alex",
//     age: 28,
//     city: 'Moscow'
// }

// const personJson = JSON.stringify(person, null, 2);
const filePath = path.join(__dirname, 'person.json');

const person = JSON.parse(fs.readFileSync(filePath));
person.age -= 10;
person.city = 'Peterburg';

const personJson = JSON.stringify(person, null, 2);

fs.writeFileSync(filePath, personJson);
