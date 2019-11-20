import React from 'react';
import s from './Controls.module.css';

const Controls = ({ purpose, handNext, handlePrev, stop }) =>
  !stop ? (
    <button
      onClick={purpose === 'Вперед' ? handNext : handlePrev}
      type="button"
      className={s.button}
    >
      {purpose}
    </button>
  ) : (
    <button
      onClick={purpose === 'Вперед' ? handNext : handlePrev}
      type="button"
      className={s.button_disabled}
    >
      {purpose}
    </button>
  );

export default Controls;
