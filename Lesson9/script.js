// const product = {
//     name: 'Стол',
//     price: 200,
//     count: 2,
//     userRegister: false,
//     reg: function () {
//         this.userRegister = true
//     },
//     countProduct: function () {
//         if (this.count > 0) {
//             console.log("Вы можете купить данный товар");
//         } else {
//             console.log('Товар закончился');
//         }
//     },
//     byProduct: function () {
//         if (this.userRegister) {
//             console.log('Товар в корзине');
//         } else {
//             console.log('Вам нужно авторизоваться');
//         }
//     }
// }


// product.byProduct();
// product.reg();
// product.byProduct();

// const productNew = {
//     productImg: 'photo.jpg',
//     productText: 'Great table'
// }

// console.log(productNew);

// for (const key in productNew) {
//     console.log(productNew[key]);
// }

// console.log(Object.keys(productNew));
// console.log(Object.values(productNew));

// console.log(product);

// productNew.productLink = 'html'
// console.log(productNew);

// productNew.productLink = 'aabbbb'
// console.log(productNew);

// let text = productNew.productLink;
// console.log(text);

// delete productNew.productLink;
// console.log(productNew);

// const car = {
//     make: "Audi",
//     model: "A5",
//     year: 2023,
//     color: "red",
//     passengers: 2,
//     power: 249,
//     odometer: 0,
// };
// console.log('Все ключи объекта car');

// for (const key in car) {
//     console.log(key);
// }
// console.log('Все значения объекта car');

// for (const key in car) {
//     console.log(car[key]);
// }



// const group1 = {
//     "Ivanov":
//     {
//         practicePlace: "ldu-1",
//         practiceTime: 56
//     },
//     "Petrov":
//     {
//         practicePlace: "kamaz",
//         practiceTime: 120
//     },
//     "Sidorov":
//     {
//         practicePlace: "ldu-1",
//         practiceTime: 148
//     },
//     "Belkin":
//     {
//         practicePlace: "GosDZU",
//         practiceTime: 20
//     },
//     "Avdeev":
//     {
//         practicePlace: "LPK",
//         practiceTime: 160
//     }
// }

// const group1Students = Object.keys(group1);
// console.log(group1Students);
// console.log(Object.entries(group1));

const studentsPracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    }, {
        firstName: "Avdeev",
        practiceTime: 160
    }]; // Мы хотим вывести в таблицу студентов и информацию для каждого, прошел ли он практику уже. Практика будет считаться пройденной, если студент отработал 120 часов или больше. 
const dataForTable = studentsPracticeTime.map((student) => {
    if (student.practiceTime < 120) {
        return {// Мы возвращаем новый объект, болееудобный для вывода. 
            Student: student.firstName, Practice: "Not passed"
        };
    } else {
        return { Student: student.firstName, Practice: "Passed" };
    }
});
console.table(dataForTable);

const studentsPassedPractice = studentsPracticeTime.filter((student) => {
    if (student.practiceTime < 120)
        return false
    return true
});
console.log(studentsPassedPractice);

// Посчитаем сколько всего часов практики отработали студенты. 
let totalTime = 0;// Объявим переменную для хранениясуммы всех часов. 
for (let index = 0; index < studentsPracticeTime.length; index++) {
    totalTime = totalTime + studentsPracticeTime[index].practiceTime;
}

console.log(totalTime);// 504

// Посчитаем сколько всего часов практики отработали студенты. 
const totalTime2 = studentsPracticeTime.reduce((acc, student) => {// Первое значение - это функция обратного вызова, которая будет получать значение аккумулятора (acc) при каждой итерации; и текущий элемент массива (student). 
    return acc + student.practiceTime;
}, 0);// Второй аргумент - это первоначальное значение аккумулятора - 0.

console.log(totalTime2);// 504


// Проверим, есть ли хоть один студент, которыйпрошел практику. 
const isSomebodyPassedPractice = studentsPracticeTime.some((student) => {
    console.log(student.firstName);// Добавим выводстудента, чтобы посмотреть сколько элементов массива будет проитерированно. 
    return student.practiceTime >= 120;
}); // "Ivanov"// "Petrov" - итерации остановились на втором элементе массива, т.к. он удовлетворяет нашему условию и метод some дальше итерации не выполняет. 
console.log(isSomebodyPassedPractice);// true -среди студентов есть те, кто прошел практику.

// Мы хотим найти студента Belkin и посмотреть скольковремени он отработал на практике. 
const studentBelkin = studentsPracticeTime.find((student) => { return student.firstName === "Belkin"; });
console.log(studentBelkin.practiceTime);// 20


const array = [1, 2, 4, 7, 9, 15];
console.log(array);

const arrayMap = array.map(item => item * 2);
console.log(arrayMap);

const arrayFilter = array.filter(item => item >= 10);
console.log(arrayFilter);

const arraySome = array.some(item => item >= 10);
console.log(arraySome);

let arrayReduce = array.reduce((acc, el) => acc + el);
console.log(arrayReduce / array.length);



// Не очень удобно. Деструктуризация дала нам гораздо более простой и удобный синтаксис: // Сбор данных из объекта. 
const student = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 21,
};
// const { firstName, lastName, age } = student;
// Деструктуризация-  мы объявляем все переменные в фигурных скобках, название должно совпадать с нужным нам параметром.

// Сбор данных из массива.
// const students = ["Ivanov", "Petrov", "Belkin"];
// const [student1, student2, student3] = students;
//Деструктуризация - Тут мы указываем имена переменных в квадратных скобках, и в них по порядку будут записаны элементы массива.

// Теперьмыможемобъявлятьвсенужныенампеременныеводномместеиполучатьданныеиз объектов или массивов одной строкой. Деструктуризация также позволяет задавать значения по умолчанию для переменных, на случай если в объекте не окажется такого ключа, который мы запрашиваем, или в массиве в элементе окажется undefined значение. Также при деструктуризации объекта можно переименовать переменные в которые будут сохраняться ключи, если мы например не хотим или не можем использовать переменную с таким же именем как и ключ:
// Сбор данных из объекта.
// const student = {
//     firstName: "Ivan",
//     lastName: "Petrov",
//     age: 21,
// };
// Деструктурируем значение ключа firstName в переменную studentName. И зададим для возраста значение по умолчанию, равное 20.
// const { firstName: studentName, lastName, age = 20 } = student; // Сбор данных из массива.
// const students = ["Ivanov", "Petrov", "Belkin"];
// const [student1, student2, student3] = students;
//Тут мы указываем имена переменных в квадратных скобках, и в них по порядку будут записаны элементы массива.