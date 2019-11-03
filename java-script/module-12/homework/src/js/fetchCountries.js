export default {
  baseUrl: 'https://restcountries.eu/rest/v2',
  fetchCountries(url) {
    return fetch(url).then(resp => resp.json());
  },
};
