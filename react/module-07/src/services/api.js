import axios from 'axios';

export const fetchArticles = searchQuery => {
  return axios.get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
};

export const somethingFunc = () => {};
