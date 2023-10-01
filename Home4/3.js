"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

console.log('\nЗадание 3');

const arrayNew = [];
const arrayLenght = 5
const randomRange = 9;
const comparingNumber = 3;

randomArray(arrayNew);
console.log(arrayNew);
console.log(`Сумма ${summArray(arrayNew)}`);
console.log(`Минимальное число ${minArrayNumber(arrayNew)}`);
findIndexInArray(arrayNew);
console.log(`Число ${comparingNumber} лежит в массиве под индексами`)
console.log(findIndexInArray(arrayNew));

function randomArray(arrayNew) {
    for (let i = 0; i < arrayLenght; i++) {
        arrayNew.push(Math.round(Math.random() * randomRange));
    }
    return arrayNew;
}

function summArray(arrayNew) {
    return arrayNew.reduce((acc, el) => acc + el, 0);
}

function minArrayNumber(arrayNew) {
    return Math.min.apply(null, arrayNew);
    // return arrayNew.reduce((x, y) => Math.min(x, y)); // через reduce
}

function findIndexInArray(arrayNew) {
    let arrayFunc = [];
    for (let i = 0; i < arrayNew.length; i++) {
        if (arrayNew[i] === comparingNumber) {
            arrayFunc.push(i);
        } continue;
    } return arrayNew = arrayFunc;
}