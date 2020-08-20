import '../pages/analytics.css';
import {ID_WEEK , statTableMonth , analyticsTitle , analyticsTitles} from '../js/constants';
import {weekEveryDay , dayOfWeek , formatDateMonth} from '../js/utils.js';
import {NewsApi , DataStorage} from '../js/modules.js';
import {Statistics} from '../js/components.js';

statTableMonth.textContent = `Дата (${formatDateMonth()})`

//Счетчик упоминаний в заголовках
let titleCount = 0;
function counterTitles () {
  titleCount  += 1
  return titleCount ;
}

function changesTitles () {
  analyticsTitles.textContent = titleCount;
}

const statTitles = new Statistics (counterTitles);
function statRendering (day) {
let statDay = weekEveryDay(day)
const staApi = new NewsApi (JSON.parse(localStorage.getItem('input')) , statDay , statDay)
staApi.getNewsStat()
.then(res => {
  let statStorage = new DataStorage(day , res);
  statStorage.setData();

  statTitles.titlesCounter(statStorage.getData().articles, JSON.parse(localStorage.getItem('input')).toLowerCase());

  document.getElementById(`${day}-date`).textContent = dayOfWeek(day);
  document.getElementById(`${day}-line`).textContent = statStorage.getData().totalResults;
  document.getElementById(`${day}-line`).setAttribute('style' , `width: calc((100% - 104px) * (${statStorage.getData().totalResults} / 100))`);
})
.catch(err => console.log(err))
.finally (() => {
  changesTitles ()})
}

analyticsTitle.textContent = `Вы спросили: «${JSON.parse(localStorage.getItem('input'))}»`;
document.querySelector('.search-data__bold-weeks').textContent = JSON.parse(localStorage.getItem('news')).totalResults
const analyticsRender = new Statistics (statRendering);
analyticsRender.renderStatistic(ID_WEEK);
