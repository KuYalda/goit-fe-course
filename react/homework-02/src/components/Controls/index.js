import React from 'react';
import s from './Controls.module.css';

const Controls = ({ purpose, handNext, handlePrev, stop }) => (
  <button
    onClick={purpose === 'Вперед' ? handNext : handlePrev}
    type="button"
    className={!stop ? s.button : s.button_disabled}
    // onFocus={() => (style = {{ backgroundColor: '#1f65d6' }})}
    
  >
    {purpose}
  </button>
);

export default Controls;
