'use strict';

// Создайте объект Person, представляющий человека, с следующими свойствами: name, age и gender. Добавьте также методы introduce и changeName. Метод introduce должен выводить информацию о человеке, включая его имя, возраст и пол. Метод changeName должен изменять имя человека на новое заданное значение. Person.name = "John"; Person.age = 25; Person.gender = "male"; Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male. Person.changeName("Mike");

const Person = {
    name: "John",
    age: 25,
    gender: "male",

    introduce: function () {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`
        );
    },

    changeName: function (name) {
        this.name = name;
    }
};


Person.introduce();
Person.changeName("Mike");
Person.introduce();


// Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест. Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о том, что собака лает. Используйте одалживание метода eat() из объекта Animal для объекта Dog, чтобы вывести сообщение о том, что собака ест. 
// Одалживание метода eat() из объекта Animal к объекту Dog Dog.eat = Animal.eat; Dog.eat(); // Вывод: Rex is eating.

const Animal = {

    eat: function () {
        console.log(`${this.name} ест`);
    }
}

const Dog = {
    name: "Rex",

    bark: function () {
        console.log(`${this.name} лает`);
    }
}

Animal.eat();
Dog.bark();

Dog.eat = Animal.eat;
Dog.eat();


// Создайте объект calculator с методами add(), subtract() и multiply(), которые выполняют соответствующие математические операции над двумя числами. Используйте методы call и apply для вызова этих методов с передачей аргументов. console.log(calculator.add.call(null, 5, 3)); 
// Вывод: 8 console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const calculator = {
    add: function (a, b) {
        return a + b;
    },

    subtract: function (a, b) {
        return a - b;
    },

    multiply: function (a, b) {
        return a * b;
    }
}

console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtract.apply(null, [5, 3]));
console.log(calculator.multiply.call(null, 5, 3));


// Создайте класс Person, который имеет свойства name и age, а также метод introduce(), который выводит сообщение с представлением имени и возраста персоны. const person = new Person("John", 25); person.introduce(); 
// Вывод: My name is John and I'm 25 years old.

class Person1 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.introduce = this.introduce.bind(this);
    }

    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
    };
}

const person = new Person1("John", 25);
person.introduce();


// Создайте класс BankAccount, который представляет банковский счет. У него должны быть свойства accountNumber (номер счета) и balance (баланс), а также методы deposit(amount) для пополнения счета и withdraw(amount) для снятия денег со счета. Класс должен иметь также статическое свойство bankName, которое содержит название банка. const account1 = new BankAccount("1234567890", 1000); account1.deposit(500); 
// Вывод: Deposited 500 into account 1234567890. New balance: 1500 account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300 account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890

class BankAccount {
    bankName = 'Sber';

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (this.balance < amount) {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        }
    }
};


const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500);
account1.withdraw(1300);
console.log(account1.balance);
const account2 = new BankAccount("1234567891", 1000);
console.log(account2.balance);


