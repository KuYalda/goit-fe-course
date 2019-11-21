import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ handleEdit, data }) => (
  <ul>
    {data.map(el => (
      <li onDoubleClick={() => handleEdit(el.id)} key={el.id}>
        {el.text}
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TodoList;
