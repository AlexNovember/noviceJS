"use strict";

// 1. Создать новый файл lesson2.html 2. Создать переменную и спросить у пользователя “Ваш возраст” 3. Вывести на экран текст. Вам “возраст пользователя” лет 4. Спросить у пользователя его имя 5. Вывести на экран, Добро пожаловать на сайт “Имя пользователя”

// const userAge = prompt('Ваш возраст');
// (userAge === '') ? alert('Ничего не ввели') : alert ('Ваш возраст ' + userAge + ' лет');
// ;
// const userName = prompt('Ваше имя');
// (userName === '') ? alert ('Ничего не ввели') : alert ('Добро пожаловать на сайт ' + userName);

// 1. Найти остаток от деления двух переменных a. let a = 13; b. let b = 5; 2. Что выведет на экран (Сначала проговорите, потом проверьте) a. let a; b. alert(a); 3. Что выведет на экран (Сначала проговорите, потом проверьте) a. alert('abc' * 3); 4. Что выведет на экран (Сначала проговорите, потом проверьте) a. alert( 1 / 0); b. alert(-1 / 0); 5. Что выведет на экран (Сначала проговорите, потом проверьте) a. alert('2' * '3');

// let a = 13;
// let b = 5;
// let c = a%b;
// console.log(c);

// let a;
// alert(a); underfined

// alert('abc' * 3) nun

// alert( 1 / 0); Infinity
// alert(-1 / 0); -Infinity

// alert('2' * '3'); 6

// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется в консоли. Определите, в какой строке кода случилась ошибка. 2. Необходимо вывести в консоль результат суммы данных переменных a. let a = '2'; b. let b = '3'; 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести текст a. Сумма чисел равна “результат” b. Разность чисел равна “результат” c. Произведение чисел равно “результат” d. Частное чисел равно “результат” e. Остаток от деления чисел равен “результат”

// let a = '2';
// let b = '3';
// let c = +a + +b;
// let c = Number(a) + Number(b);
// console.log(typeof c);
// console.log(c);

// let fNumber = prompt ('Введите первое число: ');
// let sNumber = prompt ('Введите воторое число: ');
// fNumber = Number.parseInt(fNumber);
// sNumber = Number.parseInt(sNumber);
// const summ = fNumber + sNumber;
// const diff = fNumber - sNumber;
// const multi = fNumber * sNumber;
// const div = fNumber / sNumber;
// const remainder = fNumber % sNumber;
// alert(`Cумма ${summ}
// Разность ${diff}
// Произведение ${multi}
// Деление ${div}
// Остаток ${remainder}`);

// 1. Не запуская код, определите, что выведется в консоль: a. console.log(String(true)); 2. Не запуская код, определите, что выведется в консоль: a. console.log('a' + true); 3. Не запуская код, определите, что выведется в консоль: a. console.log(Number(true)); 4. Не запуская код, определите, что выведется в консоль: a. console.log(true + 1); 5. Не запуская код, определите, что выведется в консоль: a. console.log(true + true) 6. Не запуская код, определите, что выведется в консоль: a. console.log(true - true) 7. Не запуская код, определите, что выведется в консоль: a. console.log( String(true) + Number(true) )

// console.log(String(true)); true

// console.log('a' + true); atrue

// console.log(Number(true)); 1

// console.log(true + 1); 2

// console.log(true + true);

// console.log(true - true); 0

// console.log(String(true) + Number(true)); true1

// 1. Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который a. Выводит в консоль “Число больше 5” b. Выводит в консоль “Число меньше 5” c. Выводит в консоль “Число равно 5” 2. Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение. 3. Пользовать с клавиатуры вводит 2 числа a. Необходимо найти какое из двух чисел минимальное 4. Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше нуля и меньше 15.

// const fNumber = prompt ('Введите число: ');
// if (a> 5) {
//     alert ('Больше 5')
// } else if (a < 5) {
//     alert ('Меньше 5')
// } else {
//     alert ('Равно 5')
// }

// const test1 = prompt ('Введите 1 переменную: ');
// const test2 = prompt ('Введите 2 переменную: ');
// (test1 === test2) ? alert ('Равны') : alert ('Не равны')

// const fNumber = prompt ('Введите первое число: ');
// const sNumber = prompt ('Введите воторое число: ');

// (fNumber > sNumber) ? alert (sNumber + '  минимальное') : alert (fNumber + '  минимальное')

// if (fNumber > sNumber) {
//         alert (sNumber + '  минимальное')
//     } else if (fNumber < sNumber) {
//         alert (fNumber + '  минимальное')
//     } else {
//         alert ('Равны')
//     }

// const test = +prompt("Введите число: ");
// console.log(typeof test);
// if (test > 0 && test < 15) {
//   console.log("Переменная больше нуля и меньше 15");
// }
// (test > 0 && test < 15) ? alert ('Переменная больше нуля и меньше 15') : alert ('Переменная больше 15');
