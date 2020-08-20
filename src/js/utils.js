import {MONTHES , DAYS_OF_WEEK , MONTHES_STAT , resNegative , resCards , resultsSection , resLoader} from './constants';
export {formatDate , weekDate , weekEveryDay , preloader , dayOfWeek , formatDateMonth};

//Вспомогательные функции не относятся к каким-то конкретным классам — это часть функциональности

//Функция, изменяющая формат даты с с сервера на макетный
function formatDate (date) {
  let desiredDate = new Date(date);
  return desiredDate.getDate() + " " + MONTHES[desiredDate.getMonth() + 1] + "," + " " + desiredDate.getFullYear();
}

//Функция для отображения месяца в таблице на странице аналитики
function formatDateMonth () {
  let desiredDate = new Date();
  return MONTHES_STAT[desiredDate.getMonth() + 1];
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

//Функция, возвращающая дату в указанном формате для формирования запроса к API

function weekEveryDay (date) {
  function dateWeek (day) {
    let today = new Date();
    let timeStamp = today.getTime();
    //518400000 - шесть дней в миллисекундах
    let timeStampWeek = new Date(timeStamp - ((518400000 / 6) * day));
    let dayWeek = timeStampWeek.getFullYear()+ '-' + (timeStampWeek.getMonth() + 1) + '-' + timeStampWeek.getDate();
    let todayDate = today.getFullYear()+ '-' + (today.getMonth() + 1) + '-' + today.getDate();
    if (day == 'today') {
    return todayDate ;
    } else { return dayWeek}
  }
  if (date == "today") {
    return dateWeek ("today")
  } else if (date == "yesterday") {
    return dateWeek (1)
  } else if (date == "2") {
    return dateWeek (2)
  } else if (date == "3") {
    return dateWeek (3)
  } else if (date == "4") {
    return dateWeek (4)
  } else if (date == "5") {
    return dateWeek (5)
  } else if (date == "6") {
    return dateWeek (6)
  }
}

//Фукнкция, возвращающая число и день недели для таблицы аналитики
function dayOfWeek (date) {
  function dateOfWeek (day) {
    let today = new Date();
    let timeStamp = today.getTime();
    //518400000 - шесть дней в миллисекундах
    let timeStampWeek = new Date(timeStamp - ((518400000 / 6) * day));
    let dayWeek = timeStampWeek.getDate() + ','+ " " + DAYS_OF_WEEK[timeStampWeek.getDay()];
    let todayDate = today.getDate() + ','+ " " + DAYS_OF_WEEK[today.getDay()];
    if (day == 'today') {
    return todayDate ;
    } else { return dayWeek}
  }
  if (date == "today") {
    return dateOfWeek ("today")
  } else if (date == "yesterday") {
    return dateOfWeek (1)
  } else if (date == "2") {
    return dateOfWeek (2)
  } else if (date == "3") {
    return dateOfWeek (3)
  } else if (date == "4") {
    return dateOfWeek (4)
  } else if (date == "5") {
    return dateOfWeek (5)
  } else if (date == "6") {
    return dateOfWeek (6)
  }
}

//Лоадер
function preloader (boolean) {
  if (boolean == true) {
    resNegative.setAttribute('style' , 'display: none');
    resCards.setAttribute('style' , 'display: none');
    resultsSection.setAttribute('style' , 'display: block');
    resLoader.setAttribute('style' , 'display: block');
  } else if (boolean == false) {
    resLoader.setAttribute('style' , 'display: none');
  }
}
