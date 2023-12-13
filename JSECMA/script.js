'use strict';

// Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов. mergeArrays([1, 2, 3], [4, 5, 6]); 
// Ожидаемый результат: [1, 2, 3, 4, 5, 6]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// function mergeArrays(arrayA, arrayB) {
//     return [...arrayA, ...arrayB]
// }

let mergeArrays = (arrayA, arrayB) => [...arrayA, ...arrayB];

console.log(mergeArrays(arr1, arr2));

// Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов. removeDuplicates(1, 2, 3, 2, 4, 1, 5);
// Ожидаемый результат: [1, 2, 3, 4, 5]

const array = [1, 2, 1, 2, 3, 4, 5, 2, 4, 1, 1, 6];

function removeDuplicates(arr) {
    // const uniqSet = new Set(arr);
    // return [...uniqSet];
    // const makeUniq = (arr) => [...new Set(arr)];
    // return Array.from(new Set(arr))
    // return arr.filter((element, index) => index === arr.indexOf(element));
    return arr.filter((item, pos) => arr.indexOf(item) == pos);
}

console.log(removeDuplicates(array));


// Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа. 

// Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел. 

// Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22];

function getEvenNumbers(numbers) {
    // const evens = numbers.filter((x) => {
    //     return x % 2 === 0;
    // })
    // return evens;
    return numbers.filter(x => x % 2 === 0)
}

function calculateAverage(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}

function capitalizeFirstLetter(str) {
    return str.split(" ").map(word => {
        return `${word[0].toUpperCase()}${word.slice(1, word.length)}`;
    }).join(" ");
    // return str.split(" ").map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
}

console.log(getEvenNumbers(arrayNum));
console.log(Math.round(calculateAverage((arrayNum))));
console.log(capitalizeFirstLetter('в которой первая буква каждого слова является заглавной'));


const closureFunction = () => {
    const cache = {};
    return (x) => {
        if (cache[x]) return cache[x];
        const result = x * x;
        cache[x] = result;
        return result;
    }
}
const chachedPow = closureFunction();
console.log(chachedPow(2)); // 4 
console.log(chachedPow(8)); // 64 
console.log(chachedPow(2)); // 4 — тут функция возьмёт значение из кеша и не будет вычислять его заново. Это особенно эффективно работает, когда мы имеем дело со сложными и тяжёлыми вычислениями или, например, запросами каких-то ресурсов из базы данных или внешних источников. Тут нельзя забывать о валидации кеша. Он может стать неактуальным, если мы имеем дело с базой данных или внешними источниками данных.



// Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract. Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число. Значение должно быть доступно только через методы объекта, а не напрямую.

const createCalculator = (incomingNumber) => {
    return {
        add: (arg) => { incomingNumber += arg },
        subtract: (arg) => { incomingNumber -= arg },
        getNumber: () => { return incomingNumber }
    }
}


// const createCalculator = (initialA) => {
//     const calculator = {
//         add: function () {
//             return this.a * this.a;
//         },

//         subtract: function () {
//             return this.a - this.a;
//         }
//     }

//     calculator.a = initialA;
//     return calculator;
// };

const calculator = createCalculator(2);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.getNumber());

// function numberGenerator() {
//     // Локальная «свободная» переменная, которая доступна только в замыкании
//     let num = 1;
//     function checkNumber() {
//         num++;
//         return checkNumber;
//     }
// }

// var number = numberGenerator();
// number(); // 2


// Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить приветствие с использованием этого имени. 
// Пример использования: const greeting = createGreeting('John'); greeting(); // Ожидаемый результат: "Hello, John!"


const createGreeting = (firstName) => {
    return () => {
        console.log(`Hello, ${firstName}!`);
    }
};

const greeting = createGreeting('John');
greeting();


// Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля. Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае. 
// Пример использования: const isPasswordValid = createPasswordChecker(8); console.log(isPasswordValid('password')); // Ожидаемый результат: false console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// function createPasswordChecker(num) {
//     if (num <= 6) {
//         console.log('6');
//     } else {
//         console.log('5');
//     }
// }


// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password'));
// console.log(isPasswordValid('secret'));




// Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает сумму его цифр.


// function sumDigits(n) {
//     n = `${n}`;
//     if (n.length == 1) return +n; // Плюсик перед строкой - превращает её в число.

//     return +n[0] + sumDigits(n.slice(1));
//     // n - всё еще строка (содержащая число).
//     // +n[0] — к первой цифре добавляем результат вызова той же функции 
//     // для оставшихся цифр ( slice(1) берет всю строку, кроме первого символа )
// }

// console.log(sumDigits(1234))

function sumDigits(num) {
    if (num < 10) {
        return num;
    }
    return num % 10 + sumDigits(Math.trunc(num / 10));
}

console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)


var element = document.querySelector('.class6');

function findElementWithClass(sourceElement, className){
    var element = sourceElement; //selected DOM node

    while(element !== document.body){
        if(element.classList.contains(className)){
            break;
        }
        element = element.parentNode;
    }
    return element;
}

console.log(findElementWithClass(element, 'class3'));