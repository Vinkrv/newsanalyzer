import {MONTHES} from './constants';
export {formatDate , weekDate};

//Вспомогательные функции не относятся к каким-то конкретным классам — это часть функциональности,
//которая может быть использована в разных местах.
// Например, это может быть функция форматирования даты или функция, работающая с массивом

//Функция, изменяющая формат даты с с сервера на макетный
function formatDate (date) {
  let desiredDate = new Date(date);
  return desiredDate.getDate() + " " + MONTHES[desiredDate.getMonth() + 1] + "," + " " + desiredDate.getFullYear();
}

//Функция, генерирующая дату сегодня и неделю назад, возрающая их объектом
function weekDate (date) {
  let today = new Date();
  let timeStamp = today.getTime();
  //518400000 - шесть дней в миллисекундах
  let timeStampWeek = new Date(timeStamp - 518400000);
  let weekObj = {};
  weekObj.from = timeStampWeek.getFullYear()+ '-' + (timeStampWeek.getMonth() + 1) + '-' + timeStampWeek.getDate();
  weekObj.to = today.getFullYear()+ '-' + (today.getMonth() + 1) + '-' + today.getDate();
  if (date == "from") {return weekObj.from}
  else if (date == "to") {return weekObj.to}
}

let test = new Date();
let test2 = test.getTime()

let test66 = new Date(test2 - 518400000)






let test5 = test66.getDate();
let test11 = test66.getDay();
let test12 = test66.getMonth();
let test13 = test66.getFullYear();

// console.log((test2/ 1000/ 60 / 60 / 24));
// console.log((test2/ 1000/ 60 / 60 / 24) - 6);

// let test4 = test2.getMonth();
// console.log(test4);



// let unix_timestamp = 1549312452
// // Create a new JavaScript Date object based on the timestamp
// // multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var date = new Date(unix_timestamp * 1000);
// // Hours part from the timestamp
// var hours = date.getHours();
// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();
// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();

// // Will display time in 10:30:23 format
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// console.log(formattedTime);
