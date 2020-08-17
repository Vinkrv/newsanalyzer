export {CommitCard , CommitCardList}

//Класс карточки новости

class NewsCard {

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
    // const cardOne = `
    // <div class="place-card">
    // <div class="place-card__image">
    //   <button class="place-card__delete-icon"></button>
    // </div>
    // <div class="place-card__description">
    //   <h3 class="place-card__name"></h3>
    //   <button class="place-card__like-icon"></button>
    // </div>
    // </div>
    // `;
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

}

//Класс списка карточек коммитов на странице «О проекте»

class CommitCardList {

  constructor(container, renderingCallback) {

      this.container = container;
      this.renderingCallback = renderingCallback;

  }

  //addCard для добавления карточки в список, принимает на вход экземпляр карточки;

  addCard(date, avatar, name, email, message){
      const card = this.renderingCallback(date, avatar, name, email, message);
      this.container.appendChild(card);

 }

  //render для отрисовки карточек при загрузке страницы.
  render(initial) {
      initial.forEach(card => {
          this.addCard(card.commit.committer.date , card.committer.avatar_url , card.commit.committer.name , card.commit.committer.email , card.commit.message);
        })
  }

};

//Конструктор класса принимает колбэк-функцию, исполняемую при сабмите формы поиска.
//В колбэк-функции описывается взаимодействие с API, списком карточек и локальным браузерным хранилищем.
//Полученные от NewsAPI данные должны приводить к обновлению хранилища,
//а список карточек отображать полученные данные на странице.
//Кроме этого у класса SearchInput должны быть методы для валидации формы поиска и методы,
//управляющие работой кнопки сабмита.

class SearchInput {

}

//Класс, отвечающий за логику работы графиков со статистикой на странице аналитики.
//Конструктор класса получает объект, содержащий текущее состояние локального браузерного хранилища.

class Statistics {

}
