import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ items }) => (
  <>
    <ul className={s.ImageGallery}>
      <ImageGalleryItem items={items} />
    </ul>
  </>
);

export default ImageGallery;
