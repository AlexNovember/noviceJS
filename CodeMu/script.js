'use strict';

// let arr = [];

// for (let i = 0; i < 10; i++) {
// arr[i] = i;
// arr.push[i]++;
// console.log(arr);
// arr[i] += 'ff';
// }

// console.log(arr);
// arr.push(12);
// let key1 = 6;
// let key2 = 2;
// console.log(arr[key1] + arr[key2]);
// delete arr[0];
// console.log(arr);

// let obj1 = {};
// for (let i = 1; i < 4; i++) {
//     obj1[i] = i;
//     console.log(obj1[i]);
// }

// let obj = { x: 1, y: 2, z: 3 };
// let keys = Object.keys(obj);
// console.log(keys);

// const key = 'x';
// console.log(obj);
// console.log(obj['x']);
// console.log(Object.keys(obj).length);
// console.log(obj[key]);


let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let obj = {
    [key1]: 1,
    [key2]: 2,
    [key3]: 3
};

// console.log(obj);
// console.log('x' in obj);
const a = ('x' in obj);

if (!a) {
    console.log('dfds');
} else {
    console.log('aaaa');
}

delete obj[key2];
console.log(obj);
console.log(typeof obj)

let obj2 = { x: 1, y: 2, z: 3 };
console.log(typeof obj2['x']);

const y = [1, 2, 3];
console.log(typeof y[1]);

console.log(Array.isArray(obj))


// class Menu {
//     constructor(elem) {
//         elem.onclick = this.onClick.bind(this); // (*)
//     }

//     save() {
//         console.log('ddd');
//     }

//     load() {
//         console.log('загружаю');
//     }

//     search() {
//         console.log('ищу');
//     }

//     onClick(event) {
//         let action = event.target.dataset.action;
//         if (action) {
//             this[action]();
//         }
//     }
// }

// new Menu(menu);


let obj1 = { 'name': 'Alex', 'surname': 'Adams', 'patronymic': 'Hello' };
let arr = [];
let arr2 = [];
const dayOfWeek = {};

for (const key in obj1) {

    if (Object.hasOwnProperty.call(obj1, key)) {
        const keys = key;

        arr.push(keys)
        // console.log(keys);
        const el = obj1[key];
        // console.log(el);
        arr2.push(el)
        // console.log(arr);
        // console.log(arr2);
        for (let i = 0; i < arr2.length; i++) {
            dayOfWeek[arr[i]] = arr2[i];
        }
    }

}




console.log(dayOfWeek);
// const arr3 = [...arr] + [...arr2];
// console.log(arr3);




// console.log(obj1['name'], obj1['surname'], obj1['patronymic']);


function domainName(url) {
    return url.replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('.')[0];
}

console.log('fff');
console.log(domainName('http://5h-9tgy2ztfgauxe5sdxe7oafsod.info/default.html'));

let regexp = /^(?:[^:]+:\/\/)?([^.\/?#]+\.)*([^.\/?#]+)\.([^.\/?#]+)(?:$|[\/?#])/;
const domain2 = s => s.match(regexp)[2];

function domainParts(str) {
    let regexp = /^(?:[^:]+:\/\/)?([^:\/?#\[\]@]+)/;
    return str.match(regexp)[1].split(".").reverse();
}

console.log(domain2("https://youtube.com"));
console.log(domain2("http://google.com"));
console.log(domain2("f5d2e8rl8e181h-t-y.edu"));
console.log(domain2("http://5h-9tgy2ztfgauxe5sdxe7oafsod.info/default.html"));
console.log(domain2("http://google.co.jp"));

console.log(domainParts("http://edu.google.gov.co.jp"));
