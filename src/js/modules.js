export {GithubApi , DataStorage , NewsApi};

//Отвечает за взаимодействие с NewsAPI.
class NewsApi {
  constructor(request , from ,to) {
    this.request = request;
    this.from = from;
    this.to = to;
    this._initialRequest = this._initialRequest.bind(this);
  }

  getNews() {
    return fetch(`https://nomoreparties.co/news/v2/everything?q=${this.request}&from=${this.from}&to=${this.to}&pageSize=100&language=ru&apiKey=e2926f4d2833404a81bb771db94e5492`, {
    })
    .then(res => this._initialRequest(res))
  }

  getNewsStat() {
    return fetch(`https://nomoreparties.co/news/v2/everything?q=${this.request}&from=${this.from}&to=${this.to}&pageSize=100&language=ru&apiKey=e2926f4d2833404a81bb771db94e5492`, {
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

//GithubApi. Класс, аналогичный NewsApi, но отвечает за взаимодействие с Github.

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
