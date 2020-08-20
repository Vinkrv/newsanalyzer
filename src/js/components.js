export {CommitCard , CommitCardList , SearchInput , NewsCard , NewsCardList, Statistics}

//Класс карточки новости
class NewsCard {
  constructor(image, date,  title, text, source , link) {
    this.image = image;
    this.date = date;
    this.title = title;
    this.text = text;
    this.source = source;
    this.link = link;
    this.linkOpen = this.linkOpen.bind(this);
  }

  linkOpen() {
    window.open(this.link);
  }

  addListener() {
    this.cardPic.closest('.results-card').addEventListener('click', this.linkOpen);
  }

  create() {

    const cardOne = `
    <div class="results-card">
    <img class="results-card__image">
    <div class="results-card__description">
      <p class="results-card__date"></p>
      <h3 class="results-card__title"></h3>
      <p class="results-card__text"></p>
      <p class="results-card__source"></p>
    </div>
  </div>
          `;


    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', cardOne);

    const newCard = element;
    const cardImage = newCard.querySelector('.results-card__image');

    newCard.querySelector('.results-card__date').textContent = this.date;
    newCard.querySelector('.results-card__title').textContent = this.title;
    newCard.querySelector('.results-card__text').textContent = this.text;
    newCard.querySelector('.results-card__source').textContent = this.source;

    this.card = newCard;
    this.cardPic = this.card.querySelector('.results-card__image');
    cardImage.src = this.image;
    if (cardImage.src.includes(null)) {
      cardImage.src= '';
    };

    this.addListener();
    return element.firstElementChild;
  };
}

//Класс карточки коммита
class CommitCard {
  constructor(date, avatar, name, email, message) {
    this.date = date;
    this.avatar = avatar;
    this.name = name;
    this.email = email;
    this.message = message;
  }

  create() {
    const cardOne = `
    <div class="swiper-slide">
    <p class="history-card__date"></p>
    <div class="history-card__info">
      <img class="history-card__image"
        alt="аватар пользователя">
      <div class="history-card__user-data">
        <h3 class="history-card__name"></h3>
        <p class="history-card__email"></p>
      </div>
    </div>
    <p class="history-card__text"></p>
  </div>
          `;

    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', cardOne);

    const newCard = element;
    const cardImage = newCard.querySelector('.history-card__image');

    newCard.querySelector('.history-card__date').textContent = this.date;
    newCard.querySelector('.history-card__name').textContent = this.name;
    newCard.querySelector('.history-card__email').textContent = this.email;
    newCard.querySelector('.history-card__text').textContent = this.message;

    cardImage.src = this.avatar;

    this.card = newCard;

    return element.firstElementChild;
  };
}

//Класс списка карточек новостей

class NewsCardList {

  constructor(container, renderingCallback , dateFunc , counter) {

      this.container = container;
      this.renderingCallback = renderingCallback;
      this.dateFunc = dateFunc;
      this.counter = counter;
  }

  //addCard для добавления карточки в список, принимает на вход экземпляр карточки;

  addCard(image, date,  title, text, source , link){
      const card = this.renderingCallback(image, date,  title, text, source , link);
      this.container.appendChild(card);

 }

  //render для отрисовки карточек
  render(initial) {
    let count = this.counter();
    if (initial.length === 0) {
      this.container.closest('.results').querySelector('.results-negative').setAttribute('style' , 'display: block');
      this.container.closest('.results').setAttribute('style' , 'display: block');
      this.container.closest('.results-cards').setAttribute('style' , 'display: none');
    } else {
      for (let i = count; i < count + 3; i += 1) {
        this.addCard(initial[i].urlToImage , this.dateFunc(initial[i].publishedAt) , initial[i].title , initial[i].description , initial[i].source.name , initial[i].url);
        };
      this.container.closest('.results').querySelector('.results-negative').setAttribute('style' , 'display: none');
      this.container.closest('.results-cards').setAttribute('style' , 'display: block');
      this.container.closest('.results').setAttribute('style' , 'display: block');}
  }

};

//Класс списка карточек коммитов на странице «О проекте»

class CommitCardList {

  constructor(container, renderingCallback , dateFunc) {

      this.container = container;
      this.renderingCallback = renderingCallback;
      this.dateFunc = dateFunc;
  }

  //addCard для добавления карточки в список, принимает на вход экземпляр карточки;

  addCard(date, avatar, name, email, message){
      const card = this.renderingCallback(date, avatar, name, email, message);
      this.container.appendChild(card);

 }

  //render для отрисовки карточек
  render(initial) {
      initial.forEach(card => {
          this.addCard(this.dateFunc(card.commit.committer.date) , card.committer.avatar_url , card.commit.committer.name , card.commit.committer.email , card.commit.message);
        })
  }

};

class SearchInput {
  constructor(formCallback) {
    this.formCallback = formCallback;
}

  searchNews () {
    return this.formCallback();
  }
}

//Класс, отвечающий за логику работы графиков со статистикой на странице аналитики.

class Statistics {
  constructor(renderCallback) {
    this.renderCallback  = renderCallback;
}
  renderStatistic(arrId) {
    arrId.forEach(id => {
      this.renderCallback(id);
    })
  }

  titlesCounter(arr , input) {
    arr.forEach(item => {
      if (item.title.toLowerCase().includes(input)) {
       this.renderCallback();
      }
    })
  }

}
