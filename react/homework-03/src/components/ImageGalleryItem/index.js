import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ img, tags, modalImg, onClick }) => (
  <li className={s.ImageGalleryItem}>
    <img
      alt={tags}
      src={img}
      className={s.ImageGalleryItem_image}
      onClick={() => onClick(modalImg, tags)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  modalImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
