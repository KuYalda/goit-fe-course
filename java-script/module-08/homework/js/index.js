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



galleryBox.addEventListener('click', (e) => {
  const modalLightbox = document.querySelector('.lightbox');
  const modalImg = document.querySelector('.lightbox___image');
  if(e.target.nodeName === 'IMG') {
    modalLightbox.classList.add('is-open');
    modalImg.setAttribute('src', e.target.dataset.source);
    modalImg.setAttribute('alt', e.target.getAttribute('alt'));
  }
  const closeButton = document.querySelector('.lightbox__button');
  
  console.dir(closeButton);

});
