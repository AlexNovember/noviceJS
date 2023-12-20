'use strict';

// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.

const proto = getPrototypeChain({ name: 'John' })
console.log(proto)

function getPrototypeChain(obj) {
    let currentObject = obj;
    const arrObj = [currentObject];
    while (currentObject !== null) {
        currentObject = Object.getPrototypeOf(currentObject);
        arrObj.push(currentObject);
    }
    return arrObj
}


// Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// ● Свойство name(строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.Создайте подкласс Dog, который наследует класс Animal.Для подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed(строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".

class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} provides sound`)
    }
}

class Dog extends Animal {

    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    fetch() {
        console.log(`Dog of breed ${this.breed} with nam ${this.name} has brought a ball`)
    }
}