'use strict';



// const divElement = document.querySelector('.content');
// console.log(divElement);
// const paragraphElement = document.createElement('p');
// paragraphElement.textContent = 'Hello World!';
// divElement.appendChild(paragraphElement);
// paragraphElement.setAttribute('class', 'heading');
// paragraphElement.setAttribute('data-time', 10);
// // console.log(paragraphElement.getAttribute('data-time'));
// console.log(paragraphElement.dataset.time);

const menuEl = document.querySelector('.menu');
// console.log(menuEl);
const liEl = document.querySelector('.menu__list');
const liElOne = document.querySelector('.menu__list');
// console.log(liElOne.parentNode.children);

// menuEl.childNodes.forEach(element => {
//     console.log(element);
// });

// console.log(menuEl.lastChild);
console.log(menuEl.lastElementChild);
// console.log(liEl.lastChild);
console.log(liEl.lastElementChild);
console.log(liEl.parentElement.firstElementChild);
console.log(liEl.nextElementSibling);





// const studentsGroup1PracticeTime = [
//     {
//         firstName: "Ivanov",
//         practiceTime: 56
//     },
//     {
//         firstName: "Petrov",
//         practiceTime: 120
//     },
//     {
//         firstName: "Sidorov",
//         practiceTime: 148
//     },
//     {
//         firstName: "Belkin",
//         practiceTime: 20
//     },
//     {
//         firstName: "Avdeev",
//         practiceTime: 160
//     }];

// const studentsGroup2PracticeTime = [
//     {
//         firstName: "Mankov",
//         practiceTime: 87
//     },
//     {
//         firstName: "Kistin",
//         practiceTime: 133
//     },
//     {
//         firstName: "Kotlyarov",
//         practiceTime: 140
//     },
//     {
//         firstName: "Peskov",
//         practiceTime: 10
//     },
// ];

// // Напишем не очень удобную, но показательную функцию, которая умеет принимать неограниченное число аргументов и находить максимум среди них. Функция должна вызываться подобным образом:
// const maximum = findMax(4, 7, 10);
// function findMax() {
//     const values = arguments;
//     // arguments — переменная,которая доступна внутри каждой функции и содержит в себе все аргументы, переданные в функцию. Является псевдомассивом.
//     let maxValue = -Infinity; // Поскольку arguments является псевдомассивом,мы не можем применять к нему новые методы массивов, такие как forEach или reduce, а будем итерировать по старинке.
//     for (let index = 0; index < values.length; index++) { if (values[index] > maxValue) maxValue = values[index]; }
//     return maxValue;
// }; // Мы должны передавать в функции только числа, а в наших массивах содержатся объекты, поэтому сначала создадим массивы только со значениями времени, отработанного студентами.
// const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime);
// const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime);

// // Теперь можем вызывать функцию поиска максимального значения. Она принимает множество числовых аргументов, а у нас есть только массив — тут нам и поможет оператор spread.
// const maxTimeFromGroup1 = findMax(...group1PracticeTime);// ...group1PracticeTime вытянет из массива все элементы и передаст их в функцию как отдельные переменные. // Это аналогично страшной и неудобной записи: // findMax(group1PracticeTime[0], group1PracticeTime[1], group1PracticeTime[2], group1PracticeTime[3], group1PracticeTime[4]) console.log(maxTimeFromGroup1);// 160
// const maxTimeFromGroup2 = findMax(...group2PracticeTime);
// console.log(maxTimeFromGroup2);// 140// Давайте также найдём максимально отработанное время среди двух групп. Мы можем сделать это, передав данные обоих массивов в функцию таким образом: //
// findMax(...group1PracticeTime, ...group2PracticeTime); // А можем объединить два массива в один — это очень частая операция, и оператор расширения (spread) очень в этом помогает.
// const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime]; // Для объединения двух массивов нам нужно вытащить их элементы в один общий массив, поэтому мы объявляем новый массив, а в качестве его элементов делаем расширение элементов первого и второго массива. Также мы могли бы добавить в него и другие элементы.
// const maxTimeBothGroups = findMax(...bothGroupsTime);
// console.log(maxTimeBothGroups);// 160

// // Напишем не очень удобную, но показательную функцию, которая умеет принимать неограниченное число аргументов и находить максимум среди них. Функция должна вызываться примерно следующим образом:
// const maximum = findMax(4, 7, 10);
// functionfindMax(...values){ // тут мы принимаемвсе переданные аргументы и с помощью rest-оператора упаковываем их в массив values. // На этот раз values — уже настоящий массив, и мы можем использовать reduce для итерации по нему и для нахождения максимального числа.
//     return values.reduce((acc, value) => { if (value > acc) return value; return acc; }, -Infinity);
// };
// // Создадим массивы только со значениями времени, отработанного студентами.
// const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime);
// const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime); // Вызовем нашу функцию поиска максимума, используя оператор spread.
// const maxTimeFromGroup1 = findMax(...group1PracticeTime);
// console.log(maxTimeFromGroup1);// 160
// const maxTimeFromGroup2 = findMax(...group2PracticeTime);
// console.log(maxTimeFromGroup2);// 140 // Давайте также найдём максимально отработанное время среди двух групп.
// const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
// const maxTimeBothGroups = findMax(...bothGroupsTime);
// console.log(maxTimeBothGroups);// 160

// const saveFullNameInDB = (firstName, lastName, ...additionals) => {
//     saveFirstName(firstName);
//     saveLastName(lastName);
//     saveAdditionals(additionals);// Благодаря restоператору мы смогли собрать все дополнительные данные, которые были переданы для сохранения в базе данных, и можем передать их одним массивом в функцию сохранения дополнительных данных.
// }

// const divElement = document.querySelector('.content');
// console.log(divElement.childNodes.length)// 7
// console.log(divElement.children.length)// 3

// Array.from(divElement.childNodes).forEach((childNode) => {
//     console.log('childNode "%s" типа "%d"', childNode.nodeName, childNode.nodeType)
// });

// [...divElement.children].forEach((child) => {
//     console.log('child "%s" типа "%d"', child.nodeName, child.nodeType)
// });