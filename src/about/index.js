import '../pages/about.css';
import './blocks/swiper/swiper.js';
import {swiperLoad} from './blocks/swiper/swiper.js';

import '../js/constants.js';
import {GITURL} from '../js/constants.js';

import '../js/modules.js';
import {GithubApi} from '../js/modules.js';

import '../js/components.js';
import {CommitCard , CommitCardList} from '../js/components.js';

import '../js/utils.js';

const historyList = document.querySelector('.swiper-wrapper');

// historyList.appendChild(card);
function cardsHistoryRender (date, avatar, name, email, message) {
  const newHistoryCard = new CommitCard(date, avatar, name, email, message);
  return newHistoryCard.create();
};

const commitsList = new CommitCardList(historyList, cardsHistoryRender);

const GhApi = new GithubApi(GITURL);

GhApi.getCommits()
  .then(res => {
  // console.log(res);
  // localStorage.setItem('ghCommits', JSON.stringify(res));
  commitsList.render(res)
  swiperLoad ();
  })
  .catch(err => console.log(err));


// let cmts = JSON.parse(localStorage.ghCommits);

// function filterCommits (name) {
//   if (name === "Vinkrv") {
//     return false
//   } else {
//     return name;
//   }
// }

// cmts.forEach(card => {
//       console.log(filterCommits(card.commit.author.name));
// })

// commitsList.render(cmts);
// swiperLoad ();

// document.querySelector('.history-card__image').src = (cmts[0].committer.avatar_url);

// console.log( cmts );

// console.log(document.querySelector('.history-card__image').src);

// console.log( cmts[0].commit.author.name );



