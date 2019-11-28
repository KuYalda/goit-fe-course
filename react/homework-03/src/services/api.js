import axios from 'axios';

export const fetchImages = (searchValue, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=14430375-fdc7eae3685172ff0386b04a1&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export const somethingFunc = () => {};
