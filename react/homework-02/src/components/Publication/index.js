import React from 'react';
import s from './Publication.module.css';

const Publication = ({ text, article }) => (
  <>
    <h2 className={s.publication_h2}>{text}</h2>
    <p className={s.publication_p}>{article}</p>
  </>
);

export default Publication;
