import './styles.css';
import API from './js/fetchCountries';
import debounce from 'lodash.debounce';
import pnotify from 'pnotify/dist/es/PNotify';
import pnotifyStyle from 'pnotify/dist/es/PNotifyStyleMaterial';
import countryList from './templates/contry-list.hbs';
import countryInfo from './templates/country-info.hbs';

pnotify.defaults.styling = 'material';

const refs = {
  input: document.getElementById('user-data'),
  rezult: document.querySelector('.rezult'),
};

let userText;

refs.input.addEventListener(
  'input',
  debounce(() => {
    userText = refs.input.value;
    API.fetchCountries(`${API.baseUrl}/name/${userText}`)
      .then(data => {
        markupGenerator(data);
      })
      .catch(() => {
        refs.rezult.innerHTML = '';
        pnotify.closeAll();
      });
  }, 500),
);

function markupGenerator(arr) {
  let markUp;
  if (arr.length > 10) {
    refs.rezult.innerHTML = '';
    pnotify.error({
      title: 'Too many matches found!',
      text: 'Please enter a more specific query.',
      hide: false,
    });
    return;
  } else if (arr.length === 1) {
    pnotify.closeAll();
    const [country] = arr;
    markUp = countryInfo(country);
  } else if (arr.length === undefined) {
    refs.rezult.innerHTML = '';
    pnotify.closeAll();
    pnotify.error({
      title: 'Such a country does not exist!',
      text: 'Please try again',
      hide: false,
    });
    return;
  } else {
    pnotify.closeAll();
    markUp = countryList(arr);
  }
  refs.rezult.innerHTML = markUp;
}
