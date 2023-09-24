"use strict";

// function average(x, y) {
//   return (x + y) / 2;
// }

// let avg = average(50, 50);
// alert(avg);

// Функция для расчета стипендии.

function getScholarship(academicPerformance) {
  if (academicPerformance < 3.4) {
    return 0;
  }

  if (academicPerformance < 4) {
    return 5000;
  } else {
    return 7500;
  }
}

// Данные об успеваемости трёх студентов.
const ivanov = 4.5;
const petrov = 3.7;
const sidorov = 3.2;

// Расчет стипендии.

let scholarshipIvanov = getScholarship(ivanov);
let scholarshipPetrov = getScholarship(petrov);
let scholarshipSidarov = getScholarship(sidorov);
console.log(scholarshipIvanov);
console.log(scholarshipPetrov);
console.log(scholarshipSidarov);

// 7500 console.log(scholarshipPetrov);// 5000 console.log(scholarshipSidarov);// 0

function buy() {
  alert("Поздравляем!");
  alert("Вы нажали на кнопку купить");
}

function goRiddle() {
  function riddles(question, answer) {
    let userAnswer = prompt(question);
    userAnswer = userAnswer.toLocaleLowerCase();
    if (userAnswer === answer) {
      alert("Молодец, ответил верно");
    } else {
      alert("Не угадал");
    }
  }

  riddles("Не лает, не кусает, а в дом не пускает", "замок");
  riddles("Сто одёжек и все без застежек", "капуста");
}
