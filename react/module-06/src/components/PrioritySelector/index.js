import React from 'react';
import PropTypes from 'prop-types';

const PrioritySelector = ({ options, value, onChange }) => (
  <select name="priority" value={value} onChange={onChange} id="priority">
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

PrioritySelector.defaultProps = {
  onChange: () => {},
};

PrioritySelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default PrioritySelector;
