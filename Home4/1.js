"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

console.log('Задание 1');

const array = []
const ArrayLength = 20;
addArray(array)
console.log(array);
EvenUnevenArray(array)

function addArray(array) {
    for (let i = 0; i < ArrayLength + 1; i++)
        array.push(i);
    return array
}

function EvenUnevenArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log(`${array[i]} - это 0`);
        } else if (array[i] % 2 === 1) {
            console.log(`${array[i]} - нечетное число`);
        } else if (array[i] % 2 === 0) {
            console.log(`${array[i]} - четное число`);
        }
    }
}