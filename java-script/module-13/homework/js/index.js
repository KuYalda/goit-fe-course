import API from './api.js';

const refs = {
  input: document.querySelector('input[name="query"]'),
  itemList: document.querySelector('.gallery'),
  loadMore: document.querySelector('button[type="submit"]'),
};

refs.input.addEventListener('input', handlerInput);

function handlerInput() {
  if (refs.input.value.length >= 3) {
    let finishMarkUp = '';
    setTimeout(() => {
      API.searchValue = refs.input.value;
      API.searchImg().then(arr => {
        API.incrementPage();
        arr.hits.forEach(obj => {
          finishMarkUp += markUpGenerator(obj);
          return finishMarkUp;
        });
        refs.itemList.innerHTML = finishMarkUp;
      });
    }, 1000);
    refs.loadMore.addEventListener('click', loadMoreBtn);
  } else {
    refs.loadMore.removeEventListener('click', loadMoreBtn);
    refs.itemList.innerHTML = '';
  }
}

function markUpGenerator(obj) {
  const markUp = `
  <li>
    <div class="photo-card">
    <img src='${obj.webformatURL}' alt='${obj.type}' width='500' height='300'/>

      <div class="stats">
        <p class="stats-item">
        <i class="material-icons">thumb_up</i>${obj.likes}
        </p>
        <p class="stats-item">
        <i class="material-icons">visibility</i>${obj.views}
        </p>
        <p class="stats-item">
        <i class="material-icons">comment</i>${obj.comments}
        </p>
        <p class="stats-item">
        <i class="material-icons">cloud_download</i>${obj.downloads}
        </p>
      </div>
    </div>
  </li>  
  `;
  return markUp;
}

function loadMoreBtn() {
  let finishMarkUp = '';
  API.searchImg().then(arr => {
    API.incrementPage();
    arr.hits.forEach(obj => {
      finishMarkUp += markUpGenerator(obj);
      return finishMarkUp;
    });
    const y = refs.loadMore.offsetTop;
    refs.itemList.insertAdjacentHTML('beforeend', finishMarkUp);
    window.scrollTo(0, y);
  });
}
