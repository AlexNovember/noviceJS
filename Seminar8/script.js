// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.
// 2. Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.
// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

// const numberArr = [1, 2, 3];
// alert(numberArr);

// const randomArr = [3, 6, 7, 8, 9, 456, 234, 2, 1];
// alert(randomArr.length);

// const Arr = [1];
// for (let index = 0; index < 30; index++) {
//   for (let i = 0; i < Arr.length + 1; i++) {
//     Arr[index] = i;
//   }
// }

// const Arr = ["a", "b", "c"];

// Arr[0] = 1;
// Arr[1] = 2;
// Arr[2] = 3;

// console.log(Arr);

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
// 2. Узнайте длину следующего массива: const arr = []; arr[3] = 'a'; arr[8] = 'b';
// 1. Пусть дан такой массив: const arr = [1, 2, 3]; Добавьте ему в конец элементы 4 и 5.
// 1. Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

// const Arr = [1, 2, 3];
// Arr[0]++;
// ++Arr[1];
// Arr[2]++;
// console.log(Arr);

// const arr = [];
// arr[3] = "a";
// arr[8] = "b";
// console.log(arr);
// console.log(arr.length);

// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// console.log(arr.length);
// delete arr[0];
// delete arr[1];
// console.log(arr);
// console.log(arr.length);

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.
// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
// 4. Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.

// for (let i = 11; i < 34; i++) {
//   console.log(i);
// }

// for (let i = 1; i < 100; i = i + 2) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }

// let num = 2;

// for (num; num <= 1000; num = num * 3) {
//   console.log(num);
// }

// 1. Дан массив const arr = [2, 5, 9, 15, 1, 4]; Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
// 1. Найдите сумму четных чисел от 2 до 100.
// 2. Дан массив const = [2, 5, 9, 3, 1, 4]; Найдите сумму элементов этого массива.
// 1. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
// 2. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

// const arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// let sum = 0;
// for (let i = 2; i <= 100; i++) {
//   if (i % 2 == 0) sum += i;
//   console.log(sum);
// }
// console.log(sum);

//заполнение массива циклом
// const arr = [];
// for (let i = 2; i < 100; i = i + 2) {
//   arr.push(i);
// }
// console.log(arr);

// const arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// Подсчет суммы с помощью reduce

// const arr1 = [2, 5, 9, 3, 1, 4];
// const initialValue = 0;
// const sumWithInitial = arr1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(sumWithInitial);

// let str = "";
// for (let i = 1; i < 10; i++) {
//   str += `-${i}`;
// }
// console.log(`${str}-`);

// const arr = [2, 5, 9, 7, 0, 1, 6];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     break;
//   }
//   console.log(arr[i]);
// }

// 1. Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.
// 2. С помощью двух вложенных циклов выведите на экран следующую строку:
// 3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; Подсчитайте количество цифр 3 в этом массиве.
// 1. Дан следующий массив: [1, 2, 3, 4, 5] С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

// const array = [2, 2, 4, 6, 9, 10, 1, 5, 7, 8];
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     console.log(`${array[i]} в квадрате = ${array[i] ** 2}`);
//   } else if (array[i] % 3 == 0) {
//     console.log(`${array[i]} в кубе = ${array[i] ** 3}`);
//   }
// }

// const arr = [1, 2, 3, 2, 4, 3, 3, 6, 3, 2, 3];
// count = 0;
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] == 3) {
//     count++;
//   }
//   continue;
// }
// console.log(count);

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);