import React from 'react';
import PropTypes from 'prop-types';
import s from './Controls.module.css';

const Controls = ({ purpose, handNext, handlePrev, stop }) => (
  <button
    onClick={purpose === 'Вперед' ? handNext : handlePrev}
    type="button"
    className={!stop ? s.button : s.button_disabled}
  >
    {purpose}
  </button>
);

Controls.propTypes = PropTypes.shape({
  purpose: PropTypes.string,
  stop: PropTypes.bool,
  handNext: PropTypes.func,
  handlePrev: PropTypes.func,
}).isRequired;

export default Controls;
