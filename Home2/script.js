"use strict";

// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// alert(
//   "Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3"
// );
// const num1 = Number.parseFloat(prompt("Введите первое число: "));
// const num2 = Number.parseFloat(prompt("Введите второе число: "));

// if (num1 <= 1 && num2 >= 3) {
//   console.log(`${num1} и ${num2} условие соблюдено`);
// } else {
//   console.log(`${num1} и ${num2} условие не соблюдено`);
// }

//тернарный оператор
// num1 <= 1 && num2 >= 3
//   ? console.log(`${num1} и ${num2} условие соблюдено`)
//   : console.log(`${num1} и ${num2} условие не соблюдено`);

// ---------------------------

// Задание 2
// Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

// let test = true;
// test === true ? console.log("+++") : console.log("---");

// ------------------------------

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// const day = Math.round(Math.random() * 30) + 1;
// console.log(day);

// if (day <= 10) {
//   console.log("1 декада месяца");
// } else if (day <= 20) {
//   console.log("2 декада месяца");
// } else {
//   console.log("3 декада месяца");
// }

// ------------------------

// Задание 4
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.

// const number = +prompt("Введите число:");
// console.log(number);
// const hundreds = Math.trunc((number % 1000) / 100);
// console.log(hundreds);
// const dozens = Math.trunc((number % 100) / 10);
// console.log(dozens);
// const pieces = Math.trunc(number % 10);
// console.log(pieces);
// console.log(
//   `В числе ${number} количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${pieces}`
// );

// var myData = "Manchester London Liverpool Birmingham Leeds Carlisle";
// console.log(myData);
// var myArray = myData.split(",");
// myArray;
// console.log(myArray);

// myArray.toString();
// console.log(myArray);

// var myNewString = myArray.join(",");
// myNewString;
// console.log(myNewString);

var foo = 1;
var output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
