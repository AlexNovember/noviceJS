"use strict";

/*
Необходимо пользователя попросить ввести температуру в градусах Цельсия,
преобразовать введенное пользователем значение в соответствующую температуру
в градусах по Фаренгейту и вывести в alert сообщение с таким текстом:
"Цельсий: {C}, Фаренгейт: {F}"
Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

Уточнение: пользователь всегда вводит корректное число.
*/

const degreesCelsius = prompt('Введите температуру °C :', 'Введите цифры');
const degreesCelsiusEdit = degreesCelsius.replace(/[^\d.]/ig, ''); //если случайно не убрали надпись введите цифры, оставляем только цифры
const degreesFahrenheit = ((9 / 5) * degreesCelsiusEdit + 32);
// let degreesFahrenheit = Math.round((9 / 5) * degreesCelsius + 32);
alert(`Цельсий: {C}: ${degreesCelsiusEdit}  Фаренгейт: {F}: ${(degreesFahrenheit).toFixed(1) * 10 / 10}`);