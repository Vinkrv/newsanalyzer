import './pages/index.css';

import {formatDate , weekDate } from './js/utils.js';
import {NewsApi , DataStorage} from './js/modules.js';
import {NewsCard , NewsCardList , SearchInput} from './js/components.js';


const inputForm = document.querySelector('.search__form-input');
const searchForm = document.querySelector('.search__form');
const buttonMore = document.querySelector('.results-cards__button');

const resultList = document.querySelector('.results-cards__container');

function cardsResultsRender (image, date,  title, text, source , link) {
  const newResultCard = new NewsCard(image, date,  title, text, source , link);
  return newResultCard.create();
};

let cardCounter = -3;
function counter () {
  cardCounter  += 3
  return cardCounter ;
}

const cardsList = new NewsCardList(resultList, cardsResultsRender , formatDate , counter);

function inputCallback () {
  let apiNews = new NewsApi(inputForm.value , weekDate);
  apiNews.getNews()
  .then(res => {
    let newsStorage = new DataStorage('news' , res);
    newsStorage.setData();
    cardsList.render(newsStorage.getData().articles);
  })
  .catch(err => console.log(err));
}

let inputSearch = new SearchInput(inputCallback);

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  cardCounter = - 3;
  document.querySelector('.results-cards__container').innerHTML= '';
  document.querySelector('.results-cards__container').textContent= '';
  inputSearch.searchNews();
  let newsStorage = new DataStorage('input' , inputForm.value);
  newsStorage.setData();
  inputForm.value = newsStorage.getData();
});

buttonMore.addEventListener('click', () => {
  cardsList.render((JSON.parse(localStorage.getItem('news'))).articles);
});

cardsList.render((JSON.parse(localStorage.getItem('news'))).articles);
inputForm.value = JSON.parse(localStorage.getItem('input'));





