"use strict";

// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
// 2. Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// 4. Удалите свойство surname

// const daysOfTheWeek = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье',
// }

// console.log(daysOfTheWeek[2]);


// const user = {
//     name: 'Alex',
//     surname: "Ivanov",
//     age: 26
// }

// console.log(`${user.name} - ${user.surname} - ${user.age}`);

// const user = {
//     name: 'Alex',
//     surname: "Ivanov",
//     age: 26
// }
// user.secondName = prompt('Enter sName');
// console.log(user);

// delete user.surname;
// console.log(user);


// 1. Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами: const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; const arr2 = [1, 2, 3, 4, 5, 6, 7]; С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
// 1. const obj = {x: 1, y: 2, z: 3}; Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// const dasOfWeek = {};
// for (let i = 0; i < arr2.length; i++) {
//     daysOfWeek[arr2[i]] = arr1[i];
// }
// console.log(dayOfWeek);

// const obj = { x: 1, y: 2, z: 3 }

// for (const key in obj) {
//     obj[key] = obj[key] ** 2;
// }
// console.log(obj);


// Найдите сумму элементов приведенного объекта.
// const obj = {
//     key1: { key1: 1, key2: 2, key3: 3, },
//     key2: { key1: 4, key2: 5, key3: 6, },
//     key3: { key1: 7, key2: 8, key3: 9, },
// }

// const arrayReduce = Object.values(obj);
// console.log(arrayReduce.reduce((acc, el) => acc + sum((el), 0)));

// const sum = Object.values(obj).reduce((acc, val) => {
//     acc += val;
//     return acc;
// }, 0);
// console.log(sum);

// const sum = val =>
//     val instanceof Object
//         ? Object.values(val).reduce((acc, n) => acc + sum(n), 0)
//         : val;
// console.log(sum(obj));

// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил неверно

// const riddles = {
//     question: function name(params) {

//     }
//     answer: 'Да', 'Нет'

// }


const riddles = {
    question: 'Зимой и летом одним цветом',
    answer: 'елка',
    clue1: 'Растет в лесу',
    clue2: 'Наряжают на Новый Год',
    askQuestion: function (count = 3) {
        do {
            if (count === 3) {
                alert('Угадайте загадку.У Вас есть 2 подсказки')
            } if (count === 2) {
                alert(`Подсказка 1: ${this.clue1}`);
            } if (count === 1) {
                alert(`Подсказка 2: ${this.clue2}`);
            }

            const userAnswer = toString(prompt(this.question));
            if (userAnswer.toLowerCase() === this.answer) {
                return alert('Верно');

            } else {
                alert('Не угадали');
                count--;
            }
        } while (count > 0) {
            alert(`Это была ${this.answer.toUpperCase()}`);
        }
    }
}

riddles.askQuestion();
