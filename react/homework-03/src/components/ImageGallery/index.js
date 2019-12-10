import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className={s.ImageGallery}>
      {items.map(el => (
        <ImageGalleryItem
          key={el.id}
          img={el.webformatURL}
          tags={el.tags}
          modalImg={el.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ImageGallery;
