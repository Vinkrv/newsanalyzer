import './pages/index.css';

import {inputForm , searchForm, buttonMore , buttonForm , resultList} from './js/constants.js';
import {formatDate , weekDate , preloader} from './js/utils.js';
import {NewsApi , DataStorage} from './js/modules.js';
import {NewsCard , NewsCardList , SearchInput} from './js/components.js';

//Функция-счетчик для выдачи карточек по 3 штуки
let cardCounter = -3;
function counter () {
  cardCounter  += 3
  return cardCounter ;
}

function cardsResultsRender (image, date,  title, text, source , link) {
  const newResultCard = new NewsCard(image, date,  title, text, source , link);
  return newResultCard.create();
};

const cardsList = new NewsCardList(resultList, cardsResultsRender , formatDate , counter);
let dayFrom = weekDate("from");
let dayTo = weekDate("to");

function inputCallback () {
  let apiNews = new NewsApi(inputForm.value , dayFrom , dayTo);
  apiNews.getNews()
  .then(res => {
    let newsStorage = new DataStorage('news' , res);
    newsStorage.setData();
    cardsList.render(newsStorage.getData().articles);
  })
  .catch(err => console.log(err))
  .finally (() => {
    preloader(false);
    buttonForm.removeAttribute("disabled");
    inputForm.removeAttribute("disabled");})
}

let inputSearch = new SearchInput(inputCallback);

//Слушатель кнопки "Искать"
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  buttonForm.setAttribute('disabled' , 'true');
  inputForm.setAttribute('disabled' , 'true');
  preloader(true);
  cardCounter = - 3;
  document.querySelector('.results-cards__container').innerHTML= '';
  document.querySelector('.results-cards__container').textContent= '';
  inputSearch.searchNews();
  let newsStorage = new DataStorage('input' , inputForm.value);
  newsStorage.setData();
  inputForm.value = newsStorage.getData();
});

//Слушатель кнопки "Показать ещё"
buttonMore.addEventListener('click', () => {
  cardsList.render((JSON.parse(localStorage.getItem('news'))).articles);
});

cardsList.render((JSON.parse(localStorage.getItem('news'))).articles);
inputForm.value = JSON.parse(localStorage.getItem('input'));
