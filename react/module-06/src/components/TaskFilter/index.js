import React from 'react';
import PropTypes from 'prop-types';
import s from './TaskFilter.module.css';

const TaskFilter = ({ value, onChangeFilter }) => (
  <input
    type="text"
    className={s.input}
    value={value}
    onChange={onChangeFilter}
    placeholder="Type to filter task..."
  />
);

TaskFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default TaskFilter;
