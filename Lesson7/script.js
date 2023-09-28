"use strict";

// const number = +prompt("Enter number");
// let i = 1;

// while (i <= number) {
//   console.log(i++);
// }

// let pass;
// do {
//   pass = Number(prompt("Введите пароль в числовом формате"));
// } while (pass !== 123);

// const number = Number(prompt("Введите значение N"));
// for (let i = 1; i <= number; i++) {
//   console.log(i);
// }

// const students = [];
// students.push("Alex");
// students.push("Ivan");
// students.push("Oleg");

// console.log(students);

// const users = [];

// users.push(prompt("name"));
// users.push(Number.parseInt(prompt("Age")));

// console.log(users);

// const students = ["Иванов", "Петров", "Сидоров"];
// console.log(students);
// const firstStudent = students.shift();
// console.log(firstStudent);
// console.log(students);

// Массивы всегда называются множественным числом, т.к. массив хранит список чего-либо.

const students = ["Ivanov", "Petrov", "Sidorov"];
const studentsPraticeTimes = [20, 135, 87];
// Воспользуемся циклом, чтобы сложить время практики каждого студента. Пока у нас только три студента, цикл выглядит страшнее, чем просто сложения отдельных переменных, но когда у нас будет 30 студентов, обрабатывать их в цикле будет намного проще, чем писать 30 переменных вручную и не запутаться в них. Тут же в цикле мы можем выводить информацию по каждому студенту.
let fullPracticeTime = 0;
for (let index = 0; index < students.length; index++) {
  fullPracticeTime = fullPracticeTime + studentsPraticeTimes[index];
  console.log(
    students[index],
    " - practice time:",
    studentsPraticeTimes[index]
  );
} // Ivanov  - practice time:  20 // Petrov  - practice time:  135 // Sidorov  - practice time:  87
console.log("Full practice time: ", fullPracticeTime); // Full practice time:  242
