'use strict';


// function Car(model) {
//     this.model = model;
// this.beep = function () {
//     console.log(`${this.model} подает сигнал`);
// };
// }

// const car1 = new Car('BMW');
// const car2 = new Car('Mercedes');

// Car.prototype.wheelsCount = 4;
// Car.prototype.beep = function () {
//     console.log(`${this.model} подает сигнал`);
// };

// console.log(car1.wheelsCount);

// console.log(car1);
// console.log(car2);
// console.log(Car.prototype);

// // console.dir(Car);
// car1.beep();
// car2.beep();






// function Person(name, gender) {
//     this.name = name;
//     this.gender = gender;
// }

// Person.prototype.sayName = function () {
//     console.log(`My name is ${this.name}`);
// }



// // Employee.prototype.sayName = function () {
// //     console.log(`My name is ${this.name}`);
// // }



// const person1 = new Person('Alex', 'male');
// const person2 = new Person('Ivan', 'male');

// person1.sayName();

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.sayPosition = function () {
//     console.log(`My position is ${this.position}`);
// }

// function Employee(name, gender, position) {
//     // this.name = name;
//     // this.gender = gender;
//     Person.call(this, name, gender);
//     this.position = position;
// }

// const employee1 = new Employee('Pasha', 'male', 'Director');

// employee1.sayPosition();
// employee1.sayName();


// ----ES6-----

// function Person(name, gender) {
//     this.name = name;
//     this.gender = gender;
// }

// Person.prototype.sayName = function () {
//     console.log(`My name is ${this.name}`);
// }

// const person1 = new Person('Alex', 'male');

// class Person {
//     constructor(name, gender) {
//         this.name = name;
//         this.gender = gender;
//     }

//     sayName() {
//         console.log(`My name is ${this.name}`);
//     }
// }

// const person1 = new Person('Alex', 'male');

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.sayPosition = function () {
//     console.log(`My position is ${this.position}`);
// }

// function Employee(name, gender, position) {
//     // this.name = name;
//     // this.gender = gender;
//     Person.call(this, name, gender);
//     this.position = position;
// }

// const employee1 = new Employee('Pasha', 'male', 'Director');

// class Employee extends Person {
//     constructor(name, gender, position) {
//         super(name, gender);
//         this.position = position;
//     }

//     sayPosition() {
//         console.log(`My position is ${this.position}`);
//     }
// }

// const employee1 = new Employee('Pasha', 'male', 'Director');

// console.log(employee1.sayPosition());
// console.log(person1.sayName());

// let num1 = 1;
// let num2 = 2;
// console.log('сумма: ' + Number.parseInt(num1 + num2));

// let a = 1;
// let b = 2;
// console.log(a + b);

// let num = '123';
// let sum = +(num[0]) + +(num[1]) + +(num[2]);
// console.log(sum);

// let num = String(123);
// console.log(num[0]);

// let a = 0;
// console.log(a++);
// console.log(++a);

// let num = String(123);
// console.log(num.length);

// let a = 24 * 60 * 60;
// console.log(a);

// let num = 123;
// let str = String(num);
// console.log(str.length);