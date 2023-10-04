"use strict";

/*
Необязательное задание.
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

// console.log('\nЗадание 4');

// const raw = 20;

// let str = "x";
// console.log(str);
// for (let i = 0; i < raw; i++) {
//     console.log(str += "x");
// }

// const array = [15, 16, 17, 18, 19]

// const ar = array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0,
// );

// console.log(ar);

const obj = { x: 1, y: 2, z: 3 };

for (const key in obj) {
    // console.log(key);
    console.table(key, obj[key]);
}

