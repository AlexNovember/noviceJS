'use strict';

// Линейный алгоритм O(n)

// const array = []
// let count = 0
// randomArray(array, 20, 20)
// console.log(array);


// function linearSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         count += 1;
//         if (array[i] === item) {
//             return i;
//         }
//     }
//     return null
// }

// function randomArray(array, len, range) {
//     for (let i = 0; i < len; i++) {
//         array.push(Math.round(Math.random() * range));
//     }
// }

// console.log(linearSearch(array, 7));
// console.log('count = ', count);

// Бинарный поиск О(logn(n))

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// let count = 0

// function binarySearch(array, item) {
//     let start = 0
//     let end = array.length
//     let middle;
//     let found = false
//     let position = -1
//     while (found === false && start <= end) {
//         count += 1
//         middle = Math.floor((start + end) / 2);
//         if (array[middle] === item) {
//             found = true
//             position = middle
//             return position;

//         }
//         if (item < array[middle]) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
//     return position;
// }

//Рекурсивный поиск О(logn(n))
// function recursiveBinarySearch(array, item, start, end) {
//     let middle = Math.floor((start + end) / 2);
//     count += 1
//     if (item === array[middle]) {
//         return middle
//     }
//     if (item < array[middle]) {
//         return recursiveBinarySearch(array, item, 0, middle - 1 )
//     } else {
//         return recursiveBinarySearch(array, item, middle + 1, end )
//     }
// }

// console.log(recursiveBinarySearch(array, 0, 0, array.length))
// console.log(binarySearch(array, 6));
// console.log(count)



// const tree = [
//     {
//         v: 5,
//         c: [
//             {
//                 v: 10,
//                 c: [
//                     {
//                         v: 11,
//                     }
//                 ]
//             },
//             {
//                 v: 7,
//                 c: [
//                     {
//                         v: 5,
//                         c: [
//                             {
//                                 v: 1
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         v: 5,
//         c: [
//             {
//                 v: 10
//             },
//             {
//                 v: 15
//             }
//         ]
//     }
// ]

// const recursive = (tree) => {
//     let sum = 0;
//     tree.forEach(node => {
//         sum += node.v
//         if (!node.c) {
//             return node.v
//         }
//         sum += recursive(node.c)
//     })
//     return sum
// }

// const iteration = (tree) => {
//     if (!tree.length) {
//         return 0
//     }
//     let sum = 0
//     let stack = []
//     tree.forEach(node => stack.push(node));
//     while (stack.length) {
//         const node = stack.pop()
//         sum += node.v
//         if (node.c) {
//             node.c.forEach(child => stack.push(child))
//         }
//     }
//     return sum
// }

// console.log(iteration(tree))
// console.log(recursive(tree))


// const map = new Map()
// const objKey = { id: 5 }
// map.set(objKey, "ulbi tv")

// console.log(map.get(objKey));

// const set = new Set()

// set.add(5)
// set.add(5)
// set.add(5)
// set.add(5)
// set.add(5)
// set.add(4)
// set.add(3)
// console.log(set)


// const figure = prompt(`Фигура: 1 - квадрат, 2 - прямоугольник,
//  3 - треугольник, 4 - параллелограм`);

// if (figure === '1') {
//     const a = prompt('Введите сторону: ');
//     getSquare(a);
// } else if (figure === '2') {
//     const sideA = prompt('Введите сторону A: ');
//     const sideB = prompt('Введите сторону B: ');
//     getPerimetr(sideA, sideB)
// } else if (figure === '3') {
//     const osnovanie = prompt('Введите основание: ');
//     const sideTriangle = prompt('Введите сторону: ');
//     getPerimetr(osnovanie, sideTriangle)
// } else if (figure === '4') {
//     const osnovaniePar = prompt('Введите сторонуA: ');
//     const sidePar = prompt('Введите сторонуB: ');
//     getPerimetrPar(osnovaniePar, sidePar)
// } else alert('Такой фигуры нет');

// function getSquare(a) {
//     console.log(`Периметр равен ${a * 4}`);
// }

// function getPerimetr(sideA, sideB) {
//     console.log(`Периметр равен ${(sideA * 2) + (sideB * 2)}`);
// }

// function getPerimetrTriangle(osnovanie, sideTriangle) {
//     console.log(`Периметр равен ${osnovanie + sideTriangle * 2}`);
// }

// function getPerimetrPar(osnovaniePar, sidePar) {
//     console.log(`Периметр равен ${2 * (osnovaniePar + sidePar)}`);
// }


// class Person {
//     _firstName;

//     get FullName() {
//         return `Имя ${this.firstName} Фамилия ${this.lastName}`;
//     }

//     get firstName() {
//         return this._firstName;
//     }
//     set firstName(value) {
//         this._firstName = value;
//     }
//     _lastName;
//     get lastName() {
//         return this._lastName;
//     }
//     set lastName(value) {
//         this._lastName = value;
//     }
//     _age;
//     get age() {
//         return this._age;
//     }
//     set age(value) {
//         this._age = value;
//     }

//     greeting() {
//         console.log(`Привет, я ${this.FullName}!`);
//     }

//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;

//     }
// }


// class Student extends Person {
//     _group;
//     get group() {
//         return this._group;
//     }
//     set group(value) {
//         this._group = value;
//     }
//     _teacher;
//     get teacher() {
//         return this._teacher;
//     }
//     set teacher(value) {
//         this._teacher = value;
//     }

//     constructor(firstName, lastName, age, group, teacher) {
//         super(firstName, lastName, age);
//         this.group = group;
//         this.teacher = teacher;
//     }


//     greeting() {
//         console.log(`Привет, я ${this.FullName}!`);
//     }
// }

// class Teacher extends Student {
//     _klass;
//     get klass() {
//         return this._klass;
//     }
//     set klass(value) {
//         this._klass = value;
//     }

//     constructor(firstName, lastName, age, group, teacher, klass) {
//         super(firstName, lastName, age, group, teacher);
//         this.klass = klass;
//     }

//     greeting() {
//         console.log(`Привет, я ${this.FullName}!`);
//     }
// }

// const person1 = new Person('Вася', 'Иванов', 20);
// const student1 = new Student('Mike', 'Petrov', 20, 'Math', 'Коля');
// const teacher1 = new Teacher('John', 'Sidorov', 20, 'Math', 'Коля', 'Программист');

// console.log(student1.teacher);
// console.log(person1.FullName);
// console.log(person1);
// console.log(student1);
// console.log(teacher1);

// console.log(person1.greeting());
// console.log(student1.greeting());
// console.log(teacher1.greeting());

// const peples = [person1, student1, teacher1];

// function all(persons) {
//     for (let i = 0; i < persons.length; i++) {
//         const person = persons[i];
//         person.greeting();

//     }

// }

// console.log(all(peples));