import {MONTHES} from './constants';
export {formatDate};

//Вспомогательные функции не относятся к каким-то конкретным классам — это часть функциональности,
//которая может быть использована в разных местах.
// Например, это может быть функция форматирования даты или функция, работающая с массивом


function formatDate (date) {
  let desiredDate = new Date(date);
  return desiredDate.getDate() + " " + MONTHES[desiredDate.getMonth() + 1] + "," + " " + desiredDate.getFullYear();
}
