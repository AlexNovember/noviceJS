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

console.log('\nЗадание 4');

const raw = 20;

let str = "x"
console.log(str)
for (let i = 0; i < raw; i++) {
    console.log(i);
    console.log(str += "x")
}