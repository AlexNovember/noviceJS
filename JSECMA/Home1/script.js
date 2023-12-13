'use strict';

// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9]
console.log('Задание 1');
console.log(Math.min(...arr));

// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count
    }
}

const counter = createCounter();

console.log('Задание 2');
console.log(counter.increment());
console.log(counter.decrement());

// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(sourceElement, className) {
    const element = sourceElement;

    while (element !== document.body) {
        if (element.classList.contains(className)) {
            break;
        }
        element = element.parentNode;
    }
    return element;
}

const rootElement = document.getElementById('root'); const targetElement = findElementByClass(rootElement, 'my-class');
console.log('Задание 3');
console.log(targetElement);

