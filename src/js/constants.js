export {GITURL , MONTHES , DAYS_OF_WEEK , ID_WEEK , MONTHES_STAT , resNegative , resCards , resultsSection , resLoader ,
  inputForm , searchForm, buttonMore , buttonForm , resultList, statTableMonth , analyticsTitle , analyticsTitles };

const resNegative = document.querySelector('.results-negative');
const resCards = document.querySelector('.results-cards');
const resultsSection = document.querySelector('.results');
const resLoader = document.querySelector('.results-load');
const inputForm = document.querySelector('.search__form-input');
const searchForm = document.querySelector('.search__form');
const buttonMore = document.querySelector('.results-cards__button');
const buttonForm = document.querySelector('.search__button');
const resultList = document.querySelector('.results-cards__container');
const statTableMonth = document.querySelector('.table__date');
const analyticsTitle = document.querySelector('.search-data__title');
const analyticsTitles = document.querySelector('.search-data__bold-titles');

const GITURL ={
  url: `https://api.github.com/repos/Vinkrv/newsanalyzer/commits?sha=level-1`
};

const MONTHES = {
  1: 'января',
  2: 'февраля',
  3: 'марта',
  4: 'апреля',
  5: 'мая',
  6: 'июня',
  7: 'июля',
  8: 'августа',
  9: 'сентября',
  10: 'октября',
  11: 'ноября',
  12: 'декабря'
}

const DAYS_OF_WEEK = {
  0: "вс",
  1: "пн",
  2: "вт",
  3: "ср",
  4: "чт",
  5: "пт",
  6: "сб",
}

const ID_WEEK = ["today" , "yesterday" , "2" , "3" , "4" , "5" , "6"]

const MONTHES_STAT = {
  1: 'январь',
  2: 'февраль',
  3: 'март',
  4: 'апрель',
  5: 'май',
  6: 'июнь',
  7: 'июль',
  8: 'август',
  9: 'сентябрь',
  10: 'октябрь',
  11: 'ноябрь',
  12: 'декабрь'
}
