"use strict";

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};

const arrayNumbers = Object.values(numbers);
console.log(arrayNumbers.filter(number => number >= 3));

// через цикл
// const result = {};
// for (const i in numbers) {
//   const number = numbers[i]
//   if (numbers[i] >= 3) {
//     result[i] = number
//   }
// }
// console.log(Object.values(result))

