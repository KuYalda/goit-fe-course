import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import s from './TaskList.module.css';

const TaskList = ({ items, onDeleteTask, onUpdateTask }) => (
  <ul className={s.list}>
    {items.map(el => (
      <li key={el.id}>
        <Task
          id={el.id}
          text={el.text}
          priority={el.priority}
          complited={el.complited}
          onDeleteTask={() => onDeleteTask(el.id)}
          onUpdatePriority={onUpdateTask}
          onUpdateComplited={() => onUpdateTask(el.id)}
        />
      </li>
    ))}
  </ul>
);

TaskList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
};

export default TaskList;
