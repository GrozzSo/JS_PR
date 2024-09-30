"use strict";

let name = prompt('Введите вашу Фамилию');
let surname = prompt('Введите вашу Имя');
let fathername = prompt('Введите вашу Отчество');
let confirmation = confirm(`Данные верны? Вы ${name}, ${surname}, ${fathername}`)
alert (confirmation);