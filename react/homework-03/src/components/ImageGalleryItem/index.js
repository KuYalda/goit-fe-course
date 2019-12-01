import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ items }) => (
  <>
    {items &&
      items.map(el => (
        <li className={s.ImageGalleryItem} key={el.id}>
          <img
            src={el.webformatURL}
            alt={el.tags}
            lowsrc={el.largeImageURL}
            className={s.ImageGalleryItem_image}
          />
        </li>
      ))}
  </>
);

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      lowsrc: PropTypes.string,
    }),
  ).isRequired,
};

export default ImageGalleryItem;
