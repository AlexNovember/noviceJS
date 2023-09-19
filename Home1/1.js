"use strict";

let degreesCelsius = prompt('Введите температуру °C :', ['Введите цифры']);
degreesCelsius = degreesCelsius.replace(/[^0-9]/g,""); //если случайно не убрали надпись введите цифры, оставляем только цифры
// let degreesFahrenheit = ((9 / 5) * degreesCelsius + 32).toFixed(1); /знак после запятой
let degreesFahrenheit = Math.round((9 / 5) * degreesCelsius + 32);
alert(`Цельсий: {C}: ${degreesCelsius},` + `  ` + `Фаренгейт: {F}: ${degreesFahrenheit}`);