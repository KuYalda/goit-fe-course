import React from 'react';
import PropTypes from 'prop-types';
import PrioritySelector from '../PrioritySelector';
import Priority from '../../utils/priority';
import s from './Task.module.css';

const options = Object.values(Priority);

const Task = ({
  id,
  text,
  priority,
  complited,
  onDeleteTask,
  onUpdatePriority,
  onUpdateComplited,
}) => (
  <div className={`${s.task} ${s[`${priority}Priority`]}`}>
    <p className={s.text}> {text} </p>
    <hr />
    <div className={s.actions}>
      <button type="button" onClick={onDeleteTask}>
        Delete
      </button>
    </div>
    <PrioritySelector
      options={options}
      value={priority}
      onChange={e => onUpdatePriority(id, e.target.value)}
      checked={complited}
    />

    <label htmlFor={id}>
      Complited
      <input
        id={id}
        type="checkbox"
        checked={complited}
        onChange={onUpdateComplited}
      />
    </label>
  </div>
);

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  complited: PropTypes.bool.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpdatePriority: PropTypes.func.isRequired,
  onUpdateComplited: PropTypes.func.isRequired,
};
export default Task;
