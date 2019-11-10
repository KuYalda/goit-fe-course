export default {
  page: 1,
  value: '',
  refs: {
    baseUrl: 'https://pixabay.com/api/',
  },
  apiKey: '14230158-a797a4e0879f894d01e3b1f28',
  searchImg() {
    const urlParam = `?image_type=photo&orientation=horizontal&q=${this.value}&page=${this.page}&per_page=12&key=`;
    return fetch(this.refs.baseUrl + urlParam + this.apiKey).then(response =>
      response.json(),
    );
  },

  get searchValue() {
    return this.value;
  },

  set searchValue(text) {
    this.value = text;
  },

  incrementPage() {
    this.page += 1;
  },
};
