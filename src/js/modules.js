export {GithubApi , DataStorage};

//Отвечает за взаимодействие с NewsAPI.
//У класса есть конструктор, принимающий опции и единственный обязательный метод getNews.
//getNews возвращает список новостей на основе запроса.

class NewsApi {

}

//GithubApi. Класс, аналогичный NewsApi, но отвечает за взаимодействие с Github.
//Вместо метода getNews у этого класса метод getCommits.

class GithubApi {
  constructor(config) {
    this.url = config.url;
    this._initialRequest = this._initialRequest.bind(this);
  }

  getCommits() {
    return fetch(`${this.url}`, {
    })
    .then(res => this._initialRequest(res))
  }

  _initialRequest(res) {
    if (res.ok) {
      return res.json();
    }
      return Promise.reject(`Ошибка: ${res.status}`);
  }


}

// Класс DataStorage предоставляет интерфейс для работы с локальным хранилищем браузера

class DataStorage {
  constructor(key , value) {
    this.key = key;
    this.value = value;
  }

  setData() {
    localStorage.setItem(this.key, JSON.stringify(this.value));
  }

  getData () {
    let jsonData = localStorage.getItem(this.key)
    return JSON.parse(jsonData);
  }
}
