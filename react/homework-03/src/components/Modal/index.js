import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = ({ src, alt, onClick, onKeyDown }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const modalRef = createRef();

  const modalClose = ({ target }) => {
    onClick(target, modalRef);
  };

  return (
    <div className={s.Overlay} onClick={modalClose} ref={modalRef}>
      <div className={s.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default Modal;
