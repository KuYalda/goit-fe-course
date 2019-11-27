import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import s from './ImageGallery.module.css';

const ImageGallery = ({ items }) => (
  <>
    <ul className={s.ImageGallery}>
      <ImageGalleryItem items={items} />
    </ul>
    {items && <Button />}
  </>
);

export default ImageGallery;
