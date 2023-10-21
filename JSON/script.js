let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json2 = JSON.stringify(student);

console.log(typeof json2); // мы получили строку!

console.log(json2);

let json = JSON.parse(JSON.stringify(student));

console.log(typeof json); // мы получили новый объект!

console.log(json);