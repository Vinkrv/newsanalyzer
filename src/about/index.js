import '../pages/about.css';
import './blocks/swiper/swiper.js';
import {swiperLoad} from './blocks/swiper/swiper.js';
import {GITURL} from '../js/constants.js';
import {formatDate} from '../js/utils.js';
import {GithubApi , DataStorage} from '../js/modules.js';
import {CommitCard , CommitCardList} from '../js/components.js';

const historyList = document.querySelector('.swiper-wrapper');

function cardsHistoryRender (date, avatar, name, email, message) {
  const newHistoryCard = new CommitCard(date, avatar, name, email, message);
  return newHistoryCard.create();
};

const commitsList = new CommitCardList(historyList, cardsHistoryRender , formatDate);
const GhApi = new GithubApi(GITURL);

GhApi.getCommits()
  .then(res => {

  let GhStorage = new DataStorage('ghCommits' , res);
  GhStorage.setData();
  commitsList.render(GhStorage.getData());
  swiperLoad ();
  })
  .catch(err => console.log(err));


