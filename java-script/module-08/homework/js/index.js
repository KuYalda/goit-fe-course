'use strict'

import gallery from './gallery-items.js';
// console.log(gallery);

const galleryBox = document.querySelector('.gallery');

function createGallery(arrImage) {
  const gallery = arrImage.reduce((acc, {preview, original, description}) => {
    const li =`
    <li class="gallery__item">
      <a
        class="gallery__link"
      >
        <img
          class="gallery__image"
          src='${preview}'
          data-source='${original}'
          alt='${description}'
        />
        <span class="gallery__icon">
          <i class="material-icons">zoom_out_map</i>
        </span>
      </a>
    </li>
    `;
    return acc += li;
  },'')
  galleryBox.insertAdjacentHTML('beforeend', gallery)
}

createGallery(gallery);

const modalLightbox = document.querySelector('.lightbox');
const modalImg = document.querySelector('.lightbox___image');

galleryBox.addEventListener('click', (e) => {
  if(e.target.nodeName === 'IMG') {
    modalLightbox.classList.add('is-open');
    modalImg.setAttribute('src', e.target.dataset.source);
    modalImg.setAttribute('alt', e.target.getAttribute('alt'));
  }

  window.addEventListener('keydown', (e) => {
    if(e.keyCode === 27) {
      modalLightbox.classList.remove('is-open');
      modalImg.setAttribute('src', '');
      modalImg.setAttribute('alt', '');
      }
  })
});

modalLightbox.addEventListener('click', (e) => {
  if(e.target !== modalImg) {
    modalLightbox.classList.remove('is-open');
    modalImg.setAttribute('src', '');
    modalImg.setAttribute('alt', '');
  }
});
