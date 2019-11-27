import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ items }) => (
  <>
    {items.map(el => (
      <li className={s.ImageGalleryItem} key={el.id}>
        <img
          src={el.webformatURL}
          alt="foto"
          className={s.ImageGalleryItem_image}
        />
      </li>
    ))}
  </>
);

export default ImageGalleryItem;
